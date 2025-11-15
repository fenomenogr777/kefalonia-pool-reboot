import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    console.log('Request from IP:', clientIP);

    // Check rate limit (10 requests per hour per IP)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { data: rateLimit, error: rateLimitError } = await supabase
      .from('google_reviews_rate_limits')
      .select('*')
      .eq('ip_address', clientIP)
      .gte('last_request_at', oneHourAgo)
      .maybeSingle();

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    if (rateLimit && rateLimit.request_count >= 10) {
      console.log('Rate limit exceeded for IP:', clientIP);
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        { 
          status: 429,
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json',
            'Retry-After': '3600'
          }
        }
      );
    }

    // Update rate limit
    if (rateLimit) {
      await supabase
        .from('google_reviews_rate_limits')
        .update({
          request_count: rateLimit.request_count + 1,
          last_request_at: new Date().toISOString()
        })
        .eq('id', rateLimit.id);
    } else {
      await supabase
        .from('google_reviews_rate_limits')
        .insert({
          ip_address: clientIP,
          request_count: 1
        });
    }

    const placeId = 'ChIJxaUnk8qrZhMRxEU5s8mryMk';

    // Check cache first (24-hour cache)
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    
    const { data: cachedData, error: cacheError } = await supabase
      .from('google_reviews_cache')
      .select('*')
      .eq('place_id', placeId)
      .gte('cached_at', twentyFourHoursAgo)
      .maybeSingle();

    if (cacheError) {
      console.error('Cache check error:', cacheError);
    }

    if (cachedData) {
      console.log('Returning cached reviews for place:', placeId);
      return new Response(
        JSON.stringify({
          rating: cachedData.rating,
          totalReviews: cachedData.total_reviews,
          reviews: cachedData.reviews
        }),
        { 
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json',
            'X-Cache': 'HIT'
          } 
        }
      );
    }

    // Fetch from Google API if not cached
    const GOOGLE_PLACES_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!GOOGLE_PLACES_API_KEY) {
      throw new Error('GOOGLE_PLACES_API_KEY not configured');
    }

    console.log('Fetching fresh reviews from Google API for place:', placeId);

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}&language=en`
    );

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    // Get the 3 most recent reviews
    const reviews = data.result.reviews
      ?.slice(0, 3)
      .map((review: any) => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        date: review.relative_time_description,
        link: review.author_url || 'https://g.page/r/CekKyrPJTafEEBM/review'
      })) || [];

    const rating = data.result.rating?.toFixed(1) || "5.0";
    const totalReviews = data.result.user_ratings_total || 0;

    // Update cache
    await supabase
      .from('google_reviews_cache')
      .upsert({
        place_id: placeId,
        rating: rating,
        total_reviews: totalReviews,
        reviews: reviews,
        cached_at: new Date().toISOString()
      }, {
        onConflict: 'place_id'
      });

    console.log('Cached fresh reviews for place:', placeId);

    return new Response(
      JSON.stringify({
        rating,
        totalReviews,
        reviews
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
          'X-Cache': 'MISS'
        } 
      }
    );
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
});

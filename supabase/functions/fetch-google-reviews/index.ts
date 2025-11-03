import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GOOGLE_PLACES_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!GOOGLE_PLACES_API_KEY) {
      throw new Error('GOOGLE_PLACES_API_KEY not configured');
    }

    // Place ID for Clean Pool Kefalonia
    const placeId = 'ChIJxaUnk8qrZhMRxEU5s8mryMk';

    // Fetch place details including reviews
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

    return new Response(
      JSON.stringify({
        rating: data.result.rating?.toFixed(1) || "5.0",
        totalReviews: data.result.user_ratings_total || 0,
        reviews
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
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

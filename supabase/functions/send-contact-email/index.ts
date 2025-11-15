/// <reference types="npm:@types/node" />
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20),
  message: z.string().trim().min(1).max(2000)
});

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  try {
    const requestData = await req.json();
    
    // Validate input data
    const validated = contactSchema.parse(requestData);
    const { name, email, phone, message } = validated;

    console.log("Processing contact form submission");

    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    // Check rate limit (3 submissions per hour per IP or email)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { data: existingLimits, error: fetchError } = await supabase
      .from('contact_rate_limits')
      .select('*')
      .or(`ip_address.eq.${clientIP},email.eq.${email}`)
      .gte('last_submission_at', oneHourAgo)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Rate limit check error:', fetchError);
    }

    if (existingLimits && existingLimits.submission_count >= 3) {
      return new Response(
        JSON.stringify({ 
          error: 'Πάρα πολλά αιτήματα. Παρακαλώ δοκιμάστε ξανά αργότερα.' 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Update rate limit counter
    if (existingLimits) {
      await supabase
        .from('contact_rate_limits')
        .update({
          submission_count: existingLimits.submission_count + 1,
          last_submission_at: new Date().toISOString()
        })
        .eq('id', existingLimits.id);
    } else {
      await supabase
        .from('contact_rate_limits')
        .insert({
          ip_address: clientIP,
          email: email,
          submission_count: 1
        });
    }

    // Cleanup old rate limit entries (older than 24 hours)
    await supabase.rpc('cleanup_old_rate_limits');

    // Send email to the business owner using Resend API with escaped HTML
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Clean Pool Kefalonia <info@cleanpoolkefalonia.gr>',
        to: ['cleanpoolkefalonia@gmail.com'],
        subject: `Νέο μήνυμα επικοινωνίας από ${escapeHtml(name)}`,
        html: `
          <h2>Νέο μήνυμα επικοινωνίας</h2>
          <p><strong>Όνομα:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Τηλέφωνο:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Μήνυμα:</strong></p>
          <p>${escapeHtml(message)}</p>
        `,
      }),
    });

    const emailData = await emailResponse.json();

    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify(emailData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    // Handle validation errors
    if (error.name === 'ZodError') {
      return new Response(
        JSON.stringify({ error: 'Μη έγκυρα δεδομένα φόρμας' }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ error: 'Σφάλμα κατά την αποστολή email' }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

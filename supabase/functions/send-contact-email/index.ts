/// <reference types="npm:@types/node" />
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission");

    // Send email to the business owner using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Clean Pool Kefalonia <info@cleanpoolkefalonia.gr>',
        to: ['cleanpoolkefalonia@gmail.com'],
        subject: `Νέο μήνυμα επικοινωνίας από ${name}`,
        html: `
          <h2>Νέο μήνυμα επικοινωνίας</h2>
          <p><strong>Όνομα:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Τηλέφωνο:</strong> ${phone}</p>
          <p><strong>Μήνυμα:</strong></p>
          <p>${message}</p>
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
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

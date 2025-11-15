-- Create rate limiting table for contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT NOT NULL,
  email TEXT NOT NULL,
  submission_count INTEGER NOT NULL DEFAULT 1,
  first_submission_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_submission_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on rate limits table
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

-- Create policy to allow the service role to manage rate limits
CREATE POLICY "Service role can manage rate limits"
ON public.contact_rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_ip ON public.contact_rate_limits(ip_address);
CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_email ON public.contact_rate_limits(email);
CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_last_submission ON public.contact_rate_limits(last_submission_at);

-- Create function to cleanup old rate limit entries (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.contact_rate_limits
  WHERE last_submission_at < now() - interval '24 hours';
END;
$$;
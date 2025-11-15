-- Create table for Google Reviews rate limiting
CREATE TABLE public.google_reviews_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 1,
  first_request_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_request_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create unique index on ip_address for efficient lookups
CREATE UNIQUE INDEX idx_google_reviews_rate_limits_ip ON public.google_reviews_rate_limits(ip_address);

-- Enable RLS
ALTER TABLE public.google_reviews_rate_limits ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to manage rate limits
CREATE POLICY "Service role can manage review rate limits"
ON public.google_reviews_rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create table for caching Google Reviews data
CREATE TABLE public.google_reviews_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  place_id TEXT NOT NULL,
  rating TEXT NOT NULL,
  total_reviews INTEGER NOT NULL,
  reviews JSONB NOT NULL,
  cached_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create unique index on place_id
CREATE UNIQUE INDEX idx_google_reviews_cache_place_id ON public.google_reviews_cache(place_id);

-- Enable RLS
ALTER TABLE public.google_reviews_cache ENABLE ROW LEVEL SECURITY;

-- Create policy allowing public read access to cached reviews
CREATE POLICY "Anyone can read cached reviews"
ON public.google_reviews_cache
FOR SELECT
USING (true);

-- Create policy for service role to manage cache
CREATE POLICY "Service role can manage reviews cache"
ON public.google_reviews_cache
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create function to cleanup old rate limits (older than 1 hour)
CREATE OR REPLACE FUNCTION public.cleanup_old_google_reviews_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  DELETE FROM public.google_reviews_rate_limits
  WHERE last_request_at < now() - interval '1 hour';
END;
$$;

-- Create function to cleanup old cached reviews (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_google_reviews_cache()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  DELETE FROM public.google_reviews_cache
  WHERE cached_at < now() - interval '24 hours';
END;
$$;
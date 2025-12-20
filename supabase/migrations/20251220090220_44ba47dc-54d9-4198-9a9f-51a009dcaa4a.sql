-- Restrict cleanup function execution to service_role only
REVOKE ALL ON FUNCTION public.cleanup_old_rate_limits() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.cleanup_old_google_reviews_rate_limits() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.cleanup_old_google_reviews_cache() FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.cleanup_old_rate_limits() TO service_role;
GRANT EXECUTE ON FUNCTION public.cleanup_old_google_reviews_rate_limits() TO service_role;
GRANT EXECUTE ON FUNCTION public.cleanup_old_google_reviews_cache() TO service_role;
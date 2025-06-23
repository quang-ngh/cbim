/**
 * Returns the appropriate base path prefix for assets based on environment.
 * 
 * This function determines whether to include the repository name in asset URLs
 * based on the current environment (development vs production). It helps manage
 * path differences between local development and GitHub Pages deployment.
 * 
 * @returns Empty string for local development or repository name for production
 */
export const getTrailingSlash = (): string => {
  return process.env.NODE_ENV !== "production" ? "/" : "";
};
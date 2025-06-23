/**
 * Constructs full URLs for various social media platforms and profile pages.
 * 
 * This utility function takes a platform identifier and a unique identifier/username
 * and generates the correct URL format for that specific platform. It handles common
 * social and academic platforms used throughout the website.
 * 
 * @param platform - The social platform identifier (e.g., "linkedin", "github", "orcid")
 * @param url - The username or unique identifier for the platform
 * @returns A properly formatted full URL for the specified platform
 */
export const constructSocialLink = (platform: string, url: string) => {
  switch (platform) {
    case "linkedin":
      return "https://www.linkedin.com/in/" + url;
    case "github":
      return "https://www.github.com/" + url;
    case "facebook":
      return "https://www.facebook.com/" + url;
    case "google-scholar":
      return "https://scholar.google.com/citations?user=" + url;
    case "home-page":
      return url;
    case "orcid":
      return "https://orcid.org/" + url;
    default:
      return url;
  }
};

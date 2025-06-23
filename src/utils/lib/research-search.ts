/**
 * Splits a search query into phrases (quoted text) and individual terms.
 * 
 * This function parses a search query string and separates it into:
 * - Phrases: Text enclosed in quotation marks (e.g., "machine learning")
 * - Terms: Individual words not in quotes
 * 
 * @param query - The search query string to parse
 * @returns An object containing arrays of phrases and individual terms
 */
export function splitQuery(query: string) {
  // Use regex to match either quoted phrases or individual words
  // - "[^"]*" matches text in quotes
  // - \S+ matches sequences of non-whitespace characters
  const parts = query.match(/"[^"]*"|\S+/g) || [];
  const phrases: string[] = [];
  const terms: string[] = [];

  parts.forEach((part) => {
    if (part.startsWith('"')) {
      // Handle quoted phrases - remove quotes and normalize
      const phrase = part.replaceAll('"', "").trim();
      if (phrase) phrases.push(phrase.toLowerCase());
    } else {
      // Handle individual terms - normalize to lowercase
      terms.push(part.toLowerCase());
    }
  });

  return { phrases, terms };
}

/**
 * Determines if a text matches the given search criteria.
 * 
 * This function implements the search logic:
 * - Individual terms use AND logic (all terms must be present)
 * - Phrases use OR logic (any phrase can match)
 * - If no terms/phrases are provided, that condition is considered satisfied
 * 
 * @param text - The text to search within
 * @param phrases - Array of phrases to search for (OR logic)
 * @param terms - Array of terms to search for (AND logic)
 * @returns Boolean indicating whether the text matches the search criteria
 */

export function matchesQuery(text: string, phrases: string[], terms: string[]) {
  const normalizedText = text.toLowerCase();
  return (
    // For terms: ALL terms must be found in the text (AND logic)
    // If no terms are provided, this condition is true
    (terms.every((term) => normalizedText.includes(term)) || !terms.length) &&
    // For phrases: ANY phrase can match (OR logic)
    // If no phrases are provided, this condition is true
    (phrases.some((phrase) => normalizedText.includes(phrase)) ||
      !phrases.length)
  );
}
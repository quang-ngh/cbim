/**
 * Highlights text by adding <mark> tags around search terms found in the content.
 *
 * This function finds case-insensitive matches of search terms within text content
 * and wraps them in mark tags for visual highlighting.
 *
 * @param text - The original text to search within
 * @param searchTerms - Array of terms to highlight in the text
 * @returns The original text with search terms wrapped in <mark> tags
 */
export default function HighlightedSearchedText(
  text: string,
  searchTerms: string[] = []
) {
  if (!searchTerms.length) return text;

  const escapedTerms = searchTerms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      <mark key={idx} className="bg-yellow-200">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

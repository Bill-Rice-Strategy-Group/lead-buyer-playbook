/**
 * Search-facing overrides for chapters whose H1 (the book's chapter title)
 * does not match how readers search for the topic. The H1 and the manuscript
 * stay as the book has them; only the <title> and meta description change.
 *
 * Without an override, the description is the first 160 characters of the
 * chapter, which is the opening vignette and says nothing about the topic.
 */
export interface ChapterSeo {
  /** Rendered as the full <title>, bypassing the "%s | Book" template. */
  title: string;
  description: string;
}

export const CHAPTER_SEO: Record<string, ChapterSeo> = {
  // Query "lead strategist" sat at average position 9.4 (GSC, Nov 2026).
  '02-becoming-a-lead-strategist': {
    title: "What Is a Lead Strategist? | The Lead Buyer's Playbook",
    description:
      'A lead strategist treats lead buying as capability building: owning the portfolio, its economics, the forecast and lead handling, not just cost per lead.',
  },
};

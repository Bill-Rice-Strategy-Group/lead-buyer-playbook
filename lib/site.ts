// Canonical site constants. Host is the apex of the plural (book-name) domain.
// leadbuyerplaybook.com (singular) + all www variants 308 into it.
// Used by metadata, JSON-LD, robots, and sitemap.
export const SITE_URL = 'https://leadbuyersplaybook.com';
export const BOOK_NAME = "The Lead Buyer's Playbook";
export const OG_IMAGE = '/book-cover.jpg';
/**
 * Canonical Bill Rice identity — mirrored. Source of truth:
 * ~/Code/_shared-docs/bill-rice-identity.md
 *
 * The @id is what merges this author with the same person on every other
 * property Bill owns; matching sameAs lists alone never did, because two nodes
 * with no shared identifier read as two people who happen to look alike.
 * billrice.com holds the authoritative description — keep this a reference.
 */
export const BILL_RICE_ID = 'https://billrice.com/#person';

export const AUTHOR = {
  '@type': 'Person',
  '@id': BILL_RICE_ID,
  name: 'Bill Rice',
  url: 'https://billrice.com',
  // Identity profiles only, all verified 2026-07-29. Removed: billrice.com
  // (that's `url`, not a separate profile) and billricestrategy.com/about (a
  // page about him on a site he owns — that's a relationship, not a sameAs).
  sameAs: [
    'https://www.wikidata.org/wiki/Q139037772',
    'https://www.linkedin.com/in/billrice/',
    'https://x.com/billrice',
    'https://www.youtube.com/@billricestrategy',
    'https://medium.com/@billrice',
  ],
} as const;

/** Stable URI for the book itself — billrice.com references this exact @id. */
export const BOOK_ID = 'https://leadbuyersplaybook.com/#book';
export const PUBLISHER = {
  name: 'Bill Rice Strategy Group',
  url: 'https://billricestrategy.com',
} as const;

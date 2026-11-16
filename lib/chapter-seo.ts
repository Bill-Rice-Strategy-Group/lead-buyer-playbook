/**
 * Search-facing <title> and meta description for every page the reader
 * serves (chapters plus the front and back matter that get a page). The H1
 * and the manuscript stay as the book has them; only the <title> and meta
 * description change.
 *
 * Without an override, the description is the first 160 characters of the
 * chapter, which is the opening vignette and says nothing about the topic.
 *
 * Rules: title <= 60 characters including the suffix; description 140-160
 * characters, saying what the page teaches, with no claim the page doesn't make.
 */
export interface ChapterSeo {
  /** Rendered as the full <title>, bypassing the "%s | Book" template. */
  title: string;
  description: string;
}

export const CHAPTER_SEO: Record<string, ChapterSeo> = {
  'dedication': {
    title: "Dedication | The Lead Buyer's Playbook",
    description:
      "The dedication of The Lead Buyer's Playbook by Bill Rice: for lead buyers tired of guessing and marketers who believe quality, compliance and profit coexist.",
  },
  'preface': {
    title: "Preface | The Lead Buyer's Playbook",
    description:
      "Bill Rice on why buying more lead volume at lower prices no longer works and why lead buying is a systems problem: validate, process and convert leads at scale.",
  },
  '01-enterprise-lead-buying-landscape': {
    title: "Lead Vendor Dependency Risk | The Lead Buyer's Playbook",
    description:
      "How enterprise lead buyers cut vendor dependency risk: cap any one vendor at 35% of pipeline, demand sub-source transparency and manage to cost per opportunity.",
  },
  // Query "lead strategist" sat at average position 9.4 (GSC, Nov 2026).
  '02-becoming-a-lead-strategist': {
    title: "What Is a Lead Strategist? | The Lead Buyer's Playbook",
    description:
      'A lead strategist treats lead buying as capability building: owning the portfolio, its economics, the forecast and lead handling, not just cost per lead.',
  },
  '03-markets-pricing-and-unit-economics': {
    title: "Lead Pricing & Unit Economics | The Lead Buyer's Playbook",
    description:
      "Why the cheapest leads are often the costliest customers: calculate cost per acquisition, compare shared and exclusive leads, and build a tiered lead portfolio.",
  },
  '04-how-leads-are-made-channels-and-quality-anatomy': {
    title: "How Leads Are Generated | The Lead Buyer's Playbook",
    description:
      "The four sources of purchased leads (search, paid ads, affiliates, resold) and a four-level quality pyramid for judging vendors and setting conversion targets.",
  },
  '05-data-validation-and-fraud-controls': {
    title: "Lead Validation & Fraud Controls | The Lead Buyer's Playbook",
    description:
      "A five-layer lead validation system: format checks, timing and bot analysis, progressive verification, source tracking and sales feedback to stop bad leads.",
  },
  '06-compliance-without-myths': {
    title: "TCPA Consent for Lead Buyers | The Lead Buyer's Playbook",
    description:
      "Compliance for purchased leads: documented TCPA consent, lead-level audit trails, fast opt-outs and vendor audits that let you defend a TCPA class action.",
  },
  '07-the-20-percent-contact-rate-formula': {
    title: "How to Raise Lead Contact Rates | The Lead Buyer's Playbook",
    description:
      "An SMS-first strategy lifted a lender's lead contact rate from 14% to 29%: text within 90 seconds with a scheduling link, then adapt to how each lead replies.",
  },
  '08-speed-to-lead-systems-for-enterprise-scale': {
    title: "Speed-to-Lead Systems at Scale | The Lead Buyer's Playbook",
    description:
      "Build speed-to-lead infrastructure that holds up under volume: capacity-based lead routing, backup escalation, intelligent queuing and SMS gateway failover.",
  },
  '09-omnichannel-outreach-playbook': {
    title: "Omnichannel Lead Follow-Up | The Lead Buyer's Playbook",
    description:
      "Detect each lead's preferred channel from behavior, not age, then run coordinated SMS-first, email-first or multi-touch sequences that respect every opt-out.",
  },
  '10-building-trust-quickly': {
    title: "Building Trust With New Leads | The Lead Buyer's Playbook",
    description:
      "Earn a new lead's trust in the first few touches: credibility signals like licensing and reviews, value-first education, transparency and real human connection.",
  },
  '11-sales-cycle-acceleration-framework': {
    title: "How to Shorten Your Sales Cycle | The Lead Buyer's Playbook",
    description:
      "Shorten the sales cycle on purchased leads: segment by buying intent, then clear information, process, comparison and stakeholder bottlenecks for ready buyers.",
  },
  '12-crm-and-revops-that-dont-leak': {
    title: "Stop Losing Leads in Your CRM | The Lead Buyer's Playbook",
    description:
      "Find and fix CRM leaks that leave purchased leads uncontacted: failsafe routing, automated data quality checks, stage-based follow-up tasks and stale alerts.",
  },
  '13-lead-mix-forecasting-and-budget-allocation': {
    title: "Lead Mix & Budget Allocation | The Lead Buyer's Playbook",
    description:
      "Allocate lead spend across foundation, growth and testing tiers, forecast volume, quality and sales capacity, and rebalance the budget monthly on performance.",
  },
  '14-sales-enablement-for-lead-buyers': {
    title: "Sales Enablement for Lead Buyers | The Lead Buyer's Playbook",
    description:
      "Train reps to work each lead source differently: source intelligence in the CRM, playbooks for exclusive, content-download and referral leads, and coaching.",
  },
  '15-conclusion': {
    title: "A 90-Day Lead Buying Action Plan | The Lead Buyer's Playbook",
    description:
      "Three mindset shifts that turn a lead buyer into a lead strategist, plus a 90-day plan: vendor audit, validation, SMS-first contact, routing and forecasting.",
  },
  'about-the-author': {
    title: "About Bill Rice, Author | The Lead Buyer's Playbook",
    description:
      "Bill Rice coined the term lead management, built the mortgage industry's first intelligent lead scoring system and owns lead generation agency Kaleidico.",
  },
  'acknowledgements': {
    title: "Acknowledgements | The Lead Buyer's Playbook",
    description:
      "Bill Rice thanks the DeepGreen Bank and Quicken Loans teams, Kaleidico and the Lead Generation World community that shaped the lead buying lessons in this book.",
  },
  'afterword': {
    title: "The End of Lead Gen's Wild West | The Lead Buyer's Playbook",
    description:
      "Why tighter FCC consent rules, state privacy laws and AI-generated noise will push out tactical lead buyers, and why rigorous lead strategists will gain share.",
  },
};

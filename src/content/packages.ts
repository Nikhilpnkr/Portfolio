// Must match Plan B (freelance landing page) exactly.
// Last checked against the plan: 2026-10-14. Re-confirm prices before launch.

export type Package = {
  name: string;
  price: string;
  note?: string;
  summary: string;
};

export const packages: Package[] = [
  {
    name: "Basic Website",
    price: "from ₹6,999",
    note: "Live in 3 days",
    summary: "A clean, fast site for a shop, clinic or service: who you are, what you offer, and how to reach you.",
  },
  {
    name: "Business Website",
    price: "from ₹12,999",
    summary: "A multi-page site for a growing business, with room for services, galleries and enquiry buttons.",
  },
  {
    name: "Online Store",
    price: "from ₹24,999",
    summary: "Sell online with a product catalogue, cart and checkout set up for Indian customers.",
  },
  {
    name: "Android App from an existing site",
    price: "from ₹9,999",
    summary: "Turn the website you already have into an installable Android app.",
  },
  {
    name: "Monthly care plan",
    price: "₹699 / month",
    summary: "Ongoing updates, fixes and a check that your site stays up.",
  },
];

export const paymentTerms = "50% upfront by UPI, 50% on delivery.";

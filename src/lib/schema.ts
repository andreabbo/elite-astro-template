import config from "../site.config";

const BASE_URL = `https://${config.domain}`;

function getSchemaType(): string {
  switch (config.industry) {
    case "ristorazione":
      return "Restaurant";
    case "beauty":
      return "BeautySalon";
    case "salute":
      return "MedicalBusiness";
    case "educazione":
      return "EducationalOrganization";
    case "turismo":
      return config.subCategory === "hotel" ? "LodgingBusiness" : "TravelAgency";
    default:
      return "Organization";
  }
}

function isLocalBusiness(): boolean {
  return ["ristorazione", "beauty", "salute", "turismo"].includes(config.industry);
}

export function organizationSchema(): Record<string, unknown> {
  const type = getSchemaType();
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": isLocalBusiness() ? [type, "LocalBusiness"] : type,
    name: config.name,
    url: BASE_URL,
    email: config.email,
    description: config.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      postalCode: config.address.postalCode ?? "",
      addressCountry: config.address.country,
    },
  };
  if (config.phone) base.telephone = config.phone;
  return base;
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.name,
    url: BASE_URL,
    description: config.description,
    inLanguage: config.language,
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    url: opts.url,
    inLanguage: config.language,
    author: {
      "@type": "Organization",
      name: config.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: config.name,
      url: BASE_URL,
    },
    image: opts.image ?? `${BASE_URL}/og/default.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url,
    },
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

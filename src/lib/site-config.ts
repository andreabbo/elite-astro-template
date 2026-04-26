export interface SiteConfig {
  // Brand
  name: string;
  tagline: string;
  description: string;
  domain: string;

  // Industry
  industry:
    | "ristorazione"
    | "beauty"
    | "tech"
    | "servizi"
    | "ecommerce"
    | "turismo"
    | "salute"
    | "educazione"
    | "altro";
  subCategory?: string;

  // Localization
  language: string;

  // Contact
  address: {
    street: string;
    city: string;
    postalCode?: string;
    country: string;
  };
  phone?: string;
  email: string;
  whatsapp?: string;

  // Social (all optional)
  social?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };

  // Visual style
  design: {
    style: "editorial" | "modern" | "elegant" | "bold";
    palette: {
      primary: string;
      accent: string;
      background: string;
    };
    fontPairing: {
      display: string;
      body: string;
    };
    darkMode: "auto" | "always" | "never";
  };

  // Brand voice
  voice: {
    tone: 1 | 2 | 3 | 4 | 5;
    traits: string[];
    avoidWords?: string[];
    brandKeywords?: string[];
  };

  // Pages enabled
  pages: {
    home: boolean;
    chiSiamo: boolean;
    serviziMenu?: { enabled: boolean; label: string };
    galleria: boolean;
    eventi: boolean;
    blog: boolean;
    faq: boolean;
    contatti: boolean;
  };

  // Lead capture
  leadCapture: {
    form: boolean;
    phone: boolean;
    whatsappButton: boolean;
  };

  // Compliance
  gdpr: {
    cookieBanner: boolean;
  };

  // SEO
  seo: {
    defaultOgImage?: string;
  };
}

export function defineSiteConfig(config: SiteConfig): SiteConfig {
  return config;
}

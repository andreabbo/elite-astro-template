import { defineSiteConfig } from "./lib/site-config";

export default defineSiteConfig({
  name: "Demo Site",
  tagline: "Template demo",
  description: "Astro template scaffolding for elite-pipeline.",
  domain: "demo.example",
  industry: "altro",
  language: "it",
  address: { street: "Via Demo 1", city: "Milano", country: "IT" },
  email: "info@demo.example",
  design: {
    style: "editorial",
    palette: {
      primary: "#000000",
      accent: "#3b82f6",
      background: "#ffffff",
    },
    fontPairing: {
      display: "Playfair Display",
      body: "Inter",
    },
    darkMode: "auto",
  },
  voice: { tone: 3, traits: ["Caldo"] },
  pages: {
    home: true,
    chiSiamo: true,
    galleria: false,
    eventi: false,
    blog: true,
    faq: true,
    contatti: true,
  },
  leadCapture: { form: true, phone: false, whatsappButton: false },
  gdpr: { cookieBanner: true },
  seo: {},
});

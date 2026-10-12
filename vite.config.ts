import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL, course, seo, trainers } from "./src/data/course.ts";

/**
 * GitHub Pages avaldab lehe aadressil https://<kasutaja>.github.io/<repo>/.
 * GitHub Actions annab õige alamkausta muutujas BASE_PATH (vt .github/workflows/deploy.yml).
 * Kohalikul arendamisel kasutatakse juurkausta "/".
 */
const rawBase = process.env.BASE_PATH ?? "/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Loob SEO- ja Open Graph metaandmed failist src/data/course.ts */
function seoPlugin(): Plugin {
  return {
    name: "course-seo",
    transformIndexHtml(html) {
      const siteUrl = SITE_URL.trim().replace(/\/?$/, "/");
      const hasSite = /^https?:\/\//.test(SITE_URL.trim());
      const ogImage = hasSite ? `${siteUrl}og-image.png` : `${base}og-image.png`;

      const jsonLd: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.fullName,
        description: seo.description,
        inLanguage: "et",
        provider: { "@type": "CollegeOrUniversity", name: course.organizer },
        audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
        educationalCredentialAwarded: course.certificate,
        teaches: [
          "generatiivne tehisintellekt hariduses",
          "AI-kirjaoskus",
          "CustomGPT loomine",
          "tegevusuuring",
          "andmekaitse ja autoriõigus GenAI kasutamisel",
        ],
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            name: course.fullName,
            courseMode: "Onsite",
            // Toimumisaeg (startDate) lisatakse, kui see on kinnitatud.
            location: { "@type": "Place", name: course.organizer, address: "Tartu, Eesti" },
            instructor: trainers.map((t) => ({ "@type": "Person", name: t.name })),
          },
        ],
        // Hinda (offers) ei lisata, sest see info puudub.
      };
      if (hasSite) jsonLd.url = siteUrl;

      const tags = [
        `<title>${esc(seo.title)}</title>`,
        `<meta name="description" content="${esc(seo.description)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="et_EE" />`,
        `<meta property="og:site_name" content="${esc(course.organizer)}" />`,
        `<meta property="og:title" content="${esc(seo.ogTitle)}" />`,
        `<meta property="og:description" content="${esc(seo.ogDescription)}" />`,
        `<meta property="og:image" content="${esc(ogImage)}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${esc(course.name)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        hasSite ? `<meta property="og:url" content="${esc(siteUrl)}" />` : "",
        hasSite ? `<link rel="canonical" href="${esc(siteUrl)}" />` : "",
        `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
      ]
        .filter(Boolean)
        .join("\n    ");

      return html.replace("<!-- SEO -->", tags);
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), seoPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        notFound: "404.html",
      },
    },
  },
});

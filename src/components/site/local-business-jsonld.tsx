import { headers } from "next/headers";
import { SITE_URL } from "@/lib/site-url";
import { site, partners, insuranceTypes, googleRating, googleReviews } from "@/lib/site-data";


/** Dados estruturados do negócio local (uma só vez, em todas as páginas). */
export async function LocalBusinessJsonLd() {
  const nonce = (await headers()).get("x-nonce");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.name,
        inLanguage: "pt-PT",
        publisher: { "@id": `${SITE_URL}/#agency` },
      },
      {
        "@type": ["InsuranceAgency", "LocalBusiness"],
        "@id": `${SITE_URL}/#agency`,
        name: site.name,
        alternateName: `${site.name} — ${site.tagline}`,
        description:
          "Mediador de seguros multimarca em Amadora. Seguros para particulares e empresas, escolhidos entre várias seguradoras.",
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.png`,
        image: [`${SITE_URL}/og-image.png`],
        telephone: [site.phones.fixedHref, site.phones.mobileHref],
        email: site.email,
        foundingDate: "2009-06",
        founder: { "@type": "Person", name: site.responsible },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          postalCode: site.address.postalCode,
          addressLocality: "Damaia",
          addressRegion: "Amadora",
          addressCountry: "PT",
        },
        geo: { "@type": "GeoCoordinates", latitude: 38.749019, longitude: -9.210936 },
        hasMap: site.address.mapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Amadora" },
          { "@type": "Country", name: "Portugal" },
        ],
        knowsAbout: partners,
        sameAs: [site.facebook],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: googleRating.value,
          reviewCount: googleRating.count,
          bestRating: 5,
          worstRating: 1,
        },
        review: googleReviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          reviewBody: r.text,
          reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Seguros",
          itemListElement: insuranceTypes
            .filter((t) => !t.startsWith("Outro"))
            .map((t) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: `Seguro ${t}`, serviceType: t, provider: { "@id": `${SITE_URL}/#agency` } },
            })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      nonce={nonce ?? undefined}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}

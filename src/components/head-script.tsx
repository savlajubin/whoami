'use client';

import Script from 'next/script';
import { siteConfig } from '@/config/site';

export function HeadScript() {
  const jsonLdScript = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": siteConfig.name,
    "url": siteConfig.baseUrl,
    "image": siteConfig.ogImage.url,
    "sameAs": [
      siteConfig.links.linkedin,
      siteConfig.links.github
    ],
    "jobTitle": "Full Stack Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Accenture"
    }
  });

  return (
    <>
      <Script 
        id="linkedin-meta" 
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {jsonLdScript}
      </Script>
    </>
  );
}
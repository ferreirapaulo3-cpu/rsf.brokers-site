"use client";

import { partnerLogos } from "@/lib/site-data";

const LOGO_MAX_HEIGHT_REM = 3;

export function PartnersCarousel({ partners }: { partners: string[] }) {
  return (
    <div>
      <div className="partners-marquee" role="region" aria-label="Seguradoras parceiras">
        <div className="partners-marquee__track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1 ? true : undefined}>
              {partners.map((partner) => {
                const logo = partnerLogos[partner];
                if (!logo) {
                  return (
                    <div key={partner} className="partners-marquee__item">
                      {partner}
                    </div>
                  );
                }
                const ratio = logo.width / logo.height;
                const w = Math.min(logo.maxWidthRem, LOGO_MAX_HEIGHT_REM * ratio);
                const size = { width: `${w}rem`, height: `${w / ratio}rem` };
                const mask = `url(${logo.mono ?? logo.src})`;
                return (
                  <div key={partner} className="partners-marquee__item">
                    <span className="partners-marquee__pill" aria-hidden="true" />
                    <span
                      className="partners-marquee__mark"
                      role={copy === 0 ? "img" : undefined}
                      aria-label={copy === 0 ? partner : undefined}
                      style={{ ...size, maskImage: mask, WebkitMaskImage: mask }}
                    />
                    <img
                      src={logo.src}
                      alt=""
                      width={logo.width}
                      height={logo.height}
                      loading="eager"
                      className="partners-marquee__color"
                      style={size}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

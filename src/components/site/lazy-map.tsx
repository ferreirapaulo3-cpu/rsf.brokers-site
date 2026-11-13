"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site-data";

export function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="aspect-[4/3] rounded-xl border border-border shadow-sm bg-secondary flex flex-col items-center justify-center text-center p-6 gap-3">
        <MapPin className="w-8 h-8 text-primary" />
        <div>
          <p className="font-serif text-lg text-primary mb-1">{site.address.line1}</p>
          <p className="text-sm text-muted-foreground">
            {site.address.postalCode} {site.address.city}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Ver mapa
        </button>
        <p className="text-xs text-muted-foreground max-w-xs">
          Ao carregar o mapa, a Google pode definir cookies no seu navegador.
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm bg-secondary">
      <iframe
        src={site.mapsEmbed}
        title="Mapa interativo com a localização da RSF | Brokers na Rua Garcia de Orta, Damaia, Amadora"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

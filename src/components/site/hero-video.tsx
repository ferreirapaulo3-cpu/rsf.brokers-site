"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vídeo de fundo do hero. A imagem (poster) é o primeiro fotograma do vídeo e é o que se
 * vê enquanto carrega, com "reduzir movimento" ligado ou com poupança de dados.
 * O vídeo só é pedido depois de a página carregar, na versão certa para o ecrã.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string; downlink?: number } }
    ).connection;
    // Poupança de dados ou rede lenta (2G/3G, ou menos de 1,5 Mbit/s): fica só a imagem.
    if (conn?.saveData) return;
    if (conn?.effectiveType && /^(slow-2g|2g|3g)$/.test(conn.effectiveType)) return;
    if (conn?.downlink !== undefined && conn.downlink > 0 && conn.downlink < 1.5) return;

    const small = window.matchMedia("(max-width: 767px)").matches;
    const size = small ? "480" : "720";
    const ext = video.canPlayType('video/webm; codecs="vp9"') ? "webm" : "mp4";
    video.src = `/video/hero-${size}.${ext}`;
    video.load();
    video.play().catch(() => {});

    // Se não arrancar em 8 s (rede lenta sem sinal da API, ex. Safari), cancela o pedido e
    // mantém a imagem.
    const timer = window.setTimeout(() => {
      if (video.readyState < 3) {
        video.removeAttribute("src");
        video.load();
      }
    }, 8000);
    const clear = () => window.clearTimeout(timer);
    video.addEventListener("playing", clear, { once: true });
    return () => {
      clear();
      video.removeEventListener("playing", clear);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <picture>
        <source media="(max-width: 767px)" srcSet="/video/hero-poster-480.webp" />
        <img
          src="/video/hero-poster.webp"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:hidden"
        style={{ opacity: playing ? 1 : 0 }}
      />
    </div>
  );
}

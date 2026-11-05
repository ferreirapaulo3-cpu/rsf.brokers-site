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
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;

    const small = window.matchMedia("(max-width: 767px)").matches;
    const size = small ? "720" : "1080";
    // AV1 (mais leve, mesma qualidade) > VP9 > H.264.
    const file = video.canPlayType('video/mp4; codecs="av01.0.08M.08"')
      ? `hero-${size}-av1.mp4`
      : video.canPlayType('video/webm; codecs="vp9"')
        ? `hero-${size}.webm`
        : `hero-${size}.mp4`;
    video.src = `/video/${file}`;
    video.load();
    video.play().catch(() => {});
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <picture>
        <source media="(max-width: 767px)" srcSet="/video/hero-poster-sm.webp" />
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

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FADE_DURATION_MS = 350;

export default function PageLoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;

    const finishLoading = () => {
      setIsLeaving(true);
      fadeTimer = setTimeout(() => setIsVisible(false), FADE_DURATION_MS);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-live="polite"
      aria-label="Carregando a página"
      className={`page-loading-overlay${isLeaving ? " page-loading-overlay--leaving" : ""}`}
      role="status"
    >
      <div className="page-loading-overlay__brand">
        <Image
          alt=""
          aria-hidden="true"
          className="page-loading-overlay__symbol"
          height={164}
          preload
          src="/logo.png"
          unoptimized
          width={164}
        />
        <div className="page-loading-overlay__wordmark">
          <Image
            alt="MarLuaSol Perfumaria Natural"
            className="page-loading-overlay__wordmark-image"
            height={246}
            preload
            src="/MARLUASOL 1.png"
            unoptimized
            width={493}
          />
        </div>
      </div>

      <div aria-hidden="true" className="page-loading-overlay__spinner" />
      <span className="page-loading-overlay__label">Carregando…</span>
    </div>
  );
}

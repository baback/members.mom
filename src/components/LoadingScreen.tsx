"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setFadeOut(true), 1600);
    const remove = setTimeout(() => setHidden(true), 2400);
    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <img
        src="/logo/svg/logo-sqr-dark.svg"
        alt="members.mom"
        className="size-16 animate-loader-logo"
      />
    </div>
  );
}

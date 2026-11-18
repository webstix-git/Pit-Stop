"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`scroll-top${visible ? " is-visible" : ""}`}
      id="scroll-top"
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg className="icon" aria-hidden="true">
        <use href="#icon-arrow-up" />
      </svg>
    </button>
  );
}

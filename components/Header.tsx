"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { id: "top", label: "Home" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why choose us" },
  { id: "about", label: "About us" },
  { id: "faq", label: "FAQ" },
  { id: "reviews", label: "Google reviews" },
  { id: "area", label: "Service area" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_ORDER = [
  "top",
  "services",
  "why",
  "about",
  "reviews",
  "faq",
  "area",
  "contact",
] as const;

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [sticky, setSticky] = useState(false);
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const stickyAt = 40;

    const updateActiveSection = () => {
      if (!isHome) return;
      const headerOffset = header.offsetHeight + 8;
      let nextActive: string = "top";
      for (const id of SECTION_ORDER) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - headerOffset <= 0) {
          nextActive = id;
        }
      }
      setActiveId(nextActive);
    };

    const onScroll = () => {
      if (isHome) {
        setSticky(window.scrollY > stickyAt);
        updateActiveSection();
      }
    };

    if (!isHome) {
      setSticky(false);
      setActiveId("");
      return;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  const headerClass = [
    "site-header",
    !isHome ? "is-static" : "",
    isHome && sticky ? "is-sticky" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass} id="site-header">
      <div className="container header-inner">
        <a href={isHome ? "#top" : "/#top"} className="logo-link">
          <img src="/assets/logo.png" alt="Pit Stop logo" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => {
            const href = isHome ? `#${item.id}` : `/#${item.id}`;
            const active = isHome && activeId === item.id;
            return (
              <a
                key={item.id}
                href={href}
                data-section={item.id}
                className={active ? "is-active" : undefined}
                aria-current={active ? "true" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a className="header-call" href="tel:5074935222">
          <svg className="icon" aria-hidden="true">
            <use href="#icon-phone" />
          </svg>
          Call 507-493-5222
        </a>
      </div>
    </header>
  );
}

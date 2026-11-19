"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { id: "service-tires", label: "Tires" },
  { id: "service-oil", label: "Oil change" },
  { id: "service-brakes", label: "Brake work" },
  { id: "service-maintenance", label: "Light maintenance" },
  { id: "vehicles", label: "What we service" },
] as const;

type NavItem =
  | { id: string; label: string; dropdown?: undefined; links?: undefined }
  | {
      id: string;
      label: string;
      dropdown: "services";
      links: readonly { id: string; label: string }[];
    };

const NAV: NavItem[] = [
  { id: "services", label: "Services", dropdown: "services", links: SERVICE_LINKS },
  { id: "why", label: "Why us" },
  { id: "about", label: "About us" },
  { id: "reviews", label: "Customer reviews" },
  { id: "area", label: "Service area" },
  { id: "faq", label: "FAQ" },
];

const SECTION_ORDER = [
  "top",
  "vehicles",
  "services",
  "why",
  "about",
  "reviews",
  "area",
  "contact",
  "faq",
] as const;

function NavItems({
  isHome,
  activeId,
  servicesOpen,
  setServicesOpen,
  linkHref,
  onNavigate,
}: {
  isHome: boolean;
  activeId: string;
  servicesOpen: boolean;
  setServicesOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  linkHref: (id: string) => string;
  onNavigate?: () => void;
}) {
  return (
    <>
      {NAV.map((item) => {
        if (item.dropdown && item.links) {
          const active = isHome && activeId === item.id;
          return (
            <div
              key={item.id}
              className={`nav-item has-dropdown${servicesOpen ? " is-open" : ""}${active ? " is-active" : ""}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href={linkHref(item.id)}
                data-section={item.id}
                className={active ? "is-active" : undefined}
                aria-current={active ? "true" : undefined}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={(e) => {
                  if (window.matchMedia("(max-width: 900px)").matches) {
                    e.preventDefault();
                    setServicesOpen((open) => !open);
                  } else {
                    onNavigate?.();
                  }
                }}
              >
                <span>{item.label}</span>
                <svg className="nav-caret" viewBox="0 0 12 8" aria-hidden="true">
                  <path d="M1.4 0L6 4.6 10.6 0 12 1.4 6 7.4 0 1.4z" />
                </svg>
              </a>
              <div className="nav-dropdown" role="menu">
                <div className="nav-dropdown-panel">
                  {item.links.map((sub) => (
                    <a
                      key={sub.id}
                      href={linkHref(sub.id)}
                      role="menuitem"
                      onClick={() => {
                        setServicesOpen(false);
                        onNavigate?.();
                      }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        const active = isHome && activeId === item.id;
        return (
          <a
            key={item.id}
            href={linkHref(item.id)}
            data-section={item.id}
            className={active ? "is-active" : undefined}
            aria-current={active ? "true" : undefined}
            onClick={() => onNavigate?.()}
          >
            {item.label}
          </a>
        );
      })}
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [sticky, setSticky] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileCall, setShowMobileCall] = useState(false);

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const stickyAt = 40;
    let lastY = window.scrollY;

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
      if (nextActive === "vehicles" || nextActive.startsWith("service-")) {
        nextActive = "services";
      }
      setActiveId(nextActive);
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (isHome) {
        setSticky(y > stickyAt);
        updateActiveSection();
      }

      const delta = y - lastY;
      if (Math.abs(delta) > 6) {
        const pastHero = y > 160;
        setShowMobileCall(pastHero && delta > 0);
        lastY = y;
      } else if (y <= 160) {
        setShowMobileCall(false);
        lastY = y;
      }
    };

    if (!isHome) {
      setSticky(false);
      setActiveId("");
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const headerClass = [
    "site-header",
    !isHome ? "is-static" : "",
    isHome && sticky ? "is-sticky" : "",
    menuOpen ? "is-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linkHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const contactActive = isHome && activeId === "contact";

  return (
    <>
      <header className={headerClass} id="site-header">
        <div className="container header-inner">
          <a href={linkHref("top")} className="logo-link">
            <img src="/assets/logo.png" alt="Pit Stop logo" />
          </a>

          <div className="header-main">
            <div className="header-top">
              <span className="header-hours">Business hours - Mon-Fri · 8 AM - 4&nbsp;PM</span>
              <span className="header-pipe" aria-hidden="true">|</span>
              <a
                href={linkHref("contact")}
                className={`header-contact-link${contactActive ? " is-active" : ""}`}
                data-section="contact"
                aria-current={contactActive ? "true" : undefined}
              >
                Contact
              </a>
              <a className="header-call" href="tel:5074935222">
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-phone" />
                </svg>
                Call 507-493-5222
              </a>
            </div>
            <nav className="site-nav" aria-label="Primary">
              <NavItems
                isHome={isHome}
                activeId={activeId}
                servicesOpen={servicesOpen}
                setServicesOpen={setServicesOpen}
                linkHref={linkHref}
              />
            </nav>
          </div>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </header>

      <div
        className={`mobile-nav-backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />
      <div
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-panel">
          <div className="mobile-nav-head">
            <span className="mobile-nav-title">Menu</span>
            <button
              type="button"
              className="mobile-nav-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>
          <div className="mobile-nav-meta">
            <span>Business hours - Mon-Fri · 8 AM - 4&nbsp;PM</span>
            <a href={linkHref("contact")} onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
          <nav className="mobile-nav-links" aria-label="Mobile">
            <NavItems
              isHome={isHome}
              activeId={activeId}
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
              linkHref={linkHref}
              onNavigate={() => setMenuOpen(false)}
            />
          </nav>
          <a className="header-call mobile-nav-call" href="tel:5074935222">
            <svg className="icon" aria-hidden="true">
              <use href="#icon-phone" />
            </svg>
            Call 507-493-5222
          </a>
        </div>
      </div>

      <a
        className={`mobile-sticky-call${showMobileCall && !menuOpen ? " is-visible" : ""}`}
        href="tel:5074935222"
        aria-hidden={!showMobileCall || menuOpen}
        tabIndex={showMobileCall && !menuOpen ? 0 : -1}
      >
        <svg className="icon" aria-hidden="true">
          <use href="#icon-phone" />
        </svg>
        Call 507-493-5222
      </a>
    </>
  );
}

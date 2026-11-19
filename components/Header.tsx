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
  { id: "top", label: "Home" },
  { id: "services", label: "Services", dropdown: "services", links: SERVICE_LINKS },
  { id: "about", label: "About us" },
  { id: "why", label: "Why us" },
  { id: "reviews", label: "Customer reviews" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
  { id: "area", label: "Service area" },
];

const SECTION_ORDER = [
  "top",
  "services",
  "vehicles",
  "about",
  "why",
  "reviews",
  "faq",
  "contact",
  "area",
] as const;

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [sticky, setSticky] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const [servicesOpen, setServicesOpen] = useState(false);

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
      if (nextActive === "vehicles" || nextActive.startsWith("service-")) {
        nextActive = "services";
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

  const linkHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className={headerClass} id="site-header">
      <div className="container header-inner">
        <a href={linkHref("top")} className="logo-link">
          <img src="/assets/logo.png" alt="Pit Stop logo" />
        </a>
        <nav className="site-nav" aria-label="Primary">
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
                          onClick={() => setServicesOpen(false)}
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

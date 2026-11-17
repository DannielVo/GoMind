"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MaterialIcon from "./MaterialIcon";

type Language = "EN" | "VI";

const navLinks = [
  {
    label: "Guide",
    href: "/guide",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [language, setLanguage] = useState<Language>("EN");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsLanguageOpen(false);
  }, [pathname]);

  function handleLanguageChange(selectedLanguage: Language) {
    setLanguage(selectedLanguage);
    setIsLanguageOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-bg-primary/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/main_logo.png"
            alt="GoMind AI Logo"
            width={180}
            height={60}
            className="h-18 w-auto object-contain"
            priority
          />
        </Link>

        {/* ================= NAVIGATION ================= */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Guide */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center sm:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-2 py-1 font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/setup"
            className="hidden min-h-10 items-center justify-center rounded-xl bg-primary px-6 font-medium text-text-inverse shadow-sm transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            Play Now
          </Link>

          {/* ================= LANGUAGE SELECTOR ================= */}
          <div ref={languageRef} className="relative">
            <button
              type="button"
              aria-label="Select language"
              aria-haspopup="listbox"
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((prev) => !prev)}
              className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 text-text-primary transition-colors hover:bg-bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <MaterialIcon
                name="language"
                size={18}
                weight={500}
                className="text-text-secondary"
              />

              <span className="text-xs font-semibold">{language}</span>

              <MaterialIcon
                name="expand_more"
                size={16}
                weight={500}
                className={`text-text-secondary transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div
                role="listbox"
                aria-label="Select language"
                className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-lg"
              >
                <button
                  type="button"
                  role="option"
                  aria-selected={language === "EN"}
                  onClick={() => handleLanguageChange("EN")}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-bg-secondary ${
                    language === "EN"
                      ? "font-semibold text-primary"
                      : "text-text-primary"
                  }`}
                >
                  <span>English</span>

                  {language === "EN" && (
                    <MaterialIcon
                      name="check"
                      size={18}
                      className="text-primary"
                    />
                  )}
                </button>

                <button
                  type="button"
                  role="option"
                  aria-selected={language === "VI"}
                  onClick={() => handleLanguageChange("VI")}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-bg-secondary ${
                    language === "VI"
                      ? "font-semibold text-primary"
                      : "text-text-primary"
                  }`}
                >
                  <span>Tiếng Việt</span>

                  {language === "VI" && (
                    <MaterialIcon
                      name="check"
                      size={18}
                      className="text-primary"
                    />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

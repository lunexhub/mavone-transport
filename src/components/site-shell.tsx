import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/mavone-logo.png.asset.json";
import {
  languages,
  languageNames,
  LanguageProvider,
  type Language,
  useMavoneLanguage,
} from "@/lib/mavone-language";

const navItems = [
  { key: "navServices", href: "#services" },
  { key: "navFleet", href: "#fleet" },
  { key: "navAbout", href: "#story" },
  { key: "navContact", href: "#contact" },
] as const;

function SiteHeader() {
  const { language, setLanguage, t } = useMavoneLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <div className="topline">
        <div className="topline-inner">
          <span>{t("trusted")}</span>
          <a href="tel:+27835692028" className="topline-phone">
            <Phone aria-hidden="true" /> <span>+27 83 569 2028</span>
          </a>
        </div>
      </div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Mavone Tours — home">
          <img src={logo.url} alt="Mavone Tours — Travel with us" width={500} height={500} />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.key)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <label className="language-picker">
            <span className="sr-only">{t("languageLabel")}</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
              aria-label={t("languageLabel")}
            >
              {languages.map((item) => (
                <option key={item} value={item}>
                  {languageNames[item]}
                </option>
              ))}
            </select>
          </label>
          <Button asChild className="header-cta" size="sm">
            <a href="#contact">
              <span>{t("book")}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? t("closeMenu") : t("menuLabel")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>
      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {t(item.key)} <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("book")} <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      ) : null}
    </>
  );
}

function SiteFooter() {
  const { t } = useMavoneLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#home" className="footer-brand">
          <img src={logo.url} alt="Mavone Tours" width={500} height={500} loading="lazy" />
          <span>{t("footerNote")}</span>
        </a>
        <p>© {new Date().getFullYear()} Mavone Tours (Pty) Ltd</p>
        <a href="https://wa.me/27835692028" target="_blank" rel="noreferrer">
          {t("whatsapp")} <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageProvider language={language} setLanguage={setLanguage}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </LanguageProvider>
  );
}
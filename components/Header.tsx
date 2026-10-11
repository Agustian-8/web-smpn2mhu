"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const navItems = [
    { href: "/", label: "Beranda" },
    {
      href: "/profil",
      label: "Profil",
      submenu: [
        { href: "/profil/identitas", label: "Identitas Sekolah" },
        { href: "/profil/sejarah", label: "Sejarah" },
        { href: "/profil/visi-misi", label: "Visi & Misi" },
        { href: "/profil/fasilitas", label: "Fasilitas Belajar" },
        { href: "/profil/pendidik", label: "Tenaga Pendidik" },
      ],
    },
    {
      href: "/akademik",
      label: "Akademik",
      submenu: [
        { href: "/akademik/ppdb", label: "PPDB Online" },
        { href: "/akademik/kurikulum", label: "Kurikulum Operasional" },
        { href: "/akademik/kalender", label: "Kalender Akademik" },
        { href: "/akademik/ekstrakurikuler", label: "Ekstrakurikuler" },
      ],
    },
    { href: "/berita", label: "Berita" },
    { href: "/kontak", label: "Kontak" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isParentActive = (item: (typeof navItems)[number]) =>
    isActive(item.href) ||
    (item.submenu?.some((s) => pathname.startsWith(s.href)) ?? false);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#F9F7F7]/95 backdrop-blur-md border-b border-[#DBE2EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* ============ LOGO ============ */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F72AF] rounded-lg p-1"
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-white border border-[#DBE2EF] rounded-lg overflow-hidden">
              <Image
                src="/images/logo-sekolah.png"
                alt="Logo SMP Negeri 2 Matan Hilir Utara"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#112D4E] text-sm sm:text-base tracking-tight group-hover:text-[#3F72AF] transition-colors">
                SMP Negeri 2
              </span>
              <span className="text-[11px] font-medium text-[#3F72AF] tracking-wide">
                Matan Hilir Utara
              </span>
            </div>
          </Link>

          {/* ============ DESKTOP NAV ============ */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navigasi Utama"
          >
            {navItems.map((item) => {
              if (item.submenu) {
                const isOpen = openDropdown === item.label;
                const active = isParentActive(item);

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                        active
                          ? "text-[#3F72AF]"
                          : "text-[#112D4E]/80 hover:text-[#112D4E]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                      {/* Underline accent saat active */}
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#3F72AF] rounded-full" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 w-60">
                        <div className="bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl shadow-sm p-1.5">
                          {item.submenu.map((sub) => {
                            const subActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`flex items-center justify-between px-3.5 py-2.5 text-sm rounded-lg transition-colors ${
                                  subActive
                                    ? "text-[#3F72AF] font-bold"
                                    : "text-[#112D4E]/80 hover:text-[#112D4E] hover:bg-[#DBE2EF]/40 font-medium"
                                }`}
                              >
                                <span>{sub.label}</span>
                                {subActive && (
                                  <span className="w-1 h-1 rounded-full bg-[#3F72AF]" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "text-[#3F72AF]"
                      : "text-[#112D4E]/80 hover:text-[#112D4E]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#3F72AF] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* PPDB CTA */}
            <Link
              href="/akademik/ppdb"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-[#F9F7F7] bg-[#3F72AF] hover:bg-[#35639A] rounded-lg transition-colors duration-200 group"
            >
              <span>PPDB Online</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          {/* ============ MOBILE MENU BUTTON ============ */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-[#112D4E] hover:bg-[#DBE2EF]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F72AF] transition-colors"
            aria-label={menuOpen ? "Tutup menu Navigasi" : "Buka menu Navigasi"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" strokeWidth={2.2} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2.2} />
            )}
          </button>
        </div>

        {/* ============ MOBILE MENU ============ */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-3 border-t border-[#DBE2EF] flex flex-col gap-0.5"
          >
            {navItems.map((item) => {
              if (item.submenu) {
                const isSubOpen = openMobileSubmenu === item.label;
                const active = isParentActive(item);

                return (
                  <div key={item.href} className="flex flex-col">
                    <button
                      onClick={() =>
                        setOpenMobileSubmenu(isSubOpen ? null : item.label)
                      }
                      aria-expanded={isSubOpen}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                        active
                          ? "text-[#3F72AF]"
                          : "text-[#112D4E] hover:bg-[#DBE2EF]/40"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#3F72AF] transition-transform duration-200 ${
                          isSubOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>

                    {isSubOpen && (
                      <div className="ml-2 pl-3 my-1 border-l-2 border-[#3F72AF]/40 flex flex-col gap-0.5">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="px-3 py-2 text-sm text-[#112D4E]/80 hover:text-[#112D4E] hover:bg-[#DBE2EF]/40 rounded-md transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    active
                      ? "text-[#3F72AF]"
                      : "text-[#112D4E] hover:bg-[#DBE2EF]/40"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* PPDB CTA Mobile */}
            <div className="pt-3 mt-2 border-t border-[#DBE2EF]">
              <Link
                href="/akademik/ppdb"
                className="flex items-center justify-center gap-1.5 w-full py-3 text-sm font-bold text-[#F9F7F7] bg-[#3F72AF] active:bg-[#35639A] rounded-lg transition-colors"
              >
                <span>Pendaftaran PPDB Online</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
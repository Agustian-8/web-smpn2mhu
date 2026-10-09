"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-close menu dan dropdown saat halaman berpindah
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubmenu(null);
  }, [pathname]);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handling click outside dan tombol ESC untuk kemudahan aksesibilitas
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
      className="sticky top-0 z-50 bg-[#F9F7F7]/90 backdrop-blur-md border-b border-[#DBE2EF] transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F72AF] rounded-lg p-1 transition-all"
          >
            <div className="relative w-11 h-11 flex items-center justify-center bg-white border border-[#DBE2EF] rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
              <img
                src="/images/logo-sekolah.png"
                alt="Logo SMP Negeri 2 Matan Hilir Utara"
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#112D4E] text-base sm:text-lg tracking-tight group-hover:text-[#3F72AF] transition-colors">
                SMPN 2 Matan Hilir Utara
              </span>
              <span className="text-xs font-medium text-[#3F72AF]/90 tracking-wide">
                Kab. Ketapang
              </span>
            </div>
          </Link>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Navigasi Utama">
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
                    <Link
                      href={item.href}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        active
                          ? "text-[#3F72AF] bg-[#DBE2EF]/40"
                          : "text-[#112D4E]/80 hover:text-[#112D4E] hover:bg-[#DBE2EF]/30"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 text-[#3F72AF] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown Card */}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 w-60 transform transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                        <div className="bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl shadow-lg p-1.5 ring-1 ring-[#112D4E]/5">
                          {item.submenu.map((sub) => {
                            const subActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                  subActive
                                    ? "text-[#112D4E] bg-[#DBE2EF] font-semibold"
                                    : "text-[#112D4E]/80 hover:text-[#112D4E] hover:bg-[#DBE2EF]/50"
                                }`}
                              >
                                {sub.label}
                                {subActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#3F72AF]" />
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
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    active
                      ? "text-[#3F72AF] bg-[#DBE2EF]/40"
                      : "text-[#112D4E]/80 hover:text-[#112D4E] hover:bg-[#DBE2EF]/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Quick Action Button / PPDB Highlight */}
            <Link
              href="/akademik/ppdb"
              className="ml-3 px-4 py-2 text-sm font-semibold text-white bg-[#3F72AF] hover:bg-[#112D4E] active:scale-95 rounded-lg shadow-sm transition-all duration-200"
            >
              PPDB Online
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2.5 rounded-xl bg-white border border-[#DBE2EF] text-[#112D4E] hover:bg-[#DBE2EF]/40 focus:outline-none focus:ring-2 focus:ring-[#3F72AF] transition-colors"
            aria-label={menuOpen ? "Tutup menu Navigasi" : "Buka menu Navigasi"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 border-t border-[#DBE2EF] flex flex-col gap-1 animate-in fade-in slide-in-from-top-2"
          >
            {navItems.map((item) => {
              if (item.submenu) {
                const isSubOpen = openMobileSubmenu === item.label;
                const active = isParentActive(item);

                return (
                  <div key={item.href} className="flex flex-col">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`flex-1 px-4 py-3 text-sm font-semibold rounded-l-lg transition-colors ${
                          active
                            ? "text-[#3F72AF] bg-[#DBE2EF]/40"
                            : "text-[#112D4E] hover:bg-[#DBE2EF]/30"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() =>
                          setOpenMobileSubmenu(isSubOpen ? null : item.label)
                        }
                        aria-expanded={isSubOpen}
                        aria-label={`Buka submenu ${item.label}`}
                        className={`px-3 py-3 rounded-r-lg transition-colors ${
                          active
                            ? "text-[#3F72AF] bg-[#DBE2EF]/40"
                            : "text-[#112D4E] hover:bg-[#DBE2EF]/30"
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 text-[#3F72AF] transition-transform duration-200 ${
                            isSubOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Mobile Submenu List */}
                    {isSubOpen && (
                      <div className="ml-3 pl-3 my-1 border-l-2 border-[#3F72AF]/30 flex flex-col gap-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="px-3 py-2 text-sm font-medium text-[#112D4E]/80 hover:text-[#112D4E] hover:bg-[#DBE2EF]/30 rounded-md transition-colors"
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
                  className={`px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                    active
                      ? "text-[#3F72AF] bg-[#DBE2EF]/40"
                      : "text-[#112D4E] hover:bg-[#DBE2EF]/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Call-To-Action */}
            <div className="pt-3 mt-2 border-t border-[#DBE2EF]/60">
              <Link
                href="/akademik/ppdb"
                className="block w-full text-center py-3 text-sm font-bold text-white bg-[#3F72AF] active:bg-[#112D4E] rounded-xl shadow-sm transition-colors"
              >
                Pendaftaran PPDB Online
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
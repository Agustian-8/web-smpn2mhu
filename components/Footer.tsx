import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#112D4E] text-[#DBE2EF] relative overflow-hidden">
      {/* Subtle Ambient */}
      <div
        className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-[#3F72AF]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ============ TOP BANNER (PPDB) ============ */}
      <div className="border-b border-[#DBE2EF]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-xs font-bold text-[#DBE2EF] uppercase tracking-[0.15em]">
              PPDB 2026/2027
            </span>
            <span className="hidden sm:block w-px h-3 bg-[#DBE2EF]/20" />
            <span className="text-xs text-[#DBE2EF]/70">
              Pendaftaran peserta didik baru telah dibuka
            </span>
          </div>

          <Link
            href="/akademik/ppdb"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F9F7F7] hover:text-[#3F72AF] transition-colors duration-200 group"
          >
            <span>Daftar Sekarang</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ============ MAIN FOOTER CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* ---------- BRAND IDENTITY ---------- */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-[#F9F7F7] rounded-xl flex items-center justify-center p-2 shrink-0">
                <Image
                  src="/images/logo-sekolah.png"
                  alt="Logo SMP Negeri 2 Matan Hilir Utara"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-bold text-[#F9F7F7] text-base sm:text-lg tracking-tight leading-tight">
                  SMP Negeri 2 Matan Hilir Utara
                </h2>
                <p className="text-xs text-[#DBE2EF]/60 mt-1">
                  NPSN 30103532 · Kab. Ketapang
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#DBE2EF]/70 max-w-md">
              Website resmi sekolah sebagai sarana informasi, komunikasi, dan
              pelayanan bagi siswa, orang tua, dan masyarakat.
            </p>
          </div>

          {/* ---------- NAVIGASI ---------- */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-[#DBE2EF]/60 uppercase tracking-[0.15em] mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Beranda", path: "/" },
                { name: "Profil Sekolah", path: "/profil" },
                { name: "Berita & Pengumuman", path: "/berita" },
                { name: "PPDB", path: "/akademik/ppdb" },
                { name: "Kontak", path: "/kontak" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="inline-flex items-center text-sm text-[#DBE2EF]/80 hover:text-[#F9F7F7] transition-colors duration-200 relative group"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#3F72AF] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- KONTAK ---------- */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xs font-bold text-[#DBE2EF]/60 uppercase tracking-[0.15em] mb-5">
              Hubungi Kami
            </h3>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-[#DBE2EF]/70">
                <MapPin className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Ketapang Siduk Km 32, Desa Sungai Putri, Kec. Matan Hilir
                  Utara, Kab. Ketapang, Kalimantan Barat
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#3F72AF] shrink-0" />
                <a
                  href="mailto:info@smpn2mhu.sch.id"
                  className="text-[#DBE2EF]/70 hover:text-[#F9F7F7] transition-colors"
                >
                  info@smpn2mhu.sch.id
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3F72AF] shrink-0" />
                <a
                  href="tel:+6289514215508"
                  className="text-[#DBE2EF]/70 hover:text-[#F9F7F7] transition-colors"
                >
                  0895-1421-5508
                </a>
              </li>
            </ul>

            {/* Maps Link */}
            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F9F7F7] hover:text-[#3F72AF] transition-colors group"
              >
                <span>Lihat di Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============ BOTTOM BAR ============ */}
      <div className="border-t border-[#DBE2EF]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DBE2EF]/50">
          <p className="text-center sm:text-left">
            © 2026 SMP Negeri 2 Matan Hilir Utara
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/kebijakan-privasi"
              className="hover:text-[#F9F7F7] transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <span className="w-1 h-1 rounded-full bg-[#DBE2EF]/30" />
            <Link
              href="/syarat-ketentuan"
              className="hover:text-[#F9F7F7] transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
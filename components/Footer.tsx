import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  School,
  GraduationCap
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#112D4E] text-[#DBE2EF] relative overflow-hidden border-t-4 border-[#3F72AF]">
      {/* Decorative subtle ambient background */}
      <div 
        className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-[#3F72AF]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Banner / Call to Action Mini Bar */}
      <div className="border-b border-[#DBE2EF]/15 bg-[#112D4E]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 text-[#F9F7F7]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#3F72AF]/20 text-[#DBE2EF] border border-[#3F72AF]/40">
              <GraduationCap className="w-3.5 h-3.5 text-[#3F72AF]" />
              PPDB TA 2026/2027
            </span>
            <span className="hidden sm:inline text-xs text-[#DBE2EF]/80">
              Pendaftaran Peserta Didik Baru Telah Dibuka
            </span>
          </div>
          <Link
            href="/akademik/ppdb"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F9F7F7] hover:text-[#3F72AF] transition-colors duration-200 group"
          >
            Daftar Sekarang
            <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Identity & Summary */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-[#F9F7F7] rounded-xl flex items-center justify-center p-2 shadow-md shrink-0 border border-[#DBE2EF]">
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
                  SMPN 2 Matan Hilir Utara
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-[#3F72AF]/20 text-[#DBE2EF] rounded border border-[#3F72AF]/30">
                    NPSN 30103532
                  </span>
                  <span className="text-xs text-[#DBE2EF]/70">
                    Kab. Ketapang
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#DBE2EF]/80 max-w-md">
              Mewujudkan generasi cerdas, berkarakter, dan berdaya saing melalui pendidikan berkualitas serta pelayanan informasi transparan bagi seluruh civitas akademika.
            </p>

            {/* Quick Status / Info Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3F72AF]/10 border border-[#3F72AF]/20 text-xs text-[#DBE2EF]">
              <School className="w-4 h-4 text-[#3F72AF]" />
              <span>Akreditasi Sekolah: <strong>Terakreditasi B</strong></span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-[#F9F7F7] uppercase tracking-wider mb-4 border-l-2 border-[#3F72AF] pl-2.5">
              Navigasi Utama
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Beranda", path: "/" },
                { name: "Profil Sekolah", path: "/profil" },
                { name: "Berita & Pengumuman", path: "/berita" },
                { name: "Penerimaan Siswa (PPDB)", path: "/akademik/ppdb" },
                { name: "Kontak & Lokasi", path: "/kontak" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="inline-flex items-center gap-1.5 text-[#DBE2EF]/80 hover:text-[#F9F7F7] hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#3F72AF] group-hover:text-[#F9F7F7] transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-[#F9F7F7] uppercase tracking-wider mb-4 border-l-2 border-[#3F72AF] pl-2.5">
              Hubungi Kami
            </h3>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-[#DBE2EF]/80">
                <MapPin className="w-5 h-5 text-[#3F72AF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Ketapang Siduk Km 32, Desa Sungai Putri, Kec. Matan Hilir Utara, Kab. Ketapang, Kalimantan Barat
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#3F72AF] shrink-0" />
                <a
                  href="mailto:info@smpn2mhu.sch.id"
                  className="text-[#DBE2EF]/80 hover:text-[#F9F7F7] transition-colors underline-offset-2 hover:underline"
                >
                  info@smpn2mhu.sch.id
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3F72AF] shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-[#DBE2EF]/80 hover:text-[#F9F7F7] transition-colors"
                >
                  0895-1421-5508
                </a>
              </li>
            </ul>

            {/* Google Maps External Action Button */}
            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium bg-[#3F72AF]/20 hover:bg-[#3F72AF]/30 text-[#F9F7F7] px-3 py-2 rounded-lg border border-[#3F72AF]/30 transition-all duration-200"
              >
                <span>Petunjuk Lokasi Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DBE2EF]" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar / Copyright & Legals */}
      <div className="border-t border-[#DBE2EF]/10 bg-[#112D4E]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DBE2EF]/60">
          <p className="text-center sm:text-left">
            © 2026 SMP Negeri 2 Matan Hilir Utara. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-[#F9F7F7] transition-colors">
              Kebijakan Privasi
            </Link>
            <span>•</span>
            <Link href="/syarat-ketentuan" className="hover:text-[#F9F7F7] transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
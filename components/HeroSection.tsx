import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, School, Award, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#112D4E] overflow-hidden text-[#F9F7F7]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gedung-sekolah.jpeg"
          alt="Gedung SMP Negeri 2 Matan Hilir Utara"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        
        {/* Overlay Gradient: Kiri gelap untuk keterbacaan teks, kanan transparan agar foto gedung jelas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#112D4E]/95 via-[#112D4E]/75 to-[#112D4E]/20" />
        
        {/* Vignette Halus */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E] via-transparent to-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36">
        <div className="max-w-2xl space-y-8">
          
          {/* Top Badge Announcement */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112D4E]/80 border border-[#3F72AF]/50 backdrop-blur-md text-[#DBE2EF] text-xs font-semibold tracking-wide shadow-md">
            <span>Portal Resmi • SMPN 2 Matan Hilir Utara</span>
          </div>

          {/* Headline Utama: Seluruh teks judul seragam berwarna putih (#F9F7F7) */}
          <div className="space-y-3 drop-shadow-md">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#F9F7F7]">
              Mewujudkan Generasi <br />
              Cerdas & Berkarakter
            </h1>
            <p className="text-base sm:text-lg text-[#DBE2EF] max-w-xl leading-relaxed font-normal pt-2 drop-shadow">
              Pusat informasi resmi, komunikasi interaktif, dan pelayanan akademis terpadu bagi siswa, orang tua, serta masyarakat Kabupaten Ketapang.
            </p>
          </div>

          {/* Call to Actions (CTA) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/akademik/ppdb"
              className="inline-flex items-center justify-center gap-2.5 bg-[#3F72AF] hover:bg-[#3F72AF]/90 text-[#F9F7F7] px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-[#112D4E]/50 hover:shadow-xl hover:shadow-[#3F72AF]/40 transition-all duration-300 group"
            >
              <GraduationCap className="w-4 h-4 text-[#F9F7F7]" />
              <span>Informasi PPDB</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/profil"
              className="inline-flex items-center justify-center gap-2 bg-[#112D4E]/60 hover:bg-[#112D4E]/90 border border-[#DBE2EF]/40 text-[#F9F7F7] backdrop-blur-md px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:border-[#3F72AF]"
            >
              <span>Profil Sekolah</span>
            </Link>
          </div>

          {/* Quick Stats Grid with Glassmorphism */}
          <div className="pt-8 border-t border-[#DBE2EF]/20 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            <div className="bg-[#112D4E]/75 border border-[#DBE2EF]/20 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-md">
              <div className="flex items-center gap-1.5 text-[#3F72AF] mb-1">
                <Award className="w-4 h-4" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#DBE2EF]/80">
                  Akreditasi
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#F9F7F7]">B</p>
            </div>

            <div className="bg-[#112D4E]/75 border border-[#DBE2EF]/20 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-md">
              <div className="flex items-center gap-1.5 text-[#3F72AF] mb-1">
                <School className="w-4 h-4" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#DBE2EF]/80">
                  Status
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#F9F7F7]">Negeri</p>
            </div>

            <div className="bg-[#112D4E]/75 border border-[#DBE2EF]/20 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-md">
              <div className="flex items-center gap-1.5 text-[#3F72AF] mb-1">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#DBE2EF]/80">
                  Jenjang
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#F9F7F7]">SMP</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
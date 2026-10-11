import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#112D4E] overflow-hidden text-[#F9F7F7]">
      {/* ============ BACKGROUND IMAGE ============ */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gedung-sekolah.jpeg"
          alt="Gedung SMP Negeri 2 Matan Hilir Utara"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#112D4E] via-[#112D4E]/85 to-[#112D4E]/40" />
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 lg:py-40 min-h-[560px] sm:min-h-[660px] lg:min-h-[720px] flex items-center">
        <div className="max-w-2xl w-full">
          {/* Label — tanpa accent line */}
          <span className="inline-block text-xs font-bold text-[#DBE2EF] uppercase tracking-[0.15em] mb-6">
            Portal Resmi Sekolah
          </span>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-[#F9F7F7] mb-6">
            SMP Negeri 2 Matan Hilir Utara
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-[#DBE2EF] max-w-xl leading-relaxed mb-8">
            Informasi sekolah, pendaftaran siswa baru, dan berita terbaru dalam
            satu tempat.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/akademik/ppdb"
              className="inline-flex items-center gap-2 bg-[#3F72AF] hover:bg-[#35639A] text-[#F9F7F7] px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200 group"
            >
              <span>Informasi PPDB</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/profil/identitas"
              className="inline-flex items-center gap-2 border border-[#DBE2EF]/40 hover:border-[#F9F7F7] hover:bg-[#F9F7F7]/5 text-[#F9F7F7] px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
            >
              <span>Profil Sekolah</span>
            </Link>
          </div>

          {/* Stats Inline */}
          <div className="mt-16 flex items-center gap-6 sm:gap-10 flex-wrap">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#F9F7F7] leading-none">
                B
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#DBE2EF]/70 uppercase tracking-[0.12em] mt-2">
                Akreditasi
              </p>
            </div>

            <div className="w-px h-10 bg-[#DBE2EF]/20" />

            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#F9F7F7] leading-none">
                Negeri
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#DBE2EF]/70 uppercase tracking-[0.12em] mt-2">
                Status
              </p>
            </div>

            <div className="w-px h-10 bg-[#DBE2EF]/20" />

            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#F9F7F7] leading-none">
                SMP
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#DBE2EF]/70 uppercase tracking-[0.12em] mt-2">
                Jenjang
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
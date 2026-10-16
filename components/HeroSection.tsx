"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/images/berita-1.png",
    alt: "Gedung SMP Negeri 2 Matan Hilir Utara",
    title: "Gedung Sekolah",
    description: "Fasilitas belajar yang nyaman dan asri.",
  },
  {
    src: "/images/berita-2.jpeg",
    alt: "Kegiatan belajar mengajar di kelas",
    title: "Kegiatan Belajar",
    description: "Suasana kelas yang aktif dan menyenangkan.",
  },
  {
    src: "/images/berita-3.jpeg",
    alt: "Upacara bendera di lapangan sekolah",
    title: "Upacara Bendera",
    description: "Menumbuhkan disiplin dan nasionalisme siswa.",
  },
  {
    src: "/images/berita-4.jpg",
    alt: "Kegiatan ekstrakurikuler siswa",
    title: "Ekstrakurikuler",
    description: "Wadah pengembangan bakat dan minat siswa.",
  },
];

const AUTOPLAY_MS = 3000;
const FADE_MS = 400;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#112D4E] via-[#112D4E]/85 to-[#112D4E]/40" />
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 lg:py-40 min-h-[560px] sm:min-h-[660px] lg:min-h-[720px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* ---------- LEFT: Text ---------- */}
          <div className="max-w-xl w-full">
            <span className="inline-block text-xs font-bold text-[#DBE2EF] uppercase tracking-[0.15em] mb-6">
              Portal Resmi Sekolah
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-[#F9F7F7] mb-6">
              SMP Negeri 2 Matan Hilir Utara
            </h1>

            <p className="text-base sm:text-lg text-[#DBE2EF] max-w-xl leading-relaxed mb-8">
              Informasi sekolah, pendaftaran siswa baru, dan berita terbaru
              dalam satu tempat.
            </p>

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

          {/* ---------- RIGHT: Carousel + Caption ---------- */}
          <div
            className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-[#DBE2EF]/15 shadow-2xl shadow-black/40 bg-[#0d2340]">
              {/* ---- Gambar ---- */}
              <div className="relative w-full aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-[420px]">
                {slides.map((slide, index) => {
                  const isActive = index === active;
                  return (
                    <div
                      key={slide.src}
                      className={`absolute inset-0 ${
                        isActive
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                      style={{ transition: `opacity ${FADE_MS}ms ease-in-out` }}
                      aria-hidden={!isActive}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={index === 0}
                      />
                      {/* Gradient tipis di bawah gambar biar transisi ke caption halus */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d2340] to-transparent" />
                    </div>
                  );
                })}

                {/* Prev / Next */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Gambar sebelumnya"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#112D4E]/60 hover:bg-[#112D4E]/85 backdrop-blur text-[#F9F7F7] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Gambar berikutnya"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#112D4E]/60 hover:bg-[#112D4E]/85 backdrop-blur text-[#F9F7F7] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* ---- Caption / Keterangan ---- */}
              <div className="relative px-5 py-4 bg-[#0d2340] border-t border-[#DBE2EF]/10">
                <div className="relative h-14 sm:h-16">
                  {slides.map((slide, index) => {
                    const isActive = index === active;
                    return (
                      <div
                        key={slide.src}
                        className={`absolute inset-0 ${
                          isActive
                            ? "opacity-100 translate-y-0 z-10"
                            : "opacity-0 translate-y-1 z-0 pointer-events-none"
                        }`}
                        style={{
                          transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
                        }}
                        aria-hidden={!isActive}
                      >
                        <p className="text-sm sm:text-base font-semibold text-[#F9F7F7] leading-snug">
                          {slide.title}
                        </p>
                        <p className="text-xs sm:text-sm text-[#DBE2EF]/75 leading-snug mt-0.5">
                          {slide.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Dots di dalam area caption */}
                <div className="absolute bottom-3 right-4 flex items-center gap-2">
                  {slides.map((slide, index) => {
                    const isActive = index === active;
                    return (
                      <button
                        key={slide.src}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-label={`Ke gambar ${index + 1}`}
                        aria-current={isActive}
                        className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                          isActive
                            ? "w-6 bg-[#F9F7F7]"
                            : "w-1.5 bg-[#F9F7F7]/40 hover:bg-[#F9F7F7]/70"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
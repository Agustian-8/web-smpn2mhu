import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Sparkles,
  Compass,
  Flag,
  HeartPulse,
  Trophy,
  Music,
  Mic2,
  BookOpen,
  Languages,
  ArrowUpRight,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Ekstrakurikuler",
  description:
    "Daftar kegiatan ekstrakurikuler SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanEkstrakurikuler() {
  const ekskulWajib = [
    {
      nama: "Pramuka",
      deskripsi:
        "Kegiatan kepramukaan untuk membentuk karakter, kemandirian, dan jiwa kepemimpinan siswa.",
      icon: Compass,
    },
  ];

  const ekskulPilihan = [
    {
      nama: "Paskibra",
      deskripsi:
        "Latihan baris-berbaris dan pengibaran bendera untuk upacara sekolah dan lomba.",
      icon: Flag,
    },
    {
      nama: "PMR",
      deskripsi:
        "Pelatihan pertolongan pertama, kesehatan, dan kegiatan sosial kemanusiaan.",
      icon: HeartPulse,
    },
    {
      nama: "Olahraga",
      deskripsi:
        "Futsal, voli, dan basket untuk menjaga kebugaran dan mengembangkan bakat atletik.",
      icon: Trophy,
    },
    {
      nama: "Seni Tari",
      deskripsi:
        "Latihan tari tradisional dan modern untuk pentas seni dan lomba budaya.",
      icon: Music,
    },
    {
      nama: "Paduan Suara",
      deskripsi:
        "Latihan vokal dan alat musik untuk mengisi acara sekolah dan lomba.",
      icon: Mic2,
    },
    {
      nama: "Rohis",
      deskripsi:
        "Kegiatan keagamaan untuk memperkuat iman dan akhlak siswa.",
      icon: BookOpen,
    },
    {
      nama: "English Club",
      deskripsi:
        "Latihan percakapan bahasa Inggris untuk meningkatkan kemampuan komunikasi.",
      icon: Languages,
    },
  ];

  const totalEkskul = ekskulWajib.length + ekskulPilihan.length;

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-[#112D4E] text-[#F9F7F7] py-16 md:py-20 overflow-hidden">
        {/* Ambient */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3F72AF]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#DBE2EF]/70 mb-6">
            <Link href="/" className="hover:text-[#F9F7F7] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Akademik</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F9F7F7] font-semibold">
              Ekstrakurikuler
            </span>
          </nav>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Pengembangan Bakat</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Ekstrakurikuler
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat dan
            minat siswa SMP Negeri 2 Matan Hilir Utara.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-10 md:space-y-12">
          {/* ---------- TOTAL COUNTER ---------- */}
          <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5">
            <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-1">
              Total Ekstrakurikuler
            </p>
            <p className="text-2xl font-extrabold text-[#112D4E] leading-none">
              {totalEkskul}{" "}
              <span className="text-sm font-medium text-[#112D4E]/60">kegiatan</span>
            </p>
          </div>

          {/* ---------- EKSKUL WAJIB ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Ekstrakurikuler Wajib
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ekskulWajib.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-[#3F72AF]/30 rounded-2xl p-6 md:p-7 flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#3F72AF] flex items-center justify-center shrink-0">
                        <Icon
                          className="w-6 h-6 text-[#F9F7F7]"
                          strokeWidth={2}
                        />
                      </div>
                      <span className="inline-flex items-center bg-[#3F72AF] text-[#F9F7F7] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        Wajib
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#112D4E] leading-snug mb-2">
                      {item.nama}
                    </h3>
                    <p className="text-sm text-[#112D4E]/70 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- EKSKUL PILIHAN ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Ekstrakurikuler Pilihan
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ekskulPilihan.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white border border-[#DBE2EF] rounded-2xl p-5 md:p-6 hover:border-[#3F72AF] transition-colors duration-300 flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 group-hover:bg-[#3F72AF] flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 text-[#3F72AF] group-hover:text-[#F9F7F7] transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="text-base font-bold text-[#112D4E] leading-snug mb-2">
                      {item.nama}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#112D4E]/65 leading-relaxed flex-1">
                      {item.deskripsi}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- INFO BAR ---------- */}
          <div className="flex items-start gap-3 bg-[#DBE2EF]/40 border border-[#DBE2EF] rounded-xl p-4">
            <Info className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
            <div className="text-xs text-[#112D4E]/70 leading-relaxed">
              <p className="font-semibold text-[#112D4E] mb-0.5">
                Informasi Jadwal
              </p>
              <p>
                Jadwal latihan dan nama pembina setiap ekstrakurikuler akan
                diumumkan oleh pihak sekolah pada awal tahun ajaran.
              </p>
            </div>
          </div>

          {/* ---------- CTA SECTION ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Ingin mengetahui program akademik dan PPDB sekolah?
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/akademik/kurikulum"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Kurikulum</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <span className="w-1 h-1 rounded-full bg-[#112D4E]/20" />
              <Link
                href="/akademik/ppdb"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>PPDB</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
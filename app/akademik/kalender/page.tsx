import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  CalendarDays,
  GraduationCap,
  BookOpen,
  Flag,
  PartyPopper,
  ClipboardCheck,
  FileText,
  Home,
  ArrowUpRight,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Kalender Akademik",
  description:
    "Kalender akademik dan agenda kegiatan SMP Negeri 2 Matan Hilir Utara",
};

// Tipe kategori event
type KategoriEvent = "kegiatan" | "ujian" | "libur" | "rapor";

export default function HalamanKalender() {
  const semester1: {
    tanggal: string;
    kegiatan: string;
    kategori: KategoriEvent;
  }[] = [
    {
      tanggal: "15 Juli 2026",
      kegiatan: "Awal Tahun Ajaran 2026/2027",
      kategori: "kegiatan",
    },
    {
      tanggal: "15 – 17 Juli 2026",
      kegiatan: "Masa Pengenalan Lingkungan Sekolah (MPLS)",
      kategori: "kegiatan",
    },
    {
      tanggal: "22 Juli 2026",
      kegiatan: "Awal Kegiatan Belajar Mengajar",
      kategori: "kegiatan",
    },
    {
      tanggal: "17 Agustus 2026",
      kegiatan: "Peringatan HUT Kemerdekaan RI",
      kategori: "kegiatan",
    },
    {
      tanggal: "14 – 19 September 2026",
      kegiatan: "Penilaian Tengah Semester (PTS)",
      kategori: "ujian",
    },
    {
      tanggal: "21 – 26 Oktober 2026",
      kegiatan: "Penilaian Akhir Semester (PAS)",
      kategori: "ujian",
    },
    {
      tanggal: "19 Desember 2026",
      kegiatan: "Penerimaan Rapor Semester 1",
      kategori: "rapor",
    },
    {
      tanggal: "20 Des 2026 – 3 Jan 2027",
      kegiatan: "Libur Semester 1",
      kategori: "libur",
    },
  ];

  const semester2: {
    tanggal: string;
    kegiatan: string;
    kategori: KategoriEvent;
  }[] = [
    {
      tanggal: "4 Januari 2027",
      kegiatan: "Awal Semester 2",
      kategori: "kegiatan",
    },
    {
      tanggal: "20 – 25 Februari 2027",
      kegiatan: "Penilaian Tengah Semester (PTS)",
      kategori: "ujian",
    },
    {
      tanggal: "10 – 15 Maret 2027",
      kegiatan: "Ujian Sekolah Kelas IX",
      kategori: "ujian",
    },
    {
      tanggal: "10 – 15 April 2027",
      kegiatan: "Ujian Akhir Semester (UAS)",
      kategori: "ujian",
    },
    {
      tanggal: "1 Mei 2027",
      kegiatan: "Peringatan Hari Pendidikan Nasional",
      kategori: "kegiatan",
    },
    {
      tanggal: "17 Juni 2027",
      kegiatan: "Penerimaan Rapor Semester 2",
      kategori: "rapor",
    },
    {
      tanggal: "18 Jun – 14 Jul 2027",
      kegiatan: "Libur Akhir Tahun Ajaran",
      kategori: "libur",
    },
  ];

  // Konfigurasi tampilan per kategori
  const kategoriConfig: Record<
    KategoriEvent,
    { label: string; icon: any; color: string }
  > = {
    kegiatan: {
      label: "Kegiatan",
      icon: Flag,
      color: "text-[#3F72AF] bg-[#3F72AF]/10",
    },
    ujian: {
      label: "Ujian",
      icon: ClipboardCheck,
      color: "text-rose-700 bg-rose-50",
    },
    libur: {
      label: "Libur",
      icon: PartyPopper,
      color: "text-emerald-700 bg-emerald-50",
    },
    rapor: {
      label: "Rapor",
      icon: FileText,
      color: "text-amber-700 bg-amber-50",
    },
  };

  const renderTable = (
    data: typeof semester1,
    label: string,
    periode: string
  ) => (
    <div>
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
        <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl font-extrabold text-[#112D4E] tracking-tight mb-4">
        {periode}
      </h2>

      <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
        {data.map((item, i) => {
          const config = kategoriConfig[item.kategori];
          const Icon = config.icon;

          return (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 px-5 sm:px-6 py-4 ${
                i !== data.length - 1 ? "border-b border-[#DBE2EF]" : ""
              }`}
            >
              {/* Icon kategori */}
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${config.color}`}
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
              </div>

              {/* Tanggal */}
              <div className="sm:w-48 shrink-0">
                <p className="text-xs font-bold text-[#112D4E] leading-snug">
                  {item.tanggal}
                </p>
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.12em] mt-0.5 ${config.color
                    .split(" ")
                    .find((c) => c.startsWith("text-"))}`}
                >
                  {config.label}
                </p>
              </div>

              {/* Kegiatan */}
              <p className="text-sm text-[#112D4E]/85 leading-relaxed flex-1">
                {item.kegiatan}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const totalKegiatan = semester1.length + semester2.length;

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
              Kalender Akademik
            </span>
          </nav>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <CalendarDays className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Agenda Tahunan</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Kalender Akademik
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Jadwal dan agenda kegiatan akademik SMP Negeri 2 Matan Hilir Utara
            tahun ajaran 2026/2027.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-10 md:space-y-14">
          {/* ---------- SUMMARY ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                <GraduationCap
                  className="w-5 h-5 text-[#3F72AF]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                  Tahun Ajaran
                </p>
                <p className="text-lg font-extrabold text-[#112D4E] leading-none">
                  2026/2027
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                <BookOpen
                  className="w-5 h-5 text-[#3F72AF]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                  Semester
                </p>
                <p className="text-lg font-extrabold text-[#112D4E] leading-none">
                  2 <span className="text-sm font-medium text-[#112D4E]/60">semester</span>
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                <CalendarDays
                  className="w-5 h-5 text-[#3F72AF]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                  Total Agenda
                </p>
                <p className="text-lg font-extrabold text-[#112D4E] leading-none">
                  {totalKegiatan}{" "}
                  <span className="text-sm font-medium text-[#112D4E]/60">
                    kegiatan
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ---------- LEGENDA KATEGORI ---------- */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-[#112D4E]/50">
              Kategori:
            </span>
            {(Object.keys(kategoriConfig) as KategoriEvent[]).map((key) => {
              const config = kategoriConfig[key];
              const Icon = config.icon;
              return (
                <div
                  key={key}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[#DBE2EF] bg-white"
                >
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center ${config.color}`}
                  >
                    <Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-[11px] font-semibold text-[#112D4E]/70">
                    {config.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ---------- SEMESTER 1 ---------- */}
          {renderTable(
            semester1,
            "Semester Ganjil",
            "Semester 1 (Juli – Desember 2026)"
          )}

          {/* ---------- SEMESTER 2 ---------- */}
          {renderTable(
            semester2,
            "Semester Genap",
            "Semester 2 (Januari – Juni 2027)"
          )}

          {/* ---------- INFO BAR ---------- */}
          <div className="flex items-start gap-3 bg-[#DBE2EF]/40 border border-[#DBE2EF] rounded-xl p-4">
            <Info className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
            <p className="text-xs text-[#112D4E]/70 leading-relaxed">
              Jadwal ini bersifat sementara dan dapat berubah menyesuaikan
              kalender pendidikan resmi Dinas Pendidikan Kabupaten Ketapang.
            </p>
          </div>

          {/* ---------- CTA SECTION ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Ingin mengetahui program akademik lainnya?
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
                href="/akademik/ekstrakurikuler"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Ekstrakurikuler</span>
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
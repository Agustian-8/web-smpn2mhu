import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  BookOpen,
  Award,
  Palette,
  Globe2,
  Languages,
  Calculator,
  FlaskConical,
  Landmark,
  BookMarked,
  Flag,
  Dumbbell,
  Laptop,
  Clock,
  ArrowUpRight,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Kurikulum",
  description:
    "Informasi kurikulum, mata pelajaran, dan kegiatan pembelajaran SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanKurikulum() {
  const mataPelajaran = [
    {
      nama: "Pendidikan Agama dan Budi Pekerti",
      kelompok: "A",
      icon: BookMarked,
    },
    {
      nama: "Pendidikan Pancasila dan Kewarganegaraan",
      kelompok: "A",
      icon: Flag,
    },
    { nama: "Bahasa Indonesia", kelompok: "A", icon: Languages },
    { nama: "Matematika", kelompok: "A", icon: Calculator },
    {
      nama: "Ilmu Pengetahuan Alam (IPA)",
      kelompok: "A",
      icon: FlaskConical,
    },
    { nama: "Ilmu Pengetahuan Sosial (IPS)", kelompok: "A", icon: Landmark },
    { nama: "Bahasa Inggris", kelompok: "A", icon: Globe2 },
    { nama: "Seni Budaya", kelompok: "B", icon: Palette },
    {
      nama: "Pendidikan Jasmani, Olahraga & Kesehatan",
      kelompok: "B",
      icon: Dumbbell,
    },
    { nama: "Prakarya / Informatika", kelompok: "B", icon: Laptop },
    {
      nama: "Bahasa Daerah (Melayu)",
      kelompok: "Muatan Lokal",
      icon: Languages,
    },
  ];

  const jamBelajar = [
    { hari: "Senin – Kamis", jam: "07.00 – 13.30 WIB", aktif: true },
    { hari: "Jumat", jam: "07.00 – 11.00 WIB", aktif: true },
    { hari: "Sabtu – Minggu", jam: "Libur", aktif: false },
  ];

  const kelompokConfig: Record<string, { label: string; warna: string }> = {
    A: {
      label: "Kelompok A",
      warna: "bg-[#3F72AF]/10 text-[#3F72AF] border-[#3F72AF]/20",
    },
    B: {
      label: "Kelompok B",
      warna: "bg-[#DBE2EF] text-[#112D4E] border-[#DBE2EF]",
    },
    "Muatan Lokal": {
      label: "Muatan Lokal",
      warna: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
  };

  // Group mapel by kelompok
  const groupedMapel = mataPelajaran.reduce((acc, item) => {
    if (!acc[item.kelompok]) acc[item.kelompok] = [];
    acc[item.kelompok].push(item);
    return acc;
  }, {} as Record<string, typeof mataPelajaran>);

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-[#112D4E] text-[#F9F7F7] py-16 md:py-20 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3F72AF]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-[#DBE2EF]/70 mb-6">
            <Link href="/" className="hover:text-[#F9F7F7] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Akademik</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F9F7F7] font-semibold">Kurikulum</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Program Akademik</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Kurikulum
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Informasi kurikulum, mata pelajaran, dan kegiatan pembelajaran di
            SMP Negeri 2 Matan Hilir Utara.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-12 md:space-y-14">
          {/* ---------- KURIKULUM YANG DIPAKAI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Kurikulum yang Dipakai
              </span>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-6 md:p-8">
              <div className="mb-5">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#112D4E] tracking-tight leading-tight mb-1">
                  Kurikulum Merdeka
                </h2>
                <p className="text-xs text-[#3F72AF] font-bold uppercase tracking-[0.12em]">
                  Kemendikbudristek
                </p>
              </div>

              <div className="space-y-4 text-sm md:text-base text-[#112D4E]/80 leading-relaxed">
                <p>
                  SMP Negeri 2 Matan Hilir Utara menerapkan{" "}
                  <strong className="text-[#112D4E]">Kurikulum Merdeka</strong>{" "}
                  yang memberikan keleluasaan kepada pendidik untuk
                  menciptakan pembelajaran berkualitas yang sesuai dengan
                  kebutuhan dan lingkungan belajar peserta didik.
                </p>
                <p>
                  Kurikulum ini mengintegrasikan pembelajaran intrakurikuler,
                  projek penguatan profil pelajar Pancasila (P5), dan
                  ekstrakurikuler dalam satu kesatuan yang utuh.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- MATA PELAJARAN ---------- */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                  Mata Pelajaran
                </span>
              </div>
              <span className="text-xs text-[#112D4E]/50">
                {mataPelajaran.length} mata pelajaran
              </span>
            </div>

            {/* Legend Kelompok */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {Object.entries(kelompokConfig).map(([key, config]) => (
                <div
                  key={key}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-bold uppercase tracking-[0.1em] ${config.warna}`}
                >
                  {config.label}
                </div>
              ))}
            </div>

            {/* Grouped Mapel */}
            <div className="space-y-6">
              {Object.entries(groupedMapel).map(
                ([kelompok, items], groupIndex) => {
                  const config = kelompokConfig[kelompok];
                  return (
                    <div key={kelompok}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-1 h-5 bg-[#3F72AF] rounded-full" />
                        <span className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                          {config.label}
                        </span>
                        <span className="text-[11px] text-[#112D4E]/40">
                          · {items.length} mapel
                        </span>
                      </div>

                      <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
                        {items.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={i}
                              className={`flex items-center gap-4 px-5 sm:px-6 py-4 ${
                                i !== items.length - 1
                                  ? "border-b border-[#DBE2EF]"
                                  : ""
                              }`}
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                                <Icon
                                  className="w-4 h-4 text-[#3F72AF]"
                                  strokeWidth={2}
                                />
                              </div>
                              <p className="text-sm text-[#112D4E]/85 leading-relaxed flex-1">
                                {item.nama}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* ---------- JAM BELAJAR ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <Clock className="w-4 h-4 text-[#3F72AF]" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Jam Belajar
              </span>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
              {jamBelajar.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between gap-4 px-5 sm:px-6 py-4 ${
                    i !== jamBelajar.length - 1
                      ? "border-b border-[#DBE2EF]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        item.aktif ? "bg-emerald-500" : "bg-[#112D4E]/20"
                      }`}
                    />
                    <span className="text-sm text-[#112D4E]/85">
                      {item.hari}
                    </span>
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-bold px-2.5 py-1 rounded-md ${
                      item.aktif
                        ? "text-[#3F72AF] bg-[#3F72AF]/10"
                        : "text-[#112D4E]/40 bg-[#112D4E]/5"
                    }`}
                  >
                    {item.jam}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- INFO BAR ---------- */}
          <div className="flex items-start gap-3 bg-[#DBE2EF]/40 border border-[#DBE2EF] rounded-xl p-4">
            <Info className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
            <p className="text-xs text-[#112D4E]/70 leading-relaxed">
              Struktur kurikulum dan jam belajar dapat menyesuaikan dengan
              kalender pendidikan resmi Dinas Pendidikan Kabupaten Ketapang.
            </p>
          </div>

          {/* ---------- CTA SECTION ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Ingin mengetahui jadwal akademik dan kegiatan ekstrakurikuler?
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/akademik/kalender"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Kalender</span>
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
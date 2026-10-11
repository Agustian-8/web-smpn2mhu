import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  GraduationCap,
  MapPin,
  Users,
  Award,
  ArrowRightLeft,
  FileText,
  CalendarDays,
  Phone,
  Clock,
  ArrowUpRight,
  Info,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "PPDB Online",
  description:
    "Informasi Penerimaan Peserta Didik Baru SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanPPDB() {
  const jalur = [
    {
      nama: "Jalur Zonasi",
      deskripsi: "Untuk calon siswa yang berdomisili di wilayah zonasi sekolah.",
      kuota: "50%",
      icon: MapPin,
    },
    {
      nama: "Jalur Afirmasi",
      deskripsi: "Untuk calon siswa dari keluarga kurang mampu.",
      kuota: "15%",
      icon: Users,
    },
    {
      nama: "Jalur Prestasi",
      deskripsi:
        "Untuk calon siswa dengan prestasi akademik atau non-akademik.",
      kuota: "30%",
      icon: Award,
    },
    {
      nama: "Jalur Perpindahan",
      deskripsi: "Untuk calon siswa yang mengikuti perpindahan orang tua.",
      kuota: "5%",
      icon: ArrowRightLeft,
    },
  ];

  const syarat = [
    "Fotokopi Akta Kelahiran",
    "Fotokopi Kartu Keluarga (KK)",
    "Fotokopi Ijazah/Surat Keterangan Lulus SD/MI",
    "Fotokopi Rapor Semester 1-5",
    "Pas foto berwarna 3x4 (2 lembar)",
    "Fotokopi KTP orang tua/wali",
  ];

  const jadwal = [
    { tahap: "Pendaftaran Online", tanggal: "1 – 15 Juli 2026" },
    { tahap: "Verifikasi Berkas", tanggal: "16 – 20 Juli 2026" },
    { tahap: "Pengumuman Hasil", tanggal: "22 Juli 2026" },
    { tahap: "Daftar Ulang", tanggal: "23 – 25 Juli 2026" },
    { tahap: "Awal Tahun Ajaran", tanggal: "1 Agustus 2026" },
  ];

  const kontak = [
    {
      label: "Telepon",
      value: "0895-1421-5508",
      icon: Phone,
    },
    {
      label: "Jam Layanan",
      value: "Senin – Jumat, 07.00 – 14.00 WIB",
      icon: Clock,
    },
    {
      label: "Lokasi",
      value: "SMP Negeri 2 MHU, Jl. Ketapang Siduk Km 32",
      icon: MapPin,
    },
  ];

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
            <span className="text-[#F9F7F7] font-semibold">PPDB Online</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Tahun Ajaran 2026/2027</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            PPDB Online
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Penerimaan Peserta Didik Baru SMP Negeri 2 Matan Hilir Utara untuk
            Tahun Ajaran 2026/2027.
          </p>
        </div>
      </section>

      {/* ============ BANNER STATUS ============ */}
      <section className="py-5 bg-[#DBE2EF]/40 border-b border-[#DBE2EF]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2
                className="w-4 h-4 text-white"
                strokeWidth={2.5}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-[#112D4E] mb-0.5">
                Pendaftaran Sedang Dibuka
              </p>
              <p className="text-xs text-[#112D4E]/65 leading-relaxed">
                Pendaftaran online dibuka mulai 1 Juli 2026. Pastikan semua
                berkas sudah disiapkan sebelum mendaftar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-12 md:space-y-14">
          {/* ---------- JALUR PENDAFTARAN ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Jalur Pendaftaran
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jalur.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white border border-[#DBE2EF] rounded-2xl p-5 hover:border-[#3F72AF] transition-colors duration-300 flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                        <Icon
                          className="w-5 h-5 text-[#3F72AF]"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-[#3F72AF] leading-none tabular-nums">
                          {item.kuota}
                        </span>
                        <p className="text-[10px] font-bold text-[#112D4E]/40 uppercase tracking-[0.1em] mt-1">
                          Kuota
                        </p>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#112D4E] leading-snug mb-1.5">
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

          {/* ---------- SYARAT PENDAFTARAN ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <FileText className="w-4 h-4 text-[#3F72AF]" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Syarat Pendaftaran
              </span>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
              {syarat.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-5 sm:px-6 py-4 ${
                    i !== syarat.length - 1 ? "border-b border-[#DBE2EF]" : ""
                  }`}
                >
                  <span className="text-sm font-extrabold text-[#3F72AF] tabular-nums shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[#112D4E]/85 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- JADWAL PPDB ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <CalendarDays className="w-4 h-4 text-[#3F72AF]" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Jadwal PPDB
              </span>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
              {jadwal.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-5 sm:px-6 py-4 ${
                    i !== jadwal.length - 1 ? "border-b border-[#DBE2EF]" : ""
                  }`}
                >
                  {/* Step number */}
                  <div className="w-7 h-7 rounded-full bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-extrabold text-[#3F72AF] tabular-nums">
                      {i + 1}
                    </span>
                  </div>

                  {/* Tahap */}
                  <p className="text-sm text-[#112D4E]/70 flex-1 leading-snug">
                    {item.tahap}
                  </p>

                  {/* Tanggal */}
                  <p className="text-xs sm:text-sm font-bold text-[#112D4E] text-right shrink-0">
                    {item.tanggal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- CTA REGISTER ---------- */}
          <div className="bg-[#112D4E] text-[#F9F7F7] rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Ambient */}
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3F72AF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-3">
                Siap Mendaftar?
              </h2>
              <p className="text-[#DBE2EF]/80 text-sm md:text-base leading-relaxed mb-6">
                Isi formulir pendaftaran online sekarang. Pastikan data yang
                dimasukkan sudah benar dan lengkap.
              </p>

              <Link
                href="/akademik/ppdb/daftar"
                className="inline-flex items-center gap-2 bg-[#3F72AF] hover:bg-[#35639A] text-[#F9F7F7] px-6 py-3.5 rounded-xl font-bold text-sm transition-colors duration-200 group"
              >
                <span>Daftar Sekarang</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ---------- KONTAK PANITIA ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <Phone className="w-4 h-4 text-[#3F72AF]" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Kontak Panitia
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {kontak.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center mb-4">
                      <Icon
                        className="w-5 h-5 text-[#3F72AF]"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-1.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#112D4E] font-bold leading-snug">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- INFO BAR ---------- */}
          <div className="flex items-start gap-3 bg-[#DBE2EF]/40 border border-[#DBE2EF] rounded-xl p-4">
            <Info className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
            <p className="text-xs text-[#112D4E]/70 leading-relaxed">
              Untuk informasi lebih lanjut, silakan hubungi panitia PPDB pada
              jam layanan atau kunjungi langsung kantor sekolah.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
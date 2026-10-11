import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  FileText,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "Identitas Sekolah",
  description:
    "Data resmi SMP Negeri 2 Matan Hilir Utara berdasarkan Dapodik Kemendikbud",
};

export default function HalamanIdentitas() {
  const identitasUtama = [
    { label: "Nama Sekolah", nilai: "SMP Negeri 2 Matan Hilir Utara" },
    { label: "NPSN", nilai: "30103532" },
    { label: "Status", nilai: "Negeri" },
    { label: "Bentuk Pendidikan", nilai: "SMP" },
    { label: "Jenjang Pendidikan", nilai: "Dikdas" },
    { label: "Akreditasi", nilai: "B" },
  ];

  const lokasi = [
    { label: "Alamat", nilai: "Jl. Ketapang Siduk Km 32" },
    { label: "Desa/Kelurahan", nilai: "Sungai Putri" },
    { label: "Kecamatan", nilai: "Kec. Matan Hilir Utara" },
    { label: "Kabupaten", nilai: "Kab. Ketapang" },
    { label: "Provinsi", nilai: "Prov. Kalimantan Barat" },
  ];

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
            <span>Profil</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F9F7F7] font-semibold">
              Identitas Sekolah
            </span>
          </nav>

          {/* Badge Pill — konsisten dengan halaman Kontak */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <FileText className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Data Resmi</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Identitas Sekolah
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Data resmi berdasarkan Dapodik Kemendikbudristek · Tahun Ajaran
            2026/2027
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 space-y-8">
          {/* ---------- GRUP 1: IDENTITAS UTAMA ---------- */}
          <div>
            {/* Group Header */}
            <div className="flex items-center gap-2.5 mb-4">
              <FileText className="w-4 h-4 text-[#3F72AF]" />
              <h2 className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Identitas Utama
              </h2>
            </div>

            {/* Group Card */}
            <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
              {identitasUtama.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 px-5 sm:px-6 py-4 ${
                    i !== identitasUtama.length - 1
                      ? "border-b border-[#DBE2EF]"
                      : ""
                  }`}
                >
                  <p className="text-xs sm:text-sm text-[#112D4E]/55">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-[#112D4E] sm:col-span-2 leading-snug">
                    {item.nilai}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- GRUP 2: LOKASI & ALAMAT ---------- */}
          <div>
            {/* Group Header */}
            <div className="flex items-center gap-2.5 mb-4">
              <MapPin className="w-4 h-4 text-[#3F72AF]" />
              <h2 className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Lokasi & Alamat
              </h2>
            </div>

            {/* Group Card */}
            <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
              {lokasi.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 px-5 sm:px-6 py-4 ${
                    i !== lokasi.length - 1 ? "border-b border-[#DBE2EF]" : ""
                  }`}
                >
                  <p className="text-xs sm:text-sm text-[#112D4E]/55">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-[#112D4E] sm:col-span-2 leading-snug">
                    {item.nilai}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- VERIFICATION BAR ---------- */}
          <div className="flex items-start gap-3 bg-[#DBE2EF]/40 border border-[#DBE2EF] rounded-xl p-4">
            <ShieldCheck className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
            <div className="text-xs text-[#112D4E]/70 leading-relaxed">
              <p className="font-semibold text-[#112D4E] mb-0.5">
                Data Terverifikasi
              </p>
              <p>
                Seluruh informasi di halaman ini bersumber dari Data Pokok
                Pendidikan (Dapodik) Kemendikbudristek dan diperbarui secara
                berkala.
              </p>
            </div>
          </div>

          {/* ---------- CTA SECTION ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Butuh informasi lebih lanjut atau memiliki pertanyaan terkait
              data sekolah?
            </p>

            <Link
              href="/kontak"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group shrink-0"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
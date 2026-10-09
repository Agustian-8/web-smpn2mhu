import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Identitas Sekolah",
  description:
    "Data resmi SMP Negeri 2 Matan Hilir Utara berdasarkan Dapodik Kemendikbud",
};

export default function HalamanIdentitas() {
  const data = [
    { label: "Nama Sekolah", nilai: "SMP Negeri 2 Matan Hilir Utara" },
    { label: "NPSN", nilai: "30103532" },
    { label: "Status", nilai: "Negeri" },
    { label: "Bentuk Pendidikan", nilai: "SMP" },
    { label: "Jenjang Pendidikan", nilai: "Dikdas" },
    { label: "Akreditasi", nilai: "B" },
    { label: "Alamat", nilai: "Jl. Ketapang Siduk Km 32" },
    { label: "Desa/Kelurahan", nilai: "Sungai Putri" },
    { label: "Kecamatan", nilai: "Kec. Matan Hilir Utara" },
    { label: "Kabupaten", nilai: "Kab. Ketapang" },
    { label: "Provinsi", nilai: "Prov. Kalimantan Barat" },
  ];

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      <section className="bg-[#112D4E] text-[#F9F7F7] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Link
            href="/profil"
            className="inline-flex items-center gap-2 text-[#DBE2EF] hover:text-white text-sm mb-5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Profil</span>
          </Link>
          <p className="text-xs font-semibold text-[#DBE2EF] uppercase tracking-[0.2em] mb-3">
            Data Resmi
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Identitas Sekolah
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl leading-relaxed">
            Berdasarkan data Dapodik Kemendikbud.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
            {data.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 px-6 py-4 ${
                  i !== data.length - 1 ? "border-b border-[#DBE2EF]" : ""
                }`}
              >
                <p className="text-sm text-[#112D4E]/60">{item.label}</p>
                <p className="text-sm font-semibold text-[#112D4E] sm:col-span-2">
                  {item.nilai}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
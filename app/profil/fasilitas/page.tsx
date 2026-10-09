import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Fasilitas Sekolah",
  description: "Sarana dan prasarana SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanFasilitas() {
  const fasilitas = [
    { nama: "Ruang Kelas", jumlah: "12" },
    { nama: "Perpustakaan", jumlah: "1" },
    { nama: "Laboratorium IPA", jumlah: "1" },
    { nama: "Ruang Guru", jumlah: "1" },
    { nama: "Ruang Kepala Sekolah", jumlah: "1" },
    { nama: "Ruang Tata Usaha", jumlah: "1" },
    { nama: "Lapangan Olahraga", jumlah: "1" },
    { nama: "Musholla", jumlah: "1" },
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
            Sarana
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Fasilitas Sekolah
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl leading-relaxed">
            Sarana dan prasarana yang mendukung kegiatan belajar mengajar.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
            {fasilitas.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-4 ${
                  i !== fasilitas.length - 1
                    ? "border-b border-[#DBE2EF]"
                    : ""
                }`}
              >
                <span className="text-sm text-[#112D4E]/85">{item.nama}</span>
                <span className="text-sm font-semibold text-[#112D4E]">
                  {item.jumlah}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
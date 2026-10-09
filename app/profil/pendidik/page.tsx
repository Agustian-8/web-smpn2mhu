import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tenaga Pendidik",
  description:
    "Guru dan tenaga kependidikan SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanPendidik() {
  const data = [
    { jabatan: "Kepala Sekolah", jumlah: "1" },
    { jabatan: "Wakil Kepala", jumlah: "3" },
    { jabatan: "Guru Mata Pelajaran", jumlah: "20+" },
    { jabatan: "Guru BK", jumlah: "2" },
    { jabatan: "Tenaga Administrasi", jumlah: "4" },
    { jabatan: "Penjaga Sekolah", jumlah: "2" },
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
            Sumber Daya
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Tenaga Pendidik & Kependidikan
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl leading-relaxed">
            Didukung oleh tenaga pendidik dan kependidikan yang profesional.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#DBE2EF] rounded-2xl p-6"
              >
                <p className="text-3xl font-bold text-[#3F72AF] mb-2">
                  {item.jumlah}
                </p>
                <p className="text-sm text-[#112D4E]/70">{item.jabatan}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#112D4E]/40 mt-8 italic">
            *Data akan diperbarui secara berkala oleh pihak sekolah.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
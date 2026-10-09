import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Sejarah Sekolah",
  description: "Sejarah dan perjalanan SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanSejarah() {
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
            Perjalanan
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Sejarah Sekolah
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl leading-relaxed">
            Latar belakang dan perjalanan berdirinya SMP Negeri 2 Matan Hilir
            Utara.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-5 text-[#112D4E]/85 leading-relaxed text-base">
            <p>
              SMP Negeri 2 Matan Hilir Utara merupakan sekolah menengah pertama
              negeri yang berlokasi di Jl. Ketapang Siduk Km 32, Desa Sungai
              Putri, Kecamatan Matan Hilir Utara, Kabupaten Ketapang,
              Kalimantan Barat.
            </p>
            <p>
              Sejak berdiri, sekolah ini telah berkomitmen untuk memberikan
              pendidikan berkualitas bagi putra-putri daerah, dengan dukungan
              tenaga pendidik yang profesional dan fasilitas pembelajaran yang
              terus berkembang.
            </p>
            <p>
              Dengan akreditasi B, SMP Negeri 2 Matan Hilir Utara terus
              berupaya meningkatkan mutu pendidikan dan mencetak lulusan yang
              berilmu, berakhlak mulia, serta siap melanjutkan ke jenjang
              pendidikan yang lebih tinggi.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
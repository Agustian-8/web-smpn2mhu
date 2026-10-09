import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Target, ListChecks } from "lucide-react";

export const metadata = {
  title: "Visi & Misi",
  description: "Visi dan misi SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanVisiMisi() {
  const misi = [
    "Menyelenggarakan pembelajaran yang aktif, kreatif, dan menyenangkan.",
    "Membina karakter peserta didik yang beriman dan bertakwa.",
    "Mengembangkan potensi akademik dan non-akademik siswa.",
    "Meningkatkan kompetensi tenaga pendidik dan kependidikan.",
    "Mewujudkan lingkungan sekolah yang bersih, aman, dan nyaman.",
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
            Arah
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Visi & Misi
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl leading-relaxed">
            Pedoman dan arah pendidikan SMP Negeri 2 Matan Hilir Utara.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 space-y-6">
          {/* Visi */}
          <div className="bg-white border border-[#DBE2EF] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#DBE2EF]/50 text-[#3F72AF] rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold text-[#3F72AF] uppercase tracking-wider">
                Visi
              </p>
            </div>
            <p className="text-xl md:text-2xl text-[#112D4E] font-medium leading-snug">
              &ldquo;Terwujudnya peserta didik yang beriman, bertakwa,
              berprestasi, dan berwawasan lingkungan.&rdquo;
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white border border-[#DBE2EF] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#DBE2EF]/50 text-[#3F72AF] rounded-lg flex items-center justify-center">
                <ListChecks className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold text-[#3F72AF] uppercase tracking-wider">
                Misi
              </p>
            </div>
            <ol className="space-y-4">
              {misi.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[#3F72AF] font-bold text-sm shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#112D4E]/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
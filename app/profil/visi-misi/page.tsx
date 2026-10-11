import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Target,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

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

  const nilai = [
    {
      icon: Heart,
      title: "Beriman & Bertakwa",
      desc: "Menanamkan nilai spiritual dalam setiap aspek pembelajaran.",
    },
    {
      icon: Sparkles,
      title: "Berprestasi",
      desc: "Mendorong siswa meraih capaian terbaik sesuai potensi masing-masing.",
    },
    {
      icon: Target,
      title: "Berwawasan Lingkungan",
      desc: "Menumbuhkan kepedulian terhadap kebersihan dan kelestarian alam.",
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#DBE2EF]/70 mb-6">
            <Link href="/" className="hover:text-[#F9F7F7] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Profil</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F9F7F7] font-semibold">Visi & Misi</span>
          </nav>

          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <Target className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Arah & Tujuan</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Visi & Misi
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Pedoman dan arah pendidikan SMP Negeri 2 Matan Hilir Utara dalam
            membentuk generasi yang berilmu dan berkarakter.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 space-y-10 md:space-y-12">
          {/* ---------- VISI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Visi Sekolah
              </span>
            </div>

            <div className="relative pl-6 md:pl-8 border-l-4 border-[#3F72AF]">
              <p className="text-xl md:text-2xl lg:text-[1.75rem] font-bold text-[#112D4E] leading-snug tracking-tight">
                Terwujudnya peserta didik yang beriman, bertakwa, berprestasi,
                dan berwawasan lingkungan.
              </p>
            </div>
          </div>

          {/* ---------- MISI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Misi Sekolah
              </span>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
              {misi.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 md:gap-5 px-5 sm:px-6 py-4 ${
                    i !== misi.length - 1 ? "border-b border-[#DBE2EF]" : ""
                  }`}
                >
                  <span className="text-sm font-extrabold text-[#3F72AF] tabular-nums shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm md:text-base text-[#112D4E]/85 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- NILAI-NILAI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Nilai-Nilai Utama
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nilai.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex flex-col"
                  >
                    <Icon
                      className="w-5 h-5 text-[#3F72AF] mb-4"
                      strokeWidth={2}
                    />
                    <p className="text-sm font-bold text-[#112D4E] leading-snug mb-1.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#112D4E]/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Ingin mengetahui program dan kegiatan sekolah lebih lanjut?
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/profil/sejarah"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Sejarah</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <span className="w-1 h-1 rounded-full bg-[#112D4E]/20" />
              <Link
                href="/profil/identitas"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Identitas</span>
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
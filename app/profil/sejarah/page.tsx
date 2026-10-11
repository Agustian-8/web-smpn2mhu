import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  BookOpen,
  MapPin,
  Award,
  Users,
  ArrowUpRight,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Sejarah Sekolah",
  description: "Sejarah dan perjalanan SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanSejarah() {
  const milestones = [
    {
      label: "Berdiri",
      value: "Sekolah mulai beroperasi untuk melayani pendidikan menengah pertama di Kecamatan Matan Hilir Utara",
    },
    {
      label: "Akreditasi B",
      value: "Meraih akreditasi B dari Badan Akreditasi Nasional Sekolah/Madrasah",
    },
    {
      label: "Hari Ini",
      value: "Terus berkembang dengan tenaga pendidik profesional dan fasilitas pembelajaran yang terus ditingkatkan",
    },
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
              Sejarah Sekolah
            </span>
          </nav>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Perjalanan Sekolah</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Sejarah Sekolah
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Latar belakang dan perjalanan berdirinya SMP Negeri 2 Matan Hilir
            Utara sebagai lembaga pendidikan menengah di Kabupaten Ketapang.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 space-y-10 md:space-y-12">
          {/* ---------- BABAK 1: BERDIRI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Awal Berdiri
              </span>
            </div>

            <p className="text-base md:text-lg text-[#112D4E]/85 leading-[1.85]">
              SMP Negeri 2 Matan Hilir Utara merupakan sekolah menengah
              pertama negeri yang berlokasi di{" "}
              <strong className="text-[#112D4E]">
                Jl. Ketapang Siduk Km 32, Desa Sungai Putri
              </strong>
              , Kecamatan Matan Hilir Utara, Kabupaten Ketapang, Kalimantan
              Barat.
            </p>
          </div>

          {/* ---------- PULL QUOTE ---------- */}
          <div className="relative pl-6 md:pl-8 border-l-4 border-[#3F72AF] py-2">
            <Quote
              className="absolute -top-2 -left-2 w-8 h-8 text-[#DBE2EF]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="text-base md:text-lg font-medium text-[#112D4E] leading-relaxed italic">
              Berkomitmen memberikan pendidikan berkualitas bagi putra-putri
              daerah, dengan dukungan tenaga pendidik profesional dan
              fasilitas pembelajaran yang terus berkembang.
            </p>
          </div>

          {/* ---------- BABAK 2: PERKEMBANGAN ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Perkembangan
              </span>
            </div>

            <p className="text-base md:text-lg text-[#112D4E]/85 leading-[1.85]">
              Sejak berdiri, sekolah ini telah berkomitmen untuk memberikan
              pendidikan berkualitas bagi putra-putri daerah, dengan dukungan
              tenaga pendidik yang profesional dan fasilitas pembelajaran yang
              terus berkembang dari waktu ke waktu.
            </p>
          </div>

          {/* ---------- MILESTONES GRID ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {milestones.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#DBE2EF] rounded-2xl p-5"
              >
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-2">
                  {item.label}
                </p>
                <p className="text-xs text-[#112D4E]/70 leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* ---------- BABAK 3: HARI INI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Hari Ini
              </span>
            </div>

            <p className="text-base md:text-lg text-[#112D4E]/85 leading-[1.85]">
              Dengan akreditasi{" "}
              <strong className="text-[#112D4E]">B</strong>, SMP Negeri 2
              Matan Hilir Utara terus berupaya meningkatkan mutu pendidikan
              dan mencetak lulusan yang berilmu, berakhlak mulia, serta siap
              melanjutkan ke jenjang pendidikan yang lebih tinggi.
            </p>
          </div>

          {/* ---------- QUICK INFO GRID ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex flex-col">
              <MapPin className="w-5 h-5 text-[#3F72AF] mb-3" />
              <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-1.5">
                Lokasi
              </p>
              <p className="text-sm font-bold text-[#112D4E] leading-snug">
                Kec. Matan Hilir Utara
              </p>
              <p className="text-xs text-[#112D4E]/60 mt-1">
                Kabupaten Ketapang
              </p>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex flex-col">
              <Award className="w-5 h-5 text-[#3F72AF] mb-3" />
              <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-1.5">
                Akreditasi
              </p>
              <p className="text-sm font-bold text-[#112D4E] leading-snug">
                Peringkat B
              </p>
              <p className="text-xs text-[#112D4E]/60 mt-1">
                BAN Sekolah/Madrasah
              </p>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex flex-col">
              <Users className="w-5 h-5 text-[#3F72AF] mb-3" />
              <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-1.5">
                Status
              </p>
              <p className="text-sm font-bold text-[#112D4E] leading-snug">
                Negeri
              </p>
              <p className="text-xs text-[#112D4E]/60 mt-1">
                Jenjang Dikdas
              </p>
            </div>
          </div>

          {/* ---------- CTA SECTION ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Ingin tahu lebih banyak tentang identitas dan profil sekolah?
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/profil/visi-misi"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Visi & Misi</span>
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
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, FileText, History, Target, Building2, Users } from "lucide-react";

export const metadata = {
  title: "Profil Sekolah",
  description:
    "Profil, sejarah, visi misi, fasilitas, dan tenaga pendidik SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanProfil() {
  const menu = [
    {
      href: "/profil/identitas",
      label: "Identitas",
      deskripsi:
        "Data resmi sekolah berdasarkan Dapodik — NPSN, alamat, status, dan akreditasi.",
      icon: FileText,
    },
    {
      href: "/profil/sejarah",
      label: "Sejarah",
      deskripsi:
        "Perjalanan dan latar belakang berdirinya SMP Negeri 2 Matan Hilir Utara.",
      icon: History,
    },
    {
      href: "/profil/visi-misi",
      label: "Visi & Misi",
      deskripsi:
        "Arah dan tujuan pendidikan yang menjadi pedoman seluruh civitas akademika.",
      icon: Target,
    },
    {
      href: "/profil/fasilitas",
      label: "Fasilitas",
      deskripsi:
        "Sarana dan prasarana yang mendukung kegiatan belajar mengajar.",
      icon: Building2,
    },
    {
      href: "/profil/pendidik",
      label: "Tenaga Pendidik",
      deskripsi:
        "Guru dan staf kependidikan yang profesional dan berdedikasi.",
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#112D4E] text-[#F9F7F7] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-xs font-semibold text-[#DBE2EF] uppercase tracking-[0.2em] mb-3">
            Tentang Kami
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Profil Sekolah
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl leading-relaxed">
            Mengenal lebih dekat SMP Negeri 2 Matan Hilir Utara — identitas,
            sejarah, visi misi, fasilitas, dan tenaga pendidik.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {menu.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className="group bg-white border border-[#DBE2EF] rounded-2xl p-6 hover:border-[#3F72AF]/60 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-[#DBE2EF]/50 text-[#3F72AF] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3F72AF] group-hover:text-[#F9F7F7] transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h2 className="font-bold text-[#112D4E] mb-2 group-hover:text-[#3F72AF] transition-colors">
                    {item.label}
                  </h2>
                  <p className="text-sm text-[#112D4E]/60 leading-relaxed mb-4">
                    {item.deskripsi}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-[#3F72AF]">
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
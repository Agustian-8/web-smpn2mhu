import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Building2,
  BookOpen,
  FlaskConical,
  Users,
  Briefcase,
  ClipboardList,
  Dumbbell,
  Moon,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Fasilitas Sekolah",
  description: "Sarana dan prasarana SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanFasilitas() {
  const grupFasilitas = [
    {
      group: "Fasilitas Akademik",
      items: [
        { nama: "Ruang Kelas", jumlah: 12, icon: Building2 },
        { nama: "Perpustakaan", jumlah: 1, icon: BookOpen },
        { nama: "Laboratorium IPA", jumlah: 1, icon: FlaskConical },
      ],
    },
    {
      group: "Fasilitas Administrasi",
      items: [
        { nama: "Ruang Guru", jumlah: 1, icon: Users },
        { nama: "Ruang Kepala Sekolah", jumlah: 1, icon: Briefcase },
        { nama: "Ruang Tata Usaha", jumlah: 1, icon: ClipboardList },
      ],
    },
    {
      group: "Fasilitas Penunjang",
      items: [
        { nama: "Lapangan Olahraga", jumlah: 1, icon: Dumbbell },
        { nama: "Musholla", jumlah: 1, icon: Moon },
      ],
    },
  ];

  const totalFasilitas = grupFasilitas.reduce(
    (sum, grup) => sum + grup.items.reduce((s, i) => s + i.jumlah, 0),
    0
  );

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
              Fasilitas Sekolah
            </span>
          </nav>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Sarana & Prasarana</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Fasilitas Sekolah
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Sarana dan prasarana yang mendukung kegiatan belajar mengajar di
            SMP Negeri 2 Matan Hilir Utara.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 space-y-10 md:space-y-12">
          {/* ---------- TOTAL COUNTER ---------- */}
          <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-[#3F72AF]" strokeWidth={2} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                Total Fasilitas
              </p>
              <p className="text-lg font-extrabold text-[#112D4E] leading-none">
                {totalFasilitas}{" "}
                <span className="text-sm font-medium text-[#112D4E]/60">
                  unit
                </span>
              </p>
            </div>
          </div>

          {/* ---------- GROUPED FASILITAS ---------- */}
          {grupFasilitas.map((grup, gi) => (
            <div key={gi}>
              {/* Group Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                  {grup.group}
                </span>
              </div>

              {/* Group Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {grup.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-start gap-4"
                    >
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                        <Icon
                          className="w-5 h-5 text-[#3F72AF]"
                          strokeWidth={2}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#112D4E] leading-snug mb-2">
                          {item.nama}
                        </p>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-extrabold text-[#3F72AF] leading-none tabular-nums">
                            {item.jumlah}
                          </span>
                          <span className="text-[11px] font-medium text-[#112D4E]/50">
                            unit
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* ---------- CTA SECTION ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Ingin mengetahui lebih lanjut tentang tenaga pendidik sekolah?
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/profil/pendidik"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Tenaga Pendidik</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <span className="w-1 h-1 rounded-full bg-[#112D4E]/20" />
              <Link
                href="/kontak"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Hubungi Kami</span>
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
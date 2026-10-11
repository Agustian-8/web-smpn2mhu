import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Users,
  GraduationCap,
  Award,
  Briefcase,
  BookOpen,
  HeartHandshake,
  UserCheck,
  ShieldCheck,
  ArrowUpRight,
  Network,
} from "lucide-react";

export const metadata = {
  title: "Tenaga Pendidik",
  description:
    "Guru dan tenaga kependidikan SMP Negeri 2 Matan Hilir Utara",
};

// ============================================
// DATA GURU (Hardcode — nanti dipindah ke Sheet)
// ============================================
const daftarGuru = [
  {
    nama: "Agustian, S.Kom.",
    jabatan: "Kepala Sekolah",
    mapel: "Informatika",
    foto: "/images/guru/kepsek.jpg",
  },
  {
    nama: "Budi Santoso, S.Pd.",
    jabatan: "Wakil Kepala",
    mapel: "Matematika",
    foto: "/images/guru/wakil-1.jpg",
  },
  {
    nama: "Siti Aminah, S.Pd.",
    jabatan: "Wakil Kepala",
    mapel: "Bahasa Indonesia",
    foto: "/images/guru/wakil-2.jpg",
  },
  {
    nama: "Ahmad Fauzi, S.Pd.",
    jabatan: "Guru",
    mapel: "IPA Terpadu",
    foto: "/images/guru/guru-1.jpg",
  },
  {
    nama: "Dewi Lestari, S.Pd.",
    jabatan: "Guru",
    mapel: "Bahasa Inggris",
    foto: "/images/guru/guru-2.jpg",
  },
  {
    nama: "Rudi Hartono, S.Pd.",
    jabatan: "Guru",
    mapel: "IPS Terpadu",
    foto: "/images/guru/guru-3.jpg",
  },
  {
    nama: "Nur Hidayah, S.Pd.",
    jabatan: "Guru BK",
    mapel: "Bimbingan Konseling",
    foto: "/images/guru/guru-4.jpg",
  },
  {
    nama: "Eko Prasetyo, S.Pd.",
    jabatan: "Guru",
    mapel: "PJOK",
    foto: "/images/guru/guru-5.jpg",
  },
  {
    nama: "Rina Wati, S.Pd.",
    jabatan: "Guru",
    mapel: "Seni Budaya",
    foto: "/images/guru/guru-6.jpg",
  },
];

const daftarKependidikan = [
  {
    nama: "Sri Mulyani",
    jabatan: "Kepala Tata Usaha",
  },
  {
    nama: "Yusuf Ibrahim",
    jabatan: "Staf Administrasi",
  },
  {
    nama: "Marlina",
    jabatan: "Staf Administrasi",
  },
  {
    nama: "Hendra Wijaya",
    jabatan: "Staf Administrasi",
  },
  {
    nama: "Sukarno",
    jabatan: "Penjaga Sekolah",
  },
  {
    nama: "Rahmat",
    jabatan: "Penjaga Sekolah",
  },
];

// ============================================
// STRUKTUR ORGANISASI (URL gambar — nanti admin upload)
// ============================================
const STRUKTUR_IMAGE = "/images/struktur-organisasi.png";

export default function HalamanPendidik() {
  const totalGuru = daftarGuru.length;
  const totalKependidikan = daftarKependidikan.length;

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
          <nav className="flex items-center gap-2 text-xs text-[#DBE2EF]/70 mb-6">
            <Link href="/" className="hover:text-[#F9F7F7] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Profil</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F9F7F7] font-semibold">
              Tenaga Pendidik
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <Users className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Sumber Daya Manusia</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Tenaga Pendidik & Kependidikan
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Didukung oleh tenaga pendidik dan kependidikan yang profesional,
            berkompeten, dan berdedikasi untuk mutu pendidikan.
          </p>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-12 md:space-y-16">
          {/* ---------- TOTAL COUNTER ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                <GraduationCap
                  className="w-5 h-5 text-[#3F72AF]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                  Tenaga Pendidik
                </p>
                <p className="text-lg font-extrabold text-[#112D4E] leading-none">
                  {totalGuru}{" "}
                  <span className="text-sm font-medium text-[#112D4E]/60">
                    orang
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                <UserCheck
                  className="w-5 h-5 text-[#3F72AF]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                  Tenaga Kependidikan
                </p>
                <p className="text-lg font-extrabold text-[#112D4E] leading-none">
                  {totalKependidikan}{" "}
                  <span className="text-sm font-medium text-[#112D4E]/60">
                    orang
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#3F72AF]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                  Total SDM
                </p>
                <p className="text-lg font-extrabold text-[#112D4E] leading-none">
                  {totalGuru + totalKependidikan}{" "}
                  <span className="text-sm font-medium text-[#112D4E]/60">
                    orang
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ---------- STRUKTUR ORGANISASI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <Network className="w-4 h-4 text-[#3F72AF]" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Struktur Organisasi
              </span>
            </div>

            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-4 md:p-6">
              {/* Gambar struktur dari admin */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden bg-[#DBE2EF]/30">
                <Image
                  src={STRUKTUR_IMAGE}
                  alt="Struktur Organisasi SMP Negeri 2 Matan Hilir Utara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-contain"
                />
              </div>

              <p className="text-[11px] text-[#112D4E]/50 mt-4 text-center italic">
                Struktur organisasi SMP Negeri 2 Matan Hilir Utara · TA
                2026/2027
              </p>
            </div>
          </div>

          {/* ---------- DAFTAR TENAGA PENDIDIK ---------- */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                  Tenaga Pendidik
                </span>
              </div>
              <span className="text-xs text-[#112D4E]/50">
                {totalGuru} pendidik aktif
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {daftarGuru.map((guru, i) => (
                <div
                  key={i}
                  className="group bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden hover:border-[#3F72AF] transition-colors duration-300"
                >
                  {/* Foto */}
                  <div className="relative aspect-[3/4] bg-[#DBE2EF]/40 overflow-hidden">
                    <Image
                      src={guru.foto}
                      alt={`Foto ${guru.nama}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Overlay gradient bawah */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#112D4E]/80 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Jabatan Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center bg-[#112D4E]/90 backdrop-blur-sm text-[#F9F7F7] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {guru.jabatan}
                    </div>

                    {/* Nama & Mapel di dalam foto */}
                    <div className="absolute bottom-3 left-3 right-3 text-[#F9F7F7]">
                      <p className="text-sm font-bold leading-tight line-clamp-2">
                        {guru.nama}
                      </p>
                    </div>
                  </div>

                  {/* Mapel (kalau ada) */}
                  <div className="px-4 py-3 border-t border-[#DBE2EF]">
                    <p className="text-[10px] font-bold text-[#3F72AF] uppercase tracking-[0.12em] mb-0.5">
                      Mata Pelajaran
                    </p>
                    <p className="text-xs text-[#112D4E]/70 line-clamp-1">
                      {guru.mapel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- DAFTAR TENAGA KEPENDIDIKAN ---------- */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                  Tenaga Kependidikan
                </span>
              </div>
              <span className="text-xs text-[#112D4E]/50">
                {totalKependidikan} orang
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {daftarKependidikan.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#DBE2EF] rounded-2xl p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#DBE2EF]/60 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-[#3F72AF]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#112D4E] leading-snug line-clamp-1">
                      {item.nama}
                    </p>
                    <p className="text-xs text-[#112D4E]/60 mt-0.5">
                      {item.jabatan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- KUALIFIKASI ---------- */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
              <Award className="w-4 h-4 text-[#3F72AF]" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Kualifikasi Pendidik
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white border border-[#DBE2EF] rounded-2xl p-4 text-center">
                <p className="text-2xl font-extrabold text-[#3F72AF] leading-none tabular-nums mb-2">
                  S1
                </p>
                <p className="text-[11px] font-bold text-[#112D4E] uppercase tracking-[0.1em]">
                  Sarjana
                </p>
              </div>
              <div className="bg-white border border-[#DBE2EF] rounded-2xl p-4 text-center">
                <p className="text-2xl font-extrabold text-[#3F72AF] leading-none tabular-nums mb-2">
                  S2
                </p>
                <p className="text-[11px] font-bold text-[#112D4E] uppercase tracking-[0.1em]">
                  Magister
                </p>
              </div>
              <div className="bg-white border border-[#DBE2EF] rounded-2xl p-4 text-center">
                <p className="text-2xl font-extrabold text-[#3F72AF] leading-none tabular-nums mb-2">
                  100%
                </p>
                <p className="text-[11px] font-bold text-[#112D4E] uppercase tracking-[0.1em]">
                  Tersertifikasi
                </p>
              </div>
              <div className="bg-white border border-[#DBE2EF] rounded-2xl p-4 text-center">
                <p className="text-2xl font-extrabold text-[#3F72AF] leading-none tabular-nums mb-2">
                  Aktif
                </p>
                <p className="text-[11px] font-bold text-[#112D4E] uppercase tracking-[0.1em]">
                  Pengembangan
                </p>
              </div>
            </div>
          </div>

          {/* ---------- INFO BAR ---------- */}
          <div className="flex items-start gap-3 bg-[#DBE2EF]/40 border border-[#DBE2EF] rounded-xl p-4">
            <ShieldCheck className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
            <p className="text-xs text-[#112D4E]/70 leading-relaxed">
              Data tenaga pendidik dan kependidikan diperbarui secara berkala
              sesuai kondisi terkini di lingkungan sekolah.
            </p>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#112D4E]/60 max-w-md leading-relaxed">
              Ingin mengetahui fasilitas atau identitas sekolah lebih lanjut?
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/profil/fasilitas"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group"
              >
                <span>Fasilitas</span>
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
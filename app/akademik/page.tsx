import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Akademik",
  description:
    "Informasi akademik SMP Negeri 2 Matan Hilir Utara — PPDB, Kurikulum, Kalender Akademik, dan Ekstrakurikuler",
};

export default function HalamanAkademik() {
  const menu = [
    {
      href: "/akademik/ppdb",
      label: "PPDB Online",
      deskripsi:
        "Penerimaan Peserta Didik Baru, jalur pendaftaran, syarat, dan formulir online.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      href: "/akademik/kurikulum",
      label: "Kurikulum",
      deskripsi:
        "Kurikulum yang dipakai, daftar mata pelajaran, dan jam belajar.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      href: "/akademik/kalender",
      label: "Kalender Akademik",
      deskripsi:
        "Jadwal kegiatan, ujian, dan agenda penting sepanjang tahun ajaran.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      href: "/akademik/ekstrakurikuler",
      label: "Ekstrakurikuler",
      deskripsi:
        "Daftar kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1D242B] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-xs font-semibold text-[#C7EEFF] uppercase tracking-widest mb-3">
            Informasi
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Akademik
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Informasi akademik SMP Negeri 2 Matan Hilir Utara — mulai dari
            PPDB, kurikulum, kalender akademik, hingga ekstrakurikuler.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {menu.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white border border-[#1D242B]/10 rounded-lg p-6 hover:border-[#0077C0]/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#C7EEFF]/60 text-[#0077C0] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#0077C0] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h2 className="font-bold text-[#1D242B] mb-2 group-hover:text-[#0077C0] transition-colors">
                  {item.label}
                </h2>
                <p className="text-sm text-[#1D242B]/60 leading-relaxed">
                  {item.deskripsi}
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold text-[#0077C0]">
                  <span>Selengkapnya</span>
                  <svg
                    className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kalender Akademik",
  description:
    "Kalender akademik dan agenda kegiatan SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanKalender() {
  const semester1 = [
    { tanggal: "15 Juli 2026", kegiatan: "Awal Tahun Ajaran 2026/2027" },
    {
      tanggal: "15 – 17 Juli 2026",
      kegiatan: "Masa Pengenalan Lingkungan Sekolah (MPLS)",
    },
    { tanggal: "22 Juli 2026", kegiatan: "Awal Kegiatan Belajar Mengajar" },
    { tanggal: "17 Agustus 2026", kegiatan: "Peringatan HUT Kemerdekaan RI" },
    {
      tanggal: "14 – 19 September 2026",
      kegiatan: "Penilaian Tengah Semester (PTS)",
    },
    {
      tanggal: "21 – 26 Oktober 2026",
      kegiatan: "Penilaian Akhir Semester (PAS)",
    },
    { tanggal: "19 Desember 2026", kegiatan: "Penerimaan Rapor Semester 1" },
    { tanggal: "20 Des 2026 – 3 Jan 2027", kegiatan: "Libur Semester 1" },
  ];

  const semester2 = [
    { tanggal: "4 Januari 2027", kegiatan: "Awal Semester 2" },
    {
      tanggal: "20 – 25 Februari 2027",
      kegiatan: "Penilaian Tengah Semester (PTS)",
    },
    { tanggal: "10 – 15 Maret 2027", kegiatan: "Ujian Sekolah Kelas IX" },
    { tanggal: "10 – 15 April 2027", kegiatan: "Ujian Akhir Semester (UAS)" },
    { tanggal: "1 Mei 2027", kegiatan: "Peringatan Hari Pendidikan Nasional" },
    { tanggal: "17 Juni 2027", kegiatan: "Penerimaan Rapor Semester 2" },
    { tanggal: "18 Jun – 14 Jul 2027", kegiatan: "Libur Akhir Tahun Ajaran" },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />

      <section className="bg-[#1D242B] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-xs font-semibold text-[#C7EEFF] uppercase tracking-widest mb-3">
            Akademik
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Kalender Akademik
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Jadwal dan agenda kegiatan akademik SMP Negeri 2 Matan Hilir Utara
            tahun ajaran 2026/2027.
          </p>
        </div>
      </section>

      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-16">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                  Semester Ganjil
                </p>
                <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                  Semester 1
                </h2>
                <p className="text-sm text-[#1D242B]/60 mt-3 leading-relaxed">
                  Juli – Desember 2026
                </p>
              </div>

              <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
                <div className="bg-white border border-[#1D242B]/10 rounded-lg overflow-hidden">
                  {semester1.map((item, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 px-6 py-4 ${
                        i !== semester1.length - 1
                          ? "border-b border-[#1D242B]/10"
                          : ""
                      }`}
                    >
                      <p className="text-sm text-[#1D242B]/60 font-medium">
                        {item.tanggal}
                      </p>
                      <p className="text-sm text-[#1D242B] sm:col-span-2">
                        {item.kegiatan}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-t border-[#1D242B]/10" />

          <section>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                  Semester Genap
                </p>
                <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                  Semester 2
                </h2>
                <p className="text-sm text-[#1D242B]/60 mt-3 leading-relaxed">
                  Januari – Juni 2027
                </p>
              </div>

              <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
                <div className="bg-white border border-[#1D242B]/10 rounded-lg overflow-hidden">
                  {semester2.map((item, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 px-6 py-4 ${
                        i !== semester2.length - 1
                          ? "border-b border-[#1D242B]/10"
                          : ""
                      }`}
                    >
                      <p className="text-sm text-[#1D242B]/60 font-medium">
                        {item.tanggal}
                      </p>
                      <p className="text-sm text-[#1D242B] sm:col-span-2">
                        {item.kegiatan}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ekstrakurikuler",
  description:
    "Daftar kegiatan ekstrakurikuler SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanEkstrakurikuler() {
  const ekskul = [
    {
      nama: "Pramuka",
      kategori: "Wajib",
      deskripsi:
        "Kegiatan kepramukaan untuk membentuk karakter, kemandirian, dan jiwa kepemimpinan siswa.",
    },
    {
      nama: "Paskibra",
      kategori: "Pilihan",
      deskripsi:
        "Latihan baris-berbaris dan pengibaran bendera untuk upacara sekolah dan lomba.",
    },
    {
      nama: "PMR (Palang Merah Remaja)",
      kategori: "Pilihan",
      deskripsi:
        "Pelatihan pertolongan pertama, kesehatan, dan kegiatan sosial kemanusiaan.",
    },
    {
      nama: "Olahraga (Futsal, Voli, Basket)",
      kategori: "Pilihan",
      deskripsi:
        "Kegiatan olahraga untuk menjaga kebugaran dan mengembangkan bakat di bidang atletik.",
    },
    {
      nama: "Seni Tari",
      kategori: "Pilihan",
      deskripsi:
        "Latihan tari tradisional dan modern untuk pentas seni dan lomba budaya.",
    },
    {
      nama: "Seni Musik / Paduan Suara",
      kategori: "Pilihan",
      deskripsi:
        "Latihan vokal dan alat musik untuk mengisi acara sekolah dan lomba.",
    },
    {
      nama: "Rohis (Rohani Islam)",
      kategori: "Pilihan",
      deskripsi:
        "Kegiatan keagamaan untuk memperkuat iman dan akhlak siswa.",
    },
    {
      nama: "English Club",
      kategori: "Pilihan",
      deskripsi:
        "Latihan percakapan bahasa Inggris untuk meningkatkan kemampuan komunikasi.",
    },
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
            Ekstrakurikuler
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat dan
            minat siswa SMP Negeri 2 Matan Hilir Utara.
          </p>
        </div>
      </section>

      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ekskul.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#1D242B]/10 rounded-lg p-6 hover:border-[#0077C0]/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-[#1D242B]">{item.nama}</h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                      item.kategori === "Wajib"
                        ? "bg-[#0077C0]/10 text-[#0077C0]"
                        : "bg-[#C7EEFF]/60 text-[#1D242B]/70"
                    }`}
                  >
                    {item.kategori}
                  </span>
                </div>
                <p className="text-sm text-[#1D242B]/70 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#1D242B]/40 mt-8 italic">
            *Jadwal latihan dan pembina setiap ekstrakurikuler akan diumumkan
            oleh pihak sekolah.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
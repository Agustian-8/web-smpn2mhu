import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kurikulum",
  description:
    "Informasi kurikulum, mata pelajaran, dan kegiatan pembelajaran SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanKurikulum() {
  const mataPelajaran = [
    { nama: "Pendidikan Agama dan Budi Pekerti", kelompok: "A" },
    { nama: "Pendidikan Pancasila dan Kewarganegaraan", kelompok: "A" },
    { nama: "Bahasa Indonesia", kelompok: "A" },
    { nama: "Matematika", kelompok: "A" },
    { nama: "Ilmu Pengetahuan Alam (IPA)", kelompok: "A" },
    { nama: "Ilmu Pengetahuan Sosial (IPS)", kelompok: "A" },
    { nama: "Bahasa Inggris", kelompok: "A" },
    { nama: "Seni Budaya", kelompok: "B" },
    { nama: "Pendidikan Jasmani, Olahraga & Kesehatan", kelompok: "B" },
    { nama: "Prakarya / Informatika", kelompok: "B" },
    { nama: "Bahasa Daerah (Melayu)", kelompok: "Muatan Lokal" },
  ];

  const jamBelajar = [
    { hari: "Senin – Kamis", jam: "07.00 – 13.30 WIB" },
    { hari: "Jumat", jam: "07.00 – 11.00 WIB" },
    { hari: "Sabtu – Minggu", jam: "Libur" },
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
            Kurikulum
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Informasi kurikulum, mata pelajaran, dan kegiatan pembelajaran di
            SMP Negeri 2 Matan Hilir Utara.
          </p>
        </div>
      </section>

      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-16">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                  Dasar
                </p>
                <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                  Kurikulum yang Dipakai
                </h2>
              </div>

              <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
                <div className="bg-white border border-[#1D242B]/10 rounded-lg p-8">
                  <p className="text-2xl font-bold text-[#0077C0] mb-3">
                    Kurikulum Merdeka
                  </p>
                  <p className="text-[#1D242B]/80 leading-relaxed">
                    SMP Negeri 2 Matan Hilir Utara menerapkan Kurikulum Merdeka
                    yang memberikan keleluasaan kepada pendidik untuk
                    menciptakan pembelajaran berkualitas yang sesuai dengan
                    kebutuhan dan lingkungan belajar peserta didik.
                  </p>
                  <p className="text-[#1D242B]/80 leading-relaxed mt-4">
                    Kurikulum ini mengintegrasikan pembelajaran intrakurikuler,
                    projek penguatan profil pelajar Pancasila (P5), dan
                    ekstrakurikuler dalam satu kesatuan yang utuh.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-t border-[#1D242B]/10" />

          <section>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                  Pembelajaran
                </p>
                <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                  Mata Pelajaran
                </h2>
                <p className="text-sm text-[#1D242B]/60 mt-3 leading-relaxed">
                  Daftar mata pelajaran yang diajarkan.
                </p>
              </div>

              <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
                <div className="bg-white border border-[#1D242B]/10 rounded-lg overflow-hidden">
                  {mataPelajaran.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i !== mataPelajaran.length - 1
                          ? "border-b border-[#1D242B]/10"
                          : ""
                      }`}
                    >
                      <span className="text-sm text-[#1D242B]/80">
                        {item.nama}
                      </span>
                      <span className="text-xs font-semibold text-[#0077C0] bg-[#C7EEFF]/40 px-3 py-1 rounded-full shrink-0 ml-4">
                        {item.kelompok}
                      </span>
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
                  Waktu
                </p>
                <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                  Jam Belajar
                </h2>
              </div>

              <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
                <div className="bg-white border border-[#1D242B]/10 rounded-lg overflow-hidden">
                  {jamBelajar.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i !== jamBelajar.length - 1
                          ? "border-b border-[#1D242B]/10"
                          : ""
                      }`}
                    >
                      <span className="text-sm text-[#1D242B]/80">
                        {item.hari}
                      </span>
                      <span className="text-sm font-semibold text-[#1D242B]">
                        {item.jam}
                      </span>
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
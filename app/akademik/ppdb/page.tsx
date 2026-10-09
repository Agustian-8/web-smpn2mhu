import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PPDB Online",
  description:
    "Informasi Penerimaan Peserta Didik Baru SMP Negeri 2 Matan Hilir Utara",
};

export default function HalamanPPDB() {
  const jalur = [
    {
      nama: "Jalur Zonasi",
      deskripsi: "Untuk calon siswa yang berdomisili di wilayah zonasi sekolah.",
      kuota: "50%",
    },
    {
      nama: "Jalur Afirmasi",
      deskripsi: "Untuk calon siswa dari keluarga kurang mampu.",
      kuota: "15%",
    },
    {
      nama: "Jalur Prestasi",
      deskripsi: "Untuk calon siswa dengan prestasi akademik atau non-akademik.",
      kuota: "30%",
    },
    {
      nama: "Jalur Perpindahan",
      deskripsi: "Untuk calon siswa yang mengikuti perpindahan orang tua.",
      kuota: "5%",
    },
  ];

  const syarat = [
    "Fotokopi Akta Kelahiran",
    "Fotokopi Kartu Keluarga (KK)",
    "Fotokopi Ijazah/Surat Keterangan Lulus SD/MI",
    "Fotokopi Rapor Semester 1-5",
    "Pas foto berwarna 3x4 (2 lembar)",
    "Fotokopi KTP orang tua/wali",
  ];

  const jadwal = [
    { tahap: "Pendaftaran Online", tanggal: "1 - 15 Juli 2026" },
    { tahap: "Verifikasi Berkas", tanggal: "16 - 20 Juli 2026" },
    { tahap: "Pengumuman Hasil", tanggal: "22 Juli 2026" },
    { tahap: "Daftar Ulang", tanggal: "23 - 25 Juli 2026" },
    { tahap: "Awal Tahun Ajaran", tanggal: "1 Agustus 2026" },
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
            PPDB Online
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 — SMP Negeri 2
            Matan Hilir Utara.
          </p>
        </div>
      </section>

      {/* Pengumuman */}
      <section className="py-8 bg-[#C7EEFF]/40 border-b border-[#0077C0]/20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-start gap-3">
            <div className="bg-[#0077C0] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
              !
            </div>
            <div>
              <p className="font-semibold text-[#1D242B]">
                Pendaftaran PPDB Dibuka
              </p>
              <p className="text-sm text-[#1D242B]/70">
                Pendaftaran online dibuka mulai 1 Juli 2026. Pastikan semua
                berkas sudah disiapkan sebelum mendaftar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jalur Pendaftaran */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                Jalur
              </p>
              <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                Jalur Pendaftaran
              </h2>
            </div>

            <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {jalur.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#1D242B]/10 rounded-lg p-5 hover:border-[#0077C0]/40 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-[#1D242B]">
                        {item.nama}
                      </h3>
                      <span className="bg-[#C7EEFF]/60 text-[#0077C0] text-xs font-bold px-3 py-1 rounded-full shrink-0">
                        {item.kuota}
                      </span>
                    </div>
                    <p className="text-sm text-[#1D242B]/60">
                      {item.deskripsi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syarat */}
      <section className="py-12 md:py-16 bg-[#FAFAFA] border-y border-[#1D242B]/10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                Berkas
              </p>
              <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                Syarat Pendaftaran
              </h2>
            </div>

            <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
              <div className="bg-white border border-[#1D242B]/10 rounded-lg p-6">
                <ul className="space-y-3">
                  {syarat.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#0077C0] font-bold shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[#1D242B]/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jadwal */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                Waktu
              </p>
              <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                Jadwal PPDB
              </h2>
            </div>

            <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
              <div className="bg-white border border-[#1D242B]/10 rounded-lg overflow-hidden">
                {jadwal.map((item, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 px-6 py-4 ${
                      i !== jadwal.length - 1
                        ? "border-b border-[#1D242B]/10"
                        : ""
                    }`}
                  >
                    <p className="text-sm text-[#1D242B]/60 font-medium">
                      {item.tahap}
                    </p>
                    <p className="text-sm font-semibold text-[#1D242B] sm:col-span-2">
                      {item.tanggal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Daftar */}
      <section className="py-12 md:py-16 bg-[#1D242B] text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Siap Mendaftar?
          </h2>
          <p className="text-white/70 mb-6">
            Isi formulir pendaftaran online sekarang. Pastikan data yang
            dimasukkan sudah benar.
          </p>
          <Link
            href="/akademik/ppdb/daftar"
            className="inline-flex items-center gap-2 bg-[#0077C0] hover:bg-[#0066a6] text-white px-8 py-4 rounded-md font-semibold transition-colors"
          >
            Daftar Sekarang
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Kontak Panitia */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest">
                Bantuan
              </p>
              <h2 className="text-2xl font-bold text-[#1D242B] mt-2 leading-tight">
                Kontak Panitia
              </h2>
            </div>

            <div className="md:col-span-9 md:border-l md:border-[#1D242B]/10 md:pl-10">
              <div className="bg-white border border-[#1D242B]/10 rounded-lg p-6 space-y-3">
                <p className="text-sm text-[#1D242B]/70">
                  <span className="font-semibold text-[#1D242B]">
                    Telepon:
                  </span>{" "}
                  05343037360
                </p>
                <p className="text-sm text-[#1D242B]/70">
                  <span className="font-semibold text-[#1D242B]">
                    Jam Layanan:
                  </span>{" "}
                  Senin - Jumat, 07.00 - 14.00 WIB
                </p>
                <p className="text-sm text-[#1D242B]/70">
                  <span className="font-semibold text-[#1D242B]">
                    Lokasi:
                  </span>{" "}
                  Kantor SMP Negeri 2 Matan Hilir Utara, Jl. Ketapang Siduk Km
                  32, Desa Sungai Putri
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontak",
  description:
    "Informasi kontak dan alamat SMP Negeri 2 Matan Hilir Utara, Kabupaten Ketapang",
};

export default function HalamanKontak() {
  const kontak = [
    {
      label: "Alamat",
      nilai: "Jl. Ketapang Siduk Km 32",
      sub: "Desa Sungai Putri, Kec. Matan Hilir Utara",
    },
    {
      label: "Kabupaten",
      nilai: "Kab. Ketapang",
      sub: "Prov. Kalimantan Barat",
    },
    {
      label: "NPSN",
      nilai: "30103532",
      sub: "Nomor Pokok Sekolah Nasional",
    },
    {
      label: "Status",
      nilai: "Negeri",
      sub: "Bentuk: SMP · Jenjang: Dikdas",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />

      <section className="bg-[#1D242B] text-white py-14">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-xs font-semibold text-[#C7EEFF] uppercase tracking-widest mb-3">
            Hubungi Kami
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Kontak</h1>
          <p className="text-white/60 max-w-2xl">
            Informasi kontak dan alamat resmi SMP Negeri 2 Matan Hilir Utara
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Kiri: Info Kontak */}
            <div className="md:col-span-7">
              <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest mb-6">
                Informasi
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {kontak.map((item, i) => (
                  <div key={i} className="border-b border-[#1D242B]/10 pb-5">
                    <p className="text-xs text-[#1D242B]/50 uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-[#1D242B]">
                      {item.nilai}
                    </p>
                    <p className="text-sm text-[#1D242B]/60 mt-1">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kanan: Jam Operasional */}
            <div className="md:col-span-5 md:border-l md:border-[#1D242B]/10 md:pl-10">
              <p className="text-xs font-semibold text-[#0077C0] uppercase tracking-widest mb-6">
                Jam Operasional
              </p>

              <div className="bg-white border border-[#1D242B]/10 rounded-lg p-6">
                <div className="space-y-4 text-[#1D242B]">
                  <div className="flex justify-between items-baseline pb-3 border-b border-[#1D242B]/10">
                    <span className="text-sm">Senin – Kamis</span>
                    <span className="font-semibold text-sm">07.00 – 14.00</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-3 border-b border-[#1D242B]/10">
                    <span className="text-sm">Jumat</span>
                    <span className="font-semibold text-sm">07.00 – 11.00</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm">Sabtu – Minggu</span>
                    <span className="font-semibold text-sm text-[#1D242B]/40">
                      Libur
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 bg-[#C7EEFF]/40 border border-[#0077C0]/20 rounded-lg">
                <p className="text-sm text-[#1D242B]/80 leading-relaxed">
                  Untuk pertanyaan mengenai PPDB, silakan kunjungi halaman{" "}
                  <a
                    href="/ppdb"
                    className="text-[#0077C0] font-semibold hover:underline"
                  >
                    PPDB
                  </a>{" "}
                  atau datang langsung ke kantor sekolah pada jam operasional.
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
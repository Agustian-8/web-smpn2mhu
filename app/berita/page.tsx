import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Newspaper, ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBerita } from "@/lib/api-public";

export const metadata = {
  title: "Berita - SMPN 2 Matan Hilir Utara",
  description: "Berita dan informasi terbaru dari SMPN 2 Matan Hilir Utara",
};

export default async function HalamanBerita() {
  const result = await getAllBerita();
  const daftarBerita = result.data || [];

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#112D4E] text-[#F9F7F7] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Informasi Terkini</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Berita & Pengumuman
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl leading-relaxed">
            Informasi dan kegiatan terbaru SMP Negeri 2 Matan Hilir Utara.
          </p>
        </div>
      </section>

      {/* Daftar Berita */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          {daftarBerita.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon className="w-12 h-12 text-[#3F72AF]/40 mx-auto mb-3" />
              <p className="text-[#112D4E]/60">Belum ada berita.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {daftarBerita.map((berita) => (
                <Link
                  key={berita.id}
                  href={`/berita/${berita.id}`}
                  className="group bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#3F72AF]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] bg-[#DBE2EF]/50 overflow-hidden">
                      {berita.gambar ? (
                        <Image
                          src={berita.gambar}
                          alt={berita.judul}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#3F72AF]/50 bg-[#DBE2EF]/30">
                          <ImageIcon className="w-10 h-10" />
                        </div>
                      )}

                      {/* Badge Tanggal */}
                      <div className="absolute bottom-3 left-3 bg-[#112D4E]/80 backdrop-blur-md text-[#F9F7F7] text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
                        <Calendar className="w-3 h-3 text-[#3F72AF]" />
                        <span>
                          {new Date(berita.tanggal).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Konten */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      <h2 className="font-bold text-[#112D4E] text-base leading-snug line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                        {berita.judul}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#112D4E]/70 line-clamp-3 leading-relaxed">
                        {berita.ringkasan}
                      </p>
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center text-xs font-semibold text-[#3F72AF] group-hover:text-[#112D4E] transition-colors">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
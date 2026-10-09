import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Newspaper, Image as ImageIcon } from "lucide-react";
import { getAllBerita } from "@/lib/api-public";

export default async function BeritaTerbaru() {
  const result = await getAllBerita();
  const daftarBerita = (result.data || []).slice(0, 3);

  if (daftarBerita.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-[#F9F7F7] text-[#112D4E] relative overflow-hidden">
      {/* Decorative ambient background element */}
      <div 
        className="absolute top-0 left-1/3 w-96 h-96 bg-[#DBE2EF]/40 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F72AF]/10 border border-[#3F72AF]/20 text-[#3F72AF] text-xs font-semibold">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Informasi Terkini</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112D4E] tracking-tight">
              Berita & Pengumuman Sekolah
            </h2>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F72AF] hover:text-[#112D4E] transition-colors group self-start sm:self-auto"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Cards Berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {daftarBerita.map((berita) => (
            <Link
              key={berita.id}
              href={`/berita/${berita.id}`}
              className="group bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#3F72AF]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
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

                  {/* Badge Tanggal Melayang */}
                  <div className="absolute bottom-3 left-3 bg-[#112D4E]/80 backdrop-blur-md text-[#F9F7F7] text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
                    <Calendar className="w-3 h-3 text-[#3F72AF]" />
                    <span>
                      {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Konten Berita */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <h3 className="font-bold text-[#112D4E] text-base leading-snug line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                    {berita.judul}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#112D4E]/70 line-clamp-3 leading-relaxed">
                    {berita.ringkasan}
                  </p>
                </div>
              </div>

              {/* Action Footer Card */}
              <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center text-xs font-semibold text-[#3F72AF] group-hover:text-[#112D4E] transition-colors">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
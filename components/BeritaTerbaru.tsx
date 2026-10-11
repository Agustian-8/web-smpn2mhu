import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Newspaper,
  Image as ImageIcon,
  ArrowUpRight,
} from "lucide-react";
import { getAllBerita } from "@/lib/api-public";

export default async function BeritaTerbaru() {
  const result = await getAllBerita();
  const daftarBerita = (result.data || []).slice(0, 3);

  if (daftarBerita.length === 0) {
    return null;
  }

  const [featured, ...others] = daftarBerita;

  return (
    <section className="py-16 md:py-24 bg-[#F9F7F7] text-[#112D4E] relative overflow-hidden">
      {/* Subtle Ambient Background */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#DBE2EF]/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {/* ============ HEADER ============ */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-14 gap-5">
          <div className="max-w-xl">
            {/* Accent line + label (lebih clean dari badge) */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[3px] bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Berita Terbaru
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#112D4E] tracking-tight leading-tight">
              Kabar dari Sekolah Kami
            </h2>
            <p className="text-sm text-[#112D4E]/60 max-w-md leading-relaxed mt-3">
              Ikuti kegiatan, prestasi, dan pengumuman terbaru dari SMP Negeri 2
              Matan Hilir Utara.
            </p>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group self-start sm:self-auto shrink-0 border-b-2 border-transparent hover:border-[#3F72AF] pb-0.5"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ============ GRID ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* ---------- FEATURED BERITA ---------- */}
          <Link
            href={`/berita/${featured.id}`}
            className="group lg:col-span-7 bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden hover:border-[#3F72AF] transition-colors duration-300 flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#DBE2EF]/40 overflow-hidden">
              {featured.gambar ? (
                <Image
                  src={featured.gambar}
                  alt={featured.judul}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#3F72AF]/40">
                  <ImageIcon className="w-14 h-14" />
                </div>
              )}

              {/* Kategori Badge — hanya di featured */}
              {featured.kategori && (
                <span className="absolute top-4 left-4 inline-flex items-center bg-[#112D4E]/90 backdrop-blur-sm text-[#F9F7F7] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  {featured.kategori}
                </span>
              )}
            </div>

            {/* Konten */}
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#112D4E]/60 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#3F72AF]" />
                  <span>
                    {new Date(featured.tanggal).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="font-bold text-[#112D4E] text-xl md:text-2xl leading-snug line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                  {featured.judul}
                </h3>
                <p className="text-sm text-[#112D4E]/70 line-clamp-2 leading-relaxed">
                  {featured.ringkasan}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#3F72AF] mt-6">
                <span>Baca Selengkapnya</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>

          {/* ---------- SIDE CARDS ---------- */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {others.map((berita) => (
              <Link
                key={berita.id}
                href={`/berita/${berita.id}`}
                className="group flex-1 bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden hover:border-[#3F72AF] transition-colors duration-300 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] bg-[#DBE2EF]/40 overflow-hidden">
                  {berita.gambar ? (
                    <Image
                      src={berita.gambar}
                      alt={berita.judul}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#3F72AF]/40">
                      <ImageIcon className="w-10 h-10" />
                    </div>
                  )}
                </div>

                {/* Konten */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-[#112D4E]/55 font-medium">
                      <Calendar className="w-3 h-3 text-[#3F72AF]" />
                      <span>
                        {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      {berita.kategori && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-[#112D4E]/30" />
                          <span>{berita.kategori}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-bold text-[#112D4E] text-base leading-snug line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                      {berita.judul}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] mt-4">
                    <span>Baca</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA sederhana kalau kurang dari 2 berita */}
            {others.length < 2 && (
              <Link
                href="/berita"
                className="group flex-1 border-2 border-dashed border-[#DBE2EF] rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#3F72AF] transition-colors duration-300 min-h-[160px]"
              >
                <Newspaper className="w-6 h-6 text-[#3F72AF] mb-2" />
                <p className="text-sm font-bold text-[#112D4E]">
                  Lihat Berita Lainnya
                </p>
                <p className="text-xs text-[#112D4E]/55 mt-1">
                  Jelajahi arsip berita sekolah
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
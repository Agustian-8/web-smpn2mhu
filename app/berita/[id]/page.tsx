import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Image as ImageIcon,
  Clock,
  ChevronRight,
  Home,
  Tag,
  BookOpen,
  Printer,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBerita } from "@/lib/api-public";
import ShareButtons from "./ShareButtons";
import ScrollProgress from "./ScrollProgress";

export const instant = false;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const result = await getAllBerita();
  const berita = result.data?.find((b) => b.id === Number(id));

  if (!berita) {
    return { title: "Berita Tidak Ditemukan" };
  }

  return {
    title: `${berita.judul} - SMPN 2 Matan Hilir Utara`,
    description: berita.ringkasan,
  };
}

function estimateReadingTime(text: string | undefined): number {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatFullDate(date: string): string {
  return new Date(date).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function DetailBerita({ params }: Props) {
  const { id } = await params;
  const result = await getAllBerita();
  const semuaBerita = result.data || [];
  const berita = semuaBerita.find((b) => b.id === Number(id));

  if (!berita) {
    notFound();
  }

  const currentIndex = semuaBerita.findIndex((b) => b.id === Number(id));
  const prevBerita = currentIndex > 0 ? semuaBerita[currentIndex - 1] : null;
  const nextBerita =
    currentIndex < semuaBerita.length - 1
      ? semuaBerita[currentIndex + 1]
      : null;

  const relatedBerita = semuaBerita
    .filter((b) => b.id !== berita.id)
    .slice(0, 3);

  const tanggalFormatted = formatFullDate(berita.tanggal);
  const readingTime = estimateReadingTime(berita.konten);
  const totalKata = berita.konten?.trim().split(/\s+/).length || 0;

  const shareUrl = `https://smpn2mhu.sch.id/berita/${berita.id}`;

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <ScrollProgress />
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#112D4E] text-[#F9F7F7] py-14 md:py-20 overflow-hidden">
        {/* Ambient blur — dekorasi tunggal */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3F72AF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DBE2EF]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-5 relative z-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-xs text-[#DBE2EF]/70 mb-6 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#F9F7F7] transition-colors"
            >
              <Home className="w-3 h-3" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link
              href="/berita"
              className="hover:text-[#F9F7F7] transition-colors"
            >
              Berita
            </Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-[#F9F7F7] font-semibold line-clamp-1 max-w-[200px]">
              {berita.judul}
            </span>
          </nav>

          {/* Kategori — label teks tanpa badge pill */}
          <span className="inline-block text-xs font-bold text-[#DBE2EF]/70 uppercase tracking-[0.15em] mb-4">
            {(berita as any).kategori || "Berita Sekolah"}
          </span>

          {/* Judul */}
          <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-extrabold mb-5 leading-tight tracking-tight">
            {berita.judul}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-[#DBE2EF]/80">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#3F72AF]" />
              <span>{tanggalFormatted}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#DBE2EF]/40" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#3F72AF]" />
              <span>{readingTime} menit baca</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#DBE2EF]/40" />
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#3F72AF]" />
              <span>{totalKata} kata</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <article className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-5">
          {/* Featured Image */}
          <div className="relative -mt-16 md:-mt-20 mb-8 md:mb-10 z-10">
            <div className="relative aspect-[16/9] bg-[#DBE2EF] rounded-2xl md:rounded-3xl overflow-hidden border-4 border-[#F9F7F7]">
              {berita.gambar ? (
                <Image
                  src={berita.gambar}
                  alt={berita.judul}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#DBE2EF]/50">
                  <ImageIcon className="w-16 h-16 text-[#3F72AF]/40" />
                </div>
              )}
            </div>
            {berita.gambar && (
              <p className="text-xs text-center text-[#112D4E]/50 mt-3 italic">
                Dokumentasi: {berita.judul}
              </p>
            )}
          </div>

          {/* Toolbar: Share + Print */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DBE2EF]">
            <ShareButtons url={shareUrl} title={berita.judul} />
            <div className="flex items-center gap-2 text-xs text-[#112D4E]/50">
              <Printer className="w-3.5 h-3.5" />
              <span>Gunakan Ctrl+P untuk mencetak</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="relative pl-5 md:pl-6 mb-8 border-l-4 border-[#3F72AF]">
              <p className="text-base md:text-lg font-medium text-[#112D4E] leading-relaxed italic">
                {berita.ringkasan}
              </p>
            </div>

            <div className="text-[#112D4E]/85 text-sm md:text-base leading-[1.85] space-y-5 whitespace-pre-line">
              {berita.konten}
            </div>
          </div>

          {/* Kategori */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-[#DBE2EF]">
            <Tag className="w-4 h-4 text-[#3F72AF]" />
            <span className="text-xs font-semibold text-[#112D4E]/60 mr-1">
              Kategori:
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded bg-[#3F72AF]/10 text-[#3F72AF] text-xs font-semibold">
              {(berita as any).kategori || "Berita Sekolah"}
            </span>
          </div>

          {/* PREV / NEXT */}
          {(prevBerita || nextBerita) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {prevBerita ? (
                <Link
                  href={`/berita/${prevBerita.id}`}
                  className="group bg-white border border-[#DBE2EF] rounded-2xl p-5 hover:border-[#3F72AF] transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#3F72AF] mb-2">
                    <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                    <span>Berita Sebelumnya</span>
                  </div>
                  <p className="text-sm font-bold text-[#112D4E] line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                    {prevBerita.judul}
                  </p>
                </Link>
              ) : (
                <div aria-hidden="true" />
              )}

              {nextBerita ? (
                <Link
                  href={`/berita/${nextBerita.id}`}
                  className="group bg-white border border-[#DBE2EF] rounded-2xl p-5 hover:border-[#3F72AF] transition-colors duration-300 text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-xs font-bold text-[#3F72AF] mb-2">
                    <span>Berita Selanjutnya</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm font-bold text-[#112D4E] line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                    {nextBerita.judul}
                  </p>
                </Link>
              ) : (
                <div aria-hidden="true" />
              )}
            </div>
          )}
        </div>
      </article>

      {/* ============ RELATED POSTS ============ */}
      {relatedBerita.length > 0 && (
        <section className="py-12 md:py-16 border-t border-[#DBE2EF]">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                  Berita Lainnya
                </span>
              </div>
              <Link
                href="/berita"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3F72AF] hover:text-[#112D4E] transition-colors group self-start sm:self-auto"
              >
                <span>Lihat Semua</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBerita.map((item) => (
                <Link
                  key={item.id}
                  href={`/berita/${item.id}`}
                  className="group bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden hover:border-[#3F72AF] transition-colors duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-[#DBE2EF]/50 overflow-hidden">
                    {item.gambar ? (
                      <Image
                        src={item.gambar}
                        alt={item.judul}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#3F72AF]/50 bg-[#DBE2EF]/30">
                        <ImageIcon className="w-8 h-8" />
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 bg-[#112D4E]/85 backdrop-blur-md text-[#F9F7F7] text-xs px-2.5 py-1 rounded flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#3F72AF]" />
                      <span>
                        {new Date(item.tanggal).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <h3 className="font-bold text-[#112D4E] text-sm leading-snug line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                      {item.judul}
                    </h3>
                    <div className="inline-flex items-center text-xs font-bold text-[#3F72AF] group-hover:text-[#112D4E] transition-colors">
                      <span>Baca Selengkapnya</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ BACK TO LIST CTA ============ */}
      <section className="pb-16 pt-4">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-[#112D4E] text-[#F9F7F7] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#DBE2EF]/70 font-bold mb-1">
                Sudah selesai membaca?
              </p>
              <h3 className="text-base md:text-lg font-extrabold tracking-tight">
                Jelajahi berita dan informasi lainnya
              </h3>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 bg-[#F9F7F7] hover:bg-[#DBE2EF] text-[#112D4E] px-5 py-3 rounded-xl font-bold text-sm transition-colors shrink-0 group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Berita</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
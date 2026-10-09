import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBerita } from "@/lib/api-public";

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

export default async function DetailBerita({ params }: Props) {
  const { id } = await params;
  const result = await getAllBerita();
  const berita = result.data?.find((b) => b.id === Number(id));

  if (!berita) {
    notFound();
  }

  const tanggalFormatted = new Date(berita.tanggal).toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#112D4E] text-[#F9F7F7] py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-[#DBE2EF] hover:text-white text-sm mb-5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Berita</span>
          </Link>

          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
            {berita.judul}
          </h1>

          <div className="flex items-center gap-2 text-[#DBE2EF]/80 text-sm">
            <Calendar className="w-4 h-4 text-[#3F72AF]" />
            <span>{tanggalFormatted}</span>
          </div>
        </div>
      </section>

      {/* Konten Berita */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5">
          {/* Gambar Utama */}
          {berita.gambar ? (
            <div className="relative aspect-[16/9] bg-[#DBE2EF] rounded-2xl overflow-hidden mb-10 border border-[#DBE2EF]">
              <Image
                src={berita.gambar}
                alt={berita.judul}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="aspect-[16/9] bg-[#DBE2EF]/50 rounded-2xl flex items-center justify-center mb-10 border border-[#DBE2EF]">
              <ImageIcon className="w-16 h-16 text-[#3F72AF]/40" />
            </div>
          )}

          {/* Isi */}
          <div className="prose max-w-none text-[#112D4E]/85 leading-relaxed space-y-5">
            <p className="text-lg font-medium text-[#112D4E] leading-relaxed">
              {berita.ringkasan}
            </p>
            <p className="text-base leading-relaxed">{berita.konten}</p>
          </div>

          {/* Tombol Kembali */}
          <div className="mt-12 pt-8 border-t border-[#DBE2EF]">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 bg-[#3F72AF] hover:bg-[#35639a] text-[#F9F7F7] px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Berita</span>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  Calendar,
  Newspaper,
  Image as ImageIcon,
  Search,
  LayoutGrid,
  List,
  SlidersHorizontal,
  X,
  ChevronRight,
  Inbox,
  AlertCircle,
  RotateCw,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ============================================
// TYPES
// ============================================
type Berita = {
  id: string | number;
  judul: string;
  ringkasan: string;
  gambar?: string;
  tanggal: string;
  kategori?: string;
};

type Props = {
  daftarBerita: Berita[];
  errorMessage?: string;
};

// ============================================
// COMPONENT
// ============================================
export default function BeritaClient({ daftarBerita, errorMessage }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"terbaru" | "terlama" | "az">("terbaru");
  const [activeKategori, setActiveKategori] = useState<string>("semua");

  // Kategori unik dari data
  const kategoriList = useMemo(() => {
    const set = new Set<string>();
    daftarBerita.forEach((b) => b.kategori && set.add(b.kategori));
    return ["semua", ...Array.from(set)];
  }, [daftarBerita]);

  // Filter + Sort
  const filteredBerita = useMemo(() => {
    let result = [...daftarBerita];

    if (activeKategori !== "semua") {
      result = result.filter((b) => b.kategori === activeKategori);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.judul.toLowerCase().includes(q) ||
          b.ringkasan?.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      if (sortBy === "terbaru")
        return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
      if (sortBy === "terlama")
        return new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime();
      return a.judul.localeCompare(b.judul);
    });

    return result;
  }, [daftarBerita, activeKategori, searchQuery, sortBy]);

  const featuredBerita = filteredBerita[0];
  const otherBerita = filteredBerita.slice(1);

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#112D4E] text-[#F9F7F7] py-16 md:py-24 overflow-hidden">
        {/* Ambient blur */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3F72AF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DBE2EF]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#DBE2EF]/70 mb-6">
            <Link href="/" className="hover:text-[#F9F7F7] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F9F7F7] font-semibold">Berita</span>
          </nav>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <Newspaper className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Informasi Terkini</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Berita & Pengumuman
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed mb-8">
            Ikuti perkembangan, kegiatan, dan informasi terbaru dari SMP Negeri
            2 Matan Hilir Utara.
          </p>

          {/* Stats — inline, tanpa icon dekoratif */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#DBE2EF]/60 font-bold mb-1.5">
                Total Berita
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#F9F7F7] leading-none">
                {daftarBerita.length}
                <span className="text-sm font-medium text-[#DBE2EF]/60 ml-1.5">
                  artikel
                </span>
              </p>
            </div>

            <div className="w-px bg-[#DBE2EF]/20" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#DBE2EF]/60 font-bold mb-1.5">
                Update Terakhir
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#F9F7F7] leading-none">
                {daftarBerita[0]?.tanggal
                  ? new Date(daftarBerita[0].tanggal).toLocaleDateString(
                      "id-ID",
                      { day: "numeric", month: "short" }
                    )
                  : "-"}
                <span className="text-sm font-medium text-[#DBE2EF]/60 ml-1.5">
                  {daftarBerita[0]?.tanggal
                    ? new Date(daftarBerita[0].tanggal).getFullYear()
                    : ""}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5">
          {/* Toolbar — hanya muncul kalau tidak ada error & tidak kosong total */}
          {!errorMessage && daftarBerita.length > 0 && (
            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-4 md:p-5 mb-6 md:mb-8">
              <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari berita berdasarkan judul atau isi..."
                    className="w-full pl-10 pr-10 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition-all placeholder:text-[#112D4E]/40 text-[#112D4E]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-[#DBE2EF]/50 transition-colors"
                      aria-label="Hapus pencarian"
                    >
                      <X className="w-3.5 h-3.5 text-[#112D4E]/60" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#3F72AF] pointer-events-none" />
                    <select
                      value={sortBy}
                      onChange={(e) =>
                        setSortBy(e.target.value as typeof sortBy)
                      }
                      className="appearance-none pl-9 pr-8 py-2.5 text-xs font-semibold bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition-all text-[#112D4E] cursor-pointer"
                    >
                      <option value="terbaru">Terbaru</option>
                      <option value="terlama">Terlama</option>
                      <option value="az">A - Z</option>
                    </select>
                    <ChevronRight className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#3F72AF] rotate-90 pointer-events-none" />
                  </div>

                  {/* View Toggle */}
                  <div className="flex items-center bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === "grid"
                          ? "bg-[#3F72AF] text-[#F9F7F7]"
                          : "text-[#112D4E]/60 hover:text-[#3F72AF]"
                      }`}
                      aria-label="Tampilan grid"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === "list"
                          ? "bg-[#3F72AF] text-[#F9F7F7]"
                          : "text-[#112D4E]/60 hover:text-[#3F72AF]"
                      }`}
                      aria-label="Tampilan list"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Filter Kategori */}
              {kategoriList.length > 1 && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#DBE2EF] overflow-x-auto pb-1 -mb-1">
                  {kategoriList.map((kat) => (
                    <button
                      key={kat}
                      onClick={() => setActiveKategori(kat)}
                      className={`shrink-0 px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                        activeKategori === kat
                          ? "bg-[#3F72AF] text-[#F9F7F7] border-[#3F72AF]"
                          : "bg-[#F9F7F7] text-[#112D4E]/70 border-[#DBE2EF] hover:border-[#3F72AF]/40 hover:text-[#3F72AF]"
                      }`}
                    >
                      {kat === "semua" ? "Semua Kategori" : kat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Result Info */}
          {!errorMessage &&
            daftarBerita.length > 0 &&
            (searchQuery || activeKategori !== "semua") && (
              <p className="mb-6 text-xs text-[#112D4E]/60">
                Menampilkan{" "}
                <strong className="text-[#3F72AF]">
                  {filteredBerita.length}
                </strong>{" "}
                hasil
                {searchQuery && (
                  <>
                    {" "}
                    untuk{" "}
                    <strong className="text-[#112D4E]">
                      &quot;{searchQuery}&quot;
                    </strong>
                  </>
                )}
              </p>
            )}

          {/* ============ EMPTY / ERROR STATE ============ */}
          {filteredBerita.length === 0 ? (
            <div className="text-center py-20 bg-white border border-dashed border-[#DBE2EF] rounded-2xl">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  errorMessage && !searchQuery
                    ? "bg-rose-50"
                    : "bg-[#DBE2EF]/60"
                }`}
              >
                {searchQuery ? (
                  <Search className="w-7 h-7 text-[#3F72AF]" />
                ) : errorMessage ? (
                  <AlertCircle className="w-7 h-7 text-rose-500" />
                ) : (
                  <Inbox className="w-7 h-7 text-[#3F72AF]" />
                )}
              </div>

              <h3 className="text-lg font-bold text-[#112D4E] mb-1.5">
                {searchQuery
                  ? "Berita Tidak Ditemukan"
                  : errorMessage
                  ? "Gagal Memuat Berita"
                  : "Belum Ada Berita"}
              </h3>

              <p className="text-sm text-[#112D4E]/60 max-w-sm mx-auto mb-5 leading-relaxed">
                {searchQuery
                  ? `Tidak ada berita yang cocok dengan pencarian "${searchQuery}". Coba kata kunci lain.`
                  : errorMessage
                  ? errorMessage
                  : "Berita dan pengumuman akan tampil di sini. Silakan kembali lagi nanti."}
              </p>

              {/* CTA: Reset Search / Coba Lagi */}
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-2 bg-[#3F72AF] hover:bg-[#112D4E] text-[#F9F7F7] text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Reset Pencarian
                </button>
              ) : errorMessage ? (
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-2 bg-[#3F72AF] hover:bg-[#112D4E] text-[#F9F7F7] text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors group"
                >
                  <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                  Coba Lagi
                </button>
              ) : null}
            </div>
          ) : (
            <>
              {/* ============ FEATURED BERITA ============ */}
              {featuredBerita && viewMode === "grid" && (
                <Link
                  href={`/berita/${featuredBerita.id}`}
                  className="group block bg-white border border-[#DBE2EF] rounded-3xl overflow-hidden hover:border-[#3F72AF] transition-colors duration-300 mb-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[340px] bg-[#DBE2EF]/50 overflow-hidden">
                      {featuredBerita.gambar ? (
                        <Image
                          src={featuredBerita.gambar}
                          alt={featuredBerita.judul}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#3F72AF]/50 bg-[#DBE2EF]/30">
                          <ImageIcon className="w-14 h-14" />
                        </div>
                      )}

                      {/* Badge "Berita Utama" */}
                      <div className="absolute top-4 left-4 inline-flex items-center bg-[#112D4E]/90 backdrop-blur-sm text-[#F9F7F7] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                        Berita Utama
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                          <span className="inline-flex items-center gap-1.5 text-xs text-[#3F72AF] font-bold">
                            <Calendar className="w-3 h-3" />
                            {new Date(
                              featuredBerita.tanggal
                            ).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          {featuredBerita.kategori && (
                            <span className="text-xs text-[#112D4E]/50">
                              · {featuredBerita.kategori}
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#112D4E] leading-tight mb-3 group-hover:text-[#3F72AF] transition-colors">
                          {featuredBerita.judul}
                        </h2>
                        <p className="text-sm text-[#112D4E]/70 line-clamp-3 leading-relaxed">
                          {featuredBerita.ringkasan}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-bold text-[#3F72AF] group-hover:text-[#112D4E] transition-colors mt-6">
                        <span>Baca Selengkapnya</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* ============ GRID / LIST VIEW ============ */}
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {otherBerita.map((berita) => (
                    <Link
                      key={berita.id}
                      href={`/berita/${berita.id}`}
                      className="group bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden hover:border-[#3F72AF] transition-colors duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative aspect-[16/10] bg-[#DBE2EF]/50 overflow-hidden">
                          {berita.gambar ? (
                            <Image
                              src={berita.gambar}
                              alt={berita.judul}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#3F72AF]/50 bg-[#DBE2EF]/30">
                              <ImageIcon className="w-10 h-10" />
                            </div>
                          )}

                          {berita.kategori && (
                            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#3F72AF] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                              {berita.kategori}
                            </div>
                          )}

                          <div className="absolute bottom-3 left-3 bg-[#112D4E]/85 backdrop-blur-md text-[#F9F7F7] text-xs px-2.5 py-1 rounded flex items-center gap-1.5">
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

                        <div className="p-5 sm:p-6 space-y-2.5">
                          <h3 className="font-bold text-[#112D4E] text-base leading-snug line-clamp-2 group-hover:text-[#3F72AF] transition-colors">
                            {berita.judul}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#112D4E]/70 line-clamp-3 leading-relaxed">
                            {berita.ringkasan}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center text-xs font-bold text-[#3F72AF] group-hover:text-[#112D4E] transition-colors">
                        <span>Baca Selengkapnya</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {otherBerita.map((berita) => (
                    <Link
                      key={berita.id}
                      href={`/berita/${berita.id}`}
                      className="group flex flex-col sm:flex-row gap-4 sm:gap-5 bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden hover:border-[#3F72AF] transition-colors duration-300 p-4 sm:p-5"
                    >
                      <div className="relative w-full sm:w-48 md:w-56 aspect-[16/10] sm:aspect-[4/3] shrink-0 bg-[#DBE2EF]/50 rounded-xl overflow-hidden">
                        {berita.gambar ? (
                          <Image
                            src={berita.gambar}
                            alt={berita.judul}
                            fill
                            sizes="(max-width: 640px) 100vw, 224px"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#3F72AF]/50 bg-[#DBE2EF]/30">
                            <ImageIcon className="w-8 h-8" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 text-xs text-[#3F72AF] font-bold">
                              <Calendar className="w-3 h-3" />
                              {new Date(berita.tanggal).toLocaleDateString(
                                "id-ID",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                            {berita.kategori && (
                              <span className="text-xs text-[#112D4E]/50">
                                · {berita.kategori}
                              </span>
                            )}
                          </div>

                          <h3 className="font-bold text-[#112D4E] text-base md:text-lg leading-snug line-clamp-2 group-hover:text-[#3F72AF] transition-colors mb-1.5">
                            {berita.judul}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#112D4E]/70 line-clamp-2 leading-relaxed">
                            {berita.ringkasan}
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F72AF] group-hover:text-[#112D4E] transition-colors mt-3">
                          <span>Baca Selengkapnya</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
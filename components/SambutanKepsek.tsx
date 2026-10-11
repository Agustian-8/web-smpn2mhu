import Image from "next/image";

export default function SambutanKepsek() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F7F7] text-[#112D4E] relative overflow-hidden">
      {/* Subtle Ambient */}
      <div
        className="absolute -top-12 -left-12 w-80 h-80 bg-[#DBE2EF]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {/* ============ SECTION HEADER ============ */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[3px] bg-[#3F72AF] rounded-full" />
            <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
              Sambutan Kepala Sekolah
            </span>
          </div>
        </div>

        {/* ============ MAIN GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ---------- KOLOM KIRI: FOTO ---------- */}
          <div className="md:col-span-5 lg:col-span-4">
            {/* Foto Portrait */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#DBE2EF] border border-[#DBE2EF]">
              <Image
                src="/images/kepala-sekolah.png"
                alt="Agustian, S.Kom. - Kepala SMPN 2 Matan Hilir Utara"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
                priority
              />

              {/* Overlay gradient bawah untuk readability */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#112D4E] via-[#112D4E]/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Identitas di dalam foto */}
              <div className="absolute bottom-5 left-5 right-5 text-[#F9F7F7]">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#DBE2EF]/90 mb-1.5">
                  Kepala Sekolah
                </p>
                <p className="text-base sm:text-lg font-extrabold leading-tight tracking-tight">
                  Agustian, S.Kom.
                </p>
                <p className="text-[11px] text-[#DBE2EF]/80 mt-1">
                  SMPN 2 Matan Hilir Utara
                </p>
              </div>
            </div>

            {/* Info lokasi */}
            <div className="mt-5 flex items-center gap-2 text-xs text-[#112D4E]/55">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3F72AF]" />
              <span>Kec. Matan Hilir Utara · Kab. Ketapang</span>
            </div>
          </div>

          {/* ---------- KOLOM KANAN: SAMBUTAN ---------- */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="space-y-6">
              {/* Judul — bersih, 1 warna, tanpa watermark */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#112D4E] tracking-tight leading-tight">
                Selamat Datang di Website Resmi SMPN 2 Matan Hilir Utara
              </h2>

              {/* Salam Pembuka */}
              <p className="text-base sm:text-lg font-semibold text-[#3F72AF] italic">
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh,
              </p>

              {/* Isi Sambutan */}
              <div className="space-y-4 text-sm sm:text-base text-[#112D4E]/80 leading-[1.8]">
                <p>
                  Puji syukur kita panjatkan kepada Tuhan Yang Maha Esa atas
                  segala rahmat dan karunia-Nya, sehingga kita dapat terus
                  berkarya dan memberikan yang terbaik bagi dunia pendidikan.
                </p>
                <p>
                  Website ini kami hadirkan sebagai sarana informasi dan
                  komunikasi antara sekolah, orang tua, dan masyarakat. Melalui
                  media ini, kami berharap dapat menghadirkan keterbukaan
                  informasi mengenai program, kegiatan, serta capaian sekolah
                  kepada seluruh pihak yang berkepentingan.
                </p>
                <p>
                  Kami menyadari bahwa pendidikan yang berkualitas lahir dari
                  kerja sama yang baik antara sekolah, keluarga, dan
                  lingkungan. Untuk itu, kami mengajak seluruh pihak untuk
                  bersama-sama mendukung proses pendidikan peserta didik, agar
                  mereka tumbuh menjadi pribadi yang berilmu, berakhlak mulia,
                  dan siap menghadapi tantangan zaman.
                </p>
                <p>
                  Terima kasih atas kunjungan Anda. Semoga website ini
                  bermanfaat dan menjadi jembatan komunikasi yang baik bagi
                  kita semua.
                </p>
              </div>

              {/* Salam Penutup + Signature */}
              <div className="pt-6 border-t border-[#DBE2EF] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <p className="text-sm text-[#112D4E]/60 italic">
                  Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.
                </p>

                {/* Tanda tangan */}
                <div className="text-right sm:text-right">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#112D4E]/50 font-bold mb-1">
                    Hormat kami,
                  </p>
                  <p className="text-sm sm:text-base font-extrabold text-[#112D4E] leading-tight">
                    Agustian, S.Kom.
                  </p>
                  <p className="text-[11px] text-[#3F72AF] font-semibold mt-0.5">
                    Kepala Sekolah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
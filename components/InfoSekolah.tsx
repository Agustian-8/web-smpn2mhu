import {
  MapPin,
  ShieldCheck,
  Building2,
  Globe2,
  FileText,
} from "lucide-react";

export default function InfoSekolah() {
  const info = [
    {
      label: "Alamat Utama",
      nilai: "Jl. Ketapang Siduk Km 32",
      sub: "Desa Sungai Putri, Kec. Matan Hilir Utara",
      icon: MapPin,
    },
    {
      label: "NPSN Resmi",
      nilai: "30103532",
      sub: "Terdaftar aktif di Dapodik Kemendikbudristek",
      icon: ShieldCheck,
    },
    {
      label: "Status & Bentuk",
      nilai: "Negeri",
      sub: "Bentuk Pendidikan: SMP · Jenjang: Dikdas",
      icon: Building2,
    },
    {
      label: "Wilayah Administratif",
      nilai: "Kab. Ketapang",
      sub: "Provinsi Kalimantan Barat",
      icon: Globe2,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F7F7] text-[#112D4E] relative overflow-hidden border-y border-[#DBE2EF]">
      {/* Subtle Ambient */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#DBE2EF]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ============ SECTION HEADER (KIRI) ============ */}
          <div className="lg:col-span-4 space-y-5">
            {/* Accent line + label */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[3px] bg-[#3F72AF] rounded-full" />
              <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                Identitas Sekolah
              </span>
            </div>

            {/* Judul — 1 warna, natural */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#112D4E] tracking-tight leading-tight">
              Profil Singkat Sekolah Kami
            </h2>

            <p className="text-sm text-[#112D4E]/70 leading-relaxed max-w-sm">
              Data terverifikasi berkala sesuai basis resmi Data Pokok
              Pendidikan (Dapodik) Kemendikbudristek.
            </p>

            {/* Divider + info tahun */}
            <div className="pt-4 mt-4 border-t border-[#DBE2EF]">
              <div className="flex items-center gap-2 text-xs font-medium text-[#112D4E]/50">
                <FileText className="w-3.5 h-3.5 text-[#3F72AF]" />
                <span>Tahun Ajaran 2026/2027</span>
              </div>
            </div>
          </div>

          {/* ============ GRID INFO (KANAN) ============ */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {info.map((item, i) => {
                const Icon = item.icon;
                const nomor = String(i + 1).padStart(2, "0");

                return (
                  <div
                    key={i}
                    className="bg-white p-6 sm:p-7 rounded-2xl border border-[#DBE2EF] flex flex-col"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center text-[#3F72AF] mb-5">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>

                    {/* Label dengan nomor inline */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#112D4E]/25 tabular-nums">
                        {nomor}
                      </span>
                      <span className="w-3 h-px bg-[#112D4E]/20" />
                      <span className="text-[11px] font-bold text-[#3F72AF] uppercase tracking-[0.12em]">
                        {item.label}
                      </span>
                    </div>

                    {/* Value */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#112D4E] leading-tight tracking-tight mb-1.5">
                      {item.nilai}
                    </h3>

                    {/* Sub */}
                    <p className="text-xs sm:text-sm text-[#112D4E]/65 leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
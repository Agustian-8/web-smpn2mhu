import { MapPin, ShieldCheck, Building2, Globe2, FileText, CheckCircle2 } from "lucide-react";

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
      {/* Decorative ambient background element */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#DBE2EF]/40 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Section Header (Kiri) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F72AF]/10 border border-[#3F72AF]/20 text-[#3F72AF] text-xs font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Identitas Sekolah</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112D4E] tracking-tight leading-snug">
              Data & Informasi Resmi Sekolah
            </h2>

            <p className="text-sm text-[#112D4E]/80 leading-relaxed">
              Seluruh data yang tertera diverifikasi secara berkala sesuai dengan basis data resmi Data Pokok Pendidikan (Dapodik) Kemendikbudristek.
            </p>

            {/* Status Verifikasi Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#112D4E]/70 bg-white px-3.5 py-2 rounded-xl border border-[#DBE2EF] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#3F72AF]" />
                <span>Terverifikasi Aktif TA 2026/2027</span>
              </div>
            </div>
          </div>

          {/* Grid Informasi (Kanan) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-[#DBE2EF] shadow-sm hover:shadow-md hover:border-[#3F72AF]/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon & Label */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#3F72AF] uppercase tracking-wider">
                          {item.label}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-[#3F72AF]/10 border border-[#3F72AF]/20 flex items-center justify-center text-[#3F72AF] group-hover:bg-[#3F72AF] group-hover:text-white transition-colors duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-[#112D4E] mb-1.5 tracking-tight">
                        {item.nilai}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#112D4E]/70 leading-relaxed">
                        {item.sub}
                      </p>
                    </div>
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
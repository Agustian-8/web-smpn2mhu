import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JamStatusBadge from "./JamStatusBadge";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  School,
  Building2,
  Hash,
  Navigation,
  MessageCircle,
  Send,
  ChevronRight,
  HelpCircle,
  CalendarDays,
  User,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "Kontak",
  description:
    "Informasi kontak dan alamat SMP Negeri 2 Matan Hilir Utara, Kabupaten Ketapang",
};

export default function HalamanKontak() {
  const kontak = [
    {
      label: "Alamat Sekolah",
      nilai: "Jl. Ketapang Siduk Km 32",
      sub: "Desa Sungai Putri, Kec. Matan Hilir Utara",
      icon: MapPin,
    },
    {
      label: "Kabupaten",
      nilai: "Kab. Ketapang",
      sub: "Prov. Kalimantan Barat",
      icon: Building2,
    },
    {
      label: "NPSN",
      nilai: "30103532",
      sub: "Nomor Pokok Sekolah Nasional",
      icon: Hash,
    },
    {
      label: "Status Sekolah",
      nilai: "Negeri",
      sub: "Bentuk: SMP · Jenjang: Dikdas",
      icon: School,
    },
  ];

  const jamOperasional = [
    { hari: "Senin – Kamis", jam: "07.00 – 14.00", aktif: true },
    { hari: "Jumat", jam: "07.00 – 11.00", aktif: true },
    { hari: "Sabtu – Minggu", jam: "Libur", aktif: false },
  ];

  const quickActions = [
    {
      label: "Telepon",
      value: "0895-1421-5508",
      href: "tel:+6289514215508",
      icon: Phone,
    },
    {
      label: "Email",
      value: "info@smpn2mhu.sch.id",
      href: "mailto:info@smpn2mhu.sch.id",
      icon: Mail,
    },
    {
      label: "WhatsApp",
      value: "Chat Admin",
      href: "https://wa.me/6289514215508",
      icon: MessageCircle,
    },
    {
      label: "Lokasi",
      value: "Buka Maps",
      href: "https://maps.google.com",
      icon: Navigation,
    },
  ];

  const faqs = [
    {
      q: "Bagaimana cara mendaftar sebagai siswa baru?",
      a: "Pendaftaran dapat dilakukan secara online melalui halaman PPDB di website ini, atau datang langsung ke kantor sekolah pada jam operasional dengan membawa dokumen persyaratan.",
    },
    {
      q: "Apa saja dokumen yang diperlukan untuk pendaftaran?",
      a: "Dokumen yang diperlukan meliputi: fotokopi ijazah SD/MI, akta kelahiran, kartu keluarga, pas foto 3x4, dan formulir pendaftaran yang sudah diisi.",
    },
    {
      q: "Apakah ada biaya pendaftaran?",
      a: "Untuk informasi mengenai biaya dan persyaratan lainnya, silakan hubungi pihak sekolah langsung melalui telepon atau datang ke kantor sekolah.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#112D4E] text-[#F9F7F7] py-16 md:py-20 overflow-hidden">
        {/* Ambient blur — dekorasi tunggal */}
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
            <span className="text-[#F9F7F7] font-semibold">Kontak</span>
          </nav>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>Hubungi Kami</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Kontak & Lokasi
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Kami siap membantu Anda. Hubungi kami melalui berbagai saluran
            komunikasi atau kunjungi langsung sekolah kami pada jam operasional.
          </p>
        </div>
      </section>

      {/* ================= QUICK ACTION CARDS ================= */}
      <section className="relative -mt-8 md:-mt-10 z-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <a
                  key={i}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    action.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group bg-white border border-[#DBE2EF] rounded-2xl p-4 md:p-5 hover:border-[#3F72AF] transition-colors duration-300"
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center mb-3">
                    <Icon
                      className="w-5 h-5 text-[#3F72AF]"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#112D4E]/50 font-bold mb-0.5">
                    {action.label}
                  </p>
                  <p className="text-xs md:text-sm font-bold text-[#112D4E] group-hover:text-[#3F72AF] transition-colors truncate">
                    {action.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* ---------- KOLOM KIRI ---------- */}
            <div className="lg:col-span-7 space-y-8">
              {/* Info Sekolah */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                  <h2 className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                    Informasi Sekolah
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {kontak.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="bg-white border border-[#DBE2EF] rounded-2xl p-5"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                            <Icon
                              className="w-5 h-5 text-[#3F72AF]"
                              strokeWidth={2}
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-[0.12em] text-[#112D4E]/50 font-bold mb-1">
                              {item.label}
                            </p>
                            <p className="text-sm md:text-base font-bold text-[#112D4E] leading-tight">
                              {item.nilai}
                            </p>
                            <p className="text-xs text-[#112D4E]/60 mt-1 leading-relaxed">
                              {item.sub}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Peta Lokasi */}
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                  <h2 className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                    Lokasi Peta
                  </h2>
                </div>

                <div className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] md:aspect-[16/9] bg-[#DBE2EF]/40 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d110.0!3d-1.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNDgnMDAuMCJTIDExMMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi SMP Negeri 2 Matan Hilir Utara"
                      className="absolute inset-0 w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#DBE2EF]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#3F72AF] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-[#112D4E]">
                          SMP Negeri 2 Matan Hilir Utara
                        </p>
                        <p className="text-xs text-[#112D4E]/60 mt-0.5">
                          Jl. Ketapang Siduk Km 32, Sungai Putri, Ketapang
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#3F72AF] hover:bg-[#35639A] text-[#F9F7F7] text-xs font-bold px-4 py-2.5 rounded-lg transition-colors duration-200 shrink-0 group"
                    >
                      <span>Petunjuk Arah</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                  <h2 className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                    Pertanyaan Umum
                  </h2>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden hover:border-[#3F72AF] transition-colors"
                    >
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
                          <span className="text-sm font-bold text-[#112D4E] group-hover:text-[#3F72AF] transition-colors">
                            {faq.q}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#3F72AF] shrink-0 transition-transform duration-300 group-open:rotate-90" />
                      </summary>
                      <div className="px-5 pb-5 pl-12">
                        <p className="text-xs md:text-sm text-[#112D4E]/70 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------- KOLOM KANAN ---------- */}
            <div className="lg:col-span-5 space-y-8">
              {/* Jam Operasional */}
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                  <h2 className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                    Jam Operasional
                  </h2>
                </div>

                <div className="bg-white border border-[#DBE2EF] rounded-2xl p-6">
                  {/* Status Badge — Dinamis */}
                  <div className="mb-5">
                    <JamStatusBadge />
                  </div>

                  <div className="space-y-1">
                    {jamOperasional.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between gap-3 p-3.5 rounded-xl ${
                          item.aktif ? "bg-[#F9F7F7]" : "bg-[#F9F7F7]/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <CalendarDays
                            className={`w-4 h-4 ${
                              item.aktif
                                ? "text-[#3F72AF]"
                                : "text-[#112D4E]/30"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              item.aktif
                                ? "text-[#112D4E]"
                                : "text-[#112D4E]/40"
                            }`}
                          >
                            {item.hari}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded ${
                            item.aktif
                              ? "text-[#3F72AF] bg-[#3F72AF]/10"
                              : "text-[#112D4E]/40 bg-[#112D4E]/5"
                          }`}
                        >
                          {item.jam}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 p-4 bg-[#DBE2EF]/40 border border-[#3F72AF]/15 rounded-xl">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#112D4E]/80 leading-relaxed">
                        Untuk pertanyaan PPDB, kunjungi halaman{" "}
                        <Link
                          href="/akademik/ppdb"
                          className="text-[#3F72AF] font-bold hover:underline"
                        >
                          PPDB
                        </Link>{" "}
                        atau datang langsung ke kantor pada jam operasional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Kontak */}
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1 h-6 bg-[#3F72AF] rounded-full" />
                  <h2 className="text-xs font-bold text-[#3F72AF] uppercase tracking-[0.15em]">
                    Kirim Pesan
                  </h2>
                </div>

                <form className="bg-white border border-[#DBE2EF] rounded-2xl p-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#112D4E] mb-1.5">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                      <input
                        type="text"
                        placeholder="Masukkan nama Anda"
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition-all placeholder:text-[#112D4E]/40 text-[#112D4E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#112D4E] mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                      <input
                        type="email"
                        placeholder="email@contoh.com"
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition-all placeholder:text-[#112D4E]/40 text-[#112D4E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#112D4E] mb-1.5">
                      Subjek
                    </label>
                    <input
                      type="text"
                      placeholder="Topik pesan Anda"
                      className="w-full px-3 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition-all placeholder:text-[#112D4E]/40 text-[#112D4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#112D4E] mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-3 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition-all placeholder:text-[#112D4E]/40 text-[#112D4E] resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#3F72AF] hover:bg-[#35639A] text-[#F9F7F7] text-sm font-bold py-3 rounded-xl transition-colors duration-200 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Kirim Pesan</span>
                  </button>

                  <p className="text-[11px] text-center text-[#112D4E]/50 leading-relaxed">
                    Dengan mengirim pesan, Anda menyetujui{" "}
                    <span className="text-[#3F72AF] font-semibold">
                      kebijakan privasi
                    </span>{" "}
                    kami.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
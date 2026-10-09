import Image from "next/image";
import { Quote, Award } from "lucide-react";

export default function SambutanKepsek() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F7F7] text-[#112D4E] relative overflow-hidden">
      {/* Visual Accent Ambient Glow */}
      <div 
        className="absolute -top-12 -left-12 w-80 h-80 bg-[#DBE2EF]/50 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Kolom Kiri: Profil & Photo Kepala Sekolah */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#DBE2EF]">
            <div>
              {/* Badge Kategori */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F72AF]/10 border border-[#3F72AF]/20 text-[#3F72AF] text-xs font-semibold mb-6">
                <Award className="w-3.5 h-3.5" />
                <span>Sambutan Resmi</span>
              </div>

              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#DBE2EF] border-2 border-[#DBE2EF] shadow-inner mb-6 group">
                <Image
                  src="/images/kepala-sekolah.png"
                  alt="Kepala SMPN 2 Matan Hilir Utara"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
              </div>
            </div>

            {/* Identitas Kepala Sekolah */}
            <div className="border-t border-[#DBE2EF] pt-4">
              <h3 className="font-bold text-[#112D4E] text-base sm:text-lg leading-snug">
                Kepala Sekolah SMPN 2 MHU
              </h3>
              <p className="text-xs sm:text-sm text-[#112D4E]/70 mt-1 font-medium">
                Kec. Matan Hilir Utara, Kab. Ketapang
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Pesan Sambutan */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-[#DBE2EF] relative">
            {/* Watermark Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[#DBE2EF]/60 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-xs font-bold text-[#3F72AF] uppercase tracking-widest mb-1">
                  Pesan & Harapan
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112D4E] tracking-tight">
                  Membangun Generasi Unggul & Berkarakter
                </h2>
              </div>

              {/* Salam Pembuka */}
              <p className="text-lg font-semibold text-[#3F72AF] italic">
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh,
              </p>

              {/* Isi Sambutan */}
              <div className="space-y-4 text-sm sm:text-base text-[#112D4E]/85 leading-relaxed">
                <p>
                  Selamat datang di website resmi <strong className="text-[#112D4E]">SMPN 2 Matan Hilir Utara</strong>. Media digital ini kami hadirkan sebagai wujud komitmen sekolah dalam menghadirkan keterbukaan informasi, sarana komunikasi interaktif, serta pelayanan publik yang transparan bagi seluruh siswa, orang tua, alumni, dan masyarakat luas.
                </p>
                <p>
                  Di era transformasi digital saat ini, kami terus berupaya meningkatkan mutu pendidikan, integritas akademik, serta pembentukan karakter peserta didik. Kami percaya bahwa pendidikan yang berkualitas lahir dari sinergi yang harmonis antara sekolah, keluarga, dan lingkungan.
                </p>
                <p>
                  Semoga platform ini memberikan manfaat nyata dan kemudahan akses bagi kita semua untuk bersama-sama mencetak generasi yang berilmu, berakhlak mulia, serta siap menghadapi tantangan zaman.
                </p>
              </div>

              {/* Signature Divider Line */}
              <div className="pt-4 border-t border-[#DBE2EF]/80 flex items-center justify-between text-xs text-[#112D4E]/60">
                <span>SMPN 2 Matan Hilir Utara</span>
                <span className="font-semibold text-[#3F72AF]">Terdepan & Berkarakter</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  GraduationCap,
  User,
  Users,
  Route,
  UserCircle2,
  Hash,
  Calendar,
  MapPin,
  School,
  Phone,
  Home,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0MfNY6YlGxjDiYdtp9LuzNKJjBfCDTRffEY3MZHTblMZ9ieQobikAgY_rVv2cd94/exec";

export default function FormulirPendaftaran() {
  const [terkirim, setTerkirim] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    namaLengkap: "",
    nisn: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    asalSekolah: "",
    namaOrangTua: "",
    telepon: "",
    alamat: "",
    jalur: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new URLSearchParams();
      formData.append("nama_lengkap", form.namaLengkap);
      formData.append("nisn", form.nisn);
      formData.append("jenis_kelamin", form.jenisKelamin);
      formData.append("tempat_lahir", form.tempatLahir);
      formData.append("tanggal_lahir", form.tanggalLahir);
      formData.append("asal_sekolah", form.asalSekolah);
      formData.append("nama_orang_tua", form.namaOrangTua);
      formData.append("telepon", form.telepon);
      formData.append("alamat", form.alamat);
      formData.append("jalur", form.jalur);

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const result = await response.json();

      if (result.result === "success") {
        setTerkirim(true);
      } else {
        setError("Gagal mengirim data. Silakan coba lagi.");
        console.error(result);
      }
    } catch (err) {
      setError("Terjadi kesalahan jaringan. Silakan coba lagi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // STATE: SUKSES
  // ============================================
  if (terkirim) {
    return (
      <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
        <Header />

        <section className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-5">
            <div className="bg-white border border-[#DBE2EF] rounded-2xl p-8 md:p-12 text-center">
              {/* Icon Success */}
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2
                  className="w-8 h-8 text-emerald-600"
                  strokeWidth={2.5}
                />
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                Pendaftaran Berhasil Dikirim
              </h1>
              <p className="text-sm md:text-base text-[#112D4E]/70 leading-relaxed mb-8 max-w-md mx-auto">
                Terima kasih,{" "}
                <strong className="text-[#112D4E]">{form.namaLengkap}</strong>
                . Data pendaftaran Anda telah kami terima. Silakan tunggu
                informasi selanjutnya dari pihak sekolah.
              </p>

              {/* Info Box */}
              <div className="bg-[#DBE2EF]/40 border border-[#DBE2EF] rounded-xl p-4 mb-8 text-left">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#112D4E]/70 leading-relaxed">
                    Simpan informasi ini. Panitia PPDB akan menghubungi Anda
                    melalui nomor telepon yang telah didaftarkan.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-[#3F72AF] hover:bg-[#35639A] text-[#F9F7F7] px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Ke Beranda</span>
                </Link>
                <Link
                  href="/akademik/ppdb"
                  className="inline-flex items-center gap-2 border border-[#DBE2EF] hover:border-[#3F72AF] hover:bg-[#F9F7F7] text-[#112D4E] px-6 py-3 rounded-xl font-bold text-sm transition-all"
                >
                  <span>Kembali ke PPDB</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // ============================================
  // STATE: FORM
  // ============================================
  return (
    <main className="min-h-screen bg-[#F9F7F7] text-[#112D4E]">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-[#112D4E] text-[#F9F7F7] py-16 md:py-20 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3F72AF]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-[#DBE2EF]/70 mb-6">
            <Link href="/" className="hover:text-[#F9F7F7] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/akademik/ppdb"
              className="hover:text-[#F9F7F7] transition-colors"
            >
              PPDB
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F9F7F7] font-semibold">Formulir</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#DBE2EF] text-xs font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-[#3F72AF]" />
            <span>PPDB 2026/2027</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Formulir Pendaftaran
          </h1>
          <p className="text-[#DBE2EF]/80 max-w-2xl text-sm md:text-base leading-relaxed">
            Isi data calon peserta didik dengan lengkap dan benar. Field
            bertanda{" "}
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold">
              *
            </span>{" "}
            wajib diisi.
          </p>
        </div>
      </section>

      {/* ============ FORM CONTENT ============ */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-5">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#DBE2EF] rounded-2xl overflow-hidden"
          >
            {/* Error Alert */}
            {error && (
              <div className="mx-6 mt-6 flex items-start gap-3 bg-rose-50 border border-rose-100 text-rose-700 p-4 rounded-xl text-sm">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* ---------- STEP 1: DATA CALON SISWA ---------- */}
            <div className="p-6 md:p-8 border-b border-[#DBE2EF]">
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-extrabold text-[#3F72AF] tabular-nums">
                    01
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#3F72AF] uppercase tracking-[0.15em] mb-0.5">
                    Langkah Pertama
                  </p>
                  <h2 className="text-base font-bold text-[#112D4E] leading-none">
                    Data Calon Siswa
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Nama Lengkap */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    Nama Lengkap{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <UserCircle2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                    <input
                      type="text"
                      name="namaLengkap"
                      required
                      value={form.namaLengkap}
                      onChange={handleChange}
                      placeholder="Nama sesuai akta kelahiran"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] placeholder:text-[#112D4E]/40"
                    />
                  </div>
                </div>

                {/* NISN */}
                <div>
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    NISN <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                    <input
                      type="text"
                      name="nisn"
                      required
                      value={form.nisn}
                      onChange={handleChange}
                      placeholder="10 digit NISN"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] placeholder:text-[#112D4E]/40"
                    />
                  </div>
                </div>

                {/* Jenis Kelamin */}
                <div>
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    Jenis Kelamin <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60 pointer-events-none" />
                    <select
                      name="jenisKelamin"
                      required
                      value={form.jenisKelamin}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] appearance-none cursor-pointer"
                    >
                      <option value="">Pilih jenis kelamin...</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF] rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Tempat Lahir */}
                <div>
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    Tempat Lahir <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                    <input
                      type="text"
                      name="tempatLahir"
                      required
                      value={form.tempatLahir}
                      onChange={handleChange}
                      placeholder="Contoh: Ketapang"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] placeholder:text-[#112D4E]/40"
                    />
                  </div>
                </div>

                {/* Tanggal Lahir */}
                <div>
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    Tanggal Lahir <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60 pointer-events-none" />
                    <input
                      type="date"
                      name="tanggalLahir"
                      required
                      value={form.tanggalLahir}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E]"
                    />
                  </div>
                </div>

                {/* Asal Sekolah */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    Asal Sekolah (SD/MI){" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                    <input
                      type="text"
                      name="asalSekolah"
                      required
                      value={form.asalSekolah}
                      onChange={handleChange}
                      placeholder="Nama sekolah asal"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] placeholder:text-[#112D4E]/40"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- STEP 2: DATA ORANG TUA ---------- */}
            <div className="p-6 md:p-8 border-b border-[#DBE2EF]">
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-extrabold text-[#3F72AF] tabular-nums">
                    02
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#3F72AF] uppercase tracking-[0.15em] mb-0.5">
                    Langkah Kedua
                  </p>
                  <h2 className="text-base font-bold text-[#112D4E] leading-none">
                    Data Orang Tua / Wali
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Nama Orang Tua */}
                <div>
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    Nama Orang Tua / Wali{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <UserCircle2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                    <input
                      type="text"
                      name="namaOrangTua"
                      required
                      value={form.namaOrangTua}
                      onChange={handleChange}
                      placeholder="Nama lengkap orang tua/wali"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] placeholder:text-[#112D4E]/40"
                    />
                  </div>
                </div>

                {/* Telepon */}
                <div>
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    No. Telepon / WhatsApp{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60" />
                    <input
                      type="tel"
                      name="telepon"
                      required
                      value={form.telepon}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] placeholder:text-[#112D4E]/40"
                    />
                  </div>
                </div>

                {/* Alamat */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#112D4E] mb-2">
                    Alamat Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3.5 top-3 w-4 h-4 text-[#3F72AF]/60" />
                    <textarea
                      name="alamat"
                      required
                      rows={3}
                      value={form.alamat}
                      onChange={handleChange}
                      placeholder="Alamat lengkap domisili saat ini"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] placeholder:text-[#112D4E]/40 resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- STEP 3: JALUR PENDAFTARAN ---------- */}
            <div className="p-6 md:p-8 border-b border-[#DBE2EF]">
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#3F72AF]/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-extrabold text-[#3F72AF] tabular-nums">
                    03
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#3F72AF] uppercase tracking-[0.15em] mb-0.5">
                    Langkah Ketiga
                  </p>
                  <h2 className="text-base font-bold text-[#112D4E] leading-none">
                    Jalur Pendaftaran
                  </h2>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#112D4E] mb-2">
                  Pilih Jalur Pendaftaran{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Route className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF]/60 pointer-events-none" />
                  <select
                    name="jalur"
                    required
                    value={form.jalur}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 py-2.5 text-sm bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] focus:bg-white transition-all text-[#112D4E] appearance-none cursor-pointer"
                  >
                    <option value="">Pilih jalur pendaftaran...</option>
                    <option value="Zonasi">Jalur Zonasi</option>
                    <option value="Afirmasi">Jalur Afirmasi</option>
                    <option value="Prestasi">Jalur Prestasi</option>
                    <option value="Perpindahan">Jalur Perpindahan</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3F72AF] rotate-90 pointer-events-none" />
                </div>
                <p className="text-[11px] text-[#112D4E]/50 mt-2 leading-relaxed">
                  Pilih jalur sesuai kondisi dan persyaratan yang berlaku.
                  Lihat detail jalur di{" "}
                  <Link
                    href="/akademik/ppdb"
                    className="text-[#3F72AF] font-semibold hover:underline"
                  >
                    halaman PPDB
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* ---------- SUBMIT ---------- */}
            <div className="p-6 md:p-8 bg-[#F9F7F7]">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#3F72AF] hover:bg-[#35639A] text-[#F9F7F7] py-3.5 rounded-xl font-bold text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-[#F9F7F7]/30 border-t-[#F9F7F7] rounded-full animate-spin" />
                    <span>Mengirim Pendaftaran...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Kirim Pendaftaran</span>
                  </>
                )}
              </button>

              <div className="flex items-start gap-3 mt-4">
                <ShieldCheck className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#112D4E]/60 leading-relaxed">
                  Dengan mengirim formulir ini, Anda menyatakan bahwa seluruh
                  data yang diisi adalah benar dan dapat
                  dipertanggungjawabkan.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
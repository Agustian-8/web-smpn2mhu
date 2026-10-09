"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  if (terkirim) {
    return (
      <main className="min-h-screen bg-[#FAFAFA]">
        <Header />
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <div className="w-20 h-20 bg-[#C7EEFF] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-[#0077C0]">✓</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1D242B] mb-3">
              Pendaftaran Berhasil Dikirim
            </h1>
            <p className="text-[#1D242B]/70 mb-8">
              Terima kasih, {form.namaLengkap}. Data pendaftaran Anda telah
              kami terima. Silakan tunggu informasi selanjutnya dari pihak
              sekolah.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/akademik/ppdb"
                className="bg-[#0077C0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0066a6] transition-colors"
              >
                Kembali ke PPDB
              </Link>
              <Link
                href="/"
                className="border border-[#0077C0] text-[#0077C0] px-6 py-3 rounded-md font-semibold hover:bg-[#C7EEFF]/30 transition-colors"
              >
                Ke Beranda
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />

      <section className="bg-[#1D242B] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <Link
            href="/akademik/ppdb"
            className="text-[#C7EEFF] text-sm hover:text-white mb-3 inline-block"
          >
            ← Kembali ke PPDB
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Formulir Pendaftaran
          </h1>
          <p className="text-white/60">Isi data dengan lengkap dan benar</p>
        </div>
      </section>

      <section className="py-12 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-5">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-lg border border-[#1D242B]/10 space-y-6"
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <h2 className="text-lg font-bold text-[#0077C0] mb-4 pb-2 border-b border-[#1D242B]/10">
                Data Calon Siswa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    required
                    value={form.namaLengkap}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    NISN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nisn"
                    required
                    value={form.nisn}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="jenisKelamin"
                    required
                    value={form.jenisKelamin}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  >
                    <option value="">Pilih...</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    Tempat Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tempatLahir"
                    required
                    value={form.tempatLahir}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    required
                    value={form.tanggalLahir}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    Asal Sekolah (SD/MI){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="asalSekolah"
                    required
                    value={form.asalSekolah}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0077C0] mb-4 pb-2 border-b border-[#1D242B]/10">
                Data Orang Tua / Wali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    Nama Orang Tua / Wali{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaOrangTua"
                    required
                    value={form.namaOrangTua}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    No. Telepon / WhatsApp{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    required
                    value={form.telepon}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#1D242B] mb-1">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="alamat"
                    required
                    rows={3}
                    value={form.alamat}
                    onChange={handleChange}
                    className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0077C0] mb-4 pb-2 border-b border-[#1D242B]/10">
                Jalur Pendaftaran
              </h2>
              <div>
                <label className="block text-sm font-medium text-[#1D242B] mb-1">
                  Pilih Jalur <span className="text-red-500">*</span>
                </label>
                <select
                  name="jalur"
                  required
                  value={form.jalur}
                  onChange={handleChange}
                  className="w-full border border-[#1D242B]/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#0077C0]"
                >
                  <option value="">Pilih Jalur...</option>
                  <option value="Zonasi">Jalur Zonasi</option>
                  <option value="Afirmasi">Jalur Afirmasi</option>
                  <option value="Prestasi">Jalur Prestasi</option>
                  <option value="Perpindahan">Jalur Perpindahan</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1D242B]/10">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0077C0] text-white py-3 rounded-md font-semibold hover:bg-[#0066a6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Mengirim..." : "Kirim Pendaftaran"}
              </button>
              <p className="text-xs text-[#1D242B]/50 text-center mt-3">
                Dengan mengirim formulir ini, Anda menyatakan bahwa data yang
                diisi adalah benar.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
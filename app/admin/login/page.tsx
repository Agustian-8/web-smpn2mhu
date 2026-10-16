"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0MfNY6YlGxjDiYdtp9LuzNKJjBfCDTRffEY3MZHTblMZ9ieQobikAgY_rVv2cd94/exec";

// ============================================
// USERNAME ADMIN (bisa diubah)
// ============================================
const ADMIN_USERNAME = "admin";

export default function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // ✅ Auto-focus di field username
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Rate limit: kalau salah 5x, lock sementara
  const isLocked = attempts >= 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocked) {
      setError("Terlalu banyak percobaan. Tunggu 30 detik.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Cek username dulu (client-side, cepat)
      if (username.trim().toLowerCase() !== ADMIN_USERNAME.toLowerCase()) {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= 5) {
          setError("Terlalu banyak percobaan. Tunggu 30 detik.");
          setTimeout(() => setAttempts(0), 30_000);
        } else {
          setError(`Username atau password salah. Sisa percobaan: ${5 - newAttempts}`);
        }
        setPassword("");
        setLoading(false);
        return;
      }

      // 2. Kalau username benar, cek password ke Apps Script
      const res = await fetch(
        `${APPS_SCRIPT_URL}?action=getAll&password=${encodeURIComponent(
          password
        )}`,
        { cache: "no-store" }
      );
      const json = await res.json();

      if (json.result === "success") {
        // Set cookie dengan SameSite=Strict
        document.cookie = `admin_auth=${encodeURIComponent(
          password
        )}; path=/; max-age=86400; SameSite=Strict`;

        router.push("/admin");
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= 5) {
          setError("Terlalu banyak percobaan. Tunggu 30 detik.");
          setTimeout(() => setAttempts(0), 30_000);
        } else {
          setError(
            `Username atau password salah. Sisa percobaan: ${5 - newAttempts}`
          );
        }
        setPassword("");
        inputRef.current?.focus();
      }
    } catch (err) {
      setError("Terjadi kesalahan jaringan. Coba lagi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#EFEEEA] flex items-center justify-center px-4 py-12">
      {/* ================= KARTU LOGIN ================= */}
      <div className="w-full max-w-md">
        <div className="bg-white border border-[#273F4F]/10 rounded-2xl p-8 md:p-10">
          {/* ============ HEADER ============ */}
          <div className="mb-8 text-center">
            {/* Logo Sekolah */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-[#273F4F]/10 flex items-center justify-center p-2 mb-5">
              <img
                src="/images/logo-sekolah.png"
                alt="Logo SMP Negeri 2 Matan Hilir Utara"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-2xl font-extrabold text-[#000000] tracking-tight mb-2">
              Panel Admin
            </h1>
            <p className="text-sm text-[#273F4F]/70 leading-relaxed">
              Masuk untuk mengelola konten website.
            </p>
          </div>

          {/* ============ ERROR ALERT ============ */}
          {error && (
            <div
              role="alert"
              className="flex items-start gap-3 bg-[#FE7743]/5 border border-[#FE7743]/30 text-[#273F4F] p-4 rounded-xl mb-5 text-sm"
            >
              <AlertCircle
                className="w-4 h-4 shrink-0 mt-0.5 text-[#FE7743]"
                strokeWidth={2.5}
              />
              <span className="font-medium">{error}</span>
            </div>
          )}

          {/* ============ FORM ============ */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Field */}
            <div>
              <label
                htmlFor="admin-username"
                className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]"
              >
                Username
              </label>
              <div className="relative">
                <User
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#273F4F]/40 pointer-events-none"
                  strokeWidth={2}
                />
                <input
                  ref={inputRef}
                  id="admin-username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading || isLocked}
                  placeholder="Masukkan username"
                  autoComplete="username"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  className="w-full pl-10 pr-4 py-3.5 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all placeholder:text-[#273F4F]/40 text-[#000000] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading || isLocked}
                  placeholder="Masukkan password"
                  autoComplete="current-password"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-invalid={!!error}
                  className="w-full pl-4 pr-12 py-3.5 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all placeholder:text-[#273F4F]/40 text-[#000000] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  disabled={loading || isLocked}
                  aria-label={
                    showPassword
                      ? "Sembunyikan password"
                      : "Tampilkan password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-[#273F4F]/40 hover:text-[#FE7743] hover:bg-[#FE7743]/10 transition-colors disabled:opacity-50"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" strokeWidth={2} />
                  ) : (
                    <Eye className="w-4 h-4" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || isLocked}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#FE7743] hover:bg-[#E5652E] active:bg-[#CC5624] text-white py-3.5 rounded-xl font-bold text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Memeriksa...</span>
                </>
              ) : isLocked ? (
                <span>Terkunci Sementara</span>
              ) : (
                <span>Masuk</span>
              )}
            </button>
          </form>

          {/* ============ SECURITY NOTE ============ */}
          <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-[#273F4F]/10">
            <ShieldCheck
              className="w-3.5 h-3.5 text-[#273F4F]/40 shrink-0"
              strokeWidth={2}
            />
            <p className="text-[11px] text-[#273F4F]/50 text-center leading-relaxed">
              Koneksi aman · Hanya untuk operator resmi
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
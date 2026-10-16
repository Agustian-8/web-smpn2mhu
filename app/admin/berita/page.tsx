"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Image as ImageIcon,
  Calendar,
  Newspaper,
  LogOut,
} from "lucide-react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0MfNY6YlGxjDiYdtp9LuzNKJjBfCDTRffEY3MZHTblMZ9ieQobikAgY_rVv2cd94/exec";

// ============================================
// TYPES
// ============================================
type Berita = {
  id: number;
  judul: string;
  tanggal: string;
  ringkasan: string;
  konten: string;
  gambar?: string;
  kategori?: string;
  _rowNumber?: number;
};

type FormData = {
  judul: string;
  tanggal: string;
  ringkasan: string;
  konten: string;
  gambar: string;
  kategori: string;
};

const EMPTY_FORM: FormData = {
  judul: "",
  tanggal: new Date().toISOString().split("T")[0],
  ringkasan: "",
  konten: "",
  gambar: "",
  kategori: "",
};

// ============================================
// HELPER: Get password dari cookie
// ============================================
function getAdminPassword(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(/admin_auth=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

// ============================================
// COMPONENT
// ============================================
export default function AdminBerita() {
  const router = useRouter();

  const [daftarBerita, setDaftarBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<Berita | null>(null);

  // Toast
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // ============================================
  // AUTO-HIDE TOAST
  // ============================================
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // ============================================
  // FETCH DATA
  // ============================================
  useEffect(() => {
    const password = getAdminPassword();
    if (!password) {
      router.push("/admin/login");
      return;
    }
    fetchBerita();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBerita = async () => {
    setLoading(true);
    setError("");
    try {
      const password = getAdminPassword();
      const res = await fetch(
        `${APPS_SCRIPT_URL}?action=getAllBerita&password=${encodeURIComponent(
          password
        )}`,
        { cache: "no-store" }
      );
      const json = await res.json();

      if (json.result === "success") {
        setDaftarBerita(json.data || []);
      } else {
        setError(json.message || "Gagal memuat berita");
      }
    } catch (err) {
      setError("Gagal memuat berita. Cek koneksi Anda.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // HANDLE SUBMIT (CREATE / UPDATE)
  // ============================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setFormError("");

    try {
      const password = getAdminPassword();
      const action = editingId ? "updateBerita" : "addBerita";

      const params = new URLSearchParams({
        action,
        password,
        ...(editingId ? { id: String(editingId) } : {}),
        judul: formData.judul,
        tanggal: formData.tanggal,
        ringkasan: formData.ringkasan,
        konten: formData.konten,
        gambar: formData.gambar,
        kategori: formData.kategori,
      });

      const res = await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
        cache: "no-store",
      });
      const json = await res.json();

      if (json.result === "success") {
        setToast({
          type: "success",
          message: editingId
            ? "Berita berhasil diperbarui"
            : "Berita berhasil ditambahkan",
        });
        closeModal();
        fetchBerita();
      } else {
        setFormError(json.message || "Gagal menyimpan berita");
      }
    } catch (err) {
      setFormError("Terjadi kesalahan. Coba lagi.");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // ============================================
  // HANDLE DELETE
  // ============================================
  const handleDelete = async () => {
    if (!deleteTarget) return;

    try {
      const password = getAdminPassword();
      const res = await fetch(
        `${APPS_SCRIPT_URL}?action=deleteBerita&password=${encodeURIComponent(
          password
        )}&id=${deleteTarget._rowNumber}`,
        { cache: "no-store" }
      );
      const json = await res.json();

      if (json.result === "success") {
        setToast({ type: "success", message: "Berita berhasil dihapus" });
        setDeleteTarget(null);
        fetchBerita();
      } else {
        setToast({ type: "error", message: json.message || "Gagal menghapus" });
      }
    } catch (err) {
      setToast({ type: "error", message: "Gagal menghapus berita" });
      console.error(err);
    }
  };

  // ============================================
  // MODAL HANDLERS
  // ============================================
  const openCreateModal = () => {
    setFormData(EMPTY_FORM);
    setEditingId(null);
    setFormError("");
    setShowModal(true);
  };

  const openEditModal = (berita: Berita) => {
    setFormData({
      judul: berita.judul,
      tanggal: berita.tanggal
        ? new Date(berita.tanggal).toISOString().split("T")[0]
        : "",
      ringkasan: berita.ringkasan,
      konten: berita.konten,
      gambar: berita.gambar || "",
      kategori: berita.kategori || "",
    });
    setEditingId(berita._rowNumber || berita.id);
    setFormError("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData(EMPTY_FORM);
    setEditingId(null);
    setFormError("");
  };

  // ============================================
  // LOGOUT
  // ============================================
  const handleLogout = () => {
    document.cookie = "admin_auth=; path=/; max-age=0";
    router.push("/admin/login");
  };

  // ============================================
  // FILTER
  // ============================================
  const filteredBerita = useMemo(() => {
    if (!searchQuery.trim()) return daftarBerita;
    const q = searchQuery.toLowerCase();
    return daftarBerita.filter(
      (b) =>
        b.judul.toLowerCase().includes(q) ||
        b.kategori?.toLowerCase().includes(q) ||
        b.ringkasan.toLowerCase().includes(q)
    );
  }, [daftarBerita, searchQuery]);

  // ============================================
  // RENDER
  // ============================================
  return (
    <main className="min-h-screen bg-[#EFEEEA] text-[#000000]">
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#273F4F]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FE7743]/10 flex items-center justify-center">
                <Newspaper
                  className="w-4 h-4 text-[#FE7743]"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#273F4F]/50 uppercase tracking-[0.12em]">
                  Panel Admin
                </p>
                <h1 className="text-sm sm:text-base font-extrabold text-[#000000] leading-tight">
                  Kelola Berita
                </h1>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="/admin"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#273F4F]/60 hover:text-[#FE7743] transition-colors px-3 py-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Dasbor</span>
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#273F4F]/60 hover:text-[#FE7743] transition-colors px-3 py-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============ TOAST ============ */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right-5 fade-in duration-300">
          <div
            className={`flex items-start gap-3 px-4 py-3 rounded-xl border shadow-sm max-w-sm ${
              toast.type === "success"
                ? "bg-white border-[#FE7743]/30 text-[#273F4F]"
                : "bg-white border-[#FE7743] text-[#273F4F]"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-[#FE7743] shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-[#FE7743] shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-semibold">{toast.message}</p>
          </div>
        </div>
      )}

      {/* ============ CONTENT ============ */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#273F4F]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berita berdasarkan judul atau kategori..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-[#273F4F]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/30 focus:border-[#FE7743] transition-all placeholder:text-[#273F4F]/40 text-[#000000]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-[#273F4F]/5"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-3.5 h-3.5 text-[#273F4F]/60" />
                </button>
              )}
            </div>

            {/* Tambah */}
            <button
              onClick={openCreateModal}
              className="inline-flex items-center justify-center gap-2 bg-[#FE7743] hover:bg-[#E5652E] active:bg-[#CC5624] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors duration-200 shrink-0"
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              <span>Tambah Berita</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-2 text-xs text-[#273F4F]/60">
            <span>
              Total:{" "}
              <strong className="text-[#FE7743]">
                {daftarBerita.length}
              </strong>{" "}
              berita
            </span>
            {searchQuery && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#273F4F]/20" />
                <span>
                  Hasil pencarian:{" "}
                  <strong className="text-[#273F4F]">
                    {filteredBerita.length}
                  </strong>
                </span>
              </>
            )}
          </div>

          {/* ============ ERROR STATE ============ */}
          {error && (
            <div className="flex items-start gap-3 bg-[#FE7743]/5 border border-[#FE7743]/30 p-4 rounded-xl">
              <AlertCircle className="w-4 h-4 text-[#FE7743] shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#273F4F]">
                  {error}
                </p>
                <button
                  onClick={fetchBerita}
                  className="text-xs font-bold text-[#FE7743] hover:underline mt-1"
                >
                  Coba Lagi
                </button>
              </div>
            </div>
          )}

          {/* ============ LOADING STATE ============ */}
          {loading ? (
            <div className="text-center py-20">
              <Loader2 className="w-6 h-6 text-[#FE7743] animate-spin mx-auto mb-3" />
              <p className="text-sm text-[#273F4F]/60">Memuat berita...</p>
            </div>
          ) : filteredBerita.length === 0 ? (
            /* ============ EMPTY STATE ============ */
            <div className="text-center py-20 bg-white border border-dashed border-[#273F4F]/15 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-[#FE7743]/10 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-7 h-7 text-[#FE7743]" />
              </div>
              <h3 className="text-base font-bold text-[#000000] mb-1.5">
                {searchQuery ? "Berita Tidak Ditemukan" : "Belum Ada Berita"}
              </h3>
              <p className="text-sm text-[#273F4F]/60 max-w-sm mx-auto mb-5 leading-relaxed">
                {searchQuery
                  ? "Coba kata kunci lain atau reset pencarian."
                  : "Mulai dengan menambahkan berita pertama Anda."}
              </p>
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-2 bg-[#FE7743] hover:bg-[#E5652E] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Reset Pencarian
                </button>
              ) : (
                <button
                  onClick={openCreateModal}
                  className="inline-flex items-center gap-2 bg-[#FE7743] hover:bg-[#E5652E] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Tambah Berita Pertama
                </button>
              )}
            </div>
          ) : (
            /* ============ LIST BERITA ============ */
            <div className="bg-white border border-[#273F4F]/10 rounded-2xl overflow-hidden">
              {/* Desktop: Table Header */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-5 py-3 bg-[#EFEEEA] border-b border-[#273F4F]/10 text-[11px] font-bold text-[#273F4F]/60 uppercase tracking-[0.1em]">
                <div className="col-span-1">Foto</div>
                <div className="col-span-6">Judul</div>
                <div className="col-span-2">Kategori</div>
                <div className="col-span-2">Tanggal</div>
                <div className="col-span-1 text-right">Aksi</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#273F4F]/10">
                {filteredBerita.map((berita) => (
                  <div
                    key={berita.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-5 py-4 hover:bg-[#EFEEEA]/50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="lg:col-span-1">
                      <div className="relative w-full lg:w-14 aspect-[16/10] lg:aspect-square bg-[#EFEEEA] rounded-lg overflow-hidden shrink-0">
                        {berita.gambar ? (
                          <Image
                            src={berita.gambar}
                            alt={berita.judul}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#273F4F]/30">
                            <ImageIcon className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Judul + Ringkasan */}
                    <div className="lg:col-span-6 min-w-0">
                      <p className="text-sm font-bold text-[#000000] leading-snug line-clamp-2">
                        {berita.judul}
                      </p>
                      <p className="text-xs text-[#273F4F]/60 mt-1 line-clamp-1 leading-relaxed">
                        {berita.ringkasan}
                      </p>
                    </div>

                    {/* Kategori */}
                    <div className="lg:col-span-2">
                      {berita.kategori ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#FE7743]/10 text-[#FE7743] text-[10px] font-bold uppercase tracking-[0.1em]">
                          {berita.kategori}
                        </span>
                      ) : (
                        <span className="text-xs text-[#273F4F]/30 italic">
                          Tanpa kategori
                        </span>
                      )}
                    </div>

                    {/* Tanggal */}
                    <div className="lg:col-span-2 flex items-center lg:block gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FE7743] lg:hidden shrink-0" />
                      <span className="text-xs text-[#273F4F]/70 font-medium">
                        {berita.tanggal
                          ? new Date(berita.tanggal).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "-"}
                      </span>
                    </div>

                    {/* Aksi */}
                    <div className="lg:col-span-1 flex items-center lg:justify-end gap-1.5">
                      <button
                        onClick={() => openEditModal(berita)}
                        aria-label="Edit berita"
                        className="p-2 rounded-lg text-[#273F4F]/60 hover:text-[#FE7743] hover:bg-[#FE7743]/10 transition-colors"
                      >
                        <Pencil className="w-4 h-4" strokeWidth={2} />
                      </button>
                      <button
                        onClick={() => setDeleteTarget(berita)}
                        aria-label="Hapus berita"
                        className="p-2 rounded-lg text-[#273F4F]/60 hover:text-[#FE7743] hover:bg-[#FE7743]/10 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== MODAL FORM ==================== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#273F4F]/10 sticky top-0 bg-white z-10">
              <div>
                <p className="text-[10px] font-bold text-[#273F4F]/50 uppercase tracking-[0.12em] mb-0.5">
                  {editingId ? "Edit Berita" : "Berita Baru"}
                </p>
                <h2 className="text-base font-extrabold text-[#000000]">
                  {editingId ? "Perbarui Berita" : "Tambah Berita"}
                </h2>
              </div>
              <button
                onClick={closeModal}
                aria-label="Tutup"
                className="p-2 rounded-lg text-[#273F4F]/60 hover:text-[#FE7743] hover:bg-[#FE7743]/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {formError && (
                <div className="flex items-start gap-3 bg-[#FE7743]/5 border border-[#FE7743]/30 p-3 rounded-xl text-sm">
                  <AlertCircle className="w-4 h-4 text-[#FE7743] shrink-0 mt-0.5" />
                  <span className="text-[#273F4F] font-medium">
                    {formError}
                  </span>
                </div>
              )}

              {/* Judul */}
              <div>
                <label className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]">
                  Judul Berita *
                </label>
                <input
                  type="text"
                  required
                  value={formData.judul}
                  onChange={(e) =>
                    setFormData({ ...formData, judul: e.target.value })
                  }
                  placeholder="Masukkan judul berita"
                  className="w-full px-4 py-3 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all placeholder:text-[#273F4F]/40 text-[#000000]"
                />
              </div>

              {/* Grid 2 kolom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]">
                    Tanggal *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.tanggal}
                    onChange={(e) =>
                      setFormData({ ...formData, tanggal: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all text-[#000000]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]">
                    Kategori
                  </label>
                  <input
                    type="text"
                    value={formData.kategori}
                    onChange={(e) =>
                      setFormData({ ...formData, kategori: e.target.value })
                    }
                    placeholder="Pengumuman, Kegiatan, dll"
                    className="w-full px-4 py-3 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all placeholder:text-[#273F4F]/40 text-[#000000]"
                  />
                </div>
              </div>

              {/* Gambar URL */}
              <div>
                <label className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]">
                  URL Gambar
                </label>
                <input
                  type="text"
                  value={formData.gambar}
                  onChange={(e) =>
                    setFormData({ ...formData, gambar: e.target.value })
                  }
                  placeholder="/images/berita/xxx.jpg atau https://..."
                  className="w-full px-4 py-3 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all placeholder:text-[#273F4F]/40 text-[#000000]"
                />
                <p className="text-[11px] text-[#273F4F]/50 mt-1.5 leading-relaxed">
                  Masukkan path lokal (mulai dari <code>/images/</code>) atau
                  URL lengkap.
                </p>
              </div>

              {/* Ringkasan */}
              <div>
                <label className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]">
                  Ringkasan *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.ringkasan}
                  onChange={(e) =>
                    setFormData({ ...formData, ringkasan: e.target.value })
                  }
                  placeholder="Ringkasan singkat berita (1-2 kalimat)"
                  className="w-full px-4 py-3 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all placeholder:text-[#273F4F]/40 text-[#000000] resize-none"
                />
              </div>

              {/* Konten */}
              <div>
                <label className="block text-xs font-bold text-[#273F4F] mb-2 uppercase tracking-[0.1em]">
                  Konten Lengkap *
                </label>
                <textarea
                  required
                  rows={8}
                  value={formData.konten}
                  onChange={(e) =>
                    setFormData({ ...formData, konten: e.target.value })
                  }
                  placeholder="Tulis isi berita lengkap di sini..."
                  className="w-full px-4 py-3 text-sm bg-[#EFEEEA] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 focus:border-[#FE7743] focus:bg-white transition-all placeholder:text-[#273F4F]/40 text-[#000000] resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-[#273F4F]/10">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="flex-1 inline-flex items-center justify-center border border-[#273F4F]/15 hover:bg-[#EFEEEA] text-[#273F4F] py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FE7743] hover:bg-[#E5652E] active:bg-[#CC5624] text-white py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>
                      {editingId ? "Simpan Perubahan" : "Simpan Berita"}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL KONFIRMASI HAPUS ==================== */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#FE7743]/10 flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6 text-[#FE7743]" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-extrabold text-[#000000] mb-2">
              Hapus Berita?
            </h3>
            <p className="text-sm text-[#273F4F]/70 leading-relaxed mb-6">
              Berita &quot;{deleteTarget.judul}&quot; akan dihapus permanen.
              Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex flex-col-reverse sm:flex-row gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 inline-flex items-center justify-center border border-[#273F4F]/15 hover:bg-[#EFEEEA] text-[#273F4F] py-3 rounded-xl font-bold text-sm transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 inline-flex items-center justify-center bg-[#FE7743] hover:bg-[#E5652E] text-white py-3 rounded-xl font-bold text-sm transition-colors"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
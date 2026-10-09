"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getAllBeritaAdmin as getAllBerita,
  addBerita,
  updateBerita,
  deleteBerita,
  type Berita,
} from "@/lib/api";

const getCookie = (name: string) => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop()?.split(";").shift() || "");
  }
  return null;
};

export default function AdminBerita() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({
    judul: "",
    tanggal: "",
    ringkasan: "",
    konten: "",
    gambar: "",
  });
  const router = useRouter();

  const loadBerita = async () => {
    const result = await getAllBerita();
    if (result.success && result.data) {
      setBerita(result.data);
    } else {
      setError(result.error || "Gagal memuat berita");
    }
    setLoading(false);
  };

  useEffect(() => {
    const password = getCookie("admin_auth");
    if (!password) {
      router.push("/admin/login");
      return;
    }
    loadBerita();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const password = getCookie("admin_auth");
    if (!password) return;

    let result;
    if (editId) {
      result = await updateBerita(password, editId, form);
    } else {
      result = await addBerita(password, form);
    }

    if (result.success) {
      setShowForm(false);
      setEditId(null);
      setForm({ judul: "", tanggal: "", ringkasan: "", konten: "", gambar: "" });
      setLoading(true);
      await loadBerita();
    } else {
      alert("Gagal menyimpan: " + result.error);
    }
  };

  const handleEdit = (b: Berita) => {
    setEditId(b._rowNumber);
    setForm({
      judul: b.judul,
      tanggal: String(b.tanggal).split("T")[0],
      ringkasan: b.ringkasan,
      konten: b.konten,
      gambar: b.gambar,
    });
    setShowForm(true);
  };

  const handleDelete = async (rowNumber: number, judul: string) => {
    if (!confirm(`Yakin hapus berita "${judul}"?`)) return;
    const password = getCookie("admin_auth");
    if (!password) return;

    const result = await deleteBerita(password, rowNumber);
    if (result.success) {
      setLoading(true);
      await loadBerita();
    } else {
      alert("Gagal hapus: " + result.error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-blue-200 hover:text-white text-sm">
              ← Dashboard
            </Link>
            <h1 className="font-bold">Kelola Berita</h1>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              setEditId(null);
              setForm({ judul: "", tanggal: "", ringkasan: "", konten: "", gambar: "" });
            }}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            + Tambah Berita
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-bold text-blue-800 mb-4">
              {editId ? "Edit Berita" : "Tambah Berita Baru"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Judul *</label>
                <input
                  type="text"
                  required
                  value={form.judul}
                  onChange={(e) => setForm({ ...form, judul: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tanggal *</label>
                <input
                  type="date"
                  required
                  value={form.tanggal}
                  onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ringkasan *</label>
                <textarea
                  required
                  rows={2}
                  value={form.ringkasan}
                  onChange={(e) => setForm({ ...form, ringkasan: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Konten Lengkap</label>
                <textarea
                  rows={5}
                  value={form.konten}
                  onChange={(e) => setForm({ ...form, konten: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL Gambar</label>
                <input
                  type="text"
                  value={form.gambar}
                  onChange={(e) => setForm({ ...form, gambar: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="/images/berita-1.jpg"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditId(null);
                  }}
                  className="bg-gray-300 px-6 py-2 rounded-lg font-semibold"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <p className="p-8 text-center text-gray-500">Memuat...</p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">No</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Judul</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Tanggal</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {berita.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      Belum ada berita
                    </td>
                  </tr>
                ) : (
                  berita.map((b, i) => (
                    <tr key={b._rowNumber} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-sm">{i + 1}</td>
                      <td className="p-4 text-sm font-medium">{b.judul}</td>
                      <td className="p-4 text-sm text-gray-600">
                        {String(b.tanggal).split("T")[0]}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(b)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(b._rowNumber, b.judul)}
                            className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAllPendaftar, updateStatusPendaftar, type Pendaftar } from "@/lib/api";

const getCookie = (name: string) => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop()?.split(";").shift() || "");
  }
  return null;
};

export default function DashboardAdmin() {
  const [pendaftar, setPendaftar] = useState<Pendaftar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("semua");
  const [updatingRow, setUpdatingRow] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const password = getCookie("admin_auth");
    if (!password) {
      router.push("/admin/login");
      return;
    }

    const fetchData = async () => {
      const result = await getAllPendaftar(password);
      if (result.success && result.data) {
        setPendaftar(result.data);
      } else {
        setError(result.error || "Gagal mengambil data");
        if (result.error === "Password salah") {
          document.cookie = "admin_auth=; path=/; max-age=0";
          router.push("/admin/login");
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [router]);

  const handleUpdateStatus = async (rowNumber: number, newStatus: string) => {
    const password = getCookie("admin_auth");
    if (!password) return;

    setUpdatingRow(rowNumber);
    const result = await updateStatusPendaftar(password, rowNumber, newStatus);

    if (result.success) {
      setPendaftar((prev) =>
        prev.map((p) =>
          p._rowNumber === rowNumber ? { ...p, status: newStatus } : p
        )
      );
    } else {
      alert("Gagal update status: " + result.error);
    }
    setUpdatingRow(null);
  };

  const handleExportCSV = () => {
    if (pendaftar.length === 0) {
      alert("Tidak ada data untuk diekspor");
      return;
    }

    const headers = [
      "No",
      "Timestamp",
      "Nama Lengkap",
      "NISN",
      "Jenis Kelamin",
      "Tempat Lahir",
      "Tanggal Lahir",
      "Asal Sekolah",
      "Nama Orang Tua",
      "Telepon",
      "Alamat",
      "Jalur",
      "Status",
    ];

    const rows = pendaftar.map((p, i) => [
      i + 1,
      p.timestamp,
      p.nama_lengkap,
      p.nisn,
      p.jenis_kelamin,
      p.tempat_lahir,
      p.tanggal_lahir,
      p.asal_sekolah,
      p.nama_orang_tua,
      p.telepon,
      p.alamat,
      p.jalur,
      p.status,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `pendaftar-ppdb-${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = () => {
    document.cookie = "admin_auth=; path=/; max-age=0";
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Memuat data...</p>
      </main>
    );
  }

  const filtered =
    filterStatus === "semua"
      ? pendaftar
      : pendaftar.filter((p) => p.status === filterStatus);

  const totalPending = pendaftar.filter((p) => p.status === "pending").length;
  const totalDiterima = pendaftar.filter((p) => p.status === "diterima").length;
  const totalDitolak = pendaftar.filter((p) => p.status === "ditolak").length;

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-800 font-bold">
              S2
            </div>
            <div className="leading-tight">
              <p className="font-bold text-sm">Admin Panel</p>
              <p className="text-xs text-blue-200">SMPN 2 Matan Hilir Utara</p>
            </div>
          </Link>
          <div className="flex gap-2">
            <Link
              href="/admin/berita"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Kelola Berita
            </Link>
            <button
              onClick={handleExportCSV}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Ekspor CSV
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Total Pendaftar</p>
            <p className="text-2xl font-bold text-gray-800">{pendaftar.length}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">{totalPending}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Diterima</p>
            <p className="text-2xl font-bold text-green-600">{totalDiterima}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Ditolak</p>
            <p className="text-2xl font-bold text-red-600">{totalDitolak}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Filter:</span>
            {["semua", "pending", "diterima", "ditolak"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  filterStatus === status
                    ? "bg-blue-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">No</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Nama</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">NISN</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Asal Sekolah</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Jalur</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-600 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-500 text-sm">
                      Tidak ada data pendaftar
                    </td>
                  </tr>
                ) : (
                  filtered.map((p, i) => (
                    <tr key={p._rowNumber} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-sm text-gray-600">{i + 1}</td>
                      <td className="p-4 text-sm font-medium text-gray-800">{p.nama_lengkap}</td>
                      <td className="p-4 text-sm text-gray-600">{p.nisn}</td>
                      <td className="p-4 text-sm text-gray-600">{p.asal_sekolah}</td>
                      <td className="p-4 text-sm text-gray-600">{p.jalur}</td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            p.status === "diterima"
                              ? "bg-green-100 text-green-700"
                              : p.status === "ditolak"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          {p.status !== "diterima" && (
                            <button
                              onClick={() => handleUpdateStatus(p._rowNumber, "diterima")}
                              disabled={updatingRow === p._rowNumber}
                              className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded font-medium transition disabled:opacity-50"
                            >
                              Terima
                            </button>
                          )}
                          {p.status !== "ditolak" && (
                            <button
                              onClick={() => handleUpdateStatus(p._rowNumber, "ditolak")}
                              disabled={updatingRow === p._rowNumber}
                              className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded font-medium transition disabled:opacity-50"
                            >
                              Tolak
                            </button>
                          )}
                          {p.status !== "pending" && (
                            <button
                              onClick={() => handleUpdateStatus(p._rowNumber, "pending")}
                              disabled={updatingRow === p._rowNumber}
                              className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded font-medium transition disabled:opacity-50"
                            >
                              Reset
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
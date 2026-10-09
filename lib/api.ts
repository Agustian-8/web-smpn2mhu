const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0MfNY6YlGxjDiYdtp9LuzNKJjBfCDTRffEY3MZHTblMZ9ieQobikAgY_rVv2cd94/exec";

// ============================================
// TIPE DATA: PENDAFTAR
// ============================================
export type Pendaftar = {
  timestamp: string;
  nama_lengkap: string;
  nisn: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  asal_sekolah: string;
  nama_orang_tua: string;
  telepon: string;
  alamat: string;
  jalur: string;
  status: string;
  _rowNumber: number;
};

// ============================================
// FUNGSI: PENDAFTAR
// ============================================
export async function getAllPendaftar(
  password: string
): Promise<{ success: boolean; data?: Pendaftar[]; error?: string }> {
  try {
    const url = `${APPS_SCRIPT_URL}?action=getAll&password=${encodeURIComponent(
      password
    )}`;

    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const json = JSON.parse(text);
      if (json.result === "success") {
        return { success: true, data: json.data };
      }
      return { success: false, error: json.message || "Gagal mengambil data" };
    } catch {
      console.error("Response bukan JSON:", text.substring(0, 300));
      return {
        success: false,
        error: "Response dari server tidak valid",
      };
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return {
      success: false,
      error: "Kesalahan jaringan",
    };
  }
}

export async function updateStatusPendaftar(
  password: string,
  rowNumber: number,
  status: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const url = `${APPS_SCRIPT_URL}?action=updateStatus&password=${encodeURIComponent(
      password
    )}&id=${rowNumber}&status=${encodeURIComponent(status)}`;

    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const json = JSON.parse(text);
      if (json.result === "success") {
        return { success: true };
      }
      return { success: false, error: json.message || "Gagal update status" };
    } catch {
      return { success: false, error: "Response tidak valid" };
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return { success: false, error: "Kesalahan jaringan" };
  }
}

// ============================================
// TIPE DATA: BERITA
// ============================================
export type Berita = {
  id: number;
  judul: string;
  tanggal: string;
  ringkasan: string;
  konten: string;
  gambar: string;
  _rowNumber: number;
};

// ============================================
// KONFIGURASI: Password admin
// ============================================
export const ADMIN_PASSWORD_FOR_BERITA = "smpn2mhu2026"; // GANTI dengan password Anda

// ============================================
// FUNGSI: BERITA (untuk admin, tanpa cache)
// ============================================
export async function getAllBeritaAdmin(): Promise<{
  success: boolean;
  data?: Berita[];
  error?: string;
}> {
  try {
    const url = `${APPS_SCRIPT_URL}?action=getAllBerita&password=${encodeURIComponent(
      ADMIN_PASSWORD_FOR_BERITA
    )}`;

    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const json = JSON.parse(text);
      if (json.result === "success") {
        return { success: true, data: json.data };
      }
      return { success: false, error: json.message || "Gagal mengambil berita" };
    } catch {
      console.error("Response bukan JSON:", text.substring(0, 300));
      return {
        success: false,
        error: "Response dari server tidak valid",
      };
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return {
      success: false,
      error: "Kesalahan jaringan",
    };
  }
}

export async function addBerita(
  password: string,
  data: {
    judul: string;
    tanggal: string;
    ringkasan: string;
    konten: string;
    gambar: string;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const params = new URLSearchParams({
      action: "addBerita",
      password,
      judul: data.judul,
      tanggal: data.tanggal,
      ringkasan: data.ringkasan,
      konten: data.konten,
      gambar: data.gambar,
    });

    const res = await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const json = JSON.parse(text);
      return json.result === "success"
        ? { success: true }
        : { success: false, error: json.message || "Gagal menambah berita" };
    } catch {
      return { success: false, error: "Response tidak valid" };
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return { success: false, error: "Kesalahan jaringan" };
  }
}

export async function updateBerita(
  password: string,
  rowNumber: number,
  data: {
    judul: string;
    tanggal: string;
    ringkasan: string;
    konten: string;
    gambar: string;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const params = new URLSearchParams({
      action: "updateBerita",
      password,
      id: String(rowNumber),
      judul: data.judul,
      tanggal: data.tanggal,
      ringkasan: data.ringkasan,
      konten: data.konten,
      gambar: data.gambar,
    });

    const res = await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const json = JSON.parse(text);
      return json.result === "success"
        ? { success: true }
        : { success: false, error: json.message || "Gagal update berita" };
    } catch {
      return { success: false, error: "Response tidak valid" };
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return { success: false, error: "Kesalahan jaringan" };
  }
}

export async function deleteBerita(
  password: string,
  rowNumber: number
): Promise<{ success: boolean; error?: string }> {
  try {
    const url = `${APPS_SCRIPT_URL}?action=deleteBerita&password=${encodeURIComponent(
      password
    )}&id=${rowNumber}`;

    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const json = JSON.parse(text);
      return json.result === "success"
        ? { success: true }
        : { success: false, error: json.message || "Gagal hapus berita" };
    } catch {
      return { success: false, error: "Response tidak valid" };
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return { success: false, error: "Kesalahan jaringan" };
  }
}
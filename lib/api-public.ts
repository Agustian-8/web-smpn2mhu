import { cacheLife, cacheTag } from "next/cache";

// ============================================
// KONFIGURASI
// ============================================
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0MfNY6YlGxjDiYdtp9LuzNKJjBfCDTRffEY3MZHTblMZ9ieQobikAgY_rVv2cd94/exec";

const ADMIN_PASSWORD_FOR_BERITA = "smpn2mhu2026";

// ============================================
// TYPES
// ============================================
export type Berita = {
  id: number;
  judul: string;
  tanggal: string;
  ringkasan: string;
  konten: string;
  gambar?: string;
  kategori?: string;
  _rowNumber?: number;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

// ============================================
// UTIL: Fetch dengan timeout
// ============================================
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = 10000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}

// ============================================
// UTIL: Cek apakah response JSON valid
// ============================================
function isValidJsonResponse(text: string): boolean {
  const trimmed = text.trim();

  // Kalau response berupa HTML, berarti Apps Script return halaman error
  if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html")) {
    return false;
  }

  // Cek awal JSON
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) {
    return false;
  }

  return true;
}

// ============================================
// UTIL: Fetch Apps Script dengan retry & JSON validation
// ============================================
async function fetchAppsScript(
  url: string,
  maxRetries = 3
): Promise<{ ok: true; data: any } | { ok: false; error: string }> {
  let lastError = "";

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetchWithTimeout(
        url,
        {
          method: "GET",
          redirect: "follow",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        },
        12000 // 12 detik timeout
      );

      if (!res.ok) {
        lastError = `HTTP ${res.status}: ${res.statusText}`;
        console.warn(
          `[getAllBerita] Attempt ${attempt}/${maxRetries} failed: ${lastError}`
        );
        // Tunggu sebentar sebelum retry (exponential backoff)
        await new Promise((r) => setTimeout(r, 500 * attempt));
        continue;
      }

      const text = await res.text();

      // Validasi apakah JSON valid
      if (!isValidJsonResponse(text)) {
        lastError = "Response bukan JSON (kemungkinan HTML error dari Google)";
        console.warn(
          `[getAllBerita] Attempt ${attempt}/${maxRetries} - ${lastError}`,
          text.substring(0, 150)
        );
        // Tunggu sebelum retry
        await new Promise((r) => setTimeout(r, 800 * attempt));
        continue;
      }

      // Parse JSON
      try {
        const json = JSON.parse(text);
        return { ok: true, data: json };
      } catch (parseErr) {
        lastError = `JSON parse error: ${parseErr}`;
        console.warn(
          `[getAllBerita] Attempt ${attempt}/${maxRetries} - ${lastError}`
        );
        await new Promise((r) => setTimeout(r, 500 * attempt));
        continue;
      }
    } catch (err: any) {
      if (err.name === "AbortError") {
        lastError = "Request timeout";
      } else {
        lastError = err.message || "Network error";
      }
      console.warn(
        `[getAllBerita] Attempt ${attempt}/${maxRetries} - ${lastError}`
      );
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }

  return { ok: false, error: lastError };
}

// ============================================
// FUNGSI PUBLIK: Ambil semua berita
// ============================================
export async function getAllBerita(): Promise<{
  success: boolean;
  data?: Berita[];
  error?: string;
}> {
  "use cache";
  cacheLife("minutes");
  cacheTag("berita");

  try {
    const url = `${APPS_SCRIPT_URL}?action=getAllBerita&password=${encodeURIComponent(
      ADMIN_PASSWORD_FOR_BERITA
    )}`;

    const result = await fetchAppsScript(url, 3);

    if (!result.ok) {
      console.error("[getAllBerita] All retries failed:", result.error);
      return {
        success: false,
        error: "Gagal mengambil berita. Silakan coba beberapa saat lagi.",
      };
    }

    const json = result.data;

    if (json.result === "success") {
      return {
        success: true,
        data: Array.isArray(json.data) ? json.data : [],
      };
    }

    return {
      success: false,
      error: json.message || "Gagal mengambil berita",
    };
  } catch (err) {
    console.error("[getAllBerita] Unexpected error:", err);
    return {
      success: false,
      error: "Terjadi kesalahan tak terduga",
    };
  }
}

// ============================================
// FUNGSI PUBLIK: Ambil 1 berita by ID
// ============================================
export async function getBeritaById(id: number): Promise<{
  success: boolean;
  data?: Berita;
  error?: string;
}> {
  const result = await getAllBerita();

  if (!result.success || !result.data) {
    return { success: false, error: result.error };
  }

  const berita = result.data.find((b) => b.id === id);

  if (!berita) {
    return { success: false, error: "Berita tidak ditemukan" };
  }

  return { success: true, data: berita };
}
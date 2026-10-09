import { cacheLife } from "next/cache";
import { ADMIN_PASSWORD_FOR_BERITA, type Berita } from "./api";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0MfNY6YlGxjDiYdtp9LuzNKJjBfCDTRffEY3MZHTblMZ9ieQobikAgY_rVv2cd94/exec";

export type { Berita };

export async function getAllBerita(): Promise<{
  success: boolean;
  data?: Berita[];
  error?: string;
}> {
  "use cache";
  cacheLife("minutes");

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
"use client";

import { useEffect, useState } from "react";

// ============================================
// KONFIGURASI JAM OPERASIONAL (dalam menit)
// ============================================
const JAM_OPERASIONAL = {
  // Senin - Kamis: 07.00 - 14.00 WIB
  kerja: { buka: 7 * 60, tutup: 14 * 60 },
  // Jumat: 07.00 - 11.00 WIB
  jumat: { buka: 7 * 60, tutup: 11 * 60 },
} as const;

const TIMEZONE = "Asia/Jakarta"; // WIB

// ============================================
// TYPES
// ============================================
type StatusWarna = "buka" | "tutup" | "segera";

type Status = {
  label: string;
  detail: string;
  warna: StatusWarna;
};

// ============================================
// UTIL: Ambil hari & menit di timezone WIB
// ============================================
function getWaktuWIB(): { hari: number; menit: number } {
  const now = new Date();

  // Format hari & jam dalam timezone WIB
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);

  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const hariMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const hari = hariMap[getPart("weekday")] ?? now.getDay();

  const jam = parseInt(getPart("hour"), 10) || 0;
  const menit = parseInt(getPart("minute"), 10) || 0;

  // Kalau jam = 24 (edge case di beberapa locale), normalize ke 0
  const jamNormal = jam === 24 ? 0 : jam;

  return { hari, menit: jamNormal * 60 + menit };
}

// ============================================
// UTIL: Nama hari Indonesia
// ============================================
const NAMA_HARI = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
] as const;

// ============================================
// LOGIKA UTAMA: Hitung status berdasarkan waktu
// ============================================
function hitungStatus(): Status {
  const { hari, menit } = getWaktuWIB();

  // ---------- Weekend: Sabtu & Minggu ----------
  if (hari === 0 || hari === 6) {
    return {
      label: "Sedang Libur",
      detail: `Hari ${NAMA_HARI[hari]}`,
      warna: "tutup",
    };
  }

  // ---------- Jumat ----------
  if (hari === 5) {
    const { buka, tutup } = JAM_OPERASIONAL.jumat;

    if (menit < buka) {
      return {
        label: "Belum Buka",
        detail: "Buka pukul 07.00 WIB",
        warna: "segera",
      };
    }

    if (menit >= tutup) {
      return {
        label: "Sudah Tutup",
        detail: "Buka Senin pukul 07.00 WIB",
        warna: "tutup",
      };
    }

    return {
      label: "Sedang Buka",
      detail: "Hari Jumat · s.d. 11.00 WIB",
      warna: "buka",
    };
  }

  // ---------- Senin - Kamis ----------
  const { buka, tutup } = JAM_OPERASIONAL.kerja;

  if (menit < buka) {
    return {
      label: "Belum Buka",
      detail: "Buka pukul 07.00 WIB",
      warna: "segera",
    };
  }

  if (menit >= tutup) {
    // Kalau hari ini Kamis (4), besok Jumat
    if (hari === 4) {
      return {
        label: "Sudah Tutup",
        detail: "Buka besok pukul 07.00 WIB",
        warna: "tutup",
      };
    }
    return {
      label: "Sudah Tutup",
      detail: "Buka besok pukul 07.00 WIB",
      warna: "tutup",
    };
  }

  return {
    label: "Sedang Buka",
    detail: "Hari Kerja · s.d. 14.00 WIB",
    warna: "buka",
  };
}

// ============================================
// STYLE MAPS
// ============================================
const WARNA_CLASS: Record<StatusWarna, string> = {
  buka: "bg-emerald-50 border-emerald-200 text-emerald-700",
  tutup: "bg-rose-50 border-rose-200 text-rose-700",
  segera: "bg-amber-50 border-amber-200 text-amber-700",
};

const DOT_CLASS: Record<StatusWarna, string> = {
  buka: "bg-emerald-500 animate-pulse",
  tutup: "bg-rose-500",
  segera: "bg-amber-500 animate-pulse",
};

// ============================================
// COMPONENT
// ============================================
export default function JamStatusBadge() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    // Hitung langsung saat mount
    setStatus(hitungStatus());

    // Update tiap 60 detik (real-time)
    const interval = setInterval(() => {
      setStatus(hitungStatus());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  // Skeleton saat belum ter-hydrate (mencegah CLS)
  if (!status) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DBE2EF] bg-[#F9F7F7] text-xs font-bold text-[#112D4E]/40">
        <span className="w-2 h-2 rounded-full bg-[#112D4E]/20" />
        <span>Memuat status...</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${WARNA_CLASS[status.warna]}`}
    >
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${DOT_CLASS[status.warna]}`}
        aria-hidden="true"
      />
      <span>
        {status.label}
        {status.detail && (
          <>
            <span className="mx-1.5 opacity-40">·</span>
            <span className="font-semibold opacity-80">{status.detail}</span>
          </>
        )}
      </span>
    </div>
  );
}
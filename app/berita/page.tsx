// app/berita/page.tsx
import { getAllBerita } from "@/lib/api-public";
import BeritaClient from "./BeritaClient";

export const metadata = {
  title: "Berita - SMPN 2 Matan Hilir Utara",
  description: "Berita dan informasi terbaru dari SMPN 2 Matan Hilir Utara",
};

export default async function Page() {
  const result = await getAllBerita();
  const daftarBerita = result.data || [];
  const errorMessage =
    !result.success && !result.data ? result.error : undefined;

  return (
    <BeritaClient
      daftarBerita={daftarBerita}
      errorMessage={errorMessage}
    />
  );
}
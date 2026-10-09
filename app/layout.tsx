import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "SMP Negeri 2 Matan Hilir Utara",
    template: "%s | SMP Negeri 2 Matan Hilir Utara",
  },
  description:
    "Website resmi SMP Negeri 2 Matan Hilir Utara, Kecamatan Matan Hilir Utara, Kabupaten Ketapang, Kalimantan Barat. NPSN 30103532.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body className={`${plusJakarta.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
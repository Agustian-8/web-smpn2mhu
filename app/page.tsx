import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SambutanKepsek from "@/components/SambutanKepsek";
import InfoSekolah from "@/components/InfoSekolah";
import BeritaTerbaru from "@/components/BeritaTerbaru";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SambutanKepsek />
      <InfoSekolah />
      <BeritaTerbaru />
      <Footer />
    </main>
  );
}
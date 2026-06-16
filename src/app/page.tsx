import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { Philosophy } from "@/components/sections/philosophy";
import { Capabilities } from "@/components/sections/capabilities";
import { SelectedWork } from "@/components/sections/selected-work";
import { InspirationVideos } from "@/components/sections/inspiration-videos";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
<Navbar />

      <Hero />

      <Principles />

      <Philosophy />

      <Capabilities />

      <SelectedWork />

      <InspirationVideos />

      <Process />

      <Contact />

      <Footer />
    </main>
  );
}
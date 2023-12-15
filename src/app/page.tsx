import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Team />
      <Contact />
    </main>
  );
}

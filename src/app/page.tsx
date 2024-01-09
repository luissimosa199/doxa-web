import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { cookies } from "next/headers";

export default function Home() {
  const agentCookie = cookies().get("user_agent_id")?.value;

  return (
    <main id="content">
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      {/* <Team /> */}
      <Contact agentCookie={agentCookie} />
    </main>
  );
}

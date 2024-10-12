import Contact from "./components/Contact";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import WhatToExpect from "./components/WhatToExpect";

export default function Home() {
  return (
    <main className="relative p-4 min-h-screen flex flex-col gap-4">
      <NavBar />
      <Hero />
      <HowItWorks />
      <WhatToExpect />
      <Testimonials />
      <Contact />
    </main>
  );
}

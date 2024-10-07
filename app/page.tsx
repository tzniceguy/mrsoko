import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="p-4 min-h-screen flex flex-col gap-4">
      <NavBar />
      <Hero />
    </main>
  );
}

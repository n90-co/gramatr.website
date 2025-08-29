import { Logo } from "@/components/Logo";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Installation />
    </div>
  );
}

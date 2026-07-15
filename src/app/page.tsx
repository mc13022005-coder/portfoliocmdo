import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-12 text-center text-gray-600 text-sm font-mono">
        <p>Thiết kế & Xây dựng bởi Đỗ Cao Minh</p>
        <p className="mt-2">© 2024</p>
      </footer>
    </div>
  );
}

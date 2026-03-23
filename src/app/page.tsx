import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Projects } from "@/components/Projects";
import { SoftwareExpertise } from "@/components/SoftwareExpertise";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      {/* Scrollytelling Section */}
      <section className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Content Sections */}
      <div className="relative z-20 overflow-hidden">
        <Experience />
        <SoftwareExpertise />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

import Image from "next/image";
import Herosection from "@/components/Herosection";
import Aboutsection from "@/components/Aboutsection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <>
      <Herosection />
      <Aboutsection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

import AboutSection from "@/components/ux/about";
import BlogSection from "@/components/ux/blog";
import ContactSection from "@/components/ux/contact";
import HomePage from "@/components/ux/home";
import ProjectSection from "@/components/ux/project";
import SkillSection from "@/components/ux/skill";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HomePage/>
   <AboutSection/>
   <SkillSection/>
   <ProjectSection/>
   <BlogSection/>
   <ContactSection/>
   </>
  );
}

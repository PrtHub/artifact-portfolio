import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { IntroSection } from "@/components/sections/Intro-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-40">
      <IntroSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
      <AboutSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
      <ProjectsSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
      <SkillsSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
      <ExperienceSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
      <ServicesSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />
      <ContactSection />
    </main>
  );
}

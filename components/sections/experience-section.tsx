"use client";

import React, { useState } from "react";
import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Building2, Calendar, ChevronRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type Experience = {
  company: string;
  companyLink: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    company: "Clipo AI",
    companyLink: "https://www.linkedin.com/company/clipo-ai",
    position: "Frontend Developer",
    duration: "Nov 2024 - Present",
    description: [
      "Developed and maintained the frontend of Clipo Pro, an AI-powered short content creation and video editing platform using Next JS and TypeScript, improving user engagement by 40%",
      "Implemented key features including automatic highlights, emoji suggestions, and responsive video templates that enhanced the content creation workflow",
      "Collaborated with UX designers to create an intuitive interface for AI-driven tools like auto-captioning and multilingual subtitle generation",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"],
  },
  {
    company: "Resource Plan",
    companyLink: "https://www.linkedin.com/company/resourceplan",
    position: "Full Stack Developer",
    duration: "Sep 2024 - Nov 2024",
    description: [
      "Developed and enhanced ResourcePlan's workflow management platform for architecture and engineering firms using Next JS and TypeScript",
      "Built interactive dashboards and data visualization components while implementing RESTful APIs using Express.js and MongoDB",
      "Designed both frontend interfaces and backend services for critical features including project budgeting, staff scheduling, and revenue forecasting tools",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
    ],
  },
  {
    company: "MVP Application and Game Design LLC",
    companyLink: "https://www.linkedin.com/company/mvp-apps",
    position: "Frontend Developer",
    duration: "June 2024 - July 2024",
    description: [
      "Developed responsive and user-centric frontend interfaces for mobile and web applications using React and TypeScript",
      "Created intuitive UI components and interactive features that enhanced user experience across iOS and Android platforms",
      "Collaborated with UX designers to implement accessible interfaces following the company's user-centric design approach",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Node.js",
    ],
  },
  {
    company: "Influcon Digitals LLC",
    companyLink: "https://www.linkedin.com/company/influcon-digitals",
    position: "Full Stack Developer",
    duration: "Dec 2023 - Jan 2024",
    description: [
      "Developed full-stack web applications and digital marketing solutions using React, Next.js, and Node.js technologies",
      "Built custom CMS platforms and e-commerce solutions with RESTful APIs using Express.js and MongoDB",
      "Collaborated with the digital marketing team to integrate analytics tools and optimize web performance for improved SEO results",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
    ],
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="pt-10">
      <div className="space-y-8">
        <div className="flex flex-col items-start justify-start gap-5">
          <HeadingBadge title="Experience" icon={<Briefcase size={14} />} />
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">
              Work{" "}
              <span className="text-[#08090a] dark:text-emerald-500">
                Experience
              </span>
            </h3>
            <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
              Companies I&apos;ve worked with and the projects I&apos;ve been
              involved in
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {experiences.map((experience, index) => (
            <SpotlightCard
              key={index}
              className={cn(
                "p-6 cursor-pointer transition-all duration-300 group rounded-sm border border-gray-200/80 dark:border-gray-800/50 ease-in-out hover:border-gray-900/30 dark:hover:border-emerald-500/30",
                "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-emerald-500/5",
                expandedIndex === index ? "bg-opacity-10" : ""
              )}
              gradientColor="rgba(34, 197, 94, 0.15)"
              lightGradientColor="rgba(8, 9, 10, 0.15)"
              onClick={() => toggleExpand(index)}
              disableScale={true}
            >
              <div className="space-y-4">
                <div className="flex xs:flex-row flex-col items-start justify-between gap-4">
                  <section className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-[#08090a] dark:text-white">
                        {experience.position}
                      </h3>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 text-[#08090a] dark:text-emerald-500 transition-all duration-500",
                          "transform-gpu opacity-0 scale-95 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100",
                          "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          expandedIndex === index ? "rotate-90" : "rotate-0",
                          expandedIndex === index
                            ? "opacity-100 translate-x-0 scale-100"
                            : ""
                        )}
                      />
                    </div>
                    <div className="flex items-center gap-2 text-[#737373] dark:text-[#A1A1AA]">
                      <Building2 className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                  </section>
                  <section className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </section>
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100 translate-y-0"
                      : "grid-rows-[0fr] opacity-0 -translate-y-4"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 space-y-4">
                      <ul className="space-y-2 text-[#737373] dark:text-[#A1A1AA] text-sm">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            className={cn(
                              "list-disc list-inside transition-all duration-500",
                              "transform-gpu",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              transitionDelay:
                                expandedIndex === index
                                  ? `${i * 100 + 300}ms`
                                  : "0ms",
                            }}
                            className={cn(
                              "px-2 py-1 text-xs rounded-sm font-medium bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-gray-800/50 text-[#737373] dark:text-[#A1A1AA] group-hover:border-gray-900/30 dark:group-hover:border-emerald-500/30 transition-all duration-300",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

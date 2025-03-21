import { ProjectCard } from "@/components/project-card";
import HeadingBadge from "@/components/heading-badge";
import { FolderGit2 } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Artifact UI",
    description:
      "Artifact UI is a modern UI component library designed to help developers and businesses build beautiful websites, web applications, and user interfaces with ease. it provides a comprehensive design system focused on aesthetics and performance.",
    imageUrl: "",
    videoUrl: "/projects/artifactui.mp4",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://artifactui.in",
  },
  {
    id: "2",
    title: "Helper",
    description:
      "Helper is a Platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    imageUrl: "",
    videoUrl: "/projects/helper.mp4",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "https://helpernet.vercel.app",
  },
  {
    id: "3",
    title: "Bookwise",
    description:
      "Bookwise is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, and a modern, optimized tech stack for real-world scalability.",
    imageUrl: "",
    videoUrl:
      "https://videos.pexels.com/video-files/31203981/13328517_1920_1080_60fps.mp4",
    tags: ["Next.js", "Upstash", "NeonDB", "Drizzle"],
    link: "https://bookwise-lyart.vercel.app",
  },
  {
    id: "4",
    title: "Real Estate Web Application",
    description:
      "Realo is an innovative platform designed to simplify real estate management. It offers a comprehensive solution for managing real estate properties, providing a seamless user experience for both property owners and seekers.",
    imageUrl: "",
    videoUrl: "/projects/realo.mp4",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://realo.onrender.com",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="Projects" icon={<FolderGit2 size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Projects
            </span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Explore some of the projects I&apos;ve worked on. These showcase my
            skills and expertise in various domains of software development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

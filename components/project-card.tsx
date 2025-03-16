import Image from "next/image";
import Link from "next/link";
import { CalendarRangeIcon } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
  link?: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <SpotlightCard
      gradientColor="rgba(34, 197, 94, 0.10)"
      lightGradientColor="rgba(15, 23, 42, 0.15)"
      spotlightSize={300}
      disableScale={true}
      className="flex items-start overflow-hidden rounded-sm border border-gray-200/80 dark:border-gray-800/50 transition-all duration-300 ease-in-out hover:border-gray-900/30 dark:hover:border-emerald-500/30 w-full cursor-pointer group"
    >
      <div className="flex sm:flex-row flex-col w-full">
        <div className="relative h-[240px] w-full sm:w-[40%] overflow-hidden">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover p-1 rounded-sm"
            />
          )}
          {project.videoUrl && (
            <video
              src={project.videoUrl}
              autoPlay
              muted
              loop
              preload="metadata"
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover p-1 rounded-sm"
            />
          )}
        </div>

        <div className="w-full sm:w-[60%] flex flex-col p-5 space-y-3">
          <h3 className="text-xl font-semibold text-[#737373] dark:text-white group-hover:text-[#08090a]/90 dark:group-hover:text-emerald-500/90 duration-300 ease-in-out transition-colors">
            {project.title}
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm font-normal line-clamp-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-sm font-medium bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-gray-800/50 text-[#737373] dark:text-[#A1A1AA] group-hover:border-gray-900/30 dark:group-hover:border-emerald-500/30 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs font-medium">
              <div className="flex items-center gap-1 px-2 py-1 rounded-sm bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-gray-800/50 text-[#737373] dark:text-[#A1A1AA] group-hover:border-gray-900/30 dark:group-hover:border-emerald-500/30 transition-all duration-300">
                <CalendarRangeIcon className="size-3" />
                <span>13/02/2025</span>
              </div>
            </div>

            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-3 py-1.5 text-sm font-medium text-[#08090a] dark:text-emerald-500 group-hover:text-[#08090a]/90 dark:group-hover:text-emerald-500/90 transition-all duration-300 after:absolute after:bottom-0 after:left-3 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[80%]"
              >
                View Project →
              </Link>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

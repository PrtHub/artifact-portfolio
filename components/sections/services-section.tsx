import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  MonitorIcon,
  CodeIcon,
  LayoutIcon,
  ServerIcon,
  Wrench,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and dynamic user interfaces using React, Next.js, and TypeScript. Focusing on performance, accessibility, and modern design principles.",
    icon: (
      <MonitorIcon className="w-6 h-6 text-gray-900 dark:text-emerald-500" />
    ),
  },
  {
    title: "Full Stack Web Apps",
    description:
      "Developing end-to-end web applications with modern tech stack including Next.js, Node.js, and MongoDB. Ensuring scalable and maintainable solutions.",
    icon: <CodeIcon className="w-6 h-6 text-gray-900 dark:text-emerald-500" />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Transforming design mockups into pixel-perfect, responsive interfaces using Tailwind CSS and modern CSS techniques. Ensuring smooth animations and transitions.",
    icon: (
      <LayoutIcon className="w-6 h-6 text-gray-900 dark:text-emerald-500" />
    ),
  },
  {
    title: "API Development",
    description:
      "Creating robust and efficient RESTful APIs using Node.js and Express. Implementing secure authentication, data validation, and proper error handling.",
    icon: (
      <ServerIcon className="w-6 h-6 text-gray-900 dark:text-emerald-500" />
    ),
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="Services" icon={<Wrench size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-emerald-500">
              Services
            </span>{" "}
            I offer
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Here are the professional services I provide to help bring your
            digital ideas to life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 w-full">
        {services.map((service, index) => (
          <SpotlightCard
            key={index}
            gradientColor="rgba(34, 197, 94, 1)"
            lightGradientColor="rgba(8, 9, 10, 0.2)"
            spotlightSize={350}
            glowEffect={true}
            glowSize={150}
            glowOpacity={0.15}
            className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex flex-col xs:flex-row items-start gap-4">
              <div className="flex-shrink-0 mt-1">{service.icon}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#08090a] dark:text-white">
                  {service.title}
                </h3>
                <p className="text-[#737373] dark:text-[#A1A1AA] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

import HeadingBadge from "@/components/heading-badge";
import { Hand } from "lucide-react";

export function IntroSection() {
  return (
    <section className="w-full flex flex-col items-start justify-center">
      <div className="space-y-6 ">
        <HeadingBadge title="Introduction" icon={<Hand size={14} />} />

        <article className="space-y-5 sm:space-y-6">
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            <span className="text-[#08090a] dark:text-emerald-500">
              Hi, I&apos;m Pritam
            </span>{" "}
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            A Full Stack Developer passionate about crafting seamless digital
            experiences
          </p>

          <p className="text-sm sm:text-base font-normal text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            I specialize in building web apps with{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Next.js, React, TypeScript, Tailwind CSS, Node.js and more.
            </span>{" "}
            Always excited to tackle new challenges where I can create value and
            grow as a coder. Let&apos;s connect if you&apos;ve got a project
            that could use my skills!
          </p>
        </article>
      </div>
    </section>
  );
}

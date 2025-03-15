import HeadingBadge from "@/components/heading-badge";

export function IntroSection() {
  return (
    <section className="w-full flex flex-col items-start justify-center">
      <div className="space-y-6 ">
        <HeadingBadge title="Introduction" />

        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          <span className="text-[#08090a] dark:text-emerald-500">
            Web Developer
          </span>{" "}
          crafting seamless digital experiences
        </h1>

        <p className="text-base font-medium text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
          Hi, I’m{" "}
          <span className="text-[#08090a] dark:text-emerald-500">
            Pritam Ghosh
          </span>
          , a passionate developer who loves turning ideas into functional,
          user-friendly applications. I specialize in building web apps with{" "}
          <span className="text-[#08090a] dark:text-emerald-500">
            Next.js, React, TypeScript, Tailwind CSS, Node.js and more.
          </span>{" "}
          Also, I’m always excited to tackle new challenges where I can create
          value and grow as a coder. Let’s connect if you’ve got a project that
          could use my skills!
        </p>

        {/* Action buttons */}
        {/* <div className="flex flex-wrap gap-4 pt-5">
          <Link
            href="/cv.pdf"
            className="flex items-center space-x-2 bg-[#191a1a] hover:bg-gray-700 text-white rounded-[4px] px-3 h-10 transition-colors text-sm"
            download
          >
            <span>Download CV</span>
            <span className="text-teal-600">↓</span>
          </Link>

          <Link
            href="#contact"
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-black text-sm font-medium rounded-[4px] px-3 h-10 transition-colors"
          >
            <span>Get in touch</span>
            <span>→</span>
          </Link>
        </div> */}
      </div>
    </section>
  );
}

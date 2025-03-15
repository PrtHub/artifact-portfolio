import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="Contact" />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Let&apos;s{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Connect
            </span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            I&apos;m always excited to collaborate on interesting projects or
            just have a great tech conversation!
          </p>
        </div>
      </div>

      <div className="w-full">
        <SpotlightCard
          gradientColor="rgba(34, 197, 94, 0.1)"
          lightGradientColor="rgba(8, 9, 10, 0.1)"
          spotlightSize={400}
          multiSpotlight={true}
          initialHovered={false}
          disableScale={true}
          className="p-8 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h4 className="text-xl font-medium text-[#08090a] dark:text-white">
                Ready to start a conversation?
              </h4>
              <p className="text-[#737373] dark:text-[#A1A1AA] text-sm leading-relaxed">
                Whether you have an exciting project in mind, want to discuss
                tech trends, or just want to say hi – I&apos;m always up for a
                good conversation! Feel free to reach out through any of these
                platforms or{" "}
                <a
                  href="mailto:pritamfinds@gmail.com"
                  className="text-[#08090a] dark:text-emerald-500 hover:text-[#08090a]/80 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  drop me an mail
                  <Mail className="w-3 h-3 mt-1" />
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://x.com/PritamGhosh010"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-sm bg-gray-100 dark:bg-[#191a1a] border border-gray-200/80 dark:border-gray-800/50 hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-sm bg-gray-200 dark:bg-[#222] text-[#08090a] dark:text-emerald-500 group-hover:bg-gray-300 dark:group-hover:bg-emerald-500/10 transition-colors">
                  <Twitter className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h5 className="font-medium text-[#08090a] dark:text-white">
                    Twitter/X
                  </h5>
                  <p className="text-xs text-[#737373] dark:text-[#A1A1AA] mt-1">
                    Quick chats & updates
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/PrtHub"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-sm bg-gray-100 dark:bg-[#191a1a] border border-gray-200/80 dark:border-gray-800/50 hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-sm bg-gray-200 dark:bg-[#222] text-[#08090a] dark:text-emerald-500 group-hover:bg-gray-300 dark:group-hover:bg-emerald-500/10 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h5 className="font-medium text-[#08090a] dark:text-white">
                    GitHub
                  </h5>
                  <p className="text-xs text-[#737373] dark:text-[#A1A1AA] mt-1">
                    Code & collaboration
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pritam-ghosh-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-sm bg-gray-100 dark:bg-[#191a1a] border border-gray-200/80 dark:border-gray-800/50 hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-sm bg-gray-200 dark:bg-[#222] text-[#08090a] dark:text-emerald-500 group-hover:bg-gray-300 dark:group-hover:bg-emerald-500/10 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h5 className="font-medium text-[#08090a] dark:text-white">
                    LinkedIn
                  </h5>
                  <p className="text-xs text-[#737373] dark:text-[#A1A1AA] mt-1">
                    Professional network
                  </p>
                </div>
              </a>
            </div>

            <div className="text-center space-y-3">
              <p className="text-sm text-[#737373] dark:text-[#A1A1AA]">
                Prefer sending a DM? I typically respond within 1 hour!
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

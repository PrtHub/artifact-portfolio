import { Mail, MessageSquare } from "lucide-react";
import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="Contact" icon={<MessageSquare size={14} />} />
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
            <div className="text-center space-y-6">
              <h4 className="text-xl font-medium text-[#08090a] dark:text-white">
                Ready to start a conversation?
              </h4>

              <a
                href="mailto:pritamfinds@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors"
              >
                pritamfinds@gmail.com
                <Mail className="w-4 h-4 mt-1" />
              </a>

              <div className="flex items-center justify-center gap-4 pt-4">
                <a
                  href="https://x.com/PritamGhosh010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaXTwitter className="relative w-5 h-5" />
                </a>

                <a
                  href="https://github.com/PrtHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaGithub className="relative w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/pritam-ghosh-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaLinkedin className="relative w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="inline-block px-4 py-2 text-sm text-[#737373] dark:text-[#A1A1AA] bg-gray-50 dark:bg-[#141414] rounded-sm">
                💬 I typically respond within 1 hour!
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

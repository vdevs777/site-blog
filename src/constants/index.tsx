import { AtSign } from "lucide-react";
import { ReactNode } from "react";
import { FaFacebook, FaLinkedin, FaSlack } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export type ShareConfig = { url: string; title?: string; text?: string };

export type SocialProvider =
  | "linkedin"
  | "facebook"
  | "slack"
  | "x"
  | "threads"
  | "clipboard";

export const SOCIAL_PROVIDERS: Record<
  Exclude<SocialProvider, "clipboard">,
  { name: string; icon: ReactNode; shareUrl: (config: ShareConfig) => string }
> = {
  linkedin: {
    name: "LinkedIn",
    icon: <FaLinkedin className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: "Facebook",
    icon: <FaFacebook className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/share/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: "Slack",
    icon: <FaSlack className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(
        config.url,
      )}&text=${encodeURIComponent(config.title || "")}`,
  },
  x: {
    name: "X",
    icon: <FaX className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(
        config.url,
      )}&text=${encodeURIComponent(config.title || "")}`,
  },
  threads: {
    name: "Threads",
    icon: <AtSign className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://threads.net/intent/post?text=${encodeURIComponent(
        `${config.title || ""} ${config.url}`,
      )}`,
  },
};

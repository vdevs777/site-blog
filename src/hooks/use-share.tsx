import { useCallback, useMemo } from "react";
import { Check, Link } from "lucide-react";

import { SOCIAL_PROVIDERS } from "@/constants";

import type { ShareConfig, SocialProvider } from "@/constants";

import { useClipboard } from "./use-clipboard";

interface UseShareProps extends ShareConfig {
  clipboardTimeout?: number;
}

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 1000,
}: UseShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [text, title, url],
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === "clipboard") {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig)
          throw new Error(`Provider not supported: ${provider}`);

        const shareUrl = providerConfig.shareUrl(shareConfig);

        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600, height=600, location=yes, status=yes",
        );

        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig, handleCopy, url],
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copiado!" : "Copiar link",
        icon: isCopied ? (
          <Check className="size-4" />
        ) : (
          <Link className="size-4" />
        ),
        action: () => share("clipboard"),
      },
    ],
    [isCopied, share],
  );

  return { shareButtons };
}

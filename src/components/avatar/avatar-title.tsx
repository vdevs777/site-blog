import { ReactNode } from "react";

export function AvatarTitle({ children }: { children: ReactNode }) {
  return <strong className="text-body-sm text-gray-200">{children}</strong>;
}

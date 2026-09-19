import { ReactNode } from "react";

export function AvatarContainer({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-3">{children}</div>;
}

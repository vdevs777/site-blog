import { ReactNode } from "react";

export function AvatarContent({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

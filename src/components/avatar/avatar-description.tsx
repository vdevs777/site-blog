import { ReactNode } from "react";

export function AvatarDescription({ children }: { children: ReactNode }) {
  return <div className="text-gray-300 text-body-xs">{children}</div>;
}

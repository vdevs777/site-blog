import Link from "next/link";
import { Button } from "../../ui/button";
import { ActiveLink } from "../../active-link";
import { Logo } from "../../logo";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-400/30 bg-gray-700/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild>
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

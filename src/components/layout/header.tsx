
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { AppSidebar } from '@/components/layout/sidebar';
import { type Topic } from '@/lib/lessons';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';

export function Header({ topics, className }: { topics: Topic[], className?: string }) {
  return (
    <header className={cn("flex h-16 items-center justify-between sticky top-0 z-30 border-b border-white/10 bg-background/80 backdrop-blur-sm px-4 md:px-6", className)}>
       <Link href="/" className="flex items-center justify-center gap-2 font-headline text-xl font-bold" prefetch={false}>
          <Logo className="h-7 w-7" />
          <span>Emcoder</span>
        </Link>

      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/lessons"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Lessons
            </Link>
            <Link
              href="/html/01-what-is-html"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Playground
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
        </nav>
        
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-72">
                  <AppSidebar topics={topics} />
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}

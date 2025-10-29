import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { AppSidebar } from '@/components/layout/sidebar';
import { type Topic } from '@/lib/lessons';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header({ topics }: { topics: Topic[] }) {
  return (
    <header className="flex h-16 items-center justify-between sticky top-0 z-30 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6 md:justify-end">
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
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}

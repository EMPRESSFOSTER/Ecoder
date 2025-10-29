import { AppSidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { ProgressProvider } from '@/hooks/use-progress';
import { getTopics } from '@/lib/lessons';
import { Footer } from '@/components/layout/footer';

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topics = getTopics();

  return (
    <ProgressProvider>
      <div className="min-h-screen w-full flex bg-background">
        <aside className="hidden md:flex flex-col w-72 border-r">
          <AppSidebar topics={topics} />
        </aside>
        <div className="flex-1 flex flex-col">
          <Header topics={topics} />
          <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ProgressProvider>
  );
}

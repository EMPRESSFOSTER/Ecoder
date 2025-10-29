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
      <div className="min-h-screen w-full flex bg-gradient-to-b from-[#05080f] to-[#0e1320]">
        <aside className="hidden md:flex flex-col w-72 border-r border-blue-500/20 bg-[#0e1320]/50">
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

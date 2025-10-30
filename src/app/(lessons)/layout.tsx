
import { AppSidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { getTopics } from '@/lib/lessons';
import { Footer } from '@/components/layout/footer';

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topics = getTopics();

  return (
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#05080f] to-[#0e1320]">
          <Header topics={topics} />
        <div className="flex flex-1">
            <aside className="hidden md:flex flex-col w-72 border-r border-blue-500/20 bg-[#0e1320]/50">
            <AppSidebar topics={topics} />
            </aside>
            <main className="flex-1 overflow-y-auto p-6 lg:p-10">
                {children}
            </main>
        </div>
          <Footer />
      </div>
  );
}

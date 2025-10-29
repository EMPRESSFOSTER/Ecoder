'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useProgress } from '@/hooks/use-progress';
import { type Topic } from '@/lib/lessons';
import { CheckCircle2, Code, FileCode2, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const topicIcons: { [key: string]: React.ElementType } = {
  html: FileCode2,
  css: Palette,
  javascript: Code,
};

export function AppSidebar({ topics }: { topics: Topic[] }) {
  const params = useParams();
  const { isCompleted } = useProgress();

  const currentTopic = params.topic as string;
  const currentSlug = params.slug as string;
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
          <Logo className="h-7 w-7" />
          <span>Emcoder</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <Accordion type="multiple" defaultValue={[currentTopic || topics[0]?.id]} className="w-full p-2">
          {topics.map((topic) => {
            const Icon = topicIcons[topic.id] || Code;
            const completedInTopic = topic.lessons.filter(l => isCompleted(topic.id, l.slug)).length;
            const percentage = topic.lessons.length > 0 ? (completedInTopic / topic.lessons.length) * 100 : 0;
            return (
              <AccordionItem value={topic.id} key={topic.id} className="border-none">
                <AccordionTrigger className="hover:no-underline rounded-md px-2 hover:bg-accent/50">
                  <div className="flex items-center gap-3 w-full">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-col items-start w-full text-left">
                      <span className="font-medium text-sm">{topic.name}</span>
                      <div className="flex items-center w-full gap-2 mt-1">
                        <Progress value={percentage} className="h-1.5 w-full" />
                        <span className="text-xs text-muted-foreground font-mono">{Math.round(percentage)}%</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-6 pt-2">
                  <ul className="space-y-1 border-l-2 border-primary/20 ml-2">
                    {topic.lessons.map((lesson) => {
                        const isActive = currentSlug === lesson.slug && currentTopic === topic.id;
                        return (
                          <li key={lesson.slug} className="relative">
                            {!isActive && <div className="absolute -left-[1.2rem] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary/20 transition-all" />}
                            {isActive && <div className="absolute -left-[1.2rem] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary ring-4 ring-primary/20 transition-all" />}
                            <Link
                              href={`/${topic.id}/${lesson.slug}`}
                              className={cn(
                                "flex items-center justify-between p-2 rounded-md transition-colors text-sm ml-2",
                                isActive
                                  ? 'text-primary font-semibold'
                                  : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'
                              )}
                            >
                              <span className="flex-1">{lesson.title}</span>
                              {isCompleted(topic.id, lesson.slug) && (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                              )}
                            </Link>
                          </li>
                        )
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </ScrollArea>
    </div>
  );
}

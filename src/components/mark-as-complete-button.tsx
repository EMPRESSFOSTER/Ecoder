'use client';

import { useProgress } from '@/hooks/use-progress';
import { Button } from '@/components/ui/button';
import { Check, CircleDashed, ArrowRight } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { type Topic } from '@/lib/lessons';

export function MarkAsCompleteButton({ topic, slug, topics }: { topic: string; slug: string; topics: Topic[] }) {
  const { isCompleted, toggleLessonCompletion } = useProgress();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const findNextLesson = () => {
    const currentTopicIndex = topics.findIndex(t => t.id === topic);
    if (currentTopicIndex === -1) return null;

    const currentTopic = topics[currentTopicIndex];
    const currentLessonIndex = currentTopic.lessons.findIndex(l => l.slug === slug);
    if (currentLessonIndex === -1) return null;

    // Check for next lesson in the same topic
    if (currentLessonIndex < currentTopic.lessons.length - 1) {
      const nextLesson = currentTopic.lessons[currentLessonIndex + 1];
      return `/${currentTopic.id}/${nextLesson.slug}`;
    }

    // Check for the first lesson in the next topic
    if (currentTopicIndex < topics.length - 1) {
      const nextTopic = topics[currentTopicIndex + 1];
      if (nextTopic.lessons.length > 0) {
        const nextLesson = nextTopic.lessons[0];
        return `/${nextTopic.id}/${nextLesson.slug}`;
      }
    }

    return null; // No next lesson found
  };

  if (!isClient) {
    return (
      <Button disabled size="lg" className="w-64">
        Loading...
      </Button>
    );
  }

  const completed = isCompleted(topic, slug);

  const handleClick = () => {
    startTransition(() => {
      const wasCompleted = isCompleted(topic, slug);
      if (!wasCompleted) {
        toggleLessonCompletion(topic, slug);
        const nextLessonUrl = findNextLesson();
        if (nextLessonUrl) {
          router.push(nextLessonUrl);
        }
      } else {
        // If already completed, just toggle it off without navigating
        toggleLessonCompletion(topic, slug);
      }
    });
  };

  const nextLessonUrl = findNextLesson();

  return (
    <Button
      size="lg"
      className="w-64 transition-all duration-300 transform hover:scale-105"
      variant={completed ? 'outline' : 'default'}
      onClick={handleClick}
      disabled={isPending}
    >
      {completed ? (
        nextLessonUrl ? (
          <>
            Next Lesson <ArrowRight className="ml-2 h-5 w-5" />
          </>
        ) : (
          <>
            <Check className="mr-2 h-5 w-5 text-green-500" />
            All Lessons Completed!
          </>
        )
      ) : (
        <>
          <CircleDashed className="mr-2 h-5 w-5" />
          Mark as Complete
        </>
      )}
    </Button>
  );
}

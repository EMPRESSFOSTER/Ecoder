'use client';

import { useProgress } from '@/hooks/use-progress';
import { Button } from '@/components/ui/button';
import { Check, CircleDashed } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';

export function MarkAsCompleteButton({ topic, slug }: { topic: string; slug: string }) {
  const { isCompleted, toggleLessonCompletion } = useProgress();
  const [isClient, setIsClient] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsClient(true);
  }, []);

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
        toggleLessonCompletion(topic, slug);
    });
  };

  return (
    <Button
      size="lg"
      className="w-64 transition-all duration-300 transform hover:scale-105"
      variant={completed ? 'outline' : 'default'}
      onClick={handleClick}
      disabled={isPending}
    >
      {completed ? <Check className="mr-2 h-5 w-5 text-green-500" /> : <CircleDashed className="mr-2 h-5 w-5" />}
      {completed ? 'Lesson Completed!' : 'Mark as Complete'}
    </Button>
  );
}

import { notFound } from 'next/navigation';
import { getLessonData, getTopics } from '@/lib/lessons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MarkAsCompleteButton } from '@/components/mark-as-complete-button';
import { Playground } from '@/components/playground';

type Props = {
  params: {
    topic: string;
    slug: string;
  };
};

export async function generateStaticParams() {
    const topics = getTopics();
    return topics.flatMap(topic => 
        topic.lessons.map(lesson => ({
            topic: topic.id,
            slug: lesson.slug
        }))
    );
}

export async function generateMetadata({ params }: Props) {
    const lesson = await getLessonData(params.topic, params.slug);
    if (!lesson) {
        return { title: 'Lesson not found' };
    }
    return { title: `${lesson.title} | Emcoder` };
}

export default async function LessonPage({ params }: Props) {
  const lesson = await getLessonData(params.topic, params.slug);
  const topics = getTopics();

  if (!lesson) {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg h-fit">
            <CardHeader>
                <CardTitle className="font-headline text-4xl lg:text-5xl">{lesson.title}</CardTitle>
                <CardDescription className="font-medium text-primary">{lesson.topic.charAt(0).toUpperCase() + lesson.topic.slice(1)}</CardDescription>
            </CardHeader>
            <CardContent>
                <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: lesson.contentHtml }}
                />
            </CardContent>
            <CardFooter className="flex justify-center py-8">
                <MarkAsCompleteButton topic={lesson.topic} slug={lesson.slug} topics={topics} />
            </CardFooter>
        </Card>
        <div className="lg:sticky lg:top-24 h-fit">
          <Playground />
        </div>
    </div>
  );
}

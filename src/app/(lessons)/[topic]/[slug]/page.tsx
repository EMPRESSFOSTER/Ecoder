import { notFound } from 'next/navigation';
import { getLessonData, getTopics } from '@/lib/lessons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MarkAsCompleteButton } from '@/components/mark-as-complete-button';

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
    return { title: `${lesson.title} | Ecoder` };
}

export default async function LessonPage({ params }: Props) {
  const lesson = await getLessonData(params.topic, params.slug);

  if (!lesson) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
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
                <MarkAsCompleteButton topic={lesson.topic} slug={lesson.slug} />
            </CardFooter>
        </Card>
    </div>
  );
}

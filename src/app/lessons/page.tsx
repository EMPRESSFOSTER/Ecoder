
import Link from 'next/link';
import { getTopics, Lesson } from '@/lib/lessons';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Code, FileCode2, Palette, Server } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// Helper function to get a placeholder image for a lesson
const getLessonImage = (lesson: Lesson) => {
  const images = PlaceHolderImages;
  // Use a simple hashing function to pick a consistent image
  const imageIndex = lesson.title.length % images.length;
  return images[imageIndex] || images[0];
};

const topicIcons: { [key: string]: React.ElementType } = {
    html: FileCode2,
    css: Palette,
    javascript: Code,
    nodejs: Server,
};


export default function LessonsPage() {
  const topics = getTopics();
  const allLessons = topics.flatMap(topic => topic.lessons.map(lesson => ({...lesson, topicName: topic.name})));

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#05080f] to-[#0e1320] text-foreground">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Header topics={topics} />

      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-headline bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
            Explore Lessons
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Learn HTML, CSS, and JavaScript interactively with real-time practice.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allLessons.map((lesson, index) => {
            const lessonImage = getLessonImage(lesson);
            const TopicIcon = topicIcons[lesson.topic];

            return (
              <Card 
                key={`${lesson.topic}-${lesson.slug}`}
                className={cn(
                  "bg-[#0e1320]/50 border border-blue-500/20 rounded-[20px] shadow-[0_0_20px_rgba(20,158,242,0.1)] transition-all duration-300 overflow-hidden",
                  "hover:scale-105 hover:shadow-[0_0_30px_rgba(20,158,242,0.3),0_0_60px_rgba(162,123,255,0.2)]"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={lessonImage.imageUrl}
                      alt={lesson.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={lessonImage.imageHint}
                    />
                     <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-background/80 text-foreground border-blue-500/30">Beginner</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                        {TopicIcon && <TopicIcon className="h-5 w-5 text-accent" />}
                        <p className="text-sm font-medium text-accent">{lesson.topicName}</p>
                    </div>
                    <h2 className="text-2xl font-bold font-headline mb-2 text-white">{lesson.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {`Dive into the fundamentals of ${lesson.topicName} with this introductory lesson.`}
                    </p>
                   
                    <Button asChild className={cn(
                        "w-full bg-[#149EF2] text-white transition-all duration-300",
                        "hover:bg-[#149EF2] hover:shadow-[0_0_15px_#149EF2,0_0_30px_#149EF250]"
                    )}>
                      <Link href={`/${lesson.topic}/${lesson.slug}`}>
                        Start Lesson <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

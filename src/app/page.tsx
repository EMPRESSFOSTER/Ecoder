
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, FileCode2, Palette } from 'lucide-react';
import { Logo } from '@/components/logo';
import { getTopics } from '@/lib/lessons';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/layout/footer';

export default function LandingPage() {
  const topics = getTopics();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-section-image');

  const topicIcons: { [key: string]: React.ElementType } = {
    html: FileCode2,
    css: Palette,
    javascript: Code,
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10 z-10">
        <Link href="#" className="flex items-center justify-center gap-2 font-headline text-xl font-bold" prefetch={false}>
          <Logo className="h-7 w-7" />
          <span>Emcoder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="/html/01-what-is-html"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Lessons
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Unlock Your Coding Potential
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Emcoder provides interactive, beginner-friendly lessons to help you master the fundamentals of web
                    development.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/html/01-what-is-html">
                      Start Learning
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                    data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>
        <section id="topics" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Explore Our Topics</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From the structure of HTML to the interactivity of JavaScript, our curriculum covers the essentials.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
              {topics.map((topic) => {
                const Icon = topicIcons[topic.id] || Code;
                return (
                  <Card key={topic.id} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-background/50">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="grid gap-1">
                        <CardTitle>{topic.name}</CardTitle>
                      </div>
                      <Icon className="h-8 w-8 ml-auto text-primary" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Start your journey with {topic.lessons.length} beginner-friendly lessons.
                      </p>
                       <Button asChild variant="link" className="px-0">
                        <Link href={`/${topic.id}/${topic.lessons[0]?.slug || ''}`} className="mt-4">
                          Go to first lesson <ArrowRight className="ml-2" />
                        </Link>
                       </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

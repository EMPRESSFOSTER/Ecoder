
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Code, FileCode2, Palette, Zap, Award, Users, Star, Server } from 'lucide-react';
import { Logo } from '@/components/logo';
import { type Topic } from '@/lib/lessons';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/layout/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const animatedTexts = [
  "Unlock Your Coding Potential",
  "Build Your First Website",
  "Master HTML, CSS & JavaScript",
  "From Beginner to Builder",
];

export function LandingPageClient({ topics }: { topics: Topic[] }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-section-image');
  const featuresImage = PlaceHolderImages.find(p => p.id === 'features-section-image');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
        setIsAnimating(false);
      }, 500); // Half-second for the animation out
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const topicIcons: { [key: string]: React.ElementType } = {
    html: FileCode2,
    css: Palette,
    javascript: Code,
    nodejs: Server,
  };

  const features = [
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Don't just read—code! Our hands-on playground lets you experiment and see your results in real-time.",
    },
    {
      icon: Award,
      title: "Beginner-Focused",
      description: "Our lessons are crafted to take you from zero to hero, breaking down complex topics into simple, digestible steps.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a community of learners, ask questions, and collaborate on projects to accelerate your growth.",
    },
  ];

  const testimonials = [
      {
          name: "Jide Okoro",
          role: "Aspiring Developer",
          avatar: "https://randomuser.me/api/portraits/men/60.jpg",
          comment: "Emcoder's interactive lessons were a game-changer. I finally understood concepts that had confused me for months!",
      },
      {
          name: "Amina Yusuf",
          role: "Designer",
          comment: "As a designer wanting to learn code, Emcoder was perfect. The visual feedback in the playground made learning HTML & CSS so intuitive.",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
          name: "David Adebayo",
          role: "Student",
          comment: "I used Emcoder to supplement my university courses, and it made a huge difference. The bite-sized lessons are easy to fit into a busy schedule.",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
          name: "Sarah Hassan",
          role: "Product Manager",
          comment: "The hands-on approach is fantastic. I can now communicate with my engineering team much more effectively.",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
          name: "Michael Chen",
          role: "Entrepreneur",
          comment: "I built the first version of my startup's website using the skills I learned on Emcoder. Highly recommended!",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#05080f] to-[#0e1320]">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10 z-10 sticky top-0 bg-background/50 backdrop-blur-sm">
        <Link href="#" className="flex items-center justify-center gap-2 font-headline text-xl font-bold" prefetch={false}>
          <Logo className="h-7 w-7" />
          <span>Emcoder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/lessons"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Lessons
          </Link>
          <Link
            href="/html/01-what-is-html"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Playground
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
                <div className="space-y-2 h-28 md:h-36">
                  <h1
                    className={cn(
                        "text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-br from-primary via-accent to-primary",
                        "transition-all duration-500",
                        isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                    )}
                  >
                    {animatedTexts[currentTextIndex]}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Emcoder provides interactive, beginner-friendly lessons to help you master the fundamentals of web
                    development.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className={cn(
                      "transition-all duration-300",
                      "hover:shadow-[0_0_15px_hsl(var(--primary)),0_0_30px_hsl(var(--accent))] hover:scale-105"
                  )}>
                    <Link href="/lessons">
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
                    priority
                />
              )}
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Choose Emcoder?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've designed our platform to be the most effective and enjoyable way to start your coding journey.
              </p>
            </div>
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
              {featuresImage && (
                <Image
                  src={featuresImage.imageUrl}
                  alt={featuresImage.description}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  data-ai-hint={featuresImage.imageHint}
                />
              )}
              <div className="grid gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className={cn("flex items-start gap-4 p-6 rounded-lg bg-background/50 border border-white/10", "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]")}>
                      <div className="rounded-full bg-primary/10 p-3 border-2 border-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-headline mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="topics" className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 h-full w-full bg-muted/50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Explore Our Topics</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From the structure of HTML to the interactivity of JavaScript, our curriculum covers the essentials.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {topics.map((topic) => {
                const Icon = topicIcons[topic.id] || Code;
                return (
                  <Card key={topic.id} className={cn(
                    "bg-background/50 transition-all duration-300 border-white/10",
                    "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))] hover:scale-105"
                  )}>
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

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Loved by Learners Worldwide</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Don't just take our word for it. Here's what our students have to say.
                    </p>
                </div>
                <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[ Autoplay({ delay: 5000 }) ]}
                  className="w-full max-w-4xl mx-auto"
                >
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className={cn(
                              "relative h-full overflow-hidden bg-background/50 border-white/10 flex flex-col",
                              "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]"
                          )}>
                              <CardHeader className="p-6">
                                  <div className="flex items-center gap-4">
                                      <Avatar>
                                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                      </Avatar>
                                      <div>
                                          <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                      </div>
                                  </div>
                              </CardHeader>
                              <CardContent className="p-6 pt-0 flex-1">
                                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                              </CardContent>
                              <CardFooter className="p-6 pt-2 flex justify-end">
                                  <div className="flex text-yellow-400">
                                      <Star className="w-5 h-5 fill-current" />
                                      <Star className="w-5 h-5 fill-current" />
                                      <Star className="w-5 h-5 fill-current" />
                                      <Star className="w-5 h-5 fill-current" />
                                      <Star className="w-5 h-5 fill-current" />
                                  </div>
                              </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

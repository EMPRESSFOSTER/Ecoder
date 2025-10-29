
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Code, FileCode2, Palette, Zap, Award, Users, Star } from 'lucide-react';
import { Logo } from '@/components/logo';
import { getTopics } from '@/lib/lessons';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/layout/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  const topics = getTopics();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-section-image');

  const topicIcons: { [key: string]: React.ElementType } = {
    html: FileCode2,
    css: Palette,
    javascript: Code,
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
          name: "Alex Johnson",
          role: "Aspiring Developer",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          comment: "Emcoder's interactive lessons were a game-changer. I finally understood concepts that had confused me for months!",
      },
      {
          name: "Maria Garcia",
          role: "Designer",
          comment: "As a designer wanting to learn code, Emcoder was perfect. The visual feedback in the playground made learning HTML & CSS so intuitive.",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
          name: "Sam Chen",
          role: "Student",
          comment: "I used Emcoder to supplement my university courses, and it made a huge difference. The bite-sized lessons are easy to fit into a busy schedule.",
          avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      }
  ];

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

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Choose Emcoder?</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        We've designed our platform to be the most effective and enjoyable way to start your coding journey.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-3 lg:gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center p-4">
                                <div className="mb-4 rounded-full bg-primary/10 p-4 border-2 border-primary/20">
                                    <Icon className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        )
                    })}
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
                  <Card key={topic.id} className={cn(
                    "bg-background/50 transition-all duration-300",
                    "hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]"
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
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className={cn(
                            "relative overflow-hidden bg-background/50 border-white/10",
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
                            <CardContent className="p-6 pt-0">
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
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

    
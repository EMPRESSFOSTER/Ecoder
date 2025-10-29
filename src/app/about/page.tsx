import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Rocket, Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center gap-2 font-headline text-xl font-bold" prefetch={false}>
          <Logo className="h-7 w-7" />
          <span>Emcoder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/html/01-what-is-html"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Lessons
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                About Emcoder
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Empowering the next generation of developers through accessible and engaging education.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                  <Rocket className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Mission</h2>
                <p className="text-muted-foreground">
                  Our mission is to make learning to code an intuitive, inspiring, and achievable goal for everyone, regardless of their background. We believe in breaking down complex topics into simple, interactive lessons that build confidence and real-world skills.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Vision</h2>
                <p className="text-muted-foreground">
                  We envision a world where anyone with the curiosity and drive can become a technology creator. Emcoder aims to be the first step on that journey for millions of aspiring developers, fostering a global community of learners and builders.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Purpose</h2>
                <p className="text-muted-foreground">
                    Our purpose is to democratize tech education. We provide high-quality, free resources to remove financial barriers and create a supportive environment where learners can thrive and discover their passion for coding.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Why Emcoder?</h2>
                <p className="text-muted-foreground">
                    Emcoder is built on the principle of "learning by doing." Our interactive playground, combined with bite-sized lessons and practical exercises, creates an effective and enjoyable learning experience that keeps you motivated and engaged.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Who We Are</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a passionate team of educators and developers dedicated to building the best learning platform for future coders.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Jane Doe</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Lead Curriculum Developer
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>John Smith</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Principal Software Engineer
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Alex Ray</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            UX/UI Designer
                        </p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2025 Emcoder. All rights reserved.</p>
      </footer>
    </div>
  );
}

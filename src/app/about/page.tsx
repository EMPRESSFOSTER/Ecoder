import Link from 'next/link';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/layout/footer';


export default function AboutPage() {
  const whoWeAreImage = PlaceHolderImages.find(p => p.id === 'who-we-are-image');
  const whyEmcoderImage = PlaceHolderImages.find(p => p.id === 'why-emcoder-image');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
      
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10 z-10">
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
            className="text-sm font-medium text-primary underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
        </nav>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-headline bg-clip-text text-transparent bg-gradient-to-br from-primary via-accent to-primary">
                Emcoder
            </h1>
            <p className="text-lg text-muted-foreground mt-2">Code. Create. Conquer.</p>
        </div>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={cn(
                "relative rounded-[20px] p-8 border border-white/10 bg-background/50 backdrop-blur-sm",
                "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]",
                "transition-transform duration-300 hover:scale-105"
            )}>
                <h2 className="text-3xl font-bold tracking-tighter font-headline mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                    To make learning to code an accessible, engaging, and empowering experience for everyone, regardless of their background. We break down complex concepts into simple, hands-on lessons that build confidence and foster creativity.
                </p>
            </div>
            
            <div className={cn(
                "relative rounded-[20px] p-8 border border-white/10 bg-background/50 backdrop-blur-sm",
                "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]",
                "transition-transform duration-300 hover:scale-105"
            )}>
                <h2 className="text-3xl font-bold tracking-tighter font-headline mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                    To be the leading platform for interactive code education, where curiosity thrives and learners become creators. We envision a world where anyone can bring their digital ideas to life.
                </p>
            </div>

            <div className={cn(
                "relative rounded-[20px] p-8 border border-white/10 bg-background/50 backdrop-blur-sm",
                "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]",
                "transition-transform duration-300 hover:scale-105"
            )}>
                <h2 className="text-3xl font-bold tracking-tighter font-headline mb-4">Our Purpose</h2>
                <p className="text-muted-foreground">
                    We exist to demystify technology and empower the next generation of builders, thinkers, and innovators. Our purpose is to provide the tools and knowledge needed to succeed in an increasingly digital world.
                </p>
            </div>
        </div>

        <div className="w-full max-w-6xl mt-8 grid md:grid-cols-2 gap-8">
            <div className={cn(
                "relative flex flex-col justify-between rounded-[20px] p-8 border border-white/10 bg-background/50 backdrop-blur-sm",
                "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]",
                "transition-transform duration-300 hover:scale-105"
            )}>
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter font-headline mb-4">Who We Are</h2>
                  <p className="text-muted-foreground">
                      Emcoder is an interactive learning platform built to help beginners master the fundamentals of web development. We simplify coding by turning complex topics into fun, hands-on lessons that teach you HTML, CSS, and JavaScript step-by-step.
                  </p>
                  <p className="text-muted-foreground mt-4">
                      Our goal is to make coding accessible, creative, and practical for everyone — whether you’re a student, designer, or tech enthusiast ready to start your web journey.
                  </p>
                </div>
                {whoWeAreImage && (
                  <Image
                      src={whoWeAreImage.imageUrl}
                      alt={whoWeAreImage.description}
                      width={500}
                      height={350}
                      className="rounded-lg object-cover w-full h-auto mt-4"
                      data-ai-hint={whoWeAreImage.imageHint}
                  />
                )}
            </div>
            <div className={cn(
                "relative flex flex-col justify-between rounded-[20px] p-8 border border-white/10 bg-background/50 backdrop-blur-sm",
                "shadow-[0_0_20px_hsl(var(--primary-glow)),0_0_50px_hsl(var(--accent-glow))]",
                "transition-transform duration-300 hover:scale-105"
            )}>
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter font-headline mb-4">Why Emcoder?</h2>
                    <p className="text-muted-foreground">
                        At Emcoder, we make learning web development simple, fun, and interactive. Our lessons combine real-time coding practice, visual learning, and small projects to help you learn by doing.
                    </p>
                    <p className="text-muted-foreground mt-4">
                        We believe anyone can learn to code — all it takes is curiosity and the right guide. With Emcoder, you’ll go from zero to building your own websites confidently, one lesson at a time.
                    </p>
                </div>
                {whyEmcoderImage && (
                    <Image
                        src={whyEmcoderImage.imageUrl}
                        alt={whyEmcoderImage.description}
                        width={500}
                        height={350}
                        className="rounded-lg object-cover w-full h-auto mt-4"
                        data-ai-hint={whyEmcoderImage.imageHint}
                    />
                )}
                <p className="text-center font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-6">
                    Emcoder — Learn. Build. Create.
                </p>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

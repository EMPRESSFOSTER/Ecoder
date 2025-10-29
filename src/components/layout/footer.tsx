import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className={cn(
        "relative w-full p-8 mt-16 text-white border-t border-white/10 bg-background/50 backdrop-blur-sm",
        "shadow-[0_-10px_20px_-10px_var(--primary-glow),0_-20px_50px_-20px_var(--accent-glow)]"
    )}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Section 1: About Emcoders */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
            <Logo className="h-7 w-7" />
            <span>Emcoder</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Emcoder is an interactive learning platform that helps beginners master web development through hands-on lessons and real-time coding practice.
          </p>
          <p className="text-sm text-muted-foreground">
            Our mission is to make coding fun, accessible, and practical for everyone.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_hsl(var(--primary))]">Home</Link></li>
            <li><Link href="/html/01-what-is-html" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_hsl(var(--primary))]">Courses</Link></li>
            <li><Link href="/html/01-what-is-html" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_hsl(var(--primary))]">Playground</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_hsl(var(--primary))]">Blog</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_hsl(var(--primary))]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Section 3: Connect With Us */}
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-bold">Connect With Us</h3>
          <div className="text-sm text-muted-foreground">
            <p>📧 graceantony202@gmail.com</p>
            <p className="mt-2">🌐 www.emcoder.netlify.app/</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-muted-foreground transition-transform hover:scale-125 hover:text-accent hover:drop-shadow-[0_0_5px_hsl(var(--accent))]"><Facebook /></Link>
            <Link href="#" className="text-muted-foreground transition-transform hover:scale-125 hover:text-accent hover:drop-shadow-[0_0_5px_hsl(var(--accent))]"><Linkedin /></Link>
            <Link href="#" className="text-muted-foreground transition-transform hover:scale-125 hover:text-accent hover:drop-shadow-[0_0_5px_hsl(var(--accent))]"><Instagram /></Link>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Emcoders. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

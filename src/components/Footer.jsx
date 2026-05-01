import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold text-foreground tracking-tighter">
          Suhani<span className="text-primary">.lys</span>
        </div>
        <p className="text-muted text-sm font-medium">
          © {new Date().getFullYear()} Suhani Bharti. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

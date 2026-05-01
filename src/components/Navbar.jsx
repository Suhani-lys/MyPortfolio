import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-[#000000]/90 backdrop-blur-md shadow-sm border-b border-[#262626] py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter">
          Suhani<span className="text-[#ef4444]">.lys</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-[#ef4444] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ef4444] text-white text-sm font-medium rounded-md hover:bg-[#dc2626] transition-colors ml-4"
          >
            Let's Connect <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#262626] flex flex-col items-center py-6 gap-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-[#ef4444]"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ef4444] text-white text-sm font-medium rounded-md"
          >
            Let's Connect <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}

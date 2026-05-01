import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Get in <span className="text-primary">Touch</span></h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Have an exciting project or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="bg-card border border-border-subtle p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:soha91177@gmail.com" className="flex items-center gap-4 text-muted hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium text-lg">soha91177@gmail.com</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-muted hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FaLinkedin size={20} />
                  </div>
                  <span className="font-medium text-lg">LinkedIn Profile</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-muted hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FaGithub size={20} />
                  </div>
                  <span className="font-medium text-lg">GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 bg-card border border-border-subtle p-8 rounded-2xl shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

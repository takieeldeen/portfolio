"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com"; // User should replace this

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <Card className="relative overflow-hidden border-none bg-linear-to-br from-neutral-900 to-black p-12 text-center md:p-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20 mask-[radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500 blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500 blur-[120px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-blue-500">exceptional</span> together.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              Whether you have a specific project in mind or just want to
              explore possibilities, I&apos;m always open to discussing new
              opportunities.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Email Button */}
            <Button
              size="lg"
              className="group relative h-14 rounded-2xl bg-white px-8 text-black hover:bg-neutral-100"
              onClick={copyToClipboard}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={18} className="text-green-600" />
                    <span className="font-bold uppercase tracking-wider">
                      Email Copied!
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Mail size={18} />
                    <span className="font-bold uppercase tracking-wider">
                      Copy My Email
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            {/* LinkedIn Button */}
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-2xl border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
              asChild
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={18} />
                <span className="font-bold uppercase tracking-wider">
                  LinkedIn
                </span>
                <ExternalLink size={14} className="opacity-40" />
              </a>
            </Button>

            {/* GitHub Button */}
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-2xl border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
              asChild
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} />
                <span className="font-bold uppercase tracking-wider">
                  GitHub
                </span>
                <ExternalLink size={14} className="opacity-40" />
              </a>
            </Button>
          </div>

          {/* Footer Subtext */}
          <p className="text-sm text-neutral-500">
            Based in Egypt • Available for interesting collaborations
          </p>
        </div>
      </Card>
    </section>
  );
}

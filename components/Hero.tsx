"use client";

import { Download, Mail } from "lucide-react";
import { motion } from "motion/react";
import { MetricCard } from "./MetricCard";

interface HeroProps {
  onContact: () => void;
  onDownloadCV: () => void;
}

export function Hero({ onContact, onDownloadCV }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--gradient-blob-1) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[15%] w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--gradient-blob-2) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -25, 0], y: [0, 15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-bg border border-accent/20 rounded-full text-sm text-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for Remote &amp; Hybrid Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text mb-4 tracking-tight">
            Nwakaego Uchenna Oputa
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-accent font-semibold mb-6">
            Customer Service &amp; Administrative Support Professional
          </p>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-muted leading-relaxed mb-8 px-4">
            Dedicated virtual assistant with expertise in customer support,
            scheduling, data management, and stakeholder coordination. Proven
            track record of delivering exceptional service and maintaining high
            accuracy across diverse administrative functions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onContact}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-hover-accent text-accent-foreground rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1 font-medium"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
            <button
              onClick={onDownloadCV}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-surface hover:bg-hover text-text border border-border hover:border-accent/50 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1 font-medium"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap max-w-3xl mx-auto"
        >
          <MetricCard value="98%" label="Data Accuracy" delay={0} />
          <MetricCard value="95%" label="On-time Start Rate" delay={100} />
          <MetricCard value="100+" label="Calls Per Day" delay={200} />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-text-light rounded-full p-1">
          <div className="w-1.5 h-2 bg-accent rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}

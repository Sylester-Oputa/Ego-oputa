'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Nketti Johnston-Taylor',
    title: 'CEO & Executive Director',
    company: 'Centre for Newcomers, Canada',
    avatar: 'NJ',
    rating: 5,
    quote:
      'Nwakaego has been an absolute game-changer as my Virtual Assistant. Her ability to manage my schedule, handle executive communications, and keep everything running smoothly behind the scenes is exceptional. She is proactive, detail-oriented, and truly understands what it means to support a senior executive. I can always count on her to deliver with professionalism and discretion.',
    highlight: 'Proactive & Detail-Oriented',
  },
  {
    name: 'Nadine Niba',
    title: 'Director of Operations',
    company: 'BDO Canada',
    avatar: 'NN',
    rating: 5,
    quote:
      'Working alongside Ego at the Quarterback Employment Initiative has been a pleasure. She brings an exceptional level of care and precision to every task — from coordinating client records to liaising with employers and stakeholders. Her administrative efficiency and communication skills have directly improved our program outcomes. She is the kind of professional who elevates every team she is part of.',
    highlight: 'Exceptional Coordinator',
  },
  {
    name: 'Quarterback Empowerment Initiative',
    title: 'QBEI Program Leadership',
    company: 'BDO Canada | QBEI',
    avatar: 'QB',
    rating: 5,
    quote:
      'Nwakaego Oputa has made an outstanding contribution to the Quarterback Employment Initiative. Her dedication to supporting program participants, maintaining accurate records, and consistently delivering high-quality administrative support has been invaluable. She demonstrates a genuine commitment to helping others succeed and brings warmth and professionalism to every interaction. We are grateful for her service and highly recommend her to any organisation seeking a reliable administrative professional.',
    highlight: 'Outstanding Contribution',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mb-6" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Trusted by executives, organisations, and professionals across Canada and beyond.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full flex flex-col bg-surface rounded-2xl p-7 border border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Quote icon */}
                <div className="absolute -top-4 left-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent shadow-lg">
                    <Quote className="w-5 h-5 text-accent-foreground fill-accent-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5 mt-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-warning fill-warning"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-text-muted leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Highlight badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-bg text-accent text-xs font-medium rounded-full border border-accent/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {t.highlight}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent-light text-accent-foreground font-bold text-sm flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-text text-sm">{t.name}</div>
                      <div className="text-text-muted text-xs">{t.title}</div>
                      <div className="text-accent text-xs font-medium">{t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-surface rounded-xl border border-border shadow-sm">
            <div className="flex -space-x-2">
              {testimonials.map((t) => (
                <div
                  key={t.avatar}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-light text-accent-foreground font-bold text-xs border-2 border-surface"
                >
                  {t.avatar}
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm">
              Trusted by <span className="text-text font-semibold">3+ professionals</span> across
              Canada &amp; Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

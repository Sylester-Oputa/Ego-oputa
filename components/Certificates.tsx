'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, ZoomIn, Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imagePath: string;
  category: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 'alx',
    title: 'Virtual Assistant Programme',
    issuer: 'ALX Africa',
    date: 'September 16, 2022',
    imagePath: '/certificates/cert-alx.jpeg',
    category: 'Virtual Assistance',
    description:
      'Completed the ALX Virtual Assistant Programme, gaining mastery in executive support, scheduling, communication management, and remote work tools. Awarded by Fred Swaniker, Founder & CEO of the African Leadership Group, in partnership with the Mastercard Foundation.',
  },
  {
    id: 'freelancing-encee',
    title: 'Freelancing with Encee',
    issuer: 'Freelancing with Encee',
    date: '15 May 2025',
    imagePath: '/certificates/cert-freelancing-encee.jpeg',
    category: 'Freelancing & VA',
    description:
      '6-week intensive training completed covering Freelancing Fundamentals, Virtual Assistance, Customer Support, Social Media Management, and Canva design basics. Issued by Coach/Trainer CHINAECHEREM ORJI.',
  },
];

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
              Certificates
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mb-6" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Professional certifications that demonstrate my commitment to continuous growth.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <button
                onClick={() => setSelectedCert(cert)}
                className="group w-full text-left bg-surface rounded-2xl border border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`View ${cert.title} certificate`}
              >
                {/* Certificate Image Preview */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-accent/5 to-accent-light/10 overflow-hidden">
                  <Image
                    src={cert.imagePath}
                    alt={`Certificate: ${cert.title} by ${cert.issuer}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                      View Certificate
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-text leading-snug">{cert.title}</h3>
                      <p className="text-accent text-sm font-medium mt-0.5">{cert.issuer}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>

                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-bg text-accent text-xs font-medium border border-accent/20">
                    {cert.category}
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              key="cert-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                key="cert-modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className="relative bg-surface rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-2 border border-border text-text-muted hover:text-text hover:border-accent/50 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Certificate Image — full size */}
                <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden bg-black">
                  <Image
                    src={selectedCert.imagePath}
                    alt={`Certificate: ${selectedCert.title} by ${selectedCert.issuer}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority
                  />
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-bg flex-shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text">{selectedCert.title}</h3>
                      <p className="text-accent font-medium">{selectedCert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Issued: {selectedCert.date}</span>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed">{selectedCert.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

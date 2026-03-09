"use client";

import {
  MapPin,
  Headset,
  Calendar,
  Database,
  MessageSquare,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Expert handling of customer inquiries, complaints, and satisfaction management.",
  },
  {
    icon: Calendar,
    title: "Admin & Coordination",
    description:
      "Efficient scheduling, inbox management, and stakeholder coordination.",
  },
  {
    icon: MessageSquare,
    title: "Appointment Setting",
    description:
      "Professional cold calling and appointment scheduling for business development.",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Accurate data entry, processing, and quality control with high precision.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-surface rounded-2xl p-8 border border-border shadow-sm">
            <p className="text-text-muted leading-relaxed mb-6">
              I am a dedicated Customer Service and Administrative Support
              Professional with extensive experience in virtual assistance,
              customer relations, and operational coordination. My expertise
              spans across multiple industries, delivering exceptional service
              quality and maintaining high standards of accuracy and efficiency.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Scheduling & inbox management",
                "Customer complaint resolution",
                "CRM & Microsoft Office expertise",
                "Data accuracy & quality control",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-text-muted pt-4 border-t border-border">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Lagos, Nigeria</span>
              <span className="mx-2">•</span>
              <span className="text-accent">Open to Remote/Hybrid</span>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-surface rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-bg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

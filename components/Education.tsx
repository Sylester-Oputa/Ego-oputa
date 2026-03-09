"use client";

import { motion } from "motion/react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    type: "certification",
    title: "Certified Virtual Assistant",
    institution: "ALX Africa",
    date: "December 2022",
    description:
      "Comprehensive training in virtual assistance, remote work tools, and professional administration.",
  },
  {
    type: "certification",
    title: "Customer Service & Management",
    institution: "Airtel Nigeria / EmployMe Nigeria",
    date: "June 2017",
    description:
      "Advanced customer service techniques and management strategies.",
  },
  {
    type: "certification",
    title: "Customer Service Response",
    institution: "GTBank Nigeria",
    date: "March 2012",
    description:
      "Professional certification in customer service excellence and response management.",
  },
  {
    type: "degree",
    title: "HND in Business Administration & Management",
    institution: "Yaba College of Technology (YABATECH)",
    date: "May 2012 – April 2015",
    description:
      "Advanced diploma covering business operations, management principles, and organizational behavior.",
  },
  {
    type: "degree",
    title: "OND in Business Administration & Management",
    institution: "Yaba College of Technology (YABATECH)",
    date: "April 2008 – May 2010",
    description:
      "Foundation in business administration, accounting, and management practices.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Education &amp; Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mb-6" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Continuous professional development through formal education and
            industry certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-surface rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-bg group-hover:scale-110 transition-transform duration-300">
                    {item.type === "certification" ? (
                      <Award className="w-6 h-6 text-accent" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-accent" />
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === "certification"
                        ? "bg-success-bg text-success"
                        : "bg-accent-bg text-accent"
                    }`}
                  >
                    {item.type === "certification" ? "Certification" : "Degree"}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <div className="text-text-muted font-medium mb-2">
                  {item.institution}
                </div>
                <div className="flex items-center gap-2 text-text-light text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-accent-bg to-surface border border-accent/30 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent mx-auto mb-4">
              <Award className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">
              Most Industrious Industrial Trainee
            </h3>
            <p className="text-text-muted">
              GTBank Nigeria Plc – MICR Department
            </p>
            <p className="text-text-light text-sm mt-2">
              Recognized for exceptional dedication, work ethic, and performance
              during internship program
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

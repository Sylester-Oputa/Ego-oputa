import { motion } from 'motion/react';
import { 
  Headset, 
  Calendar, 
  Database, 
  Users, 
  CheckCircle, 
  Zap, 
  Target,
  Heart
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Customer Support',
    icon: Headset,
    skills: [
      'Customer Inquiry Management',
      'Complaint Resolution',
      'Client Satisfaction',
      'Phone & Email Support',
      'CRM Systems'
    ]
  },
  {
    title: 'Admin & Coordination',
    icon: Calendar,
    skills: [
      'Calendar Management',
      'Travel Coordination',
      'Email Management',
      'Meeting Scheduling',
      'Document Preparation'
    ]
  },
  {
    title: 'Tools & Software',
    icon: Database,
    skills: [
      'Microsoft Office Suite',
      'Google Workspace',
      'CRM Platforms',
      'Data Entry Systems',
      'Project Management Tools'
    ]
  },
  {
    title: 'Core Strengths',
    icon: Target,
    skills: [
      'Attention to Detail',
      'Problem-Solving',
      'Adaptability',
      'Time Management',
      'Team Collaboration'
    ]
  }
];

const iconMap = {
  'Attention to Detail': CheckCircle,
  'Problem-Solving': Zap,
  'Adaptability': Target,
  'Time Management': Calendar,
  'Team Collaboration': Users,
  'default': Heart
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
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
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mb-6" />
          <p className="text-text-muted max-w-2xl mx-auto">
            A comprehensive skill set developed through diverse professional experiences and 
            continuous learning in customer service and administrative support.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-surface rounded-xl p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-bg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-text">{category.title}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill as keyof typeof iconMap] || iconMap.default;
                    return (
                      <li key={skill} className="flex items-center gap-3 group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-bg/50 group-hover/item:bg-accent-bg transition-colors">
                          <SkillIcon className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-text-muted group-hover/item:text-text transition-colors">
                          {skill}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted mb-4">Additional Competencies</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Remote Work',
              'Multi-tasking',
              'Professional Communication',
              'Quality Assurance',
              'Process Improvement',
              'Stakeholder Management'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-accent-bg text-accent rounded-full text-sm font-medium border border-accent/20 hover:border-accent/50 hover:shadow-md transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { ExperienceCard } from './ExperienceCard';

type FilterType = 'all' | 'va' | 'customer-service' | 'admin';

const experiences = [
  {
    id: 1,
    role: 'Virtual Assistant to CEO',
    company: 'Centre for Newcomers',
    location: 'Canada (Remote)',
    period: 'Sept 2025 – Present',
    type: ['va', 'admin'] as FilterType[],
    responsibilities: [
      'Provide high-level administrative support to the CEO, managing schedules and priorities',
      'Coordinate executive communications and stakeholder relationships',
      'Organize and prepare materials for board meetings and strategic initiatives',
      'Handle confidential information with discretion and professionalism',
      'Streamline administrative processes to improve executive efficiency'
    ]
  },
  {
    id: 2,
    role: 'Employment Coordinator',
    company: 'BDO Canada | Quarterback Employment Initiative (QBEI)',
    location: 'Canada (Remote)',
    period: 'Sept 2025 – Present',
    type: ['admin', 'customer-service'] as FilterType[],
    responsibilities: [
      'Facilitate employment services and job placement for program participants',
      'Maintain detailed records of client interactions and employment outcomes',
      'Coordinate with employers and stakeholders to identify job opportunities',
      'Provide administrative support for program operations and reporting',
      'Track and report key performance metrics for program effectiveness'
    ]
  },
  {
    id: 3,
    role: 'Virtual Assistant & Executive Assistant',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'May 2025 – Present',
    type: ['va', 'admin'] as FilterType[],
    responsibilities: [
      'Manage complex schedules, travel arrangements, and email correspondence for multiple clients',
      'Conduct research and prepare reports to support decision-making',
      'Handle data entry and document management with high accuracy',
      'Coordinate meetings and maintain professional communication with stakeholders',
      'Implement organizational systems to improve workflow efficiency'
    ]
  },
  {
    id: 4,
    role: 'Appointment Setter',
    company: 'Adoza Visibility Company',
    location: 'UK (Remote)',
    period: 'Apr 2022 – Jul 2022',
    type: ['customer-service'] as FilterType[],
    responsibilities: [
      'Conducted cold calling campaigns to generate qualified leads',
      'Scheduled appointments with prospective clients for the sales team',
      'Maintained detailed call logs and updated CRM systems',
      'Achieved consistent appointment-setting targets through professional communication',
      'Provided feedback on lead quality and market insights'
    ]
  },
  {
    id: 5,
    role: 'MICR Operator',
    company: 'GTBank Nigeria Plc',
    location: 'Lagos, Nigeria',
    period: 'Aug 2011 – Sep 2012',
    type: ['admin'] as FilterType[],
    responsibilities: [
      'Processed over 100 banking transactions daily with 98% accuracy rate',
      'Operated MICR equipment for check processing and data capture',
      'Ensured compliance with banking procedures and quality standards',
      'Maintained detailed transaction records and reports',
      'Collaborated with team members to meet daily processing targets'
    ]
  },
  {
    id: 6,
    role: 'MICR Operator Intern',
    company: 'GTBank Nigeria Plc',
    location: 'Lagos, Nigeria',
    period: 'Sep 2010 – Jul 2011',
    type: ['admin'] as FilterType[],
    responsibilities: [
      'Learned and applied banking operations and MICR processing procedures',
      'Assisted with data entry and document processing tasks',
      'Maintained high standards of accuracy and attention to detail',
      'Received recognition as "Most Industrious Industrial Trainee" in MICR Department',
      'Developed strong foundation in banking operations and customer service'
    ]
  }
];

const filters = [
  { id: 'all' as FilterType, label: 'All Experience' },
  { id: 'va' as FilterType, label: 'Virtual Assistant' },
  { id: 'customer-service' as FilterType, label: 'Customer Service' },
  { id: 'admin' as FilterType, label: 'Administration' }
];

export function Experience() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredExperiences = experiences.filter((exp) =>
    activeFilter === 'all' ? true : exp.type.includes(activeFilter)
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mb-6" />
          <p className="text-text-muted max-w-2xl mx-auto">
            A proven track record of delivering exceptional administrative support and customer service 
            across diverse industries and remote work environments.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-surface text-text-muted hover:bg-hover border border-border hover:border-accent/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:pl-8">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  location={exp.location}
                  period={exp.period}
                  responsibilities={exp.responsibilities}
                  delay={index * 100}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

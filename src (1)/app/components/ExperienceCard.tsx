import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  delay?: number;
}

export function ExperienceCard({
  role,
  company,
  location,
  period,
  responsibilities,
  delay = 0
}: ExperienceCardProps) {
  return (
    <div
      className="group relative bg-surface rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-accent border-4 border-background hidden lg:block" />

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
          {role}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-muted">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="font-medium">{company}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-text-light mt-2">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <span>{period}</span>
        </div>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

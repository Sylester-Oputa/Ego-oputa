import { TrendingUp } from "lucide-react";

interface MetricCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function MetricCard({ value, label, delay = 0 }: MetricCardProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 bg-surface/80 backdrop-blur-sm border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-bg">
        <TrendingUp className="w-5 h-5 text-accent" />
      </div>
      <div>
        <div className="font-bold text-text">{value}</div>
        <div className="text-sm text-text-muted">{label}</div>
      </div>
    </div>
  );
}

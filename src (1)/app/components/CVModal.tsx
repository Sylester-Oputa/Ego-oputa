import { X, Download, FileText, Briefcase, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export function CVModal({ isOpen, onClose, onDownload }: CVModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-text/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl shadow-2xl z-50 mx-4"
          >
            {/* Header */}
            <div className="sticky top-0 bg-surface border-b border-border px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-bg">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Curriculum Vitae</h3>
                  <p className="text-sm text-text-muted">Nwakaego Uchenna Oputa</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-hover rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-text-muted" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Preview Message */}
              <div className="bg-accent-bg border border-accent/20 rounded-xl p-6 text-center">
                <FileText className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-text mb-2">CV Preview</h4>
                <p className="text-text-muted text-sm mb-4">
                  This is a preview of the CV content. Click the button below to download 
                  the complete PDF version with full details and formatting.
                </p>
                <button
                  onClick={onDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-hover-accent text-accent-foreground rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Full CV (PDF)
                </button>
              </div>

              {/* CV Summary */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-text">Professional Summary</h4>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Experienced Customer Service and Administrative Support Professional with a proven 
                    track record in virtual assistance, customer relations, and operational coordination. 
                    Skilled in managing complex schedules, resolving customer issues, and maintaining 
                    high standards of accuracy and efficiency across diverse industries.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-text">Key Qualifications</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Certified Virtual Assistant (ALX Africa)',
                      'Customer Service & Management Certificate',
                      'HND in Business Administration & Management',
                      '5+ years of professional experience',
                      'Remote work expertise across international clients'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface-2 rounded-lg p-4">
                  <h4 className="font-semibold text-text mb-3 text-sm">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Virtual Assistance',
                      'Customer Support',
                      'Calendar Management',
                      'Data Entry',
                      'CRM Systems',
                      'Microsoft Office',
                      'Email Management',
                      'Appointment Setting',
                      'Problem Solving',
                      'Team Collaboration'
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-surface border border-border rounded-lg text-xs text-text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download CTA */}
              <div className="pt-4 border-t border-border">
                <button
                  onClick={onDownload}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-hover-accent text-accent-foreground rounded-lg transition-all duration-200 hover:shadow-lg font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Complete CV
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

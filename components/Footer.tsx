"use client";

import { Download, Mail, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  onDownloadCV: () => void;
}

export function Footer({ onDownloadCV }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-surface border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-light text-accent-foreground font-bold text-lg">
                NUO
              </div>
              <div>
                <div className="font-semibold text-text">Nwakaego Oputa</div>
                <div className="text-sm text-text-muted">Virtual Assistant</div>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Professional customer service and administrative support
              specialist committed to delivering exceptional results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-text-muted hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text mb-4">Connect</h3>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:nwakaego.oputa@example.com"
                className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                nwakaego.oputa@example.com
              </a>
            </div>
            <button
              onClick={onDownloadCV}
              className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-hover-accent text-accent-foreground rounded-lg transition-all duration-200 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Nwakaego Uchenna Oputa. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-2 hover:bg-accent text-text-muted hover:text-accent-foreground transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-2 hover:bg-accent text-text-muted hover:text-accent-foreground transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

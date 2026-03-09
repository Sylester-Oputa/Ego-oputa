import { useState } from 'react';
import { Toaster, toast } from 'sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { MobileContactButton } from './components/MobileContactButton';
import { BackToTop } from './components/BackToTop';
import { PageLoader } from './components/PageLoader';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleDownloadCV = () => {
    // In a real application, this would trigger an actual file download
    toast.success('CV download started! Check your downloads folder.');
    setIsCVModalOpen(false);
  };

  const handleOpenCVModal = () => {
    setIsCVModalOpen(true);
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'var(--surface)',
            color: 'var(--text)',
            border: '1px solid var(--border)',
          },
        }}
      />
      
      <Navigation onDownloadCV={handleOpenCVModal} />
      
      <main>
        <Hero onContact={handleContact} onDownloadCV={handleOpenCVModal} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer onDownloadCV={handleOpenCVModal} />

      <MobileContactButton />
      <BackToTop />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        onDownload={handleDownloadCV}
      />
    </div>
  );
}

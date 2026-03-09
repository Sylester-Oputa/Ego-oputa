import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MobileContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approximately)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
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
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToContact}
          className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 px-5 py-3.5 bg-accent hover:bg-hover-accent text-accent-foreground rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-200 hover:scale-110"
          aria-label="Contact"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Contact</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CVModal } from "@/components/CVModal";
import { MobileContactButton } from "@/components/MobileContactButton";
import { BackToTop } from "@/components/BackToTop";
import { PageLoader } from "@/components/PageLoader";

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleDownloadCV = () => {
    toast.success("CV download started! Check your downloads folder.");
    setIsCVModalOpen(false);
  };

  const handleOpenCVModal = () => {
    setIsCVModalOpen(true);
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageLoader />

      <Navigation onDownloadCV={handleOpenCVModal} />

      <main>
        <Hero onContact={handleContact} onDownloadCV={handleOpenCVModal} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
        <Testimonials />
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

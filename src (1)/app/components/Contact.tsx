import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send data to a backend
    toast.success('Message sent successfully! I will get back to you soon.');
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mb-6" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Ready to elevate your business operations? Let's discuss how I can support your 
            administrative and customer service needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-surface rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-bg">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text">Email</h4>
                  <p className="text-text-muted text-sm">Send me an email</p>
                </div>
              </div>
              <a
                href="mailto:nwakaego.oputa@example.com"
                className="text-accent hover:text-hover-accent transition-colors break-all"
              >
                nwakaego.oputa@example.com
              </a>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-bg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text">Phone</h4>
                  <p className="text-text-muted text-sm">Call or text</p>
                </div>
              </div>
              <a
                href="tel:+2341234567890"
                className="text-accent hover:text-hover-accent transition-colors"
              >
                +234 123 456 7890
              </a>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-bg">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text">WhatsApp</h4>
                  <p className="text-text-muted text-sm">Quick message</p>
                </div>
              </div>
              <a
                href="https://wa.me/2341234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-hover-accent transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-surface rounded-xl p-8 border border-border shadow-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-text"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-text"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-surface-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-text"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-hover-accent text-accent-foreground rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1 font-medium"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

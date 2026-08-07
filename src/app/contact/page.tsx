"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle, MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNext = () => {
    if (step === 1) {
      const newErrors: Record<string, string> = {};
      
      // Strict Name Validation (letters, spaces, hyphens only, 2-50 chars)
      if (!/^[a-zA-Z\s\-]{2,50}$/.test(formData.name.trim())) {
        newErrors.name = "Please enter a valid name (letters only).";
      }
      
      // Strict Email Validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
      
      // Strict Phone Validation (digits, plus, spaces, hyphens, 7-15 chars)
      if (!/^[+]?[\d\s\-]{7,15}$/.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number.";
      }
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const handlePrev = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Details Validation (prevent basic script injection, limit length)
    const sanitizedDetails = formData.details.replace(/[<>]/g, "").trim();
    if (sanitizedDetails.length < 10 || sanitizedDetails.length > 2000) {
      setErrors({ details: "Please provide valid details (10-2000 characters, no HTML)." });
      return;
    }
    
    setStep(3); // Success step
    
    // Reset form after a few seconds
    setTimeout(() => {
      setStep(1);
      setFormData({ name: "", email: "", phone: "", details: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#Fcfbf9] pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display tracking-tight text-black mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-black/60 font-light leading-relaxed max-w-md">
              Whether you're looking for premium sound design, flawless mixing, or a world-class tracking room, our team is ready to bring your vision to life.
            </p>
          </div>
          
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                <EnvelopeSimple size={24} className="text-black/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-black/50 uppercase tracking-wider mb-1">Email Us</span>
                <a href="mailto:hello@storyteller.studio" className="text-xl font-medium hover:text-black/60 transition-colors">hello@storyteller.studio</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                <Phone size={24} className="text-black/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-black/50 uppercase tracking-wider mb-1">Call Us</span>
                <a href="tel:+15551234567" className="text-xl font-medium hover:text-black/60 transition-colors">+1 (555) 123-4567</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-black/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-black/50 uppercase tracking-wider mb-1">Visit Studio</span>
                <span className="text-xl font-medium text-black">123 Audio Ave, Suite 400<br/>Los Angeles, CA 90028</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Embedded Form */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-black/[0.03] border border-black/5 relative overflow-hidden min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <h2 className="text-3xl font-display tracking-tight mb-2">Tell us about you.</h2>
                <p className="text-black/60 mb-8 font-light">How can we reach you?</p>
                
                <div className="flex flex-col gap-5 mb-8">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-black/70 px-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      maxLength={50}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                      }}
                      placeholder="John Doe"
                      className={cn(
                        "w-full px-5 py-4 rounded-2xl bg-black/[0.03] border focus:bg-white focus:ring-4 outline-none transition-all placeholder:text-black/30",
                        errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-black/5 focus:border-black/20 focus:ring-black/5"
                      )}
                    />
                    {errors.name && <p className="text-red-500 text-xs px-2">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-black/70 px-1">Email Address</label>
                    <input 
                      type="email"
                      required
                      maxLength={100}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                      }}
                      placeholder="john@example.com"
                      className={cn(
                        "w-full px-5 py-4 rounded-2xl bg-black/[0.03] border focus:bg-white focus:ring-4 outline-none transition-all placeholder:text-black/30",
                        errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-black/5 focus:border-black/20 focus:ring-black/5"
                      )}
                    />
                    {errors.email && <p className="text-red-500 text-xs px-2">{errors.email}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-black/70 px-1">Mobile Number</label>
                    <input 
                      type="tel"
                      required
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                      }}
                      placeholder="+1 (555) 000-0000"
                      className={cn(
                        "w-full px-5 py-4 rounded-2xl bg-black/[0.03] border focus:bg-white focus:ring-4 outline-none transition-all placeholder:text-black/30",
                        errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-black/5 focus:border-black/20 focus:ring-black/5"
                      )}
                    />
                    {errors.phone && <p className="text-red-500 text-xs px-2">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mt-auto flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="group flex items-center rounded-full bg-black pl-6 pr-2 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                  >
                    <span className="text-sm font-semibold tracking-wide uppercase mr-4">Continue</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                      <ArrowRight size={16} weight="bold" />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <h2 className="text-3xl font-display tracking-tight mb-2">Project Details</h2>
                <p className="text-black/60 mb-8 font-light">Give us a brief overview of what you're looking for.</p>
                
                <div className="flex flex-col gap-5 mb-8 flex-1">
                  <div className="space-y-1.5 h-full flex flex-col">
                    <label className="text-sm font-medium text-black/70 px-1">How can we help?</label>
                    <textarea 
                      required
                      maxLength={2000}
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (errors.details) setErrors(prev => ({ ...prev, details: "" }));
                      }}
                      placeholder="I'm working on a short film and need..."
                      className={cn(
                        "w-full flex-1 min-h-[150px] px-5 py-4 rounded-2xl bg-black/[0.03] border focus:bg-white focus:ring-4 outline-none transition-all placeholder:text-black/30 resize-none",
                        errors.details ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-black/5 focus:border-black/20 focus:ring-black/5"
                      )}
                    />
                    {errors.details && <p className="text-red-500 text-xs px-2">{errors.details}</p>}
                  </div>
                </div>

                <div className="mt-auto flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-4 rounded-full text-sm font-semibold text-black/60 hover:text-black transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!formData.details}
                    className="group flex items-center rounded-full bg-black pl-6 pr-2 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                  >
                    <span className="text-sm font-semibold tracking-wide uppercase mr-4">Send Message</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                      <ArrowRight size={16} weight="bold" />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                  <CheckCircle size={40} weight="fill" />
                </div>
                <h2 className="text-3xl font-display tracking-tight mb-4">Message Sent</h2>
                <p className="text-black/60 font-light max-w-sm">
                  Thank you for reaching out, {formData.name.split(' ')[0]}. Our team will review your project details and get back to you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

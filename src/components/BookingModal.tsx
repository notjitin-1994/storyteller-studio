"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, CheckCircle, MicrophoneStage, Sliders, MusicNotes, Waves, SpeakerHifi, FilmStrip, Camera, VideoCamera } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const SERVICES = [
  { id: "dubbing", label: "Dubbing & Vocals", icon: MicrophoneStage },
  { id: "mixing", label: "Mixing & Mastering", icon: Sliders },
  { id: "bgm", label: "BGM Scoring", icon: MusicNotes },
  { id: "sound-design", label: "Sound Design", icon: Waves },
  { id: "rec-spaces", label: "Rec Spaces", icon: SpeakerHifi },
  { id: "foley", label: "Foley Sounds", icon: FilmStrip },
  { id: "product-media", label: "Product Photo & Video", icon: Camera },
  { id: "model-media", label: "Model Photo & Video", icon: VideoCamera },
];

export default function BookingModal() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("booking") === "true";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Lock body scroll and handle initial state when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      const preselectedService = searchParams.get("service");
      if (preselectedService && step === 1) {
        setFormData(prev => ({ ...prev, service: preselectedService }));
        setStep(2);
      }
    } else {
      document.body.style.overflow = "";
      // Reset state on close after animation finishes
      setTimeout(() => {
        setStep(1);
        setFormData({ service: "", name: "", email: "", phone: "", details: "" });
        setErrors({});
      }, 500);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, searchParams, step]);

  const closeModal = () => {
    router.replace(pathname, { scroll: false });
  };

  // Auto-close on success step
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        closeModal();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, pathname, router]);

  const handleNext = () => {
    if (step === 2) {
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
    setStep((s) => Math.min(s + 1, 3));
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
    
    setStep(4); // Success step
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl font-display  tracking-tight mb-2">What do you need help with?</h2>
            <p className="text-black/60 mb-8 font-light">Select a service to get started.</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {SERVICES.map((srv) => {
                const Icon = srv.icon;
                const isSelected = formData.service === srv.id;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: srv.id })}
                    className={cn(
                      "flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all duration-300",
                      isSelected 
                        ? "border-black bg-black text-white shadow-lg scale-[0.98]" 
                        : "border-black/10 bg-black/[0.02] hover:bg-black/5 text-black hover:border-black/20"
                    )}
                  >
                    <Icon size={28} weight={isSelected ? "fill" : "regular"} />
                    <span className="text-xs font-medium text-center">{srv.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                disabled={!formData.service}
                className="group flex items-center rounded-full bg-black pl-6 pr-2 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                <span className="text-sm font-semibold tracking-wide uppercase mr-4">Continue</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} weight="bold" />
                </div>
              </button>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl font-display  tracking-tight mb-2">Tell us about you.</h2>
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
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl font-display  tracking-tight mb-2">Project Details</h2>
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
                type="submit"
                disabled={!formData.details}
                className="group flex items-center rounded-full bg-black pl-6 pr-2 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shadow-xl shadow-black/20"
              >
                <span className="text-sm font-semibold tracking-wide uppercase mr-4">Submit Request</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:scale-110">
                  <CheckCircle size={20} weight="fill" />
                </div>
              </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col h-full items-center justify-center text-center py-12"
          >
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} weight="fill" />
            </div>
            <h2 className="text-3xl font-display  tracking-tight mb-4">Request Sent!</h2>
            <p className="text-black/60 font-light max-w-sm">
              Thanks for reaching out, {formData.name || 'friend'}. We've received your request and will be in touch shortly.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col min-h-[550px]"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-black/60 hover:text-black transition-colors z-10"
            >
              <X size={20} weight="bold" />
            </button>

            {/* Progress Bar (Only show if not success step) */}
            {step < 4 && (
              <div className="absolute top-0 left-0 w-full h-1.5 bg-black/5">
                <motion.div 
                  className="h-full bg-black"
                  initial={{ width: "33%" }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                />
              </div>
            )}

            {/* Content Area */}
            <div className="flex-1 p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="h-full">
                <AnimatePresence mode="wait">
                  {renderStep()}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

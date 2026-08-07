import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Storyteller Studio",
  description: "Terms of Service for The Storyteller Studio.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#Fcfbf9] pt-32 pb-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display tracking-tight text-black mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg prose-black max-w-none">
          <p className="text-black/70 font-light leading-relaxed mb-6">
            Last Updated: August 7, 2026
          </p>

          <p className="text-black/70 font-light leading-relaxed mb-8">
            Welcome to The Storyteller Studio. By accessing our website, booking our services, or interacting with our content, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">1. Acceptance of Terms</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            By using our website (thestorytelleraudiostudio.vercel.app) and services, you confirm that you have read, understood, and agree to adhere to these Terms of Service. If you do not agree, you are prohibited from using our services and accessing this site.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">2. Services and Bookings</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            We provide audio engineering, mixing, mastering, sound design, and related media services. All bookings are subject to availability and formal agreement. We reserve the right to refuse service to anyone for any reason at any time.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">3. Payment and Cancellations</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            Payments for services must be made in accordance with the invoices provided. Deposits may be required to secure studio time. Cancellations made less than 48 hours prior to a scheduled session may be subject to a cancellation fee or forfeiture of the deposit.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">4. Intellectual Property</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            The branding, design, text, and graphics on this website are owned by The Storyteller Studio. However, upon full payment for our services, you retain full ownership and copyright of your original project stems and master files, unless otherwise stipulated in a separate written agreement.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">5. Limitation of Liability</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            In no event shall The Storyteller Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">6. Changes to Terms</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">7. Contact Information</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            Questions about the Terms of Service should be sent to us at:
            <br />
            <strong>Email:</strong> legal@storyteller.studio
            <br />
            <strong>Address:</strong> 123 Audio Ave, Suite 400, Los Angeles, CA 90028
          </p>
        </div>
      </div>
    </div>
  );
}

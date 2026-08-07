import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Storyteller Studio",
  description: "Privacy Policy for The Storyteller Studio.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#Fcfbf9] pt-32 pb-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display tracking-tight text-black mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg prose-black max-w-none">
          <p className="text-black/70 font-light leading-relaxed mb-6">
            Last Updated: August 7, 2026
          </p>

          <p className="text-black/70 font-light leading-relaxed mb-8">
            At The Storyteller Studio ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">1. Information We Collect</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            We may collect personal identification information including, but not limited to, your name, email address, phone number, and project details when you interact with our booking or contact forms. We also collect non-identifiable technical data such as browser type, IP address, and cookie identifiers to improve our website experience.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">2. How We Use Your Information</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-black/70 font-light leading-relaxed mb-8 space-y-2">
            <li>Provide, operate, and maintain our services.</li>
            <li>Respond to your inquiries, schedule studio sessions, and manage projects.</li>
            <li>Send you administrative emails, updates, and service-related notifications.</li>
            <li>Analyze website usage to improve our digital experience.</li>
          </ul>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">3. Data Security</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            We implement strict security measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">4. Cookies and Tracking</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            Our website uses "cookies" and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent via our Cookie Consent banner.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">5. Your Rights (GDPR / CCPA)</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            Depending on your location, you may have the right to access, update, delete, or restrict the processing of your personal data. If you wish to exercise these rights, please contact us at the email provided below.
          </p>

          <h2 className="text-2xl font-display text-black mt-12 mb-4">6. Contact Us</h2>
          <p className="text-black/70 font-light leading-relaxed mb-6">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> privacy@storyteller.studio
            <br />
            <strong>Address:</strong> 123 Audio Ave, Suite 400, Los Angeles, CA 90028
          </p>
        </div>
      </div>
    </div>
  );
}

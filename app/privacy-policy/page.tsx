import type { Metadata } from "next";

export const metadata: Metadata = {alternates:{canonical:"/privacy-policy"},
  title: "Privacy Policy",
  description: "SJH DEV privacy policy for website visitors and trade inquiries."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 text-ink">
      <div className="container-page max-w-3xl">
        <h1 className="text-5xl font-bold">Privacy Policy</h1><p className="mt-6 leading-8">Inquiry details stay in your browser while you prepare a draft. Opening the email draft transfers those details to your email application; you decide whether to send it. This website does not store or submit the form to a server.</p>
        <div className="mt-8 space-y-5 leading-8 text-ink/70">
          <p>SJH DEV LIMITED collects information you choose to submit through contact forms, email, phone, or trade inquiry requests. This may include your name, email address, phone number, company information, and message details.</p>
          <p>We use this information to respond to inquiries, discuss fresh produce and enterprise technology opportunities, improve our services, and communicate about trade partnerships. We do not sell personal information.</p>
          <p>Website analytics, cookies, and server logs may be used to understand traffic and improve performance. You can control cookies through your browser settings.</p>
          <p>To request access, correction, or deletion of your information, contact contact@sjhdev.com.</p>
        </div>
      </div>
    </section>
  );
}

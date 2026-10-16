import type { Metadata } from "next";

export const metadata: Metadata = {alternates:{canonical:"/terms"},
  title: "Terms",
  description: "SJH DEV website terms of service."
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 text-ink">
      <div className="container-page max-w-3xl">
        <h1 className="text-5xl font-bold">Terms of Service</h1>
        <div className="mt-8 space-y-5 leading-8 text-ink/70">
          <p>By using this website, you agree to use the information and materials for lawful personal or business inquiry purposes only.</p>
          <p>Product categories, service descriptions, availability, commercial terms, and program details may change without notice. This website does not process payments or create purchase contracts online.</p>
          <p>All brand content, images, and design materials are provided for demonstration and may be replaced with final client-approved materials before launch.</p>
          <p>For questions about these terms, contact contact@sjhdev.com.</p>
        </div>
      </div>
    </section>
  );
}

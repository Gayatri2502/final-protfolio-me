import type { Metadata } from "next";

import ContactWithGlobe from "@/components/ui/contact-with-globe";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <ContactWithGlobe
      title="Transform Your Business with AI & Scalable Digital Systems"
      subtitle="AI/ML Studio · Contact"
      description="From AI automation to custom SaaS platforms, we help businesses streamline operations, improve efficiency, and scale faster with modern technology."
    />
  );
}
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SJH DEV LIMITED to discuss fresh produce, enterprise hardware, and global trade opportunities."
};

export default function ContactPage() {
  return <ContactSection />;
}

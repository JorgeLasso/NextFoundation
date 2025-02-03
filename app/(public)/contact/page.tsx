import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page Description",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS"],
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Contact Page</h1>
      <p>This is the contact page of the application.</p>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Title",
  description: "About Description",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS"],
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">About Page</h1>
      <p>This is the about page of the application.</p>
    </>
  );
}

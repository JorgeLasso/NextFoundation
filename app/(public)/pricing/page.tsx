import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Title",
  description: "Pricing Description",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS"],
};

export default function PricingPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Pricing Page</h1>
      <p>This is the pricing page of the application.</p>
    </>
  );
}

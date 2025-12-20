// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Corner | Custom Web Apps by Sherif",
  description:
    "High-performance web development studio based in Damietta, Egypt. Specialized in business and medical solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-blue-100">{children}</body>
    </html>
  );
}

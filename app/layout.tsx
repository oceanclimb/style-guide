import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Style Guide",
  description: "Comprehensive design system documentation with all UI components, color tokens, typography, and design patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} style={{ fontFamily: "var(--font-inter), var(--font-sans)" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

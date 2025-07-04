import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolioNew2 - Personal Portfolio",
  description: "A very small portfolio showcasing professional skills, projects, and achievements. Explore my work, experience, and capabilities in a concise and elegant presentation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 transition-colors duration-300`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-grow py-6 sm:py-8 transition-all duration-300 ease-in-out">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
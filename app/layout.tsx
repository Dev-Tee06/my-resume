import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-tee.vercel.app"),
  title: {
    default: "DEV-TEE | Strategic Digital Engineering Studio",
    template: "%s | DEV-TEE",
  },
  description:
    "DEV-TEE builds strategic digital systems that solve business problems, improve user experience, and drive measurable growth.",
  keywords: [
    "DEV-TEE",
    "full-stack developer",
    "Next.js developer",
    "portfolio",
    "web development",
    "SEO optimization",
    "UX strategy",
    "digital agency",
  ],
  openGraph: {
    title: "DEV-TEE | Strategic Digital Engineering Studio",
    description:
      "Premium full-stack development, UX strategy, SEO, and automation systems for measurable growth.",
    url: "https://dev-tee.vercel.app",
    siteName: "DEV-TEE",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV-TEE | Strategic Digital Engineering Studio",
    description:
      "Premium full-stack development, UX strategy, SEO, and automation systems.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DEV-TEE",
    email: "dev.tee01@gmail.com",
    url: "https://dev-tee.vercel.app",
    description:
      "Strategic digital engineering studio building premium websites, automation systems, UX platforms, and SEO-ready digital products.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="site-shell">
          <LoadingScreen />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

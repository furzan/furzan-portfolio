import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// "Davinci" substitute — display serif carrying the brand voice
const davinci = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-davinci",
  display: "swap",
});

// "Helvetica Now" substitute — utility grotesk
const helveticaNow = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-helvetica-now",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furzan Ahmed — AI Engineer",
  description:
    "AI Engineer & CS graduate from Karachi building agentic systems — voice agents, multi-agent pipelines, and RAG. Explore projects, skills, and get in touch.",
  keywords: [
    "Furzan Ahmed",
    "AI Engineer",
    "Machine Learning",
    "LangChain",
    "RAG",
    "Portfolio",
  ],
  openGraph: {
    title: "Furzan Ahmed — AI Engineer",
    description:
      "AI Engineer & CS graduate building agentic systems, voice agents, and RAG pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${davinci.variable} ${helveticaNow.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}

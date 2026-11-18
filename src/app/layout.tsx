import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { asset, company } from "@/lib/site";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", axes: ["opsz"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600"] });

export const viewport: Viewport = { themeColor: "#0b1410" };

export const metadata: Metadata = {
  metadataBase: new URL("https://rylintechnigerialimited.ng"),
  title: `${company.name} | Construction, Consultancy, ICT & General Supplies, Kaduna`,
  description:
    "Rylin Tech Nigeria Limited (RC 1809740) is a multidisciplinary Kaduna firm delivering construction, consultancy, computer IT/ICT, general supplies and general contracts for public and private clients.",
  keywords: ["Rylin Tech", "Rylin Tech Nigeria Limited", "construction company Kaduna", "ICT services Kaduna", "general contractor Nigeria", "engineering consultancy Nigeria", "general supplies Nigeria", "CCTV installation Kaduna"],
  icons: {
    icon: [
      { url: asset("/favicon.ico"), sizes: "any" },
      { url: asset("/favicon.png"), type: "image/png" },
    ],
    apple: asset("/apple-touch-icon.png"),
  },
  openGraph: {
    title: company.name,
    description: "Construction, Consultancy, Computer IT/ICT, General Supplies and General Contracts — one accountable team in Kaduna, Nigeria.",
    type: "website",
    images: [asset("/og.png")],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

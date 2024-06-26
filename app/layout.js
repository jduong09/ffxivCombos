import { Inter } from "next/font/google";
import "./reset.css"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FFXIV Combos",
  description: "Final Fantasy 14 Game Guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

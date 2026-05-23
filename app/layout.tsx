import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800',],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Delivery App",
  description: "Simple food delivery app built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ResponsiveNav />
            {children}
            <ScrollToTop/>
          </ThemeProvider>
      </body>
    </html>
  );
}

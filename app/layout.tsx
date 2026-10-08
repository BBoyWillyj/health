import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import NavbarBar from "./components/Navbar";
import FooterSec from "./components/Footer";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BloomLife | Everyday wellness, your way",
  description:
    "Find thoughtful support for movement, nourishment, and mindful moments with BloomLife.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main">Skip to content</a>
        <NavbarBar />
        {children}
        <FooterSec />
      </body>
    </html>
  );
}

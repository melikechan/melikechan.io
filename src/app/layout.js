import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
  display: "swap",
});

export const metadata = {
  title: "melikechan",
  applicationName: "melikechan",
  description: "melikechan's personal website.",
  referrer: "origin-when-cross-origin",
  creator: "Melike Vurucu (melikechan)",
  publisher: "Melike Vurucu (melikechan)",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "melikechan",
    title: "melikechan",
    description: "melikechan's personal website.",
    images: ["images/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={
          inter.className +
          " bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        }
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

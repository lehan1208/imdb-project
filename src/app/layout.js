import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NextThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDMb Project",
  description: "Movie database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}

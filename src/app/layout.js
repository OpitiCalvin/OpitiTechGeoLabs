import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navigation/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OPITI Inc - Geo Labs",
  description: "Tech and Geo Labs for OPITI Inc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column min-vh-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

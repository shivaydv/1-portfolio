import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","300","500", "700"],
});

export const metadata: Metadata = {
  title: "Shiva Yadav",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-screen min-h-screen  flex flex-col   ">
          <div className="container mx-auto flex-1 flex flex-col">
            <Navbar />          
            {children}     
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

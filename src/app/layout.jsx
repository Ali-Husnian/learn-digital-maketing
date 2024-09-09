import TopNav from "@/shared/components/TopNav";
import "./globals.css";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import TopScrollButton from "@/shared/components/TopScrollButton";
import WhatsappButton from "@/shared/components/WhatsappButton";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Digital Marketing",
  description: "Generated by paperlesssoft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <Navbar />
        {/*
        
        */}
        <Toaster />
        {children}
        <TopScrollButton />
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}

import { Header } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextWrapper from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextWrapper>
          <Header />
          {children}
        </ContextWrapper>
      </body>
    </html>
  );
}

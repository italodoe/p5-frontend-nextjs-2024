import Header from "@/components/HeaderComponent";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/FooterComponent";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "The movie page",
  description: "created to check",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, "flex flex-col ")}>
        <Header></Header>
        <div className="flex-1  md:container mx-auto pt-5">{children}</div>

        <Footer></Footer>
      </body>
    </html>
  );
}

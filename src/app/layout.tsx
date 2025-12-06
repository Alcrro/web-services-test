import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import ReactQueryProvider from "../shared/hooks/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import BoundaryProvider from "@/components/internalDev/BoundaryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BoundaryProvider>
          <ThemeProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ThemeProvider>
        </BoundaryProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TodosStoreProvider } from "@/providers/todos_store_provider";
import { Navbar } from "./navigation/navbar";
import QueryProvider from "./query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo app",
  description: "a place to keep track of all your todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-full dark:bg-slate-900 bg-slate-100`}
        >
          <QueryProvider>
            <Navbar />
            <TodosStoreProvider>{children}</TodosStoreProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

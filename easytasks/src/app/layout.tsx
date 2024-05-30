import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SaludMental from "../components/mentalHealth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyTasks",
  description: "Proyecto final Henry-Gestor de tareas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

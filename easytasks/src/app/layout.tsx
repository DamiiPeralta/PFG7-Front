import type { Metadata } from "next";
import { Averia_Gruesa_Libre } from "next/font/google";
import "./globals.css";

const averia = Averia_Gruesa_Libre({ weight: "400", subsets: ["latin"] });

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
      <body className={averia.className}>{children}</body>
    </html>
  );
}

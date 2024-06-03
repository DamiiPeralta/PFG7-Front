import type { Metadata } from "next";
import { Averia_Gruesa_Libre } from "next/font/google";
import "./globals.css";
import { Navigation } from "./navigation";
<<<<<<< HEAD
import ClientWrapper from "./ClientWrapper";
=======
import { Provider } from "./Providers";
>>>>>>> develop

const averia = Averia_Gruesa_Libre({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyTasks",
  description: "Proyecto final Henry - Gestor de tareas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={averia.className}>
<<<<<<< HEAD
        <ClientWrapper>
          <Navigation />
          {children}
        </ClientWrapper>
=======
        <Provider>
          <Navigation />
          {children}
        </Provider>
>>>>>>> develop
      </body>
    </html>
  );
}

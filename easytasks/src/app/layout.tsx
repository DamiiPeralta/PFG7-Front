import type { Metadata } from "next";
import { Averia_Gruesa_Libre } from "next/font/google";
import "./globals.css";
import { Navigation } from "./navigation";
import ClientWrapper from "./ClientWrapper";
import { Provider } from "./Providers";

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
        <ClientWrapper>
          <Provider>
            <Navigation />
            {children}
          </Provider>
        </ClientWrapper>
      </body >
    </html >
  );
}

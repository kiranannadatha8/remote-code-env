import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Bolt - Build anything",
  description: "Build web and mobile apps with Bolt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gradient-to-b from-gray-900 to-black h-screen">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

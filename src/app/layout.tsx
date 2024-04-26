import "~/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ungovernable Recipes",
  description: "recipes without the annoying ads",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="lemonade">
        <body className={`flex min-h-screen flex-col font-sans ${inter.variable}`}>
          <Navbar />
          <main >
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

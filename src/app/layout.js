import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Next.js + Drupal Site",
  description: "Headless CMS example using Drupal and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-5 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

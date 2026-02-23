import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Meu portfólio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
      </body>
    </html>
  );
}

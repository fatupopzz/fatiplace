import "./globals.css";

export const metadata = {
  title: "fatiplace ✦ Fatima Navarro",
  description: "Portfolio personal de Fatima Navarro — CS & IT Student @ UVG.",
  icons: {
    icon: "/images/estrella.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

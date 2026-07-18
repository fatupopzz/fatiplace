import "./globals.css";

export const metadata = {
  title: "fati@archlinux ~ % portfolio",
  description: "Portafolio personal de Fátima Navarro — CS @ UVG — ilustración & código",
  icons: {
    icon: "/images/estrella.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

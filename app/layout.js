import "./globals.css";

export const metadata = {
  title: "fatiplace ✦ Fatima Navarro",
  description: "Portafolio personal de Fatima Navarro — CS @ UVG — ilustración & código",
  icons: {
    icon: "/images/estrella.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
        fontSize: "11px",
        backgroundColor: "#3a6ea5",
        color: "#1a1a1a",
        paddingBottom: "30px",
      }}>
        {children}
      </body>
    </html>
  );
}

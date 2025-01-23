import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Head from "next/head";
import Navebar from "./components/Navbar";

// Importa as fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Recanto dos doces",
  description: "Recanto dos doces mil maravilhas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-pt">
      <Head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: "url('/back.webp')", // Substitua pelo caminho correto
          backgroundSize: "cover", // A imagem cobre todo o background
          backgroundPosition: "center", // Centraliza a imagem
          backgroundRepeat: "no-repeat", // Evita que a imagem se repita
          minHeight: "100vh", // Garante que o fundo ocupe toda a altura da página
          overflowX: "hidden", // Evita que a página seja scrollável horizontalmente
          color: "var(--text-foreground)", // Colore os textos com a cor definida
          fontFamily: "var(--font-geist-sans), Arial, sans-serif", // Define a fonte principal
          fontSize: "16px", // Define o tamanho da fonte
          lineHeight: "1.6", // Define a altura da linha
          fontWeight: "400", // Define o peso da fonte
          letterSpacing: "-0.02em", // Define a espaçamento entre as letras
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Define uma sombra para os textos
          transition: "color 0.3s", // Define uma transição para o cor dos textos
          WebkitTapHighlightColor: "transparent", // Evita o efeito de destaque do link quando clicado
          
        }}
      >
        <Navebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Roaming Routes",
  description: "Roamig Routes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7865735760405609"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

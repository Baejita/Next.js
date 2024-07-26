// import { Josefin_Sans } from "next/font/google";

// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-primary-900 px-[15vw]">
        <Header />
        {children}
      </body>
    </html>
  );
}

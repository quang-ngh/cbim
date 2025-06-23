"use client";
import Header from "@/components/header";

import { useState } from "react";
import Footer from "@/components/footer";
import Menu from "../menu";
export default function FullPagePopupWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
      <Footer />
    </>
  );
}

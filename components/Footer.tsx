import React from "react";
import Logo from "./svgs/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-[0.625rem] mt-auto">
      <div className="container-full text-center">
        <Link href={"/"}>
          <Logo width={142} className="mx-auto" />
        </Link>
        <p className="uppercase mt-1 text-[0.625rem]">Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

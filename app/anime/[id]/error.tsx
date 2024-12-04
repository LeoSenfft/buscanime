"use client"; // Error boundaries must be Client Components

import Link from "next/link";

export default function Error() {
  return (
    <div className="text-center mt-auto">
      <h1 className="mb-8 text-2xl text-danger">Anime não econtrado!</h1>

      <Link className="btn-primary" href={"/"}>
        Voltar para home
      </Link>
    </div>
  );
}

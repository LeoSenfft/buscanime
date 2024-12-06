import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  categories?: Array<string>;
  averageScore?: number;
  imageSrc: string;
}

export default function Card({ title, categories, averageScore, imageSrc }: CardProps) {
  let colorStyle = "bg-success";

  if (averageScore) {
    if (averageScore < 50) {
      colorStyle = "bg-danger";
    } else if (averageScore < 80) {
      colorStyle = "bg-warning";
    }
  }

  return (
    <article className="Card relative flex flex-col w-full p-2 aspect-square rounded-lg text-white overflow-hidden after:content after:bg-card-mask after:absolute after:inset-0 after:z-[-1]">
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={true}
          sizes="20rem"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl text-ellipsis line-clamp-3" data-testid="card-title">
          {title}
        </h3>

        {categories && (
          <ul className="flex gap-2 flex-wrap mt-3">
            {categories.map((category) => (
              <li
                data-testid="card-category"
                key={category}
                className="rounded py-1 px-2 bg-primaryLight text-xs"
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {averageScore && (
        <div
          data-testid="card-score"
          className={`w-fit py-1 px-2 ml-auto mt-auto rounded ${colorStyle} text-2xl`}
        >
          {averageScore}%
        </div>
      )}
    </article>
  );
}

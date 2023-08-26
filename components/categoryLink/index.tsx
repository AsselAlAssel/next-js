import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const CategoryLink = ({
  category,
  image,
  title,
}: {
  category: string;
  image: StaticImageData;
  title: string;
}) => {
  return (
    <Link
      href={`/products/${category}`}
      className="flex flex-col items-center justify-center  gap-2 hover:scale-105
      transform transition duration-300 ease-in-out "
    >
      <Image
        src={image}
        alt={"women image category"}
        placeholder="blur"
        className="w-[100px] h-[100px] object-cover rounded-full "
      />
      <span className="first-letter:uppercase">{title}</span>
    </Link>
  );
};

export default CategoryLink;

import Image from "next/image";
import homeImage from "../public/homePage.jpg";
import React from "react";
import Link from "next/link";
import womenImage from "@/public/women.jpg";
import memImage from "@/public/men.jpg";
import electronicsImage from "@/public/electro.jpg";
import jeweleryImage from "@/public/jewelery.jpg";
import CategoryLink from "@/components/categoryLink";

export default function Home() {
  return (
    <div>
      <Link href={"/products/women's clothing"}>
        <Image src={homeImage} alt={"Home"} placeholder="blur" />
      </Link>
      <div>
        <h1 className="text-2xl font-bold my-5 text-center">
          Shop by Category
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        <CategoryLink
          category={"women's clothing"}
          image={womenImage}
          title={"Women"}
        />

        <CategoryLink
          title={"men"}
          category={"men's clothing"}
          image={memImage}
        />
        <CategoryLink
          title={"electronics"}
          category={"electronics"}
          image={electronicsImage}
        />
        <CategoryLink
          title={"jewelery"}
          category={"jewelery"}
          image={jeweleryImage}
        />
      </div>
    </div>
  );
}

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProductCard from "./ProductCard";

const Product = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400;
    }
  };

  return (
    <div className="product">
      <div className="topoption">
        <p className="Sectiontitle">Product Range</p>
        <Link className="viewall" href="/" passHref>
          View All
        </Link>
      </div>
      <div
        ref={scrollContainerRef}
        className="productcarousel"
      >
        <ProductCard/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex">
        <button onClick={scrollLeft} className="w-[3.3vw] h-[3.3vw] mt-14 m-2 flex justify-center items-center rounded-full bg-white filter drop-shadow-sm">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="w-[3.3vw] h-[3.3vw] mt-14 m-2 flex justify-center items-center rounded-full bg-white filter drop-shadow-sm">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Product;

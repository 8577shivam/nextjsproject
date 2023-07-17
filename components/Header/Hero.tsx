import React from "react";
import Carousel from "./Carousal";


export default function Hero() {
  const slides = [
    {
      imgsrc: "images/img1.jpg",
    },
    {
      imgsrc: "images/img2.jpg",
    },
    {
      imgsrc: "images/img3.jpg",
    },
    {
      imgsrc: "images/img4.jpg",
    },
    {
      imgsrc: "images/img5.jpg",
    },
    {
      imgsrc: "images/img6.jpg",
    },
  ];

  
  return (
   <div>
    <div className="containerstyles">
    <Carousel slides={slides}/>
    </div>
   </div>
  );
}

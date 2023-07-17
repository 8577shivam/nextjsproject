"use client"
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


interface Slide {
  imgsrc: string;
}

interface CarouselProps {
  slides: Slide[];
  
}
interface styling{
  height:string,
  position:string
}

export default function Carousel({
  slides,
}: CarouselProps) {
  const[currentIndex,setCurrentIndex]=useState(0)
 
  const slidestyle={
    backgroundImage:`url(${slides[currentIndex].imgsrc})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    overflow:"hidden",
  }
  function gotoslide(index:number){
    setCurrentIndex(index)
  }
  return(
    <div className="sliderstyle">
      <div style={slidestyle} className="w-[100%] h-[100%] rounded-[32px]"></div>
      <div className="dotscontanier">{
        slides.map((slide,index)=>{
          return(
            <div className="dotsstyle" key={index} onClick={()=>gotoslide(index)}>•</div>
          )
        })
        }
        
        </div>
    </div>
  )
}

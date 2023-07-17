import React from "react";
import Gridsection from "./Gridsection";
interface gridobj {
    id:number,
  imgsrc: string,
  title: string,
  info: string,
}
const griddata:gridobj[]=[
    {
        id:1,
        imgsrc:"images/bottle.png",
        title:"Lorem",
        info:"Lorem ipsum dolor sit amet consectetur. Vitae turpis vel."

    },
    {
        id:2,
        imgsrc:"images/bottle.png",
        title:"Lorem",
        info:"Lorem ipsum dolor sit amet consectetur. Vitae turpis vel."

    },
    {
        id:3,
        imgsrc:"images/bottle.png",
        title:"Lorem",
        info:"Lorem ipsum dolor sit amet consectetur. Vitae turpis vel."

    },
    {
        id:4,
        imgsrc:"images/bottle.png",
        title:"Lorem",
        info:"Lorem ipsum dolor sit amet consectetur. Vitae turpis vel."

    },
    {
        id:5,
        imgsrc:"images/bottle.png",
        title:"Lorem",
        info:"Lorem ipsum dolor sit amet consectetur. Vitae turpis vel."

    },
]
const ProductGrid:React.FC = () => {
  return <>
  <div className="gridboxes">
    {
        griddata.map((data)=>{
            return <Gridsection key={data.id} data={data}/>
        })
    }
  </div>
  </>
};

export default ProductGrid;

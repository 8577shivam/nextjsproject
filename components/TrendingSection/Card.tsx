import React from "react";

interface CardData {
  id: number;
  heading: string;
  desc?: string;
  button?:string
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return <div className={`trendingcard${data.id} trendingcard`}>
    <div className="trendingtext">
    <p className="heading">{data.heading}</p>
    {data.desc&&<p className="desc">{data.desc}</p>}
    {data.button && <button>{data.button}</button>}
    </div>
    
  </div>;
};

export default Card;
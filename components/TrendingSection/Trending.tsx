import React from "react";
import Card from "./Card";

interface CardData {
  id: number;
  heading: string;
  desc?: string;
  button?:string
}

const dataobj: CardData[] = [
  {
    id: 1,
    heading:
      "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquam justo vulputate augue.",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Sed sit et massa massa. Odio donec vitae vestibulum ut. Egestas mauris enim eu varius ut.",
      button:"Read more"
    
  },
  {
    id: 2,
    heading:
      "Lorem ipsum dolor sit amet consectetur. Et",
    },
  {
    id: 3,
    heading:
      "Lorem ipsum dolor sit amet consectetur. Ac",
   },
  {
    id: 4,
    heading:
      "Lorem ipsum dolor sit amet consectetur. Sit ",
    },
  {
    id: 5,
    heading:
      "Lorem ipsum dolor sit amet consectetur.",
    },
  
];

const Trending: React.FC = () => {
  return (
    <div  className="trending mt-[120px]">
      <div className="topopt">
        <p className="trndname">Trending Blogs</p>
      </div>
      <div className="trendingcards mt-20">
        {dataobj.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
      <p className="viewall text-center mt-16">View All</p>
    </div>
  );
};

export default Trending;

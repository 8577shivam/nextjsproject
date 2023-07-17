"use client";

import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] =[
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
  },
];

const FAQSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 3;

  const handleClickNext = () => {
    const totalPages = Math.ceil(faqData.length / faqsPerPage);
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const handleClickPrev = () => {
    const totalPages = Math.ceil(faqData.length / faqsPerPage);
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const startIndex = (currentPage - 1) * faqsPerPage;
  const visibleFAQs = faqData.slice(startIndex, startIndex + faqsPerPage);

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };

  return (
    <div className="faqsection">
      <h2>FAQ</h2>
      <ol type="1">
        {visibleFAQs.map((item, index) => (
          <li key={index}>
            <div className="upperoption">

            <span>{index+1}.{item.question}</span>
            <button
              onClick={() => handleItemClick(index)}
              className={selectedItem === index ? "active" : ""}
            >
              +
            </button>
            </div>
            <div
              className={`answer ${
                selectedItem === index ? "open" : "closed"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="flex gap-4 mt-[40px]">
        <button onClick={handleClickNext} className="w-12 h-12  flex justify-center items-center rounded-full bg-white filter drop-shadow-sm">
          <FiChevronLeft />
        </button>
        <button onClick={handleClickPrev} className="w-12 h-12 flex justify-center items-center rounded-full bg-white filter drop-shadow-sm">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FAQSection;

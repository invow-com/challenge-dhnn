import React, { useEffect } from "react";
import TextBlock from "./TextBlock";
import { Card } from "./Card";
import { Slider } from "./Slider";
import { CardProps } from "@/interfaces/interfaces";
import { data, mockedCards } from "@/data/data";

interface SliderSectionProps {
  cards: CardProps[];
}

const SliderSection: React.FC<SliderSectionProps> = ({ cards }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-auto h-auto rounded-b-lg sm:rounded-bl-none sm:rounded-tr-lg overflow-hidden">
      <div className="flex w-full sm:max-w-[810px] pt-[60px] pb-[120px] sm:py-0 sm:pr-[306px] sm:pl-[120px] sm:bg-gray-100 sm:items-center">
        <div className="sm:w-[384px] px-4 pb-4">
          <TextBlock
            title={data.title}
            description={data.description}
            category={data.category}
            expanded={true}
            type=""
          />
        </div>
      </div>
      <div className="flex flex-col pl-4 sm:pl-0 sm:py-[100px] min-w-80 -mt-24 sm:mt-0 sm:-ml-72 h-auto overflow-hidden ">
        {cards.length === 0 ? (
          <Slider options={{ align: "center" }}>
            {mockedCards &&
              mockedCards.map((testimonial, i) => (
                <Card key={i} {...testimonial} />
              ))}
          </Slider>
        ) : (
          <Slider options={{ align: "center" }}>
            {cards && cards.map((card, i) => <Card key={card.id} {...card} />)}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default SliderSection;

import React from "react";

type ContentType = { img: string; text: string };
interface Content {
  content: ContentType;
}

export const ItemCard: React.FC<Content> = ({ content }) => {
  return (
    <div
      style={{ height: 300, width: 300 }}
      className="flex flex-col items-center justify-end p-6"
    >
      <div>
        <img src={content.img} />
      </div>
      <h4 className="font-serif">{content.text}</h4>
    </div>
  );
};

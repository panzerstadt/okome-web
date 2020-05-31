import React from "react";
import { Button } from "@shopify/polaris";

type ContentType = { img: string; text: string; productId?: string };
interface Content {
  content: ContentType;
  onClick?: (id: string) => void;
}

export const ItemCard: React.FC<Content> = ({ content, onClick }) => {
  const handleClick = () => {
    onClick && onClick(content.productId);
  };

  return (
    <div
      style={{ height: 300, width: 300 }}
      className="flex flex-col items-center justify-end p-6"
    >
      <div>
        <img src={content.img} />
      </div>
      <h4 className="font-serif">{content.text}</h4>
      <br />
      {onClick && (
        <Button primary onClick={handleClick}>
          Add to Cart
        </Button>
      )}
    </div>
  );
};

import React from "react";
import { CardType } from "./Trending";
import Image from "next/image";

interface CardProps extends CardType {}

const Card: React.FC<CardProps> = ({
  name,
  nftImage,
  price,
  tokenId,
  unit,
}) => {
  return (
    <div>
      <Image src={nftImage} alt={tokenId} height="100" width="100" />
      <div>
        <h2>{name}</h2>
        <h3>
          {price} {unit}
        </h3>
      </div>
      <button>Add to card</button>
    </div>
  );
};

export default Card;

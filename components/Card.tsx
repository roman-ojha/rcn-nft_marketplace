import React from "react";
import { CardType } from "./Trending";
import Image from "next/image";
import styles from "../styles/components/card.module.scss";

interface CardProps extends CardType {}

const Card: React.FC<CardProps> = ({
  name,
  nftImage,
  price,
  tokenId,
  unit,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.nft_image}>
        <Image
          src={nftImage}
          alt={tokenId}
          height="300"
          width="300"
          objectFit="cover"
        />
      </div>
      <div className={styles.price_title_container}>
        <h2>{name}</h2>
        <h3>
          {price} {unit}
        </h3>
      </div>
      <button className={styles.add_to_card_button}>Add to card</button>
    </div>
  );
};

export default Card;

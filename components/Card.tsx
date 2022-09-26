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
        <Image src={nftImage} alt={tokenId} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.price_title_container}>
        <h2>{name}</h2>
        <div className={styles.price_title_container__price}>
          <h3>{price}</h3>
          <h4>{unit}</h4>
        </div>
      </div>
      <button className={styles.add_to_card_button}>Add to card</button>
    </div>
  );
};

export default Card;

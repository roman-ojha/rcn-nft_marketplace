import type { NextPage, NextComponentType } from "next";
import { useState } from "react";
import styles from "../styles/components/trending.module.scss";
import Card from "./Card";

export interface CardType {
  tokenId: string;
  name: string;
  price: number;
  unit: "RCN";
  nftImage: string;
}

const Trending: NextComponentType = () => {
  const [cards, setCards] = useState<CardType[]>([
    {
      tokenId: "1",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
    {
      tokenId: "2",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
    {
      tokenId: "3",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
    {
      tokenId: "4",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
    {
      tokenId: "5",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
    {
      tokenId: "6",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
    {
      tokenId: "7",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
    {
      tokenId: "8",
      name: "google",
      price: 3,
      unit: "RCN",
      nftImage:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
    },
  ]);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Trending</h1>
      <div className={styles.container__grid_card}>
        {cards.map((card) => (
          <Card
            key={card.tokenId}
            tokenId={card.tokenId}
            name={card.name}
            price={card.price}
            unit={card.unit}
            nftImage={card.nftImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;

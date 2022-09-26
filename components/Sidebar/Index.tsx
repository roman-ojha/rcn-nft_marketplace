import type { NextPage } from "next";
import styles from "../../styles/components/sidebar.module.scss";

const Index: NextPage = () => {
  return (
    <aside className={styles.container}>
      <ul className={styles.main}>
        <li className={styles.main__trending}>Trending</li>
        <li className={styles.main__top}>Top</li>
        <li className={styles.main__new}>New</li>
        <li className={styles.main__collection}>Collection</li>
        <li className={styles.main__favorite}>Favorite</li>
      </ul>
    </aside>
  );
};

export default Index;

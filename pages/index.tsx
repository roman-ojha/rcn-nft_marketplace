import type { NextPage } from "next";
import Header from "../components/Header/Index";
import styles from "../styles/pages/home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.container__feed}></div>
      </div>
    </>
  );
};

export default Home;

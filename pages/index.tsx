import type { NextPage } from "next";
import Header from "../components/Header/Index";
import styles from "../styles/pages/home.module.scss";
import SideBar from "../components/Sidebar/Index";
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.container__main}>
          <Trending />
          <SideBar />
        </main>
      </div>
    </>
  );
};

export default Home;

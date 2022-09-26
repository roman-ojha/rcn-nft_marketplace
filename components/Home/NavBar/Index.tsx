import type { NextPage } from "next";
import styles from "../../../styles/components/Home/navbar.module.scss";
import Image from "next/image";
import appIcon from "../../../assets/images/appIcon.png";
import constants from "../../../constants/Index";

const Index: NextPage = () => {
  return (
    <>
      <section id="navbar" className={styles.container}>
        <div className={styles.logo}>
          <Image src={appIcon} alt={constants.appName} />
          <h1>{constants.appName}</h1>
        </div>
      </section>
    </>
  );
};

export default Index;

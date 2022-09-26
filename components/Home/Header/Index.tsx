import type { NextPage } from "next";
import styles from "../../../styles/components/Home/header.module.scss";
import Image from "next/image";
import appIcon from "../../../assets/images/appIcon.png";
import constants from "../../../constants/Index";
import { Icon } from "@iconify/react";

const Index: NextPage = () => {
  return (
    <>
      <section id="navbar" className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logo__icon}>
            <Image src={appIcon} alt={constants.appName} />
          </div>
          <h1 className={styles.logo__title}>{constants.appName}</h1>
        </div>
        <form className={styles.search_bar}>
          <Icon icon="bi:search" className={styles.search_bar__icon} />
          <input type="text" placeholder="Search Items" />
        </form>
        <div className={styles.navbar}></div>
        <div className={styles.theme_button_and_profile}></div>
      </section>
    </>
  );
};

export default Index;

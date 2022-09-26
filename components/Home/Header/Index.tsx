import type { NextPage } from "next";
import styles from "../../../styles/components/Home/header.module.scss";
import Image from "next/image";
import appIcon from "../../../assets/images/appIcon.png";
import constants from "../../../constants/Index";
import { Icon } from "@iconify/react";
import ThemeButton from "./ThemeButton";

const Index: NextPage = () => {
  const profileImage =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";

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
        <ul className={styles.navbar}>
          <li>Explore</li>
          <li>Create</li>
          <li>Card</li>
        </ul>
        <div className={styles.theme_button_and_profile}>
          <ThemeButton />
          <div className={styles.profile_image}>
            <Image src={profileImage} alt="profile" height="100" width="100" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

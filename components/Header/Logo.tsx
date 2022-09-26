import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/components/header.module.scss";
import appIcon from "../../assets/images/appIcon.png";
import constants from "../../constants/Index";

const Logo: NextPage = () => {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.logo__icon}>
          <Image src={appIcon} alt={constants.appName} />
        </div>
        <h1 className={styles.logo__title}>{constants.appName}</h1>
      </div>
    </>
  );
};

export default Logo;

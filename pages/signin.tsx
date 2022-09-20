import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/pages/signin.module.scss";
import appIcon from "../assets/images/appIcon.png";

const Signin: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["left-part"]}>
          <div className={styles["left-part-inner-component"]}>
            <div className={styles["app-icon"]}>
              <Image src={appIcon} alt="login" />
            </div>
            <h1>Sign In</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/pages/signin.module.scss";
import appIcon from "../assets/images/appIcon.png";
import { Icon } from "@iconify/react";
import loginImage from "../assets/images/login.png";

const Signin: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_part}>
          <div className={styles.left_part_inner_component}>
            <div className={styles.app_icon}>
              <Image src={appIcon} alt="RCN" />
            </div>
            <div className={styles.sign_in_container}>
              <h1>Sign In</h1>
              <div className={styles.sign_in_container_button_container}>
                <Icon icon="logos:metamask-icon" />
                <h2>Connect Wallet</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_part}>
          <div className={styles.login_image}>
            <Image src={loginImage} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

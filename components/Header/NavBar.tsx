import type { NextPage } from "next";
import styles from "../../styles/components/header.module.scss";

const Navbar: NextPage = () => {
  return (
    <>
      <ul className={styles.navbar}>
        <li>Explore</li>
        <li>Create</li>
        <li>Card</li>
      </ul>
    </>
  );
};

export default Navbar;

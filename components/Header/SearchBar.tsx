import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import styles from "../../styles/components/header.module.scss";

const SearchBar: NextPage = () => {
  return (
    <>
      <form className={styles.search_bar}>
        <Icon icon="bi:search" className={styles.search_bar__icon} />
        <input type="text" placeholder="Search Items" />
      </form>
    </>
  );
};

export default SearchBar;

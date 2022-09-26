import type { NextPage } from "next";
import styles from "../../styles/components/header.module.scss";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import SearchBar from "./SearchBar";
import Navbar from "./NavBar";
import Logo from "./Logo";

const Index: NextPage = () => {
  const profileImage =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";

  return (
    <>
      <header id="navbar" className={styles.container}>
        <Logo />
        <SearchBar />
        <Navbar />
        <div className={styles.theme_button_and_profile}>
          <ThemeButton />
          <div className={styles.profile_image}>
            <Image src={profileImage} alt="profile" height="100" width="100" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;

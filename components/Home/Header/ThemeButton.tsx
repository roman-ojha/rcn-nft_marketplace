import { MouseEventHandler, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import styles from "../../../styles/components/Home/header.module.scss";

const ThemeButton: NextPage = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleThemeMode: MouseEventHandler<HTMLDivElement> = (e) => {
    const element = e.target as HTMLDivElement;
    if (element.id === "theme-button-container") {
      if (theme === "light") {
        setTheme("dark");
      } else if (theme === "dark") {
        setTheme("light");
      }
    }
  };
  return (
    <>
      <div
        id="theme-button-container"
        className={`${styles.theme_button_container} ${
          theme === "light" ? styles.light_theme_mode : styles.dart_theme_mode
        }`}
        // ref={theme_button_container}
        onClick={toggleThemeMode}
      >
        <button
          id="theme-button"
          className={styles.theme_button_container__theme_button}
        >
          {theme === "light" ? (
            <Icon
              id="theme-button-icon"
              icon="carbon:light-filled"
              className={styles.theme_button_container__icon}
            />
          ) : (
            <Icon
              id="theme-button-icon"
              icon="ic:baseline-dark-mode"
              className={styles.theme_button_container__icon}
            />
          )}
        </button>
      </div>
    </>
  );
};

export default ThemeButton;

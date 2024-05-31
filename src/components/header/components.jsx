"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Autorization } from "../autorization/autorization";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={classNames(styles.root)}>
      <Link
        href="/"
        className={
          pathname === "/" ? classNames(styles.tab, styles.active) : styles.tab
        }
      >
        Home
      </Link>

      <Link
        href="/restaurants"
        className={
          pathname === "/restaurants"
            ? classNames(styles.tab, styles.active)
            : styles.tab
        }
      >
        Restaurants
      </Link>
      <Autorization />
    </header>
  );
};

"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const RestaurantTab = ({ restaurant, className }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/restaurants/${restaurant.id}`);
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className={classNames(styles.tab, className, {
        [styles.active]: isActive,
      })}
    >
      {restaurant.name}
    </Link>
  );
};

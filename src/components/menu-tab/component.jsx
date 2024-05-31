"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const MenuTab = ({ restaurantId, className }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/restaurants/${restaurantId}/menu`);

  return (
    <div>
      <Link
        href={`/restaurants/${restaurantId}/menu`}
        className={classNames(styles.tab, className, {
          [styles.active]: isActive,
        })}
      >
        Menu
      </Link>
    </div>
  );
};

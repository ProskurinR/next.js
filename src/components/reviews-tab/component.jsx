"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const ReviewsTab = ({ restaurantId, className }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/restaurants/${restaurantId}/reviews`);

  return (
    <div>
      <Link
        href={`/restaurants/${restaurantId}/reviews`}
        className={classNames(styles.tab, className, {
          [styles.active]: isActive,
        })}
      >
        Reviews
      </Link>
    </div>
  );
};

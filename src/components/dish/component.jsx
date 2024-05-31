import classNames from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Dish = ({ dish }) => {
  return (
    <div>
      <Link href={`/dish/${dish.id}`} className={classNames(styles.tab)}>
        {dish.name}
      </Link>
    </div>
  );
};

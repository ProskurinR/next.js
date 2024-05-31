import classNames from "classnames";
import styles from "./styles.module.scss";
import { MenuTab } from "../menu-tab/component";
import { ReviewsTab } from "../reviews-tab/component";

export const MenuReviewsTabs = ({ restaurantId }) => {
  return (
    <div className={classNames(styles.root)}>
      <MenuTab restaurantId={restaurantId} className={styles.tab} />
      <ReviewsTab restaurantId={restaurantId} className={styles.tab} />
    </div>
  );
};

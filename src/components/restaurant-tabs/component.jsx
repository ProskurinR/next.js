import styles from "./styles.module.scss";
import classNames from "classnames";
import { RestaurantTab } from "../restaurant-tab/component";

export const RestaurantTabs = ({ restaurants }) => {
  return (
    <div>
      <div className={classNames(styles.root)}>
        {restaurants.map((restaurant) => (
          <RestaurantTab
            key={restaurant.id}
            restaurant={restaurant}
            className={styles.tab}
          />
        ))}
      </div>
    </div>
  );
};

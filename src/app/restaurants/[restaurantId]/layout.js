import { getRestaurantById } from "@/services/api";
import Link from "next/link";
import styles from "./styles.module.scss";
import { MenuReviewsTabs } from "@/components/menu-reviews-tabs/component";

export default async function RestaurantLayout({
  children,
  params: { restaurantId },
}) {
  const restaurant = await getRestaurantById(restaurantId);

  if (!restaurant) {
    return <div>No data</div>;
  }
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <MenuReviewsTabs restaurantId={restaurantId} />
      </div>
      {children}
    </div>
  );
}

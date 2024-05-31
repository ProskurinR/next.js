import { Header } from "@/components/header/components";
import { RestaurantTabs } from "@/components/restaurant-tabs/component";
import { getRestaurants } from "@/services/api";

export default async function RestaurantsLayout({ children }) {
  const restaurants = await getRestaurants();
  return (
    <div>
      <Header />
      <RestaurantTabs restaurants={restaurants} />
      {children}
    </div>
  );
}

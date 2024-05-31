import { Menu } from "@/components/menu/component";
import { getDishes } from "@/services/api";
import React from "react";

const MenuPage = async ({ params: { restaurantId } }) => {
  const dishes = await getDishes(restaurantId);

  if (!dishes) {
    return <div>No data</div>;
  }

  return (
    <div>
      <Menu dishes={dishes} />
    </div>
  );
};
export default MenuPage;

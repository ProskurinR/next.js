import { SelectedDish } from "@/components/selected-dish/component";
import { getDishById } from "@/services/api";
import React from "react";

const SelectedDishPage = async ({ params: { dishId } }) => {
  const dish = await getDishById(dishId);

  if (!dish) {
    return <div>No data</div>;
  }

  return (
    <div>
      <SelectedDish dish={dish} />
    </div>
  );
};
export default SelectedDishPage;

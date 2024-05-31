"use client";

import { useRouter } from "next/navigation";
import React from "react";

const RestaurantPage = ({ params: { restaurantId } }) => {
  const router = useRouter();
  router.push(`/restaurants/${restaurantId}/menu`);
  return <div></div>;
};

export default RestaurantPage;

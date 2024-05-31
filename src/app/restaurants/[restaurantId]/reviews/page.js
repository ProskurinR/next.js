import { Reviews } from "@/components/reviews/component";
import { getReviews } from "@/services/api";
import React from "react";

const ReviewsPage = async ({ params: { restaurantId } }) => {
  const reviews = await getReviews(restaurantId);
  if (!reviews) {
    return <div>No data</div>;
  }

  return (
    <div>
      <Reviews reviews={reviews} restaurantId={restaurantId} />
    </div>
  );
};
export default ReviewsPage;

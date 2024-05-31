import { NewReviewForm } from "../new-review-form/component";
import { User } from "../user/conponent";

export const Reviews = ({ reviews, restaurantId }) => {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.text}
            <User userId={review.userId} />
          </li>
        ))}
      </ul>
      <NewReviewForm restaurantId={restaurantId} />
    </div>
  );
};

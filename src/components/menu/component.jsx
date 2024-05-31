import { Dish } from "../dish/component";

export const Menu = ({ dishes }) => {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};

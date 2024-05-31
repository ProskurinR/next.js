"use client";

import classNames from "classnames";
import styles from "./styles.module.scss";
import { Button } from "../button/component";
import { useCurrentUser } from "@/contexts/user";
import { useDispatch, useSelector } from "react-redux";
import { selectDishAmount } from "@/redux/ui/cart/selectors";
import { decrementProduct, incrementProduct } from "@/redux/ui/cart";
import { SIZES } from "@/constants/sizes";

export const SelectedDish = ({ dish }) => {
  const { user } = useCurrentUser();

  const dispatch = useDispatch();

  const amount = useSelector((state) => selectDishAmount(state, dish.id));

  const increment = () => dispatch(incrementProduct(dish.id));
  const decrement = () => dispatch(decrementProduct(dish.id));

  const { name, price, ingredients } = dish;

  return (
    <div>
      <h2>selected dish</h2>
      <div className={classNames(styles.tab)}>Name: {name}</div>
      <div className={classNames(styles.tab)}>Price: {price}</div>
      <div className={classNames(styles.tab)}>
        Ingredients: {ingredients.join(", ")}
      </div>
      {!!user && (
        <div>
          <Button
            onClick={increment}
            disabled={amount === 5}
            size={SIZES.s}
            className={styles.action}
          >
            +
          </Button>
          <span>{amount}</span>
          <Button
            onClick={decrement}
            disabled={amount === 0}
            size={SIZES.s}
            className={styles.action}
          >
            –
          </Button>
        </div>
      )}
    </div>
  );
};

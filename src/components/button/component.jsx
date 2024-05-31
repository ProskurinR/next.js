"use client";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size = "l",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, className, styles[size], {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};

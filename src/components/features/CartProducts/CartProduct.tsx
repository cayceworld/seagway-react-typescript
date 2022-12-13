import { useDispatch } from "react-redux";
import styles from "./CartProducts.module.scss";
import { addAmount, removeAmount, removeItem } from "../../../redux/cartRedux";
import clsx from "clsx";
import { BsFillTrashFill } from "react-icons/bs";
import { CartItem } from "../../../types/CartItem";

export const CartProduct: React.FC<CartItem> = (props) => {
  const dispatch = useDispatch();

  const { amount, inStock, image, id, title, category, price } = props;

  const addOne = () => {
    if (amount < 10 && amount < inStock) {
      dispatch(addAmount(id, 1));
    }
  };

  const removeOne = () => {
    if (amount > 1) dispatch(removeAmount(id, 1));
  };

  const remove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.CartProduct__item}>
      <div className={styles.CartProduct__image}>
        {category === "kickscooter" && (
          <img
            className={styles.navicons__img}
            src={`${process.env.PUBLIC_URL}/images/Kickscooters List/${image}`}
          />
        )}
        {category === "accessory" && (
          <img
            className={styles.navicons__img}
            src={`${process.env.PUBLIC_URL}/images/Accessories/${image}`}
          />
        )}
      </div>
      <div className={styles.CartProduct__title}>{title}</div>
      <div className={styles.CartProduct__amount}>
        <div className={styles.CartProduct__value}>{amount}</div>
        <div className={styles.CartProduct__change}>
          <div
            onClick={addOne}
            className={clsx(
              amount == 10 && styles.CartProduct__change_disabled
            )}
          >
            +
          </div>
          <div
            onClick={removeOne}
            className={clsx(amount == 1 && styles.CartProduct__change_disabled)}
          >
            -
          </div>
        </div>
      </div>
      <div className={styles.CartProduct__price}>${price * amount}</div>
      <BsFillTrashFill
        onClick={remove}
        className={styles.CartProduct__icon}
        size="20px"
      />
    </div>
  );
};

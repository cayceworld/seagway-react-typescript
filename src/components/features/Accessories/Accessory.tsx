import styles from "./AccessoriesList.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  addToCart,
  getCartProducts,
  addAmount,
} from "../../../redux/cartRedux";
import { useSelector } from "react-redux";
import { CartItem } from "../../../types/CartItem";
import { AccessoriesProduct } from "../../../types/ProductType";

export const Accessory: React.FC<AccessoriesProduct> = ({
  id,
  title,
  image,
  price,
  inStock,
  description,
}) => {
  const cart: CartItem[] = useSelector(getCartProducts);

  const dispatch = useDispatch();

  const addProduct = () => {
    const addedItem = cart.find((item) => item.id === id);

    if (!addedItem) {
      dispatch(
        addToCart({
          title,
          id,
          image,
          price,
          category: "accessory",
          amount: 1,
          inStock: inStock,
        })
      );
    } else if (addedItem.amount <= 9 && addedItem.amount < addedItem.inStock) {
      dispatch(addAmount(id, 1));
    }
  };

  return (
    <div className={styles.Accessory}>
      <div className={styles.Accessory__image}>
        <img src={`${process.env.PUBLIC_URL}/images/Accessories/${image}`} />
      </div>
      <div className={styles.Accessory__title}>{title}</div>
      <div className={styles.Accessory__description}>{description}</div>
      <div className={styles.Accessory__price}>${price}</div>
      <div className={styles.Accessory__button}>
        <button
          onClick={addProduct}
          disabled={!inStock}
          className={clsx(styles.btn, !inStock && styles.btn_disabled)}
        >
          add to card
        </button>
      </div>
    </div>
  );
};

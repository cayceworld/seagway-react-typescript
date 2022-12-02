import { useSelector } from "react-redux";
import { getCartProducts } from "../../../redux/cartRedux";
import styles from "./CartProducts.module.scss";
import "../../../../node_modules/rc-input-number/assets/index.css";
import { CartProduct } from "./CartProduct";
import shortid from "shortid";

const CartProducts = () => {
  const cart = useSelector(getCartProducts);

  let sum = 0;

  cart.forEach((item) => {
    sum += item.price * item.amount;
  });

  return (
    <div className={styles.CartProducts}>
      {cart.length <= 0 ? (
        <div className={styles.CartProducts__empty}>Cart is empty</div>
      ) : (
        cart.map((item) => (
          <CartProduct
            key={shortid.generate()}
            image={item.image}
            title={item.title}
            amount={item.amount}
            price={item.price}
            category={item.category}
            id={item.id}
            inStock={item.inStock}
          />
        ))
      )}
      {cart.length > 0 && (
        <div className={styles.CartProducts__totalPrice}>
          <div>Total Price:</div>
          <div>${sum}</div>
        </div>
      )}
    </div>
  );
};

export default CartProducts;

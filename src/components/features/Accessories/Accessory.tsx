import styles from './AccessoriesList.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToCart, getCartProducts, addAmount } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { ProductType } from '../../../types/ProductType';
import { CartItem } from '../../../types/CartItem';


export const Accessory: React.FC<ProductType> = props => {

  const cart: Array<CartItem> = useSelector(getCartProducts);



  const dispatch = useDispatch();

  const addProduct = () => {


    const addedItem = cart.find(item => item.id === props.id);

    if (!addedItem) {
      dispatch(addToCart({
        title: props.title, id: props.id,
        image: props.image, price: props.price, category: 'accessory', amount: 1, inStock: props.inStock
      }))
    } else if (addedItem.amount <= 9 && addedItem.amount < addedItem.inStock) {
      dispatch(addAmount({ id: props.id, amount: 1 }))
    }
  }





  return (
    <div className={styles.Accessory} >
      <div className={styles.Accessory__image}><img src={`${process.env.PUBLIC_URL}/images/Accessories/${props.image}`} /></div>
      <div className={styles.Accessory__title}>{props.title}</div>
      <div className={styles.Accessory__description}>{props.description}</div>
      <div className={styles.Accessory__price}>${props.price}</div>
      <div className={styles.Accessory__button}>

        <button onClick={addProduct} disabled={props.inStock === undefined || 0 ? true : false} className={clsx(styles.btn, props.inStock === undefined || 0 && styles.btn_disabled)}>
          add to card
        </button>
      </div>
    </div>
  );
}


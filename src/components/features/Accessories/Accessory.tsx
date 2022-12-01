import styles from './AccessoriesList.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToCart, getCartProducts, addAmount } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import {ProductType} from '../../../types/ProductType';


export const Accessory: React.FC<ProductType> = props => {

  const cart = useSelector(getCartProducts);
  const accessory = props;


  const dispatch = useDispatch();

  const addProduct = () => {



    const addedItem = cart.find(item => item.id == accessory.id);

    if (addedItem == undefined && accessory) {
      dispatch(addToCart({
        title: accessory.title, id: accessory.id,
        image: accessory.image, price: accessory.price, category: 'accessory', amount: 1, inStock: accessory.inStock
      }))
    } else if (addedItem.amount <= 9 && addedItem.amount < addedItem.inStock) {
      dispatch(addAmount({ id: accessory.id, amount: 1 }))
    }
  }





  return (
    <div className={styles.Accessory} >
      <div className={styles.Accessory__image}><img src={`${process.env.PUBLIC_URL}/images/Accessories/${accessory.image}`} /></div>
      <div className={styles.Accessory__title}>{accessory.title}</div>
      <div className={styles.Accessory__description}>{accessory.description}</div>
      <div className={styles.Accessory__price}>${accessory.price}</div>
      <div className={styles.Accessory__button}>

        <button onClick={addProduct} disabled={accessory.inStock <= 0 ? true : false} className={clsx(styles.btn, accessory.inStock <= 0 && styles.btn_disabled)}>
          add to card
        </button>
      </div>
    </div>
  );
}


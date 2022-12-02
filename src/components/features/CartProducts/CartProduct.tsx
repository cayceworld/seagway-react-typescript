import { useDispatch } from 'react-redux';
import styles from './CartProducts.module.scss';
import { addAmount, removeAmount, removeItem } from '../../../redux/cartRedux';
import clsx from 'clsx';
import { BsFillTrashFill } from 'react-icons/bs';
import { CartItem } from '../../../types/CartItem';




export const CartProduct: React.FC<CartItem> = props => {

  const item = props;
  const dispatch = useDispatch();

  const addOne = () => {
    if (item.amount < 10 && item.amount < item.inStock) {
      dispatch(addAmount({ id: item.id, amount: 1 }))
    }
  }

  const removeOne = () => {
    if (item.amount > 1)
      dispatch(removeAmount({ id: item.id, amount: 1 }))
  }

  const remove = () => {
    dispatch(removeItem({ id: item.id }))
  }


  return (
    <div className={styles.CartProduct__item} >
      <div className={styles.CartProduct__image}>
        {item.category === 'kickscooter' && <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/Kickscooters List/${item.image}`} />}
        {item.category === 'accessory' && <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/Accessories/${item.image}`} />}
      </div>
      <div className={styles.CartProduct__title}> {item.title}</div>
      <div className={styles.CartProduct__amount}>
        <div className={styles.CartProduct__value}> {item.amount}</div>
        <div className={styles.CartProduct__change}>
          <div onClick={addOne} className={clsx(item.amount == 10 && styles.CartProduct__change_disabled)}> + </div>
          <div onClick={removeOne} className={clsx(item.amount == 1 && styles.CartProduct__change_disabled)} > - </div>
        </div>
      </div>
      <div className={styles.CartProduct__price}> ${item.price * item.amount}</div>
      <BsFillTrashFill onClick={remove} className={styles.CartProduct__icon} size='20px' />
    </div>
  );
}
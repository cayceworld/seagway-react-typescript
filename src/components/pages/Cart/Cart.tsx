import CartProducts from '../../features/CartProducts/CartProducts';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCartProducts } from '../../../redux/cartRedux';
import { addOrder } from '../../../redux/ordersRedux';
import { useState } from 'react';
import { updateAmountKickscooterRequest } from '../../../redux/kickscooterRedux';
import { updateAmountAccessoryRequest } from '../../../redux/accessoriesRedux';
import shortid from 'shortid';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');


  const cart = useSelector(getCartProducts);
  const dispatch = useDispatch();

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate('/orders')
  }

  const submit = () => {
    dispatch(addOrder({ items: cart, userInfo: [name, phone, address], id: shortid.generate() }, goToOrderPage));
    cart.map(item => {
      if (item.category == 'kickscooter') {
        dispatch(updateAmountKickscooterRequest({ id: item.id, inStock: item.inStock - item.amount }));
      } else if (item.category == 'accessory') {
        dispatch(updateAmountAccessoryRequest({ id: item.id, inStock: item.inStock - item.amount }));
      }
    })
    dispatch(clearCart());
  }






  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.cart__title}>Products in your Cart:</h3>
          <CartProducts />
          {cart.length > 0 && <form className={styles.cart__form} onSubmit={validate(submit)}>
            <h3 className={styles.cart__title}>Delivery information:</h3>
            <div>Name:</div>
            <input
              {...register("name", { required: true })}
              className={styles.cart__input}
              value={name}
              onChange={e => setName(e.target.value)} />
            {errors.name?.type === 'required' && <span>Name is required</span>}

            <div>Phone:</div>
            <input {...register("tel", { required: true })}
              type="tel"
              className={styles.cart__input} value={phone}
              onChange={e => setPhone(e.target.value)} />
            {errors.tel && <span>Phone is required</span>}

            <div>Address:</div>
            <input {...register("address", { required: " Address is required" })}
              type="text"
              className={styles.cart__input} value={address}
              onChange={e => setAddress(e.target.value)} />
            <span>{errors.address?.message}</span>
            <button className={styles.btn} type='submit'> submit order</button>
          </form>}
        </div>
      </div>
    </div>);
}

export default Cart
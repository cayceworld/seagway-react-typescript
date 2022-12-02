import styles from './SelectedProduct.module.scss';
import "swiper/css/pagination";
import 'swiper/css';
import { getSelectedKickscooter } from '../../../redux/kickscooterRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Gallery } from './Gallery';
import Gift from '../../views/Gift/Gift';
import ProductInfo from '../../views/ProductInfo/ProductInfo';
import PackingList from '../../views/PackingList/PackingList';
import { addToCart, getCartProducts, addAmount } from '../../../redux/cartRedux';
import { getDevice } from '../../../redux/deviseRedux';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { CartItem } from '../../../types/CartItem';



const SelectedProduct = () => {

  const cart: Array<CartItem> = useSelector(getCartProducts);
  const kickscooter = useSelector(getSelectedKickscooter);

  const device = useSelector(getDevice);
  const isDesktop = device.isDesktop;


  const dispatch = useDispatch();



  const addProduct = () => {
    const addedItem = cart.find(item => item.id === kickscooter.id);

    if (!addedItem) {
      dispatch(addToCart({
        title: kickscooter.title, id: kickscooter.id,
        image: kickscooter.image, price: kickscooter.price, category: 'kickscooter', amount: 1, inStock: kickscooter.inStock
      }))
    } else if (addedItem.amount <= 9 && addedItem.amount < kickscooter.inStock) {
      dispatch(addAmount({ id: kickscooter.id, amount: 1 }))
    }
  }

  return (
    <>
      {kickscooter
        ? <div className={styles.SelectedProduct}>

          <div className={styles.container}>
            <div className={styles.SelectedProduct__wrapper} >
              <div className={styles.SelectedProduct__content}>
                <div className={styles.SelectedProduct__stock}>
                  {kickscooter.inStock > 0
                    ? <div className={styles.SelectedProduct__inStock}>In stock</div>
                    : <div className={styles.SelectedProduct__outStock}>Out of stock</div>
                  }
                </div>
                <h2 className={styles.SelectedProduct__title}>
                  SEGWAY Ninebot {kickscooter.title}
                </h2>
                {!isDesktop && <div className={styles.SelectedProduct__gallery}>
                  <Gallery gallery={kickscooter.gallery} image={kickscooter.image} />
                </div>}
                {!isDesktop && <Gift gift={kickscooter.gift} />}
                <div className={styles.SelectedProduct__deal}>
                  <div className={styles.SelectedProduct__extend}>
                    <p className={styles.SelectedProduct__subtitle}>
                      Add an extended warranty from <span>Extend</span>
                    </p>
                    <div className={styles.SelectedProduct__boxes}>
                      <div className={styles.SelectedProduct__box}>
                        <div>1 Year</div>
                        <span>-</span>
                        <div>${Math.ceil(kickscooter.price / 6)}</div>
                      </div>
                      <div className={styles.SelectedProduct__box}>
                        <div>2 Year</div>
                        <span>-</span>
                        <div>${Math.ceil(kickscooter.price / 4)}</div>
                      </div>
                      <div className={styles.SelectedProduct__box}>
                        <div>3 Year</div>
                        <span>-</span>
                        <div>${Math.ceil(kickscooter.price / 3)}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.SelectedProduct__offer}>
                    <div className={styles.SelectedProduct__price}>
                      <p className={styles.SelectedProduct__oldPrice}>
                        ${kickscooter.price + 200}
                      </p>
                      <p className={styles.SelectedProduct__currentPrice}>
                        ${kickscooter.price}
                      </p>
                    </div>
                    {isDesktop && <Gift gift={kickscooter.gift} />}
                  </div>
                  <div className={styles.SelectedProduct__buttons}>
                    <div>
                      <NavLink to="/cart">
                        <button className={clsx(styles.btn, kickscooter.inStock <= 0 && styles.btn_disabled)}
                          onClick={addProduct} disabled={kickscooter.inStock <= 0 ? true : false}>buy it now</button>
                      </NavLink>
                    </div>
                    <div>
                      <button className={clsx(styles.btn, kickscooter.inStock <= 0 && styles.btn_disabled)}
                        onClick={addProduct} disabled={kickscooter.inStock <= 0 ? true : false}>add to card</button>
                    </div>
                  </div>
                </div>
                <div className={styles.SelectedProduct__payment}>
                  <p className={styles.SelectedProduct__text}>
                    <span>Payment Methods: </span>Starting at $55/mo with <span> <img src={`${process.env.PUBLIC_URL}/images/logoA.svg`} /></span>. <span>Prequalify now</span>
                  </p>
                  <div className={styles.SelectedProduct__icons}>
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (2).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (3).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (4).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (1).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (5).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (6).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (7).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (8).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (9).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (10).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (11).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (12).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (13).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (14).svg `} />
                    <img src={`${process.env.PUBLIC_URL}/images/Payment Ico/Frame (15).svg `} />
                  </div>
                </div>
              </div>
              {isDesktop && <div className={styles.SelectedProduct__gallery}>
                <Gallery gallery={kickscooter.gallery} image={kickscooter.image} />
              </div>}
            </div>
            <ProductInfo kickscooter={kickscooter} isDesktop={isDesktop} />
            <PackingList kickscooter={kickscooter} />
          </div>
        </div>
        : <div className={styles.container}>
          <div className={styles.SelectedProduct__loading}>
            <img src={`${process.env.PUBLIC_URL}/loading.gif`} />
          </div>
        </div>
      }

    </>
  );
}

export default SelectedProduct;
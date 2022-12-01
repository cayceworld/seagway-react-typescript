import clsx from 'clsx';
import styles from './ProductsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelect, getSelectedKickscooter  } from '../../../redux/kickscooterRedux';


const Product = props => {

  const dispatch = useDispatch();
  const selectedKickscooter = useSelector(getSelectedKickscooter);

  const toggle = () => {
    if (selectedKickscooter.id != props.id) {
      dispatch(toggleSelect({ id: props.id, isSelect: props.isSelect }))
    }
  }

  return (
    <div onClick={toggle} key={props.id} className={clsx(styles.products__item, props.isSelect && styles.products__item_active)}>
      <div className={styles.products__image}>
        <img src={`${process.env.PUBLIC_URL}/images/Kickscooters List/${props.image}`} />
      </div>
      <div className={styles.products__title}>
        {props.title}
      </div>
    </div>
  );
}

export default Product;
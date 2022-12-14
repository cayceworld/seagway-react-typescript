import clsx from "clsx";
import styles from "./ProductsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSelect,
  getSelectedKickscooter,
} from "../../../redux/kickscooterRedux";
import { KickscooterProduct } from "../../../types/ProductType";

export const Product: React.FC<KickscooterProduct> = (props) => {
  const dispatch = useDispatch();
  const { id, isSelect, image, title } = props;
  const selectedKickscooter = useSelector(getSelectedKickscooter);

  const toggle = () => {
    if (selectedKickscooter.id !== id) {
      dispatch(toggleSelect({ id, isSelect }));
    }
  };

  return (
    <div
      onClick={toggle}
      key={id}
      className={clsx(
        styles.products__item,
        isSelect && styles.products__item_active
      )}
    >
      <div className={styles.products__image}>
        <img
          src={`${process.env.PUBLIC_URL}/images/Kickscooters List/${image}`}
        />
      </div>
      <div className={styles.products__title}>{title}</div>
    </div>
  );
};

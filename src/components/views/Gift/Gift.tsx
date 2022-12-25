import styles from "./Gift.module.scss";
import { getGiftAccessoryByKickscooter } from "../../../redux/accessoriesRedux";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/initialState";

const Gift: React.FC<{ gift: string }> = (props) => {
  const gift = useSelector((state: Store) =>
    getGiftAccessoryByKickscooter(state, props.gift)
  );

  if (!gift) return <></>;
  return (
    <div className={styles.gift__wrapper}>
      <div className={styles.gift__content}>
        <div className={styles.gift__title}>
          {gift.title} <span>as a gift</span>
        </div>
        <div className={styles.gift__subtitle}>{gift.description}</div>
      </div>
      <div className={styles.gift__image}>
        <img
          src={`${process.env.PUBLIC_URL}/images/Accessories/${gift.image}`}
        />
      </div>
    </div>
  );
};

export default Gift;

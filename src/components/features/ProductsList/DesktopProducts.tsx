import styles from "./ProductsList.module.scss";
import { useSelector } from "react-redux";
import { getAllKickscooters } from "../../../redux/kickscooterRedux";
import { Product } from "./Product";

const DesktopProducts = () => {
  const kickscooters = useSelector(getAllKickscooters);

  return (
    <>
      {kickscooters.length > 0 && (
        <div className={styles.DesktopProducts}>
          <div className={styles.container}>
            <div className={styles.products__wrapper}>
              {kickscooters.map((kickscooter) => (
                <Product
                  key={kickscooter.id}
                  id={kickscooter.id}
                  title={kickscooter.title}
                  image={kickscooter.image}
                  isSelect={kickscooter.isSelect}
                  price={kickscooter.price}
                  inStock={kickscooter.inStock}
                />
              ))}
            </div>
          </div>
          <div className={styles.products__subtitle}>
            Free 1 day shipping within California.
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopProducts;

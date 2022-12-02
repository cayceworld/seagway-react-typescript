import SelectedProduct from "../../features/SelectedProduct/SelectedProduct";
import styles from "./Main.module.scss";
import AccessoriesList from "../../features/Accessories/AccessoriesList";
import ProductsList from "../../features/ProductsList/ProductsList";

const Main = () => {
  return (
    <div className={styles.Main}>
      <ProductsList />
      <SelectedProduct />
      <AccessoriesList />
    </div>
  );
};

export default Main;

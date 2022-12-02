import { useSelector } from "react-redux";
import { getAllAccessories } from "../../../redux/accessoriesRedux";
import { ProductType } from "../../../types/ProductType";
import styles from './AccessoriesList.module.scss';
import { Accessory } from './Accessory';


const DesktopAccessories = () => {

  const accessories: Array<ProductType> = useSelector(getAllAccessories);




  return (
    <div className={styles.DesktopAccessories}>
      {accessories.map(accessory =>
        <Accessory key={accessory.id} id={accessory.id}
          title={accessory.title} image={accessory.image}
          description={accessory.description} price={accessory.price} inStock={accessory.inStock} />
      )}
    </div>
  );
}

export default DesktopAccessories;
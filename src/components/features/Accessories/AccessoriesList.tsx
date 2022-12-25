import DesktopAccessories from "./DesktopAccessories";
import MobileAccessories from "./MobileAccessories";
import styles from "./AccessoriesList.module.scss";
import { useSelector } from "react-redux";
import { isDesktop } from "../../../redux/deviceRedux";
import { getAllAccessories } from "../../../redux/accessoriesRedux";

const AccessoriesList = () => {
  const accessories = useSelector(getAllAccessories);
  const device = useSelector(isDesktop);

  return (
    <>
      {accessories.length > 0 && (
        <div className={styles.AccessoriesList}>
          <div className={styles.container}>
            <h1 className={styles.AccessoriesList__title}>Accessories</h1>
            {device && <DesktopAccessories />}
            {!device && <MobileAccessories />}
          </div>
        </div>
      )}
    </>
  );
};

export default AccessoriesList;

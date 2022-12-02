import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className={styles.navlinks}>
      <li className={styles.navlinks__item}>
        <NavLink className={styles.navlinks__link} to="/">
          Main
        </NavLink>
      </li>
      <li className={styles.navlinks__item}>
        <NavLink className={styles.navlinks__link} to="/info">
          Shipping and Payment
        </NavLink>
      </li>
      <li className={styles.navlinks__item}>
        <NavLink className={styles.navlinks__link} to="/accessories">
          Accessories
        </NavLink>
      </li>
      <li className={styles.navlinks__item}>
        <NavLink className={styles.navlinks__link} to="/cart">
          Cart
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

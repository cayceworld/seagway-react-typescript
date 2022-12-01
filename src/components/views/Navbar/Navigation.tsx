import NavLinks from "./NavLinks";
import styles from './Navbar.module.scss';
import NavIcons from '../NavIcons/NavIcons';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
      <NavIcons />  
    </nav>
  );
}

export default Navigation;
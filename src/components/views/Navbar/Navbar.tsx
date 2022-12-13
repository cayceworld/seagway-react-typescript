import styles from "./Navbar.module.scss";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar: React.FC<{ isDesktop: boolean | null }> = (props) => {
  const isDesktop = props.isDesktop;

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbar__wrapper}>
          {isDesktop && <Navigation />}
          {!isDesktop && <MobileNavigation />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

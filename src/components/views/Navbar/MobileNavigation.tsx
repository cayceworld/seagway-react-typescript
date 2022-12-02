import NavLinks from "./NavLinks";
import styles from "./Navbar.module.scss";
import { TbMenu2 } from "react-icons/tb";
import { useState, useEffect } from "react";
import NavIcons from "../NavIcons/NavIcons";
import Logo from "../../common/Logo/Logo";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <nav className={styles.MobileNavigation}>
      <TbMenu2
        onClick={() => setOpen(!open)}
        className={styles.MobileNavigation__burger}
        size="40px"
      />
      <div className={styles.MobileNavigation__logo}>
        <Logo />
      </div>
      <div
        onClick={() => setOpen(false)}
        className={styles.MobileNavigation__icons}
      >
        <NavIcons />{" "}
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className={styles.navlinks}>
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;

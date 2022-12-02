import styles from "./LogoSection.module.scss";
import Logo from "../../common/Logo/Logo";

const LogoSection = () => {
  return (
    <div className={styles.LogoSection}>
      <div className={styles.container}>
        <div className={styles.LogoSection__wrapper}>
          <Logo />
          <div className={styles.LogoSection__image}>
            <div className={styles.LogoSection__img}>
              <img src={`${process.env.PUBLIC_URL}/images/john.png`} />
            </div>
            <div className={styles.LogoSection__text}>
              <h3>JOHN SMITH</h3>
              <p>
                director
                <br />
                of company{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

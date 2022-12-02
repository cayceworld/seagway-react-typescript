import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__wrapper}>
        <div className={styles.logo__item}>
          <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
        </div>
      </div>
    </div>
  );
};

export default Logo;

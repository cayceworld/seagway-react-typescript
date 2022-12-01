import Logo from '../../common/Logo/Logo';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>

        <div className={styles.Footer__wrapper}>
          <div className={styles.Footer__logo}>
            <Logo />
          </div>
          <div className={styles.Footer__text}>
            <div>+1 (888) 777-77-77</div>
            <div>2637 Fairfax Ave
              Culver City, CA 90232</div>
            <div>Segway  California © 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
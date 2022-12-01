import styles from './SelectedProduct.module.scss';

const Warranty = () => {




  return (
    <div className={styles.SelectedProduct__box} onClick={extendWarranty}>
      <div>{warranty.year} Year</div>
      <span>-</span>
      <div >${warranty.price}</div>
    </div>

  );
}

export default Warranty;
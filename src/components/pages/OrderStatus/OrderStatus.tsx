import styles from './OrderStatus.module.scss';


const OrderStatus = () => {





  return (
    <div className={styles.OrderStatus}>
      <div className={styles.container}>
        <h3 className={styles.OrderStatus__title}>Thank you, your order was successfully sent. Our manager will contact you!</h3>
        </div>
    </div>
  );
}

export default OrderStatus;
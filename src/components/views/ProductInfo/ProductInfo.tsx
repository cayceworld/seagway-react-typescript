import styles from "./ProductInfo.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductInfo = (props) => {
  const kickscooter = props.kickscooter;
  const isDesktop = props.isDesktop;

  return (
    <Tabs
      className={styles.ProductInfo}
      selectedTabClassName={styles.ProductInfo__item_selected}
    >
      {isDesktop && (
        <TabList className={styles.ProductInfo__titles}>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/delivery-title.svg`}
            />
            <div>{kickscooter.delivery.title}</div>
          </Tab>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/warranty-title.svg`}
            />
            <div>{kickscooter.warranty.title}</div>
          </Tab>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/support-title.svg`}
            />
            <div>{kickscooter.support.title}</div>
          </Tab>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/description-title.svg`}
            />
            <div>{kickscooter.description.title}</div>
          </Tab>
        </TabList>
      )}

      <TabPanel>
        <div className={styles.ProductInfo__content}>
          <div className={styles.ProductInfo__box}>
            <div className={styles.ProductInfo__subtitle}>
              {kickscooter.delivery.subtitle}
            </div>
            <div className={styles.ProductInfo__text}>
              {kickscooter.delivery.text}
            </div>
          </div>
          <div className={styles.ProductInfo__box}>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/Info Icons/${kickscooter.delivery.ico}`}
              />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className={styles.ProductInfo__content}>
          <div className={styles.ProductInfo__box}>
            <div className={styles.ProductInfo__subtitle}>
              {kickscooter.warranty.subtitle}
            </div>
            <div className={styles.ProductInfo__text}>
              {kickscooter.warranty.text}
            </div>
          </div>
          <div className={styles.ProductInfo__box}>
            <div className={styles.ProductInfo__ico}>
              <div>
                <div>{kickscooter.warranty.years}</div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className={styles.ProductInfo__content}>
          <div className={styles.ProductInfo__box}>
            <div className={styles.ProductInfo__subtitle}>
              {kickscooter.support.subtitle}
            </div>
            <div className={styles.ProductInfo__text}>
              {kickscooter.support.text}
            </div>
          </div>
          <div className={styles.ProductInfo__box}>
            <div className={styles.ProductInfo__ico}>
              <div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Info Icons/${kickscooter.support.ico}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className={styles.ProductInfo__content}>
          <div className={styles.ProductInfo__box}>
            <div className={styles.ProductInfo__subtitle}>
              {kickscooter.description.subtitle}
            </div>
            <div className={styles.ProductInfo__text}>
              {kickscooter.description.text}
            </div>
          </div>
          <div className={styles.ProductInfo__box}>
            <div className={styles.ProductInfo__ico}>
              <div>
                <div>{kickscooter.description.miles}</div>
                <span>miles</span>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      {!isDesktop && (
        <TabList className={styles.ProductInfo__titles}>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/delivery-title.svg`}
            />
            <div>{kickscooter.delivery.title}</div>
          </Tab>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/warranty-title.svg`}
            />
            <div>{kickscooter.warranty.title}</div>
          </Tab>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/support-title.svg`}
            />
            <div>{kickscooter.support.title}</div>
          </Tab>
          <Tab className={styles.ProductInfo__item}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Info Icons/description-title.svg`}
            />
            <div>{kickscooter.description.title}</div>
          </Tab>
        </TabList>
      )}
    </Tabs>
  );
};

export default ProductInfo;

import styles from "./PackingList.module.scss";
import clsx from "clsx";

const PackingList = (props) => {
  const kickscooter = props.kickscooter;

  return (
    <div className={styles.PackingList}>
      {!kickscooter.youtubeVideo && (
        <h1 className={styles.PackingList__title}>Packing List</h1>
      )}
      <div
        className={clsx(
          styles.PackingList__wrapper,
          !kickscooter.youtubeVideo && styles.PackingList__wrapper_noVideo
        )}
      >
        {kickscooter.youtubeVideo && (
          <div className={styles.PackingList__video}>
            <h1 className={styles.PackingList__title}>Packing List</h1>
            <div>
              <iframe
                width="100%"
                height="278"
                src={`https://www.youtube.com/embed/${kickscooter.youtubeVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
        )}
        <div className={styles.PackingList__image}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Packing List/${kickscooter.packingList}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingList;

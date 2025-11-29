import styles from "./Gallery.module.css";
import { galleryImages } from "../../data/gallery";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h3 className={styles.title}>Сделали более 3.000 заказов за 2 года</h3>
      <div className={styles.subtitle}>
        Посмотрите фото реальных заказов из нашего instagram
      </div>

      <div className={styles.grid}>
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={`/src/assets/images/${img}`}
            className={styles.image}
          />
        ))}
      </div>
    </section>
  );
}

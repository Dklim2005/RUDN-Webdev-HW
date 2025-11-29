import styles from "./Hero.module.css";

import berry from "../../assets/images/berry.png";
import berry1 from "../../assets/images/berry (1).png";
import berry2 from "../../assets/images/berry (2).png";
import leaf from "../../assets/images/leaf.png";
import bg from "../../assets/images/bg.png";

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.container}>
        <div className={styles.delicious}>ВКУСНЕЙШИЕ</div>

        <h1 className={styles.title}>
          Пирожные и капкейки <br /> от 150 ₽/шт. с доставкой <br /> по Санкт Петербургу
        </h1>

        <span className={styles.subtitle}>
          Приготовим за 3 часа в день заказа. <br />
          Доставка на авто в холодильнике.
        </span>

        <div className={styles.buttons}>
          <button className={styles.catalogBtn}>Перейти в каталог</button>
          <span className={styles.smallText}>
            9 различных <br /> видов на выбор
          </span>
        </div>
      </div>

      <img src={berry} className={styles.berry} />
      <img src={berry1} className={styles.berry1} />
      <img src={berry2} className={styles.berry2} />
      <img src={leaf} className={styles.leaf} />
    </section>
  );
}

import styles from "./Footer.module.css";
import intervalImg from "../../assets/images/interval.png";

export default function Footer() {
  return (
    <>
      <div className={styles.interval}>
        <img src={intervalImg} className={styles.intervalImage} />
      </div>

      <footer className={styles.footer}>
        <div className={styles.form}>
          <h3>Чтобы сделать заказ, укажите ваш телефон</h3>
          <div className={styles.callback}>
            Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания
          </div>

          <div className={styles.formRow}>
            <input
              type="number"
              placeholder="Номер телефона:"
              className={styles.input}
            />
            <button className={styles.button}>Сделать заказ</button>
          </div>
        </div>
      </footer>
    </>
  );
}

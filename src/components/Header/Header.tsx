import styles from "./Header.module.css";
import locationIcon from "../../assets/images/location-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logotype}>Сладкий сундук</div>

      <div className={styles.info}>
        <div className={styles.location}>
          <img src={locationIcon} width={17} height={17} />
          <div>
            <span>г. Санкт Петербург,</span>
            <br />
            <span>ул. Куйбышева 31</span>
          </div>
        </div>

        <div className={styles.phone}>
          <img src={phoneIcon} width={19} height={19} />
          <div>
            <span className={styles.phoneNumber}>8 (812) 844-95-49</span>
            <br />
            <span className={styles.phoneHours}>Ежедневно с 9:00 до 20:00</span>
          </div>
        </div>
      </div>
    </header>
  );
}

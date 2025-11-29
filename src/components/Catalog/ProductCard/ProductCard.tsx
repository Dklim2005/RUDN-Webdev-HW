import styles from "./ProductCard.module.css";
import { useState } from "react";
import type { Product } from "../../../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const total = count * product.price;

  return (
    <div className={styles.card}>
      <img
        src={`/src/assets/images/${product.image}`}
        className={styles.image}
      />

      <div className={styles.info}>
        <h4>{product.title}</h4>
        <span>{product.text}</span>
        <p>{product.price} ₽/шт.</p>

        {count === 0 ? (
          <button className={styles.button} onClick={() => setCount(1)}>
            Заказать
          </button>
        ) : (
          <div className={styles.counter}>
            <div className={styles.counterRow}>
              <button className={styles.counterBtn} onClick={decrease}>
                −
              </button>
              <span className={styles.counterValue}>{count}</span>
              <button className={styles.counterBtn} onClick={increase}>
                +
              </button>
            </div>
            <div className={styles.total}>
              Итог: {total} ₽
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

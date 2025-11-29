import styles from "./ProductCard.module.css";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  text: string;
  price: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <img
        src={`/src/assets/images/${product.image}`}
        className={styles.image}
      />

      <div className={styles.info}>
        <h4>{product.title}</h4>
        <span>{product.text}</span>
        <p>{product.price}</p>

        <button
          className={styles.button}
          onClick={() => setCount(count + 1)}
        >
          Заказать {count > 0 && `(${count})`}
        </button>
      </div>
    </div>
  );
}

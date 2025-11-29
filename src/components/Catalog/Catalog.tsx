import styles from "./Catalog.module.css";
import { products } from "../../data/products";
import ProductCard from "./ProductCard/ProductCard";

export default function Catalog() {
  return (
    <section className={styles.catalog}>
      <h3 className={styles.title}>Для любых событий и дорогих вам людей</h3>

      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

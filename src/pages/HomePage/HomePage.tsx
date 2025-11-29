import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Catalog from "../../components/Catalog/Catalog";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Catalog />
      <Gallery />
      <Footer />
    </div>
  );
}

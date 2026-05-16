import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            Arik Rizki Akbar<span className={styles.dot}>.</span>
          </div>
          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#works">Portfolio</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Projects />

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2024 Arik Rizki Akbar</p>
        </div>
      </footer>
    </main>
  );
}

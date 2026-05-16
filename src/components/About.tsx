import styles from './About.module.css';

export default function About() {
  const expertises = [
    "Machine Learning & AI",
    "Statistical Data Analysis",
    "Big Data (BigQuery, Snowflake)",
    "Data Visualization (Tableau, Looker Studio)",
    "Python, SQL, & R Programming",
    "Cloud Computing (GCP) — Added Value"
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.introText}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p>
              I am a **Computer Science graduate from Universitas Pendidikan Indonesia (Cum Laude)** with a specialized focus on **Data & AI**. 
              My professional journey is defined by a passion for transforming raw, complex datasets into actionable intelligence that drives organizational success.
            </p>
            <p>
              With core expertise in **Data Analytics and Science**, I have successfully developed systems ranging from automated Waste Bank management to advanced Customer Segmentation models. 
              As a powerful addition to my data-centric profile, I hold an **Associate Cloud Engineer** certification, allowing me to deploy and scale data solutions within the **Google Cloud Platform (GCP)** environment effectively.
            </p>
          </div>
          
          <div className={styles.expertiseBox}>
            <h3 className={styles.subTitle}>Technical Expertise</h3>
            <ul className={styles.expertiseList}>
              {expertises.map((item, index) => (
                <li key={index} className={styles.expertiseItem}>
                  <span className={styles.dot}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

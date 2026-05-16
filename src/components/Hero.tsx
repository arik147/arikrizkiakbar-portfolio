"use client";

import styles from './Hero.module.css';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const expertises = [
    "Machine Learning & AI",
    "Statistical Data Analysis",
    "Big Data Architecture",
    "Data Visualization"
  ];

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/portrait-myself.jpg"
              alt="Arik Rizki Akbar"
              width={600}
              height={700}
              className={styles.portrait}
              priority
            />
          </motion.div>

          <motion.div
            className={styles.textSection}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className={styles.headerGroup} variants={fadeIn}>
              <span className="mono">Bachelor of Computer Science • Cum Laude</span>
              <h1 className={styles.title}>Arik Rizki Akbar<span className={styles.dot}>.</span></h1>
              <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/arikrizkiakbar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="https://github.com/arik147" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a href="https://www.instagram.com/arikr.a/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a href="mailto:arikrizkiakbar@gmail.com" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </a>
              </div>
            </motion.div>

            <motion.div className={styles.summaryContainer} variants={fadeIn}>
              <p className={styles.summary}>
                I’m a Data Analyst and Computer Science graduate with a strong background in Data & AI, combining technical expertise and analytical strategy to transform complex datasets into impactful insights. Skilled in Python, SQL, R, and data visualization tools like Looker Studio and Tableau—from building end-to-end data frameworks and automated cleaning to designing interactive dashboards—I bring data to life through actionable metrics and cloud-integrated solutions.
              </p>
              <p className={styles.summary}>
                Beyond data visualization, I’ve engineered cloud-based applications and delivered data-driven projects for major initiatives, including optimizing high-volume workflows for government subsidy programs and building scalable machine learning APIs. From segmenting over 100K customer records using advanced clustering to managing cloud infrastructure, I focus on delivering scalable, secure, and business-focused results that enable data-informed decision-making.
              </p>
            </motion.div>

            <motion.div className={styles.expertiseSection} variants={fadeIn}>
              <p className={styles.expertiseLabel}>These are my areas of expertise:</p>
              <div className={styles.expertiseGrid}>
                {expertises.map((item, index) => (
                  <div key={index} className={styles.expertiseItem}>
                    <span className={styles.marker}>›</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className={styles.actionGroup} variants={fadeIn}>
              <a href="#works" className={styles.primaryLink}>
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

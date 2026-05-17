"use client";

import Image from 'next/image';
import styles from './Projects.module.css';
import { motion, Variants } from 'framer-motion';

const projects = [
  {
    title: "DataCo Supply Chain Analytics & Predictive Delay Risk Modeling",
    category: "Featured Spotlight • ML & Operations",
    description: "Built an end-to-end delay risk modeling framework on 180K+ shipments with 83% prediction precision. Engineered strictly without data leakage to guarantee real-time Order Management System compatibility, and uncovered critical financial policies showing discount rates >20% directly trigger negative profit margins.",
    image: "/dataco_portfolio_thumbnail.png",
    tags: ["Random Forest", "Supply Chain Analytics", "Anti-Data Leakage", "Financial Optimization", "Python"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/dataco-supply-chain-analytics" }
    ],
    isFeatured: true
  },
  {
    title: "Waste Bank Management System",
    category: "Featured Spotlight • Data Framework & BI",
    description: "Standardized collection using Apps Script and Google Sheets. Designed Looker Studio dashboards for real-time operational metrics, user behaviors, and waste trends. Automated cleaning workflows and integrated Sheets with Looker Studio to provide near real-time updates.",
    image: "/dashboard-waste-bank.png",
    tags: ["Apps Script", "Looker Studio", "Google Sheets", "BI Development"],
    links: [
      { label: "App", url: "https://bit.ly/BankSampahBerkahApp" },
      { label: "Dashboard", url: "https://lookerstudio.google.com/u/0/reporting/f104b007-8130-4741-978d-7ab351bb1102/page/tdadD" }
    ],
    isFeatured: true
  },
  {
    title: "SD Ciwaregu 1 School Website Backend",
    category: "Backend & Cloud Infrastructure",
    description: "Developed a robust Express.js backend for student registration and grade management. Integrated Cloudinary for media, containerized with Docker, deployed on Cloud Run, and set up CI/CD with Cloud Build and PostgreSQL on Cloud SQL.",
    image: "/ciwaregu-be.png",
    tags: ["Express.js", "Docker", "Cloud Run", "PostgreSQL", "Cloud Build", "Cloudinary"],
    links: [
      { label: "Canva", url: "https://www.canva.com/design/DAGkmftn7WQ/UsudrjuSZp3vQRapAJIdKg/edit" },
      { label: "GitHub", url: "https://github.com/Amzar123/be-sd-ciwaregu" }
    ]
  },
  {
    title: "Diagnese App - Bangkit Capstone",
    category: "Cloud & ML API",
    description: "Developed a RESTful API using Flask for symptom-based diagnosis. Deployed on Google Cloud Run using Docker and CI/CD with Cloud Build.",
    image: "/diagnese-app.jpg",
    tags: ["Cloud Run", "Flask", "Docker", "ML"],
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=vmTqlE4pvWY" },
      { label: "GitHub", url: "https://github.com/arik147/diagnese-app" }
    ]
  },
  {
    title: "Cyclistic Bike-Share Analysis",
    category: "Data Analytics",
    description: "Analyzed user behavior for the Google Data Analytics Capstone. Identified ride patterns to convert casual riders into loyal annual members.",
    image: "/cyclistic-analysis.png",
    tags: ["R", "Tableau", "Marketing Analytics"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/cyclistic-bike-share-analysis" }
    ]
  },
  {
    title: "Sales Analysis Case Study",
    category: "SQL & BigQuery",
    description: "Analyzed global retail sales data using BigQuery for efficient extraction and trend analysis. Visualized findings using Python (Pandas/Seaborn).",
    image: "/revoU-case-study.png",
    tags: ["BigQuery", "SQL", "Python", "Pandas"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/sales-case-study" }
    ]
  },
  {
    title: "Twitter Sentiment Analysis",
    category: "NLP & Machine Learning",
    description: "Built an NLP pipeline using Transformers to classify tweet sentiment. Preprocessed data and analyzed engagement across sentiment categories.",
    image: "/twitter-sentiment-analysis.png",
    tags: ["NLP", "Transformers", "Statistics"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/twitter-sentiment-analysis" }
    ]
  },
  {
    title: "Customer Behavior Analysis & Segmentation",
    category: "Retail Analytics",
    description: "Segmented 100K+ retail customers using RFM and K-Means clustering. Strategies projected to boost revenue by 15% through targeted retention.",
    image: "/customer-analysis.png",
    tags: ["K-Means", "RFM", "Clustering", "Retention"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/customer-segmentation-retail" }
    ]
  }
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const featuredProjects = projects.filter(p => p.isFeatured);
  const regularProjects = projects.filter(p => !p.isFeatured);

  return (
    <section id="works" className={styles.projects}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mono">Selected Works</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDesc}>
            Turning complex datasets into actionable intelligence across various industries.
          </p>
        </motion.div>

        {/* Featured Spotlight Projects List */}
        {featuredProjects.length > 0 && (
          <div className={styles.featuredSection}>
            {featuredProjects.map((featuredProject, index) => (
              <motion.div 
                key={index}
                className={styles.featuredCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <div className={styles.featuredImageWrapper}>
                  <Image 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
                <div className={styles.featuredCardContent}>
                  <span className={styles.category}>{featuredProject.category}</span>
                  <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
                  <p className={styles.featuredDesc}>{featuredProject.description}</p>
                  
                  <div className={styles.featuredTags}>
                    {featuredProject.tags.map((tag, tIndex) => (
                      <span key={tIndex} className={styles.featuredTag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.linksContainer}>
                    {featuredProject.links.map((link, lIndex) => (
                      <a key={lIndex} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Regular Projects Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {regularProjects.map((project, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay}>
                  <div className={styles.tags}>
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.linksContainer}>
                  {project.links.map((link, lIndex) => (
                    <a key={lIndex} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

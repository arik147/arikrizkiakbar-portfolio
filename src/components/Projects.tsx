"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const filterCategories = [
  "All",
  "Product & Experimentation",
  "Business Intelligence & SQL",
  "Machine Learning & AI",
  "Data Engineering & Cloud"
] as const;

type FilterCategory = typeof filterCategories[number];

type Metric = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  links: { label: string; url: string; }[];
  isFeatured?: boolean;
  metrics?: Metric[];
  filterGroups: FilterCategory[];
};

const projects: Project[] = [
  {
    title: "E-Commerce Checkout Redesign: A/B Testing & Funnel Optimization",
    category: "Product Analytics & Experimentation",
    description: "Conducted an end-to-end randomized controlled trial on 124K+ sessions evaluating a single-page checkout flow. Verified experiment validity with SRM check (p = 0.65), achieved a statistically significant +16.4% relative conversion lift (p < 0.0001) driven by mobile UX improvements (+18.6%), while maintaining neutral AOV guardrails to project +$2.47M in incremental annual revenue.",
    image: "/ab-testing-funnel.png",
    tags: ["A/B Testing", "Hypothesis Testing", "Funnel Analysis", "Python", "Statistical Modeling", "CRO"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/ecommerce-ab-testing-funnel" }
    ],
    isFeatured: true,
    metrics: [
      { label: "CR Lift", value: "+16.4%" },
      { label: "P-Value", value: "< 0.0001" },
      { label: "Est. Revenue", value: "+$2.47M" }
    ],
    filterGroups: ["Product & Experimentation"]
  },
  {
    title: "Nusantara Air Sentinel: Near Real-Time Weather & Air Quality",
    category: "Data Engineering & BI",
    description: "Built an end-to-end modern data stack ETL pipeline and BI dashboard to fetch, process, and visualize real-time weather and air quality data across 52 Indonesian cities using a zero-cost serverless architecture.",
    image: "/nusantara-air-sentinel.png",
    tags: ["Python", "Streamlit", "Supabase", "GitHub Actions", "ETL"],
    links: [
      { label: "App", url: "https://nusantara-air-sentinel.streamlit.app/" },
      { label: "GitHub", url: "https://github.com/arik147/nusantara-air-sentinel" }
    ],
    isFeatured: true,
    metrics: [
      { label: "Coverage", value: "52 Cities" },
      { label: "Infrastructure", value: "$0 Serverless" },
      { label: "Pipeline", value: "Near Real-Time" }
    ],
    filterGroups: ["Data Engineering & Cloud", "Business Intelligence & SQL"]
  },
  {
    title: "DataCo Supply Chain Analytics & Predictive Delay Risk Modeling",
    category: "ML & Operations",
    description: "Built an end-to-end delay risk modeling framework on 180K+ shipments with 83% prediction precision. Engineered strictly without data leakage to guarantee real-time Order Management System compatibility, and uncovered critical financial policies showing discount rates >20% directly trigger negative profit margins.",
    image: "/dataco_portfolio_thumbnail.png",
    tags: ["Random Forest", "Supply Chain Analytics", "Anti-Data Leakage", "Financial Optimization", "Python"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/dataco-supply-chain-analytics" }
    ],
    metrics: [
      { label: "Precision", value: "83%" },
      { label: "Dataset", value: "180K+ Orders" },
      { label: "Framework", value: "Anti-Leakage" }
    ],
    filterGroups: ["Machine Learning & AI", "Business Intelligence & SQL"]
  },
  {
    title: "Waste Bank Management System",
    category: "Data Framework & BI",
    description: "Standardized collection using Apps Script and Google Sheets. Designed Looker Studio dashboards for real-time operational metrics, user behaviors, and waste trends. Automated cleaning workflows and integrated Sheets with Looker Studio to provide near real-time updates.",
    image: "/dashboard-waste-bank.png",
    tags: ["Apps Script", "Looker Studio", "Google Sheets", "BI Development"],
    links: [
      { label: "App", url: "https://bit.ly/BankSampahBerkahApp" },
      { label: "Dashboard", url: "https://lookerstudio.google.com/u/0/reporting/f104b007-8130-4741-978d-7ab351bb1102/page/tdadD" }
    ],
    metrics: [
      { label: "BI Platform", value: "Looker Studio" },
      { label: "Workflow", value: "Automated Clean" },
      { label: "Domain", value: "Waste Bank Ops" }
    ],
    filterGroups: ["Business Intelligence & SQL"]
  },
  {
    title: "Cyclistic Bike-Share Analysis",
    category: "Data Analytics",
    description: "Analyzed user behavior for the Google Data Analytics Capstone. Identified ride patterns to convert casual riders into loyal annual members.",
    image: "/cyclistic-analysis.png",
    tags: ["R", "Tableau", "Marketing Analytics"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/cyclistic-bike-share-analysis" }
    ],
    metrics: [
      { label: "Program", value: "Google Capstone" },
      { label: "Objective", value: "Casual to Member" }
    ],
    filterGroups: ["Product & Experimentation", "Business Intelligence & SQL"]
  },
  {
    title: "Sales Analysis Case Study",
    category: "SQL & BigQuery",
    description: "Analyzed global retail sales data using BigQuery for efficient extraction and trend analysis. Visualized findings using Python (Pandas/Seaborn).",
    image: "/revoU-case-study.png",
    tags: ["BigQuery", "SQL", "Python", "Pandas"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/sales-case-study" }
    ],
    metrics: [
      { label: "Engine", value: "BigQuery SQL" },
      { label: "Domain", value: "Retail Analytics" }
    ],
    filterGroups: ["Business Intelligence & SQL"]
  },
  {
    title: "Twitter Sentiment Analysis",
    category: "NLP & Machine Learning",
    description: "Built an NLP pipeline using Transformers to classify tweet sentiment. Preprocessed data and analyzed engagement across sentiment categories.",
    image: "/twitter-sentiment-analysis.png",
    tags: ["NLP", "Transformers", "Statistics"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/twitter-sentiment-analysis" }
    ],
    metrics: [
      { label: "Model", value: "Transformers" },
      { label: "Task", value: "Sentiment Mining" }
    ],
    filterGroups: ["Machine Learning & AI"]
  },
  {
    title: "Customer Behavior Analysis & Segmentation",
    category: "Retail Analytics",
    description: "Segmented 100K+ retail customers using RFM and K-Means clustering. Strategies projected to boost revenue by 15% through targeted retention.",
    image: "/customer-analysis.png",
    tags: ["K-Means", "RFM", "Clustering", "Retention"],
    links: [
      { label: "GitHub", url: "https://github.com/arik147/customer-segmentation-retail" }
    ],
    metrics: [
      { label: "Cohort", value: "100K+ Customers" },
      { label: "Method", value: "RFM & K-Means" },
      { label: "Projected Lift", value: "+15% Retention" }
    ],
    filterGroups: ["Product & Experimentation", "Machine Learning & AI"]
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
    ],
    metrics: [
      { label: "Deployment", value: "Cloud Run" },
      { label: "Program", value: "Bangkit Capstone" }
    ],
    filterGroups: ["Machine Learning & AI", "Data Engineering & Cloud"]
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
    ],
    metrics: [
      { label: "Backend", value: "Express & Docker" },
      { label: "Database", value: "Cloud SQL Postgres" }
    ],
    filterGroups: ["Data Engineering & Cloud"]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const isAll = activeCategory === "All";
  const featuredProjects = isAll ? projects.filter(p => p.isFeatured) : [];
  const regularProjects = isAll
    ? projects.filter(p => !p.isFeatured)
    : projects.filter(p => p.filterGroups.includes(activeCategory));

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
            Turning complex datasets into actionable intelligence across experimentation, business intelligence, and machine learning.
          </p>

          {/* Category Filter Tabs */}
          <div className={styles.filterContainer}>
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.filterButtonActive : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Spotlight Projects 2-Column Grid */}
        {featuredProjects.length > 0 && (
          <div className={styles.featuredSection}>
            {featuredProjects.map((featuredProject, index) => (
              <motion.div
                key={featuredProject.title}
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
                <div className={styles.featuredCardContent}>
                  <span className={styles.category}>{featuredProject.category}</span>
                  <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
                  <p className={styles.featuredDesc}>{featuredProject.description}</p>

                  {/* Highlight Metrics */}
                  {featuredProject.metrics && featuredProject.metrics.length > 0 && (
                    <div className={styles.metricsContainer}>
                      {featuredProject.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className={styles.metricItem}>
                          <span className={styles.metricValue}>{metric.value}</span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={styles.featuredTags}>
                    {featuredProject.tags.map((tag, tIndex) => (
                      <span key={tIndex} className={styles.featuredTag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.linksContainer}>
                    {featuredProject.links.map((link, lIndex) => (
                      <a key={lIndex} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Regular Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {regularProjects.map((project) => (
              <motion.div
                key={project.title}
                className={styles.card}
                variants={itemVariants}
                layout
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                  {/* Highlight Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className={styles.metricsContainer}>
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className={styles.metricItem}>
                          <span className={styles.metricValue}>{metric.value}</span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={styles.linksContainer}>
                    {project.links.map((link, lIndex) => (
                      <a key={lIndex} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

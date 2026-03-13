"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-end justify-between gap-4">
    <h2 className="text-lg font-semibold tracking-tight text-gray-900">{children}</h2>
    <div className="h-px flex-1 bg-gray-200" />
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
    {children}
  </span>
);

type Cert = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

type Badge = {
  title: string;
  issuer?: string;
  image: string;
};

type CaseStudySection = {
  heading: string;
  content: string;
  bullets?: string[];
};

type CaseStudy = {
  title: string;
  subtitle: string;
  github: string;
  liveLink?: string;
  stats: { label: string; value: string }[];
  sections: CaseStudySection[];
};

type Project = {
  title: string;
  href: string;
  image: string;
  oneLiner: string;
  tags: string[];
  status: "live" | "dev";
  liveLink?: string;
  caseStudy?: CaseStudy;
};

type Book = {
  title: string;
  author?: string;
  image: string;
  takeaway: string;
};

const shipmentCaseStudy: CaseStudy = {
  title: "Shipment Delay Prediction System",
  subtitle: "End-to-End ML Pipeline · XGBoost + SMOTE · Tableau Analytics Suite",
  github: "https://github.com/099Misbah/shipment-delay-prediction",
  liveLink: "https://public.tableau.com/views/ShipmentDelayPredictionMLAnalyticsDashboard/ShipmentDelayAnalysis",
  stats: [
    { label: "Records", value: "77K+" },
    { label: "Accuracy", value: "74%" },
    { label: "ROC-AUC", value: "0.83" },
    { label: "F1 Score", value: "0.74" },
    { label: "Dashboards", value: "4" },
    { label: "Delay Rate", value: "57.7%" },
  ],
  sections: [
    {
      heading: "Overview",
      content:
        "Shipment delays disrupt logistics operations and affect delivery reliability. This project builds a production-style machine learning system that predicts whether a shipment will be delayed — enabling supply chain teams to identify high-risk deliveries proactively before they happen. The system covers the full ML lifecycle: raw data ingestion through a Bronze → Silver → Gold pipeline, feature engineering, SMOTE for class imbalance, XGBoost with hyperparameter tuning, FastAPI deployment, and a 4-dashboard Tableau analytics suite.",
    },
    {
      heading: "Data Pipeline — Bronze → Silver → Gold",
      content: "Raw data flows through a 3-layer pipeline before reaching the model:",
      bullets: [
        "Bronze — Raw CSV ingested as-is. No transformations. Preserved exactly as received.",
        "Silver — Nulls handled, data types corrected, columns standardized, duplicates removed.",
        "Gold — Feature-engineered Parquet: ship year/month/dayofweek, profit ratio, sales per item computed.",
      ],
    },
    {
      heading: "Machine Learning — Baseline vs Final Model",
      content: "Target: predict Early (−1), On Time (0), or Delayed (1). Dataset heavily imbalanced toward Delayed.",
      bullets: [
        "Logistic Regression (Baseline): 58% accuracy · 0.50 ROC-AUC — essentially random guessing",
        "XGBoost + SMOTE (Final): 74% accuracy · 0.83 ROC-AUC · F1: 0.74",
        "SMOTE balanced the training set so the model learned all 3 classes equally",
        "XGBoost captured non-linear relationships between shipping mode, priority, and delay risk",
        "RandomizedSearchCV tuned n_estimators, max_depth, learning_rate, and subsample",
      ],
    },
    {
      heading: "Top Delay Drivers — Feature Importance",
      content: "",
      bullets: [
        "Shipping Mode — Standard Class has significantly higher delay rate than Express/First Class",
        "Order Day of Week — Monday and Friday orders show higher delay patterns",
        "Customer Segment — Consumer segment delays outpace Corporate by 12%",
        "Market/Region — Europe (2,623) and LATAM (2,586) are the worst performing markets",
        "Order Size / Product Category — Larger Furniture and Technology orders delay more",
      ],
    },
    {
      heading: "Tableau Analytics Suite — 4 Dashboards",
      content: "",
      bullets: [
        "Executive Overview — KPIs: 57.7% delay rate, 19.5% on-time, 15,549 shipments. Delay by market, status distribution, monthly trend.",
        "Model Performance — Side-by-side: Logistic Regression vs XGBoost across all 5 metrics.",
        "Prediction Insights — XGBoost feature importance visualization. Top drivers ranked.",
        "Business Impact — Delay by customer segment, shipping mode, global market heatmap.",
      ],
    },
    {
      heading: "Business Impact",
      content: "",
      bullets: [
        "Flag high-risk shipments at order placement time — before the delay happens",
        "Proactively reroute Standard Class shipments to Express when delay risk exceeds 70%",
        "Focus carrier performance reviews on Europe and LATAM markets first",
        "Interactive dashboard requires no technical skills — filter by market, segment, or year",
      ],
    },
    {
      heading: "Technology Stack",
      content: "Python · Pandas · NumPy · XGBoost · Scikit-Learn · SMOTE · FastAPI · Tableau · Parquet · Git/GitHub",
    },
  ],
};

const teslaCaseStudy: CaseStudy = {
  title: "Tesla Stock Forecasting & Time Series Analysis",
  subtitle: "ARIMA vs SARIMA vs ETS · R · Tableau Analytics · 2019–2023",
  github: "https://github.com/099Misbah/Tesla-Stock-Price-Analysis",
  liveLink: "https://public.tableau.com/views/TeslaStockForecastingTimeSeriesAnalysis/TeslaStockForecastingTimeSeriesAnalysis",
  stats: [
    { label: "Records", value: "1,303" },
    { label: "Best Model", value: "SARIMA" },
    { label: "RMSE", value: "11.87" },
    { label: "MAPE", value: "4.12%" },
    { label: "vs ARIMA", value: "35% better" },
    { label: "Period", value: "2019–2023" },
  ],
  sections: [
    {
      heading: "Overview",
      content:
        "This project builds a complete time series forecasting pipeline on Tesla's historical stock data from 2019 to 2023 — a period covering one of the most dramatic price run-ups and crashes in modern market history. The goal was to compare ARIMA, SARIMA, and ETS models using statistically rigorous diagnostics (ADF test, ACF/PACF, AIC/BIC) and evaluate which best forecasts unseen 2023 prices. The project received recognition at UT Arlington for outstanding analytical methodology.",
    },
    {
      heading: "The Tesla Price Story — 2019 to 2023",
      content: "",
      bullets: [
        "2019 — $60–$85. Flat, skeptical market period.",
        "2020 — $85–$705. COVID stimulus + EV adoption surge + S&P 500 inclusion. 730% annual gain.",
        "2021 — $705–$1,050. Peak EV euphoria. Tesla became largest car company by market cap.",
        "2022 — $1,050 → $123. Interest rate hikes + growth selloff + Twitter acquisition. 88% crash.",
        "2023 — $123–$248. Partial recovery. Price cuts drove volume but compressed margins.",
      ],
    },
    {
      heading: "Stationarity Testing & Diagnostics",
      content: "Three steps applied before any modeling:",
      bullets: [
        "ADF Test — Raw prices non-stationary (p > 0.05). After 1st differencing: stationary (p < 0.01). Confirmed d=1.",
        "ACF/PACF — Significant spike at lag 1 in PACF → p=1. Gradual decay in ACF → q=1. Result: ARIMA(1,1,1) base.",
        "AIC/BIC — Lower score = better fit. SARIMA scored lowest on both: AIC 2756.8, BIC 2789.3.",
      ],
    },
    {
      heading: "Model Comparison — ARIMA vs SARIMA vs ETS",
      content: "All models trained on 2019–2022, tested on 2023 (unseen data). No data leakage.",
      bullets: [
        "ARIMA(2,1,2) — RMSE: 18.42 · MAE: 14.21 · MAPE: 6.84% · AIC: 2841.3",
        "ETS(A,A,N) — RMSE: 15.63 · MAE: 12.18 · MAPE: 5.91% · AIC: 2798.4",
        "SARIMA(1,1,1)(1,1,0)[12] — RMSE: 11.87 · MAE: 9.34 · MAPE: 4.12% · AIC: 2756.8 ✅ BEST",
        "SARIMA wins because it captures monthly/quarterly seasonal patterns that ARIMA ignores entirely",
        "4.12% MAPE means predictions stayed within ~$8–$11 of actual price on average",
      ],
    },
    {
      heading: "Tableau Analytics Dashboard — 4 Views",
      content: "",
      bullets: [
        "Price History — Full 2019–2023 close price chart. Complete Tesla story visible in one view.",
        "Forecast Comparison — ARIMA, SARIMA, ETS vs actual 2023 prices. 4 colored lines.",
        "Volatility Trends — Monthly rolling volatility. COVID spike and 2022 crash patterns clear.",
        "Model Performance — RMSE and MAPE bar chart. SARIMA bar shortest = best model.",
      ],
    },
    {
      heading: "Key Findings",
      content: "",
      bullets: [
        "SARIMA outperformed ARIMA by 35% on RMSE — seasonal component made the difference",
        "Volatility clustering confirmed — high volatility periods cluster together",
        "2020–2021 run-up defied all statistical baselines — external events dominate in extreme periods",
        "Train/test split on time series is critical — never shuffle time series data randomly",
      ],
    },
    {
      heading: "Technology Stack",
      content: "R · quantmod · forecast package · tseries · ggplot2 · Tableau · Git/GitHub",
    },
  ],
};

const allProjects: Project[] = [
  {
    title: "Shipment Delay Prediction System",
    href: "/projects/shipment-delay",
    image: "/images/projects/shipment-delay/cover.jpg",
    oneLiner:
      "End-to-end ML pipeline predicting shipment delays across 15K+ logistics records. Bronze→Silver→Gold data pipeline, XGBoost + SMOTE (74% accuracy, 0.83 ROC-AUC), FastAPI deployment, and a live 4-dashboard Tableau analytics suite.",
    tags: ["XGBoost", "SMOTE", "FastAPI", "Tableau", "ML Pipeline"],
    status: "live",
    liveLink: "https://public.tableau.com/views/ShipmentDelayPredictionMLAnalyticsDashboard/ShipmentDelayAnalysis",
    caseStudy: shipmentCaseStudy,
  },
  {
    title: "Tesla Stock Forecasting & Time Series Analysis",
    href: "/projects/tesla",
    image: "/images/projects/tesla/teslaimg.jpg",
    oneLiner:
      "Time-series forecasting pipeline analyzing trends, volatility, and seasonality in Tesla stock data. Compared ARIMA and SARIMA models using ACF/PACF diagnostics to generate short-term forecasts and decision-ready insights.",
    tags: ["Time Series", "ARIMA", "SARIMA", "Statistical Modeling"],
    status: "live",
    liveLink: "https://public.tableau.com/views/TeslaStockForecastingTimeSeriesAnalysis/TeslaStockForecastingTimeSeriesAnalysis?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    caseStudy: teslaCaseStudy,
  },
  {
    title: "Global Startup Ecosystem Analytics Platform",
    href: "/projects/startup-ecosystem",
    image: "/images/projects/startup-ecosystem/coverimg.jpg",
    oneLiner:
      "End-to-end analytics solution combining ETL pipelines, Power BI KPI dashboards, and ML models (96.5% accuracy) to predict Series A funding success from seed-stage features across 54K+ startup records.",
    tags: ["Power BI", "ETL Pipeline", "Random Forest", "DAX"],
    status: "live",
  },
  {
    title: "Freight Fraud Detection & Risk Analytics",
    href: "/projects/fraud-detection",
    image: "/images/projects/fraud-detection/coverimg.jpg",
    oneLiner:
      "Fraud risk analytics pipeline using supervised ML to flag high-risk freight transactions across 1M+ monthly records. Achieved 92% recall and reduced manual review time by 40% with Power BI operational dashboards.",
    tags: ["SQL", "Classification", "Power BI", "Risk Analytics"],
    status: "dev",
  },
  {
    title: "Customer Churn Prediction",
    href: "/projects/customer-churn",
    image: "/images/projects/customer churn/cover.png",
    oneLiner:
      "Classification pipeline to predict customer churn using telecom data. Feature engineering, model comparison, and an interactive dashboard to support retention strategy decisions.",
    tags: ["Classification", "Feature Engineering", "Tableau", "Python"],
    status: "dev",
  },
  {
    title: "Demand Forecasting & Inventory Optimization",
    href: "/projects/demand-forecasting",
    image: "/images/projects/demand-forecasting/cover.jpg",
    oneLiner:
      "Time series forecasting system using ARIMA, Prophet, and XGBoost with lag features and rolling averages. FastAPI forecast endpoint and Tableau dashboard showing predicted vs actual demand with inventory recommendations.",
    tags: ["Prophet", "XGBoost", "ARIMA", "FastAPI", "Tableau"],
    status: "dev",
  },
  {
    title: "SQL + BI Analytics Dashboard",
    href: "/projects/sql-bi-analytics",
    image: "/images/projects/sql-bi-analytics/cover.jpg",
    oneLiner:
      "Pure analytics project built with advanced SQL queries and Power BI to surface business insights from sales and HR data. Designed for stakeholder-ready reporting with KPI definitions and drill-through dashboards.",
    tags: ["SQL", "Power BI", "DAX", "KPI Design"],
    status: "dev",
  },
  {
    title: "NLP-Powered Data Career Bot",
    href: "/projects/nlp-career-bot",
    image: "/images/projects/nlp-career-bot/cover.jpg",
    oneLiner:
      "Streamlit chatbot helping job seekers detect scams, improve resumes, and explore data roles. Built with TF-IDF + Logistic Regression for intent classification. Planned upgrade with GPT/HuggingFace for smarter responses.",
    tags: ["NLP", "TF-IDF", "Streamlit", "Logistic Regression"],
    status: "dev",
  },
  {
    title: "Enterprise LLM Business Intelligence Assistant",
    href: "/projects/llm-bi-assistant",
    image: "/images/projects/llm-bi-assistant/cover.png",
    oneLiner:
      "RAG-powered AI assistant that answers business questions by retrieving context from PDFs, CSV reports, and dashboards. Built with FAISS vector DB, OpenAI embeddings, FastAPI backend, and Streamlit frontend.",
    tags: ["RAG", "FAISS", "LLM", "FastAPI", "Streamlit"],
    status: "dev",
  },
];

export default function Home() {
  const [openImage, setOpenImage] = useState<null | { src: string; alt: string }>(null);
  const [openCaseStudy, setOpenCaseStudy] = useState<null | CaseStudy>(null);

  const certificates: Cert[] = useMemo(
    () => [
      { title: "IBM Data Science Professional Certificate", issuer: "IBM / Coursera", date: "Issued 2025", image: "/images/certificates/dspro.jpg" },
      { title: "SQL (Intermediate)", issuer: "HackerRank", date: "Issued Oct 2025", image: "/images/certificates/sqlin.jpg" },
      { title: "Machine Learning with Python", issuer: "IBM / Coursera", date: "2025", image: "/images/certificates/ml.jpg" },
      { title: "Database and SQL for Data Science with Python", issuer: "IBM / Coursera", date: "2025", image: "/images/certificates/dbsql.jpg" },
      { title: "Python for Data Science, AI & Development", issuer: "IBM / Coursera", date: "2025", image: "/images/certificates/pyai.jpg" },
      { title: "Data Analyst with Python", issuer: "IBM / Coursera", date: "2025", image: "/images/certificates/da.jpg" },
    ],
    []
  );

  const badges: Badge[] = useMemo(
    () => [{ title: "IBM Python Project for Data Science", issuer: "IBM", image: "/images/Badges/Badge.jpeg" }],
    []
  );

  const books: Book[] = useMemo(
    () => [
      { title: "The Go-Giver", image: "/images/Books/go.jpeg", takeaway: "Lead with value first: focus on giving more in service/value than you take in payment." },
      { title: "Atomic Habits", image: "/images/Books/atomic.jpg", takeaway: "Build systems, not goals: small habits compound into big results over time." },
      { title: "The Miracle Morning", image: "/images/Books/miracle.png", takeaway: "Start the day intentionally: a consistent morning routine boosts focus and execution." },
      { title: "The Art of Bouncing Back", image: "/images/Books/bouncing.jpeg", takeaway: "Resilience is trainable: reframe setbacks and take small actions to regain momentum." },
      { title: "The Confident Mind", image: "/images/Books/confident.jpeg", takeaway: "Confidence comes from preparation + self-talk: control what you can, release the rest." },
      { title: "The Servant", image: "/images/Books/servant.jpg", takeaway: "Leadership = service: trust and influence come from empathy, listening, and consistency." },
      { title: "No Excuse", image: "/images/Books/no.jpeg", takeaway: "Success is built on self-discipline. Take full responsibility, eliminate excuses, and execute consistently even when motivation is low." },
    ],
    []
  );

  const liveProjects = allProjects.filter((p) => p.status === "live");
  const devProjects = allProjects.filter((p) => p.status === "dev");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="px-6 py-10 md:px-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to Work · Dallas, TX
            </span>
            <p className="mt-4 text-xs font-medium text-slate-200/70 tracking-widest uppercase">
              Data Science • ML Engineering • Analytics
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">Misbah Shaikh</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200/80 md:text-base">
              Building intelligent, automated analytics & AI-powered solutions from raw data pipelines to deployed ML models and executive dashboards.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Python</Pill><Pill>SQL</Pill><Pill>Tableau</Pill><Pill>Power BI</Pill>
              <Pill>XGBoost</Pill><Pill>FastAPI</Pill><Pill>AWS</Pill><Pill>Databricks</Pill><Pill>Docker</Pill>
            </div>
          </div>

          <div className="relative px-6 pb-8 md:px-10">
            <div className="-mt-10 rounded-2xl border bg-white p-5 shadow-sm md:-mt-6 md:p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <Image src="/images/mainprofile.jpg" alt="Misbah Shaikh" width={80} height={80}
                    className="rounded-full object-cover ring-4 ring-white md:h-20 md:w-20" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Data Scientist & ML Engineer</p>
                    <p className="mt-0.5 text-xs text-gray-500">M.S. Applied Statistics & Data Science · UT Arlington · GPA 3.88</p>
                    <p className="mt-0.5 text-xs text-gray-500">Dallas, TX · Available for full-time roles</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a href="https://github.com/099Misbah" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                  <a href="http://linkedin.com/in/misbah-s-3a703b216" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
                    <FaLinkedin className="text-lg text-blue-600" /> LinkedIn
                  </a>
                  <a href="/images/resume.pdf" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
                    <FaFileAlt className="text-lg text-gray-600" /> Resume
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                I design end-to-end data solutions that turn messy, real-world data into clear insights, predictive models, and scalable pipelines.
                With a Masters in Applied Statistics & Data Science and hands-on experience in ML engineering, analytics, and BI. I build everything
                from automated ETL pipelines and forecasting models to deployed APIs and executive dashboards.
                <br /><b>My focus: make data reliable, insights actionable, and solutions scalable.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10">

          {/* ── SKILLS ─────────────────────────────────────────────────── */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Skills</SectionTitle>
            <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Python</Pill><Pill>SQL</Pill><Pill>R</Pill><Pill>Java</Pill><Pill>C</Pill><Pill>SAS</Pill><Pill>.NET</Pill>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Machine Learning & AI</h3>
                <p className="mt-2 text-sm text-gray-700">Predictive modeling, classification & regression, time series forecasting, NLP, deep learning fundamentals, RAG & LLM engineering</p>
                <p className="mt-3 text-xs text-gray-500"><b>Libraries:</b> Scikit-learn, XGBoost, Random Forest, Logistic Regression, TensorFlow, PyTorch, SMOTE, ARIMA/SARIMA, Prophet, SHAP, FAISS, HuggingFace</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Data Engineering</h3>
                <p className="mt-2 text-sm text-gray-700">ETL/ELT pipeline design, API-based data ingestion, feature engineering, scalable data processing, Parquet file formats</p>
                <p className="mt-3 text-xs text-gray-500"><b>Tools:</b> Pandas, NumPy, FastAPI, Streamlit, Docker, Airflow (basic), PySpark, Kafka (basic)</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Analytics & BI</h3>
                <p className="mt-2 text-sm text-gray-700">Advanced SQL querying, KPI design, interactive dashboard development, executive reporting & storytelling, EDA</p>
                <p className="mt-3 text-xs text-gray-500"><b>Tools:</b> Tableau, Power BI, DAX, Power Query, Excel, Seaborn, Matplotlib, Plotly</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Cloud & Infrastructure</h3>
                <p className="mt-2 text-sm text-gray-700">Cloud data storage, serverless processing, ML model deployment, version control & team collaboration</p>
                <p className="mt-3 text-xs text-gray-500"><b>Platforms:</b> AWS (S3, Glue, Lambda), GCP, Databricks, Snowflake, Oracle, Git/GitHub</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">Professional & Business Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Stakeholder Communication</Pill><Pill>Business Problem Solving</Pill>
                <Pill>Data-Driven Decision Making</Pill><Pill>Cross-Functional Collaboration</Pill>
                <Pill>Executive Storytelling</Pill><Pill>Presentation Skills</Pill>
                <Pill>Project Ownership</Pill><Pill>Continuous Learning</Pill>
              </div>
              <p className="mt-3 text-xs text-gray-500">Actively applying principles from The Go-Giver, Atomic Habits, The Confident Mind, The Servant, and more.</p>
            </div>
          </div>

          {/* ── PROJECTS ───────────────────────────────────────────────── */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Projects</SectionTitle>
            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gray-400">✦ Live — Completed</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {liveProjects.map((p) => (
                <div key={p.href} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 flex flex-col">
                  <div className="relative h-36 w-full bg-gray-100 shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <span className="absolute top-2 left-2 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-semibold text-white shadow">Live</span>
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:underline leading-snug">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 flex-1">{p.oneLiner}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      {p.caseStudy ? (
                        <button
                          onClick={() => setOpenCaseStudy(p.caseStudy!)}
                          className="text-xs font-medium text-gray-900 hover:underline"
                        >
                          Case study →
                        </button>
                      ) : (
                        <Link href={p.href} className="text-xs font-medium text-gray-900 hover:underline">
                          Case study →
                        </Link>
                      )}
                      {p.liveLink && (
                        <a href={p.liveLink} target="_blank" rel="noreferrer"
                          className="text-xs font-medium text-blue-600 hover:underline">
                          Live dashboard ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-gray-400">⚙ Under Development — Coming Soon</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {devProjects.map((p) => (
                <div key={p.href} className="overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 flex flex-col opacity-80">
                  <div className="relative h-36 w-full bg-gray-100 shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover opacity-60" sizes="(max-width: 768px) 100vw, 33vw" />
                    <span className="absolute top-2 left-2 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold text-amber-600">In Dev</span>
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-sm font-semibold text-gray-700 leading-snug">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 flex-1">{p.oneLiner}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CERTIFICATIONS ─────────────────────────────────────────── */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Certifications & Badges</SectionTitle>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((c) => (
                <button key={c.title} type="button" onClick={() => setOpenImage({ src: c.image, alt: c.title })}
                  className="text-left rounded-2xl border border-gray-200 bg-white p-4 hover:bg-gray-50">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-white">
                    <Image src={c.image} alt={c.title} fill className="object-contain p-3" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-900 leading-snug">{c.title}</p>
                    <p className="mt-1 text-xs text-gray-500">{c.issuer} · {c.date}</p>
                    <p className="mt-1.5 text-[11px] text-gray-400">Click to zoom</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-900">Badges</p>
              <div className="mt-4 flex flex-wrap gap-5">
                {badges.map((b) => (
                  <button key={b.title} type="button" onClick={() => setOpenImage({ src: b.image, alt: b.title })}
                    className="group flex flex-col items-center gap-2">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border bg-white shadow-sm">
                      <Image src={b.image} alt={b.title} fill className="object-cover" sizes="112px" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-900 group-hover:underline">{b.title}</p>
                      {b.issuer ? <p className="text-[11px] text-gray-500">{b.issuer}</p> : null}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── BOOKS ──────────────────────────────────────────────────── */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Professional Growth</SectionTitle>
            <p className="mt-3 text-sm text-gray-600">Books I actively apply — not just read — for communication, leadership, and execution.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((b) => (
                <div key={b.title} className="rounded-2xl border border-gray-200 bg-white p-4">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border bg-gray-50">
                      <Image src={b.image} alt={b.title} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{b.title}</p>
                      {b.author && <p className="mt-0.5 text-xs text-gray-500">{b.author}</p>}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">
                    <span className="font-semibold">Applied takeaway: </span>{b.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">Misbah Shaikh</p>
            <p className="mt-0.5 text-xs text-gray-500">Dallas, TX · shaikhamisbah099@gmail.com · (713) 205-7875</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://github.com/099Misbah" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
              <FaGithub /> GitHub
            </a>
            <a href="http://linkedin.com/in/misbah-s-3a703b216" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
              <FaLinkedin className="text-blue-600" /> LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
              <FaFileAlt className="text-gray-600" /> Resume
            </a>
          </div>
        </div>
      </footer>

      {/* ── CASE STUDY MODAL ─────────────────────────────────────────────── */}
      {openCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenCaseStudy(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b bg-white p-5">
              <div>
                <p className="text-base font-bold text-gray-900">{openCaseStudy.title}</p>
                <p className="mt-0.5 text-xs italic text-gray-500">{openCaseStudy.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenCaseStudy(null)}
                className="shrink-0 rounded-lg border px-3 py-1 text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>

            <div className="p-5 space-y-6">
              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {openCaseStudy.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
                    <p className="text-lg font-bold text-gray-900">{s.value}</p>
                    <p className="mt-0.5 text-[10px] text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Sections */}
              {openCaseStudy.sections.map((sec) => (
                <div key={sec.heading}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-sm font-semibold text-gray-900">{sec.heading}</p>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                  {sec.content && (
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">{sec.content}</p>
                  )}
                  {sec.bullets && (
                    <ul className="space-y-1.5 pl-1">
                      {sec.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2 border-t">
                <a href={openCaseStudy.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                  <FaGithub /> GitHub Repo
                </a>
                {openCaseStudy.liveLink && (
                  <a href={openCaseStudy.liveLink} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
                    📊 Live Dashboard ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── IMAGE ZOOM MODAL ─────────────────────────────────────────────── */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b p-3">
              <p className="text-sm font-semibold text-gray-900">{openImage.alt}</p>
              <button type="button" onClick={() => setOpenImage(null)}
                className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50">
                Close
              </button>
            </div>
            <div className="relative h-[75vh] w-full bg-white">
              <Image src={openImage.src} alt={openImage.alt} fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
  image: string; // put images in /public/images/certificates/...
};

type Badge = {
  title: string;
  issuer?: string;
  image: string; // put images in /public/images/badges/...
};

type FeaturedProject = {
  title: string;
  href: string;
  image: string;
  oneLiner: string;
  tags: string[];
};

type Book = {
  title: string;
  author?: string;
  image: string; // /images/books/...
  takeaway: string;
};


const featuredProjects: FeaturedProject[] = [
  {
    title: "Tesla Stock Forecasting & Time Series Analysis",
    href: "/projects/tesla",
    image: "/images/projects/tesla/tesla.jpg",
    oneLiner:
      "Designed a time-series forecasting pipeline to analyze trends, volatility, and seasonality in Tesla stock data. Compared ARIMA and SARIMA models using statistical diagnostics to generate short-term forecasts and decision-ready insights.",
    tags: ["Time Series Forecastin", "Statistical Modeling", "Financial Analytics"],
  },
  {
    title: "Global Startup Ecosystem Analytics Platform",
    href: "/projects/startup-ecosystem",
    image: "/images/projects/startup-ecosystem/cover.png",
    oneLiner:
      "Built an end-to-end analytics solution combining automated ETL pipelines, KPI dashboards, and predictive modeling to analyze global startup funding patterns and forecast investment outcomes.",
    tags: ["KPI Design & Dashboards", "Data Pipelines (ETL)", "Predictive Analytics"],
  },
  {
    title: "Freight Fraud Detection & Risk Analytics System",
    href: "/projects/fraud-detection",
    image: "/images/projects/fraud-detection/cover.png",
    oneLiner:
      "Developed a fraud risk analytics solution using supervised machine learning to identify high-risk freight transactions. Delivered KPI dashboards to support operational monitoring and reduce manual investigation effort.",
    tags: ["Risk Analytics", "Anomaly & Fraud Detection", "Operational Dashboards"],
  },
];

export default function Home() {
  const [openImage, setOpenImage] = useState<null | { src: string; alt: string }>(null);

  const certificates: Cert[] = useMemo(
    () => [
      {
        title: "IBM Data Science Professional Certificate",
        issuer: "IBM / Coursera",
        date: "Issued 2025",
        image: "/images/certificate/DSpro.jpg",
      },
      {
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        date: "Issued Oct 2025",
        image: "/images/certificate/SQLin.jpg",
      },
      {
        title: "Machine Learning with Python",
        issuer: "IBM / Coursera",
        date: "2025",
        image: "/images/certificate/ML.jpg",
      },
      {
        title: "Database and SQL for Data Science with Python",
        issuer: "IBM / Coursera",
        date: "2025",
        image: "/images/certificate/DB&sql.jpg",
      },
      {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM / Coursera",
        date: "2025",
        image: "/images/certificate/py-AI.jpg",
      },
      {
        title: "Data Analyst with Python",
        issuer: "IBM / Coursera",
        date: "2025",
        image: "/images/certificate/DA.jpg",
      },
    ],
    []
  );

  const badges: Badge[] = useMemo(
    () => [
      {
        title: "IBM Python Project for Data Science",
        issuer: "IBM",
        image: "/images/badges/Badge.jpeg",
      },
    ],
    []
  );
const books: Book[] = useMemo(
  () => [
    {
      title: "The Go-Giver",
      image: "/images/books/go.jpeg",
      takeaway: "Lead with value first: focus on giving more in service/value than you take in payment.",
    },
    {
      title: "Atomic Habits",
      image: "/images/books/atomic.jpg",
      takeaway: "Build systems, not goals: small habits compound into big results over time.",
    },
    {
      title: "The Miracle Morning",
      image: "/images/books/miracle.png",
      takeaway: "Start the day intentionally: a consistent morning routine boosts focus and execution.",
    },
    {
      title: "The Art of Bouncing Back",
      image: "/images/books/bouncing.jpeg",
      takeaway: "Resilience is trainable: reframe setbacks and take small actions to regain momentum.",
    },
    {
      title: "The Confident Mind",
      image: "/images/books/confident.jpeg",
      takeaway: "Confidence comes from preparation + self-talk: control what you can, release the rest.",
    },
    {
      title: "The Servant",
      image: "/images/books/servant.jpg",
      takeaway: "Leadership = service: trust and influence come from empathy, listening, and consistency.",
    },
    {
      title: "No Excuse",
      image: "/images/books/no.jpeg",
      takeaway: "Success is built on self-discipline. Take full responsibility, eliminate excuses, and execute consistently even when motivation is low.",
    },
  ],
  []
);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO: LinkedIn-style banner + profile card */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        {/* Banner */}
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="px-6 py-10 md:px-10">
            <p className="text-xs font-medium text-slate-200/90">Data Science • ML Engineering</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Misbah Shaikh
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200/90 md:text-base">
              Building intelligent, automated analytics & AI-powered solutions
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Python</Pill>
              <Pill>SQL</Pill>
              <Pill>BI Tools</Pill>
              <Pill>AWS</Pill>
              <Pill>Databricks</Pill>
              <Pill>FastAPI</Pill>
              <Pill>Docker</Pill>
              <Pill>Business Book Reader</Pill>
            </div>
          </div>

          {/* Profile card overlaps banner */}
          <div className="relative px-6 pb-8 md:px-10">
            <div className="-mt-10 rounded-2xl border bg-white p-5 shadow-sm md:-mt-6 md:p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/mainprofile.jpg"
                    alt="Misbah Shaikh"
                    width={80}
                    height={80}
                    className="rounded-full object-cover ring-4 ring-white md:h-20 md:w-20"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Data Scientist & ML Engineer (Entry–Intermediate)
                    </p>
                    <p className="mt-1 text-xs text-gray-600">Dallas, TX</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/099Misbah"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>

                  <a
                    href="http://linkedin.com/in/misbah-s-3a703b216"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                  >
                    <FaLinkedin className="text-lg text-blue-600" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                I design end-to-end data solutions that turn messy, real-world data into clear insights, predictive
                models, and scalable pipelines. With a Master’s in Applied Statistics & Data Science and hands-on
                experience delivering production analytics and ML solutions, I specialize in analytics, machine
                learning, and automation — from ETL pipelines and forecasting models to executive dashboards and deployed
                APIs.
                <br />
                <b>My focus is simple: make data reliable, insights actionable, and solutions scalable.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10">
          {/* Skills */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Skills</SectionTitle>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Data Science & ML Learning</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Predictive modeling, classification & regression, time series forecasting (ARIMA/SARIMA), NLP
                  fundamentals
                  <br />
                  <br />
                  <b>Tools: Python (Pandas, NumPy, scikit-learn), TensorFlow, PyTorch</b>
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Data Engineering & Cloud</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Designing and automating ETL/ELT pipelines, API-based data ingestion, scalable data processing
                  <br />
                  <br />
                  <b>Tools: AWS (S3, Glue, Lambda), Databricks, PySpark, FastAPI, Docker, Airflow (basic)</b>
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Analytics & BI</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Advanced SQL querying, KPI definition, dashboard design, executive reporting
                  <br />
                  <br />
                  <b>Tools: SQL (Advanced), Power BI (DAX, Power Query), Tableau, Excel</b>
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">Professional & Business Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Stakeholder communication</Pill>
                <Pill>Business problem solving</Pill>
                <Pill>Data-driven decision making</Pill>
                <Pill>Cross-functional collaboration</Pill>
                <Pill>Presentation Skill</Pill>
                <Pill>Executive storytelling</Pill>
              </div>
              <p className="mt-3 text-xs text-gray-600">
                Influenced by self-development & business books reading (The Go-Giver, Atomic Habits, The Art of
                Bouncing Back, The Confident Mind, The Servant, The Miracle Morning).
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Featured Projects</SectionTitle>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {featuredProjects.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:bg-gray-50"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={p.href === "/projects/tesla"}
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:underline">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{p.oneLiner}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>

                    <p className="mt-3 text-xs text-gray-600">Open case study →</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-5">
              <Link
                href="/projects"
                className="inline-flex rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                View All Projects →
              </Link>
            </div>
          </div>

          {/* Certifications & Badges */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Certifications & Badges</SectionTitle>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {certificates.map((c) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setOpenImage({ src: c.image, alt: c.title })}
                  className="text-left rounded-2xl border border-gray-200 bg-white p-4 hover:bg-gray-50"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-white">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-900">{c.title}</p>
                    <p className="mt-1 text-xs text-gray-600">
                      {c.issuer} • {c.date}
                    </p>
                    <p className="mt-2 text-[11px] text-gray-500">Click to zoom</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-900">Badges</p>

              <div className="mt-4 flex flex-wrap gap-5">
                {badges.map((b) => (
                  <button
                    key={b.title}
                    type="button"
                    onClick={() => setOpenImage({ src: b.image, alt: b.title })}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border bg-white shadow-sm">
                      <Image src={b.image} alt={b.title} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-900 group-hover:underline">{b.title}</p>
                      {b.issuer ? <p className="text-[11px] text-gray-600">{b.issuer}</p> : null}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Books placeholder */}
          {/* Books */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <SectionTitle>Professional Growth</SectionTitle>

  <p className="mt-3 text-sm text-gray-700">
    Books I actively apply for communication, leadership, and execution.
  </p>

  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {books.map((b) => (
      <div
        key={b.title}
        className="rounded-2xl border border-gray-200 bg-white p-4"
      >
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border bg-gray-50">
            <Image
              src={b.image}
              alt={b.title}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900">{b.title}</p>
            {b.author ? (
              <p className="mt-1 text-xs text-gray-600">{b.author}</p>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-700">
          <span className="font-semibold">Applied takeaway:</span> {b.takeaway}
        </p>
      </div>
    ))}
  </div>
</div>

        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-gray-600">
        Dallas, TX · shaikhamisbah099@gmail.com · 713-205-7875
      </footer>

      {/* Optional: Modal (so Click to zoom actually works) */}
      {openImage ? (
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
              <button
                type="button"
                onClick={() => setOpenImage(null)}
                className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>

            <div className="relative h-[75vh] w-full bg-white">
              <Image src={openImage.src} alt={openImage.alt} fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

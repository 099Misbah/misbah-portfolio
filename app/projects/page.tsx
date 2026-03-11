import Link from "next/link";
type Project = {
  title: string;
  slug: string;
  tier: "Featured" | "Additional";
  oneLiner: string;
  tags: string[];
  github?: string;
};

const projects: Project[] = [
  // ⭐ Featured (Tier 1)
  

  // 📘 Additional (Tier 2)
  {
    title: "NLP-Powered Data Career & Job Scam Detection Bot",
    slug: "nlp-bot",
    tier: "Additional",
    oneLiner:
      "Streamlit NLP chatbot using TF-IDF + Logistic Regression for intent classification and guidance.",
    tags: ["NLP", "Streamlit", "Python", "scikit-learn"],
  },
  {
    title: "Automatic Number Plate Recognition (ANPR)",
    slug: "anpr",
    tier: "Additional",
    oneLiner:
      "Deep learning object detection using Faster R-CNN (ResNet-50) for license plate detection.",
    tags: ["PyTorch", "Computer Vision", "Faster R-CNN"],
  },
  {
    title: "The Stack Overflow Developer Survey Results (2019)",
    slug: "stackoverflow",
    tier: "Additional",
    oneLiner:
      "Survey analysis with EDA + dashboards to uncover trends in roles, compensation, and tech usage.",
    tags: ["Python", "SQL", "EDA", "BI"],
  },
  {
    title: "Real Estate Price Forecasting & Analytics",
    slug: "real-estate",
    tier: "Additional",
    oneLiner:
      "Regression-based forecasting with dashboards to support pricing and investment decisions.",
    tags: ["Python", "Regression", "Power BI", "SQL"],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-lg font-semibold tracking-tight text-gray-900">{children}</h2>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function ProjectsPage() {
  //const featured = projects.filter((p) => p.tier === "Featured");
  const additional = projects.filter((p) => p.tier === "Additional");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 max-w-3xl text-sm text-gray-700">
          Featured work first, followed by additional academic and analytics projects. Each project opens a detailed
          case-study page with models, metrics, tools, and screenshots.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <SectionTitle>Additional Projects</SectionTitle>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {additional.map((p) => (
              <a
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-5 hover:bg-gray-50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:underline">
                    {p.title}
                  </h3>
                  <span className="rounded-full border border-gray-200 bg-white px-2 py-1 text-[11px] text-gray-600">
                    Additional
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-700">{p.oneLiner}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-gray-600">
        <Link className="underline" href="/">
  ← Back to Home
</Link>

      </footer>
    </main>
  );
}

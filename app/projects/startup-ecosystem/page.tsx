import Image from "next/image";
import Link from "next/link";

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
      <h2 className="text-base font-semibold tracking-tight text-gray-900">{children}</h2>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

type Visual = {
  title: string;
  image: string;
  caption?: string;
};

export default function StartupEcosystemPage() {
  const dashboardVisuals: Visual[] = [
    {
      title: "Funding Overview (Power BI)",
      image: "/images/projects/startup-ecosystem/powerbi.png",
      caption: "Total funding overview with key KPIs and high-level insights.",
    },
    {
      title: "Funding Over Time (1900–2020)",
      image: "/images/projects/startup-ecosystem/funding-year.png",
      caption: "Historical funding trend showing major growth periods (1999–2008, 2010–2015).",
    },
    {
      title: "Top Markets by Funding",
      image: "/images/projects/startup-ecosystem/top-markets.png",
      caption: "Biotechnology, Mobile, and Software appear among top-funded sectors.",
    },
    {
      title: "Funding by Country",
      image: "/images/projects/startup-ecosystem/map.png",
      caption: "Geographic distribution highlighting strong concentration in North America and Europe.",
    },
    {
      title: "Debt Financing by Industry (Treemap)",
      image: "/images/projects/startup-ecosystem/debt-treemap.png",
      caption: "Debt financing concentrated in Mobile and Clean Tech sectors.",
    },
    {
      title: "Logistic Regression Model Confusion Matrix",
      image: "/images/projects/startup-ecosystem/logistic regression.png",
      caption: "Accuracy 95.8%",
    },
    {
      title: "Random Forest Model Confusion Matrix",
      image: "/images/projects/startup-ecosystem/random forest.png",
      caption: "Accuracy 96.5%",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Global Startup Ecosystem Analysis
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                Funding & growth analysis with Power BI dashboards + machine learning to predict
                a startup’s likelihood of raising Series A funding using seed-stage features.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Python</Pill>
                <Pill>ETL/Data Pipeline Design</Pill>
                <Pill>Pandas</Pill>
                <Pill>NumPy</Pill>
                <Pill>Power BI</Pill>
                <Pill>DAX</Pill>
                <Pill>Power Query</Pill>
                <Pill>Classification</Pill>
                <Pill>Logistic Regression</Pill>
                <Pill>Random Forest</Pill>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* If you have a repo link, replace # */}
              <a
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>

              <Link
                className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                href="/projects"
              >
                ← Back to Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6">
          {/* Overview */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Overview</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              This project explores the global startup ecosystem by analyzing funding trends, geographic
              distribution, industry-wise investment patterns, and debt financing. It also includes a
              predictive modeling component to estimate a startup’s likelihood of securing Series A funding
              using seed-stage characteristics.
              <br />
              <br />
              Built using <b>Python</b> for data preprocessing + modeling, and <b>Power BI</b> for dashboarding,
              this work combines exploratory analytics and machine learning insights in one cohesive solution.
            </p>
          </div>

          {/* Objectives */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Key Objectives</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Clean and prepare a real-world startup funding dataset</li>
              <li>Visualize global funding patterns with an interactive Power BI dashboard</li>
              <li>Train ML models to predict Series A funding success</li>
              <li>Evaluate and compare model performance</li>
              <li>Deliver business insights for investors and entrepreneurs</li>
            </ul>
          </div>

          {/* Dashboard */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Power BI Dashboard Features</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Total Funding Overview</li>
              <li>Funding Over Time (1900–2020)</li>
              <li>Top Markets by Funding</li>
              <li>Funding Distribution by Country</li>
              <li>Debt Financing by Industry (Treemap)</li>
              <li>Dynamic filters for Year, Market, and Country</li>
            </ul>
            <p className="mt-4 text-sm text-gray-700">
              <b>Technologies:</b> Power BI, DAX, Power Query
            </p>
          </div>

          {/* Data Cleaning */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Data Cleaning & Preparation</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Removed duplicate entries and standardized inconsistent country/market labels</li>
              <li>Handled missing values using median imputation (numerical) and mode (categorical)</li>
              <li>Converted funding columns to numeric types and corrected date formats</li>
              <li>Created a binary target column: <b>Raised_Series_A</b> (1 = Yes, 0 = No)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-700">
              <b>Tools:</b> Python (Pandas, NumPy)
            </p>
          </div>

          {/* EDA */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Exploratory Data Analysis (EDA)</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Biotechnology, Mobile, and Software emerged as top funded markets</li>
              <li>North America and Europe dominate in total funding</li>
              <li>Notable funding rise occurred during 1999–2008 and 2010–2015</li>
              <li>Debt financing is concentrated in Mobile and Clean Tech sectors</li>
            </ul>
            <p className="mt-4 text-sm text-gray-700">
              <b>Libraries:</b> Seaborn, Matplotlib, Plotly
            </p>
          </div>

          {/* ML */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Machine Learning: Predicting Series A Success</SectionTitle>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              <b>Goal:</b> Predict whether a startup will secure Series A funding using seed-stage data.
            </p>

            <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-900">Features Used</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Seed funding amount</li>
                <li>Number of funding rounds</li>
                <li>Number of investors</li>
                <li>Market sector</li>
                <li>Country</li>
                <li>Time to next funding round</li>
              </ul>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left font-semibold">Model</th>
                    <th className="py-2 text-left font-semibold">Accuracy</th>
                    <th className="py-2 text-left font-semibold">Precision</th>
                    <th className="py-2 text-left font-semibold">Recall</th>
                    <th className="py-2 text-left font-semibold">F1</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">Logistic Regression</td>
                    <td className="py-2">95.8%</td>
                    <td className="py-2">0.96</td>
                    <td className="py-2">0.96</td>
                    <td className="py-2">0.96</td>
                  </tr>
                  <tr>
                    <td className="py-2">Random Forest Classifier</td>
                    <td className="py-2">96.5%</td>
                    <td className="py-2">0.97</td>
                    <td className="py-2">0.96</td>
                    <td className="py-2">0.97</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Confusion matrix shows strong performance across both classes</li>
              <li>Random Forest outperformed Logistic Regression by a small margin</li>
              <li>Cross-validation was used to validate stability</li>
            </ul>

            <p className="mt-4 text-sm text-gray-700">
              <b>Libraries:</b> Scikit-learn, XGBoost, Seaborn (confusion matrix)
            </p>
          </div>

          {/* Visuals */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Visuals</SectionTitle>
          
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {dashboardVisuals.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                >
                  <p className="text-sm font-semibold text-gray-900">{v.title}</p>

                  <div className="relative mt-3 aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-white">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {v.caption ? (
                    <p className="mt-2 text-xs text-gray-600">{v.caption}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Business Benefits & Insights</SectionTitle>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">For Investors</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  <li>Better early-stage decision-making with predictive signals</li>
                  <li>Identify market opportunities by geography and sector</li>
                  <li>Reduce risk by learning from historical success/failure patterns</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">For Startups</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  <li>Benchmark seed-stage metrics vs Series A success cases</li>
                  <li>Focus on markets and locations with stronger funding probability</li>
                  <li>Understand timing patterns between rounds</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">For Stakeholders</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  <li>Macro-level funding evolution over decades</li>
                  <li>Supports policy decisions by revealing regional funding gaps</li>
                  <li>Improves ecosystem visibility with interactive dashboards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Enhancements */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Future Enhancements</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Time-series forecasting: predict future funding trends by country</li>
              <li>Clustering: segment startups by funding stage, geography, and investment profile</li>
              <li>Investor profiling: identify top VCs by portfolio success</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <Link className="underline" href="/">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

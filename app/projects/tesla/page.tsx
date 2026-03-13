import Link from "next/link";
import Image from "next/image"

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

export default function TeslaProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Tesla Stock Forecasting & Time Series Analysis
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                Weekly time-series forecasting of Tesla stock prices using ARIMA, ETS, and SARIMA with stationarity
                testing, diagnostics, and model comparison.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Python</Pill>
                <Pill>R</Pill>
                <Pill>ARIMA</Pill>
                <Pill>SARIMA</Pill>
                <Pill>ETS</Pill>
                <Pill>ADF Test</Pill>
                <Pill>ACF/PACF</Pill>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                href="https://github.com/099Misbah/Tesla-Stock-Price-Analysis"
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
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Overview</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Tesla’s stock price reflects a combination of company performance, investor sentiment, and macroeconomic conditions. Due to its high volatility, short-term daily forecasts are noisy and unreliable.
              <br/><br/><b>Objective: </b>    </p>
              <ul className="list-disc pl-4">
                <li>Capture trends and seasonality</li>
                <li>Compare classical time-series models</li>
                <li>Identify the most reliable approach for decision support</li>
              </ul>
        
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Data & Scope</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Source: Kaggle (Tesla Stock Prices).</li>
              <li>Time Range: 2015–2023</li>
              <li>Frequency: Weekly aggregation.</li>
              <li>Records: 468 weekly observations.</li>
            </ul>
           <p className="mt-4 text-sm leading-relaxed text-gray-700">
            <b>Why weekly data?</b>
            <br/>Weekly aggregation reduces noise while preserving meaningful market trends and ideal for medium-term forecasting and analysis.
           </p>
           
        </div>

         <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Analytical Approch & Model Evaluated </SectionTitle>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Data Preparation</h3>
                <p className="mt-2 text-sm text-gray-700">
                    Converted daily prices to weekly closing prices, Verified no missing values and Transformed data into a time-series object (frequency = 52).
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Exploratory Insights</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Strong long-term upward trend beginning around 2019, Significant volatility post-2020 and Evidence of recurring seasonal behavior
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">Stationarity & Diagnostics</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Applied ADF test → confirmed non-stationarity, Performed differencing to stabilize mean and variance and Used ACF/PACF to guide model selection.
                </p>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
                
             <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left font-semibold">Model</th>
                    <th className="py-2 text-left font-semibold">Purpose</th>
                    <th className="py-2 text-left font-semibold">Key Insight</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">ARIMA</td>
                    <td className="py-2">Baseline trend modeling</td>
                    <td className="py-2">Good training fit, weak generalization</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">ETS</td>
                    <td className="py-2">Smoothing Based Forcasting</td>
                    <td className="py-2">Failed to capture volatility</td>
                  </tr>
                  <tr>
                    <td className="py-2">SARIMA</td>
                    <td className="py-2">Seasonal modeling</td>
                    <td className="py-2">Best balance of stability and accuracy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Model Performance (High-level)</SectionTitle>
         
          <h5 className="mt-2 text-sm"><b>Training Performance</b></h5>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>SARIMA achieved lowest RMSE & MAE.</li>
              <li>Residuals showed minimal insights left unexplained.</li>
            </ul>
            <h5 className="mt-2 text-sm"><b>Test Performance</b></h5>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>All models struggled with extreme volatility.</li>
              <li>SARIMA consistently outperformed ARIMA and ETS.</li>
            </ul>
            <h6 className="mt-2 text-sm"><b>Key takeaway:</b> No classical model fully predicts Tesla’s volatility but SARIMA is the most reliable among traditional approaches.</h6>
          </div>


          {/* Charts */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <SectionTitle>Visual Analysis</SectionTitle>

    {/* Forecasts */}
<div className="mt-5">
  <p className="mb-3 text-sm font-medium text-gray-700">
    Forecast Comparison (ARIMA vs ETS vs SARIMA)
  </p>

  <div className="grid gap-4 md:grid-cols-3">
    {[
      {
        src: "/images/projects/tesla/Forcast - ARIMA.png",
        label: "ARIMA Forecast",
      },
      {
        src: "/images/projects/tesla/Forcast - ETS.png",
        label: "ETS Forecast",
      },
      {
        src: "/images/projects/tesla/Forcast - SARIMA.png",
        label: "SARIMA Forecast",
      },
    ].map((item) => (
      <div
        key={item.label}
        className="flex flex-col justify-between rounded-2xl border bg-gray-50 p-4"
      >
        {/* Image container with fixed height */}
        <div className="relative h-[220px] w-full">
          <Image
            src={item.src}
            alt={item.label}
            fill
            className="rounded-xl object-contain"
          />
        </div>

        <p className="mt-3 text-xs text-center text-gray-600">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>


  {/* Other Diagnostics */}
  <div className="mt-8 grid gap-6 md:grid-cols-2">
    
    <div className="rounded-2xl border bg-gray-50 p-4">
      <p className="mt-2 text-s text-gray-600 text-center">
        Trend & Seasonality Decomposition
      </p><br/><br/>
      <Image
        src="/images/projects/tesla/decomposition.png"
        alt="Time Series Decomposition"
        width={600}
        height={350}
        className="rounded-xl"
      /><br/><br/>
      <Image
        src="/images/projects/tesla/aug.png"
        alt="Residual Diagnostics"
        width={800}
        height={350}
        className="rounded-xl"
      /><br/><br/>
      
    </div>

    <div className="rounded-2xl border bg-gray-50 p-4">
      <p className="mt-2 text-s text-gray-600 text-center">
        ACF & PACF Diagnostics
      </p><br/><br/>
      <Image
        src="/images/projects/tesla/ACF.png"
        alt="ACF and PACF"
        width={600}
        height={350}
        className="rounded-xl"
      />
      <Image
        src="/images/projects/tesla/PACF.png"
        alt="ACF and PACF"
        width={600}
        height={350}
        className="rounded-xl"
      />
      
    </div>

    <div className="rounded-2xl border bg-gray-50 p-4 md:col-span-2">
  <p className="mb-3 text-sm font-medium text-gray-700 text-center">
    Residual Diagnostics
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="flex justify-center">
      <Image
        src="/images/projects/tesla/residual.png"
        alt="Residual Plot 1"
        width={400}
        height={250}
        className="rounded-xl object-contain"
      />
    </div>

    <div className="flex justify-center">
      <Image
        src="/images/projects/tesla/residual1.png"
        alt="Residual Plot 2"
        width={400}
        height={250}
        className="rounded-xl object-contain"
      />
    </div>

    <div className="flex justify-center">
      <Image
        src="/images/projects/tesla/residual2.png"
        alt="Residual Plot 3"
        width={400}
        height={250}
        className="rounded-xl object-contain"
      />
    </div>

    <div className="flex justify-center">
      <Image
        src="/images/projects/tesla/residual3.png"
        alt="Residual Plot 4"
        width={400}
        height={250}
        className="rounded-xl object-contain"
      />
    </div>
    <div className="flex justify-center">
      <Image
        src="/images/projects/tesla/residual4.png"
        alt="Residual Plot 4"
        width={400}
        height={250}
        className="rounded-xl object-contain"
      />
    </div>
  </div>
</div>

    <div className="rounded-2xl border bg-gray-50 p-4 md:col-span-2  flex justify-center ">
      <Image
        src="/images/projects/tesla/Model.png"
        alt="Time Series Decomposition"
        width={600}
        height={950}
        className="rounded-xl object-contain"
      />
    </div>
  </div>
</div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Forcasting Results</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>SARIMA forecasts closely followed observed price movements.</li>
              <li>Narrow confidence intervals during stable periods.</li>
              <li>Degradation during high-volatility events highlighted: Market sensitivity, Need for exogenous signals.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Key Takeaways</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Weekly modeling is more reliable than daily forecasting.</li>
              <li>Seasonality matters : SARIMA significantly improves stability.</li>
              <li>Classical models struggle under extreme volatility.</li>
              <li>Model diagnostics are as important as accuracy metrics.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Next Steps</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Add external regressors (SARIMAX).</li>
              <li>Automate weekly refresh and dashboard delivery.</li>
              <li>Push outputs to dashboards for hands-free analytics.</li>
            <li>Evaluate hybrid ML + time-series approaches.</li>
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

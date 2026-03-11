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

export default function ANPRProjectPage() {
  const visuals: Visual[] = [
    {
      title: "Dataset Annotation",
      image: "/images/projects/anpr/annotation.png",
      caption: "Annotated bounding boxes for license plates used to train the model.As shown in above figure we have 225 total annotations, that we have divided in 180 for training and 45 for validation.",
    },
    {
      title: "Model Testing Results",
      image: "/images/projects/anpr/model.png",
      caption: "The model was tested on new images, showing the ability to identify license plate text with varying confidence levels. Example outputs: Detected Text: KL 51 (Confidence: 0.87), Detected Text: K (Confidence: 0.59) & Detected Text: 4999 (Confidence: 0.42)",
    },
    {
      title: "Model Prediction",
      image: "/images/projects/anpr/pred1.png",
      caption: "Another test inference showing detection under different conditions.",
    },
    {
      title: "Final Output (Detected Plate)",
      image: "/images/projects/anpr/final.png",
      caption: "Final detection output from the system.",
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
                Automatic Number Plate Recognition (ANPR)
              </h1>

              <p className="mt-2 text-sm text-gray-700">
                Deep Learning + Computer Vision system to detect vehicle license plates from images
                (real-world conditions like blur, lighting variation, and different angles).
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Computer Vision</Pill>
                <Pill>Deep Learning</Pill>
                <Pill>Python</Pill>
                <Pill>CNN</Pill>
                <Pill>InceptionResNetV2</Pill>
                <Pill>Object Detection</Pill>
                <Pill>Image Annotation</Pill>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Replace # with your repo link if you have it */}
              <a
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                href="https://github.com/099Misbah/Automatic-Number-Plate-Recognition-of-Cars"
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
          {/* Problem */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Problem</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              License plate recognition is challenging because plates can appear at different angles,
              sizes, lighting conditions, and motion blur. The goal of this project is to detect the
              license plate region reliably so it can later be used for downstream text recognition.
            </p>
          </div>

          {/* Dataset */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Dataset</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Images + XML annotations (bounding boxes)</li>
              <li>453 images (JPEG) and 225 annotations used for training/validation</li>
              <li>Train/Validation split: 180 training and 45 validation annotations</li>
            </ul>
            <p className="mt-4 text-sm text-gray-700">
              This setup matches the dataset details documented in the project report.</p>
          </div>

          {/* Approach */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Approach</SectionTitle>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">1) Preprocessing</p>
                <p className="mt-2 text-sm text-gray-700">
                  Structured image + XML label pipeline, verified bounding boxes, and prepared inputs for training.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">2) Model</p>
                <p className="mt-2 text-sm text-gray-700">
                  Used <b>InceptionResNetV2</b> backbone to learn strong visual features for plate detection.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">3) Evaluation</p>
                <p className="mt-2 text-sm text-gray-700">
                  Validated on held-out samples and tested inference on unseen images with confidence scores.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-700">
              Model choice and workflow are aligned with what you documented in the report.
            </p>
          </div>

          {/* Visuals */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Visuals & Results</SectionTitle>

            

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {visuals.map((v) => (
                <div key={v.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
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

                  {v.caption ? <p className="mt-2 text-xs text-gray-600">{v.caption}</p> : null}
                </div>
              ))}
            </div>

          </div>

          {/* Key Takeaways */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Key Takeaways</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Real-world computer vision requires careful preprocessing + consistent labeling.</li>
              <li>Transfer learning/backbone models help improve detection quality with limited data.</li>
              <li>Clear visuals (before/after annotation + test predictions) make the project recruiter-friendly.</li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle>Next Steps</SectionTitle>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Add OCR (plate text extraction) using EasyOCR/Tesseract as a second stage.</li>
              <li>Improve robustness with more data augmentation (blur/low-light/angle).</li>
              <li>Consider YOLO-based detector for faster real-time inference.</li>
            </ul>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-8 text-sm text-gray-600">
          <Link className="underline" href="/">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
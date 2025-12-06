// src/app/about/page.jsx

export const metadata = {
  title: "About — Sweent LLC",
  description:
    "About Sweent LLC — Empowerment Through Open Technology and Proven Partnership.",
};

export default function About() {
  return (
    <section className="container mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-slate-900">
            About Sweent LLC
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Sweent LLC builds secure, high-performance digital platforms with an
            open, headless architecture: Drupal as the content hub and a React
            frontend for a fast, modern user experience. Our approach solves
            legacy platform issues by delivering flexible, enterprise-focused
            solutions designed for speed, security, compliance, and future
            scalability.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-slate-900">
            What Makes Us Different
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li className="flex gap-2">
              <span>✔️</span>
              <span>
                Secure hosting options including AWS GovCloud deployments.
              </span>
            </li>
            <li className="flex gap-2">
              <span>✔️</span>
              <span>
                Support and service-level agreements tailored to enterprise and
                government needs.
              </span>
            </li>
            <li className="flex gap-2">
              <span>✔️</span>
              <span>
                API-first architecture powered by JSON:API, OAuth2, and modern
                DevOps workflow pipelines.
              </span>
            </li>
            <li className="flex gap-2">
              <span>✔️</span>
              <span>
                Strong content governance, editorial workflows, and
                accessibility compliance.
              </span>
            </li>
            <li className="flex gap-2">
              <span>✔️</span>
              <span>
                AI-enabled enhancements including smarter authoring tools and
                contextual experiences.
              </span>
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Our Mission
          </h2>
          <p className="mt-3 text-slate-600">
            Empowerment through open technology and proven partnership — helping
            organizations build platforms that are flexible, future-proof, and
            truly theirs.
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-white p-6 rounded-2xl shadow border border-slate-100 h-fit">
          <h4 className="font-semibold text-slate-900">Company Details</h4>

          <div className="mt-4 text-sm text-slate-600 space-y-3">
            <p>
              <strong>Company Name:</strong> Sweent LLC
            </p>
            <p>
              <strong>Support:</strong>{" "}
              <a href="mailto:service@sweent.com" className="text-blue-600">
                service@sweent.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+18558851856" className="text-blue-600">
                (855) 885-1856 ext. 101
              </a>
            </p>
            <p>
              <strong>Contract:</strong> GSA # 47QRAA25D0024
            </p>
            <p>
              <strong>Certifications:</strong> SBA SDVOSB • US-based
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

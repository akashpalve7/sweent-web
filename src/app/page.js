// src/app/page.jsx
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export const metadata = {
  title: "Sweent LLC — Empowerment Through Open Technology",
  description:
    "Headless Drupal + React front-end, enterprise hosting on AWS GovCloud, AI-ready integrations and 24/7 SLAs.",
};

export default function Home() {
  return (
    <div className="bg-white">
      <Hero
        title="Empowerment Through Open Technology"
        subtitle="Modern, secure digital platforms built with headless Drupal and a high-performance React frontend — hosted with enterprise compliance."
        cta="See Our Work"
      />

      <section className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            What we build for organizations
          </h2>
          <p className="mt-4 text-slate-600">
            We combine open-source CMS expertise with a modern frontend and
            enterprise hosting to deliver fast, extensible websites and
            services. (Headless Drupal + React, optimized for performance &
            accessibility.)
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="🛡️"
            title="Secure Hosting (AWS GovCloud)"
            desc="FedRAMP, DoD SRG-ready hosting options and region-restricted deployments for sensitive workloads. "
          />
          <FeatureCard
            icon="⚡"
            title="High Performance"
            desc="CDN-first architecture, multi-layer caching (Redis, CloudFront) and SSR for snappy UX."
          />
          <FeatureCard
            icon="🔗"
            title="API-First (JSON:API, GraphQL)"
            desc="Flexible API integration, OAuth2-secured endpoints and webhook-driven workflows."
          />
          <FeatureCard
            icon="🧩"
            title="Content Governance"
            desc="Robust workflows, role-based permissions, staging and UAT for safe publishing."
          />
          <FeatureCard
            icon="🤖"
            title="AI & Automation"
            desc="AI-assisted content tools, chatbots and intelligent search integrations to boost productivity."
          />
          <FeatureCard
            icon="🤝"
            title="US-Based Support"
            desc="Transparent SLAs, 24/7 critical support and dedicated account management."
          />
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-white to-sky-50 rounded-2xl p-8 lg:p-12 shadow">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900">
                Ready to modernize your digital platform?
              </h3>
              <p className="mt-3 text-slate-600 max-w-xl">
                We design future-proof platforms that eliminate vendor lock-in,
                improve speed, and give your team complete control over content
                and workflows.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-slate-700 hover:bg-slate-50 transition"
                >
                  Learn About Muskegon
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <h4 className="font-semibold text-slate-900">Contact</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Email:{" "}
                  <a href="mailto:jtejera@sweent.com" className="text-blue-600">
                    jtejera@sweent.com
                  </a>
                  <br />
                  Support:{" "}
                  <a href="mailto:service@sweent.com" className="text-blue-600">
                    service@sweent.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a href="tel:+18558851856" className="text-blue-600">
                    (855) 885-1856 ext. 101
                  </a>
                </p>
                <p className="mt-4 text-xs text-slate-500">
                  GSA Contract # 47QRAA25D0024 • SDVOSB • HUBzone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

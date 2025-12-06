// src/components/Hero.jsx
import Image from "next/image";
import Link from "next/link";

export default function Hero({ title, subtitle, cta }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600">{subtitle}</p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              {cta || "View Articles"}
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[360px] h-[260px] rounded-2xl shadow-2xl overflow-hidden bg-white">
           
            <Image
              src="/hero-pattern.png"
              alt="hero"
              fill
              sizes="(min-width: 1024px) 360px, 80vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

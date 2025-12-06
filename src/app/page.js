export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <section className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-2xl p-12 shadow-xl">
        <h1 className="text-4xl font-bold">Headless Drupal + Next.js</h1>
        <p className="mt-4 text-lg">
          A fast, flexible, and modern content stack. Your content lives in
          Drupal and the frontend is in Next.js.
        </p>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          {" "}
          <h3 className="font-semibold">SEO friendly</h3>
          <p className="mt-2 text-sm">
            Use Drupal for content and Next.js for performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          {" "}
          <h3 className="font-semibold">Fast</h3>
          <p className="mt-2 text-sm">ISR + caching for great performance.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          {" "}
          <h3 className="font-semibold">Flexible</h3>
          <p className="mt-2 text-sm">
            Add custom content types and extend JSON:API as needed.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">About us</h1>
      <p className="mt-4 text-slate-700">
        We are building a headless CMS setup using Drupal and Next.js. This
        sample About page is static — if you prefer, you can also store About
        page content in Drupal and fetch it the same way as blog posts.
      </p>
    </main>
  );
}

import { drupal } from "../../lib/drupal";

export const revalidate = 60;

export default async function BlogPage() {
  const articles = await drupal.getResourceCollection("node--article", {
    params: { "filter[status]": 1, "page[limit]": 20 },
  });

  const list = articles?.length ? articles : [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((article) => {
          const nid = article.drupal_internal__nid;
          const title = article.title;
          const excerpt = article.body?.value || "";

          return (
            <article
              key={nid}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                <a href={`/node/${nid}`}>{title}</a>
              </h2>
              <div
                className="text-sm text-slate-700 line-clamp-4"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
              <a
                className="inline-block mt-4 text-indigo-600 font-medium"
                href={`/node/${nid}`}
              >
                Read more →
              </a>
            </article>
          );
        })}
      </div>
    </main>
  );
}

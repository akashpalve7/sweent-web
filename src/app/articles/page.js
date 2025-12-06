import { drupal } from "../../lib/drupal";

export const revalidate = 60;

export default async function ArticlesPage() {
  // Fetch articles
  const articles = await drupal.getResourceCollection("node--article", {
    params: { "filter[status]": 1 },
  });

  if (!articles?.length)
    return (
      <div className="text-center mt-10 text-gray-500">No articles found</div>
    );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Articles
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          const nid = article.drupal_internal__nid;
          const title = article.title || "Untitled";
          const body = article.body?.value || "";

          if (!nid) return null;

          return (
            <a
              key={nid}
              href={`/node/${nid}`}
              className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02]"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {title}
              </h2>
              <div
                className="text-gray-700 text-sm line-clamp-4"
                dangerouslySetInnerHTML={{ __html: body }}
              />
              <span className="inline-block mt-4 text-blue-500 font-medium hover:underline">
                Read more →
              </span>
            </a>
          );
        })}
      </div>
    </main>
  );
}

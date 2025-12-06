import { drupal } from "../../../lib/drupal";

export const revalidate = 60;

export default async function NodePage({ params: paramsPromise }) {
  // Unwrap params
  const params = await paramsPromise;
  const { nid } = params;

  // Fetch all articles first (or map nid → UUID)
  const articles = await drupal.getResourceCollection("node--article");

  // Find the article that matches the numeric nid
  const article = articles.find(
    (item) => item.drupal_internal__nid.toString() === nid
  );

  if (!article)
    return (
      <div className="text-center mt-10 text-gray-500">Article not found</div>
    );

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{article.title}</h1>
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.body?.value || "" }}
      />
    </main>
  );
}

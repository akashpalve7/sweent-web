import { drupal } from "../../../lib/drupal";

export const revalidate = 60;

export default async function BlogPost({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { nid } = params;

  // fetch collection and find matching nid (or map nid->uuid in production)
  const collection = await drupal.getResourceCollection("node--article");
  const article = collection.find(
    (a) => a.drupal_internal__nid.toString() === nid
  );

  if (!article)
    return <div className="text-center py-20">Article not found</div>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.body?.value || "" }}
      />
    </main>
  );
}

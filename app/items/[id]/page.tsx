export const dynamic = "force-dynamic";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <h1>Item {id}</h1>
      <p>Rendered at {new Date().toISOString()}</p>
      <a href="/">Back</a>
    </main>
  );
}

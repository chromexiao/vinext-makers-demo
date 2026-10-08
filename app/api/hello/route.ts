export async function GET(request: Request) {
  const url = new URL(request.url);
  return Response.json({
    ok: true,
    name: url.searchParams.get("name") ?? "vinext",
    now: new Date().toISOString(),
  });
}

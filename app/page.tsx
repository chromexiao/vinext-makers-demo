import { Counter } from "./counter";
import deployVideoUrl from "../deepseek-template-deploy-all-en.mov";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const renderedAt = new Date().toISOString();

  return (
    <main>
      <h1>vinext on Makers</h1>
      <video src={deployVideoUrl} controls preload="none" width={640}>
        <a href={deployVideoUrl}>deepseek-template-deploy-all-en.mov</a>
      </video>
      <p>
        Server render: <time dateTime={renderedAt}>{renderedAt}</time>
      </p>
      <Counter />
      <p>
        <a href="/api/hello?name=makers">Open API</a>
      </p>
      <p>
        <a href="/items/42">Open /items/42</a>
      </p>
    </main>
  );
}

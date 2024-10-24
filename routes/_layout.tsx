import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div className="my-1 mx-2 mb-2">
      <h1 className="">Fresh</h1>

      <div className="flex flex-row flex-wrap  space-x-4 text-xs underline text-blue-500 mb-1">
        <a href="/">Home</a>
        <a href="/countdown">Countdown</a>
        <a href="/search">Search</a>
        <a href="/ola/Julio/MS">Olá Julio MS</a>
        <a href="/custom_handler">Custom Handler</a>
        <a href="/tabs/9dfcf251-20c4-4585-b2fc-5c8c7c2515e6">tab (firestore)</a>
        <a href="/api/joke">API Joke</a>
        <a href="/api/send_json">API Send JSON</a>
        <a href="/404">404</a>
      </div>

      <Component />
    </div>
  );
}

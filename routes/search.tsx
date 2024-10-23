import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    if (query?.length > 0) {
      const results = NAMES.filter((name) => name.includes(query));
      return ctx.render({ results, query });
    }
    return ctx.render({ results: [], query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              name="q"
              value={query}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </form>

        <div className="my-3 text-blue-500">
          your result
        </div>
        <ul className="mt-4 space-y-2">
          {results.map((name) => (
            <li key={name} className="p-2 border-b">
              {'"'}
              {name}
              {'" '}
              found
            </li>
          ))}

          {results.length === 0 && (
            <li className="p-2 border-b">No results found</li>
          )}
        </ul>

        <div className="my-3 text-blue-500">
          you can search for names bellows:
        </div>
        <ul className="mt-4 space-y-1 text-xs">
          {NAMES.map((name) => (
            <li key={name} className="p-1 border-b">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

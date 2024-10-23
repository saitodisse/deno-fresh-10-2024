import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello");
        return resp;
    },
};

export default function AboutPage() {
    return (
        <main>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        This page includes a {'"'}X-Custom-Header{'"'}{" "}
                        on the response.
                    </h1>
                    <code className="block my-4">
                        <pre>
                            {`routes/custom_handler/index.tsx`}
                        </pre>
                    </code>
                </div>
            </div>
        </main>
    );
}

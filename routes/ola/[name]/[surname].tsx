import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  console.log(props);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Olá {props.params.name} {props.params.surname}
        </h1>
        <code className="block my-4">
          <pre>
            {`routes/ola/[name]/[surname].tsx`}
          </pre>
        </code>
      </div>
    </div>
  );
}

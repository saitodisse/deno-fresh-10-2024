// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_send_json from "./routes/api/send_json.tsx";
import * as $countdown from "./routes/countdown.tsx";
import * as $custom_handler_index from "./routes/custom_handler/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $ola_name_surname_ from "./routes/ola/[name]/[surname].tsx";
import * as $search from "./routes/search.tsx";
import * as $Countdown from "./islands/Countdown.tsx";
import * as $Counter from "./islands/Counter.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/send_json.tsx": $api_send_json,
    "./routes/countdown.tsx": $countdown,
    "./routes/custom_handler/index.tsx": $custom_handler_index,
    "./routes/index.tsx": $index,
    "./routes/ola/[name]/[surname].tsx": $ola_name_surname_,
    "./routes/search.tsx": $search,
  },
  islands: {
    "./islands/Countdown.tsx": $Countdown,
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

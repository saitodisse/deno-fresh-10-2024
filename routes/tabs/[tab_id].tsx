import type { Handlers, PageProps } from "$fresh/server.ts";
import { db } from "../../lib/firebaseConfig.ts";
import type { TabResult } from "./TabResult.ts";

export const handler: Handlers<TabResult> = {
    async GET(_req, ctx) {
        console.log(ctx);

        const tabQuery = db.collection("tabs").where(
            "id",
            "==",
            ctx.params.tab_id,
        );
        const snapshotTabs = await tabQuery.get();
        const tabs: TabResult[] = snapshotTabs.docs.map<TabResult>((doc) =>
            doc.data() as TabResult
        );
        console.log(tabs);

        return ctx.render(tabs?.[0]);
    },
};

export default function ProjectPage(props: PageProps<TabResult>) {
    return (
        <div className={`mx-6`}>
            <h1 className={`my-2`}>
                {props.data.artist_name} - {props.data.track_name}
            </h1>
            <pre className="text-xs">{props.data.body}</pre>
        </div>
    );
}

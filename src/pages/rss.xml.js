import rss from "@astrojs/rss";

export function GET(context) {
    return rss({
        // `<title>` field in output xml
        title: "initial",
    });
}

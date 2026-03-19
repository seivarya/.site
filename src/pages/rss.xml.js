import rss from "@astrojs/rss";

export function GET(context) {
	return rss({
		title: "initial",
		description: "",
		site: context.site,
		items: [],
	});
}

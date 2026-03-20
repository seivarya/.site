import rss from "@astrojs/rss";

export async function GET(context) {
	return rss({
		title: "seivarya",
		description: "test rss feed",
		site: context.site || "http://localhost:4321",
		items: [
			{
				title: "Test Post",
				link: "/test",
				pubDate: new Date(),
				description: "hello world",
			},
		],
	});
}

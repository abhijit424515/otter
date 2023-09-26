import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
	return rss({
		title: "Otter",
		description: "IITB's Blog",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./posts/**/*.md")),
		customData: `<language>en-us</language>`,
	});
}

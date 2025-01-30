import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const POST: RequestHandler = async () => {
	const discordApi = "https://discord.com/api/webhooks/1332326908506935326/t4rag56aolGxDeB88-Sxu94d9mwDRtxYWRDStMt6sXlKVTlNjg1dOw89GAJdCnk-sHI6";
	const dataApi = "https://ipapi.co/json/";
	try {
		await delay(2000);
		const data = await fetch(dataApi);
		const json = await data.json();
		let embed;
		if (json.error && json.reason === 'RateLimited') {
			console.log('Rate limited by ipapi');
			embed = {
				title: 'Rate Limited',
				description: 'Sorry, I am rate limited by ipapi, but someone visited the site.',
				color: 0xff0000
			};
		} else {
			embed = {
				title: 'There is a new visitor',
				fields: [
					{ name: 'IP', value: `||${json.ip}|| [${json.version}]`, inline: true },
					{ name: 'Country', value: json.country_name, inline: true },
					{ name: 'Region', value: json.region, inline: true },
					{ name: 'City', value: json.city, inline: true },
					{ name: 'Postal', value: json.postal, inline: true },
					{ name: 'Timezone', value: json.timezone, inline: true },
					{ name: 'ISP', value: json.org, inline: true }
				],
				footer: { text: 'Send from SvelteKit, Cheers!🍻' },
				author: { name: 'SvelteKit', url: 'https://svelte.dev', icon_url: 'https://svelte.dev/favicon.png' },
				color: Math.floor(Math.random() * 16777215)
			};
		}

		const response = await fetch(discordApi, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ embeds: [embed] }),
		});

		return json({ success: response.ok });
	} catch (error) {
		return json({ success: false });
	}
};

export const GET: RequestHandler = async () => {
	return json({ message: 'Hello Stranger!' });
};
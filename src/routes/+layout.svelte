<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	let { children } = $props();
	import Header from '../lib/components/ui/header/header.svelte';
	import Footer from '../lib/components/ui/footer/footer.svelte';
</script>

<svelte:head>
	<title>Hello There~</title>
</svelte:head>

<ParaglideJS {i18n}>
	<Header />
	<main class="flex flex-col items-center justify-center min-h-screen w-full bg-neutral-700">
		{@render children()}
	</main>
	<Footer />
</ParaglideJS>

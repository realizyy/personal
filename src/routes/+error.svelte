<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '\$app/navigation';

	let timeLeft = 5;
	if (typeof window !== 'undefined') {
		const interval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
			} else {
				clearInterval(interval);
				goto('/');
			}
		}, 1000);
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen w-full bg-neutral-700">
	<h1 class="text-4xl font-bold text-neutral-100">Error <span class="text-4xl text-red-500">{page.status ? page.status : '%n/a%'}</span></h1>
	<p class="text-lg text-neutral-200">{page.error ? page.error.message : 'Unknown error'}</p>
	<p class="text-xs text-neutral-200">You will be <span class="text-yellow-300">redirected</span> to the home page in {timeLeft} seconds.</p>
</div>

<style>
    :global(body) {
        @apply bg-black text-white;
    }

    :global(*) {
        font-family: "SF Mono", Menlo, Monaco, Consolas, monospace;
    }
</style>
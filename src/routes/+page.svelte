<script lang="ts">
	import Autoplay from "embla-carousel-autoplay";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	const plugin = Autoplay({ delay: 2000, stopOnInteraction: false });
	import { Button } from "$lib/components/ui/button";

	const languages = [
		{ name: "JavaScript", logo: "js.png" },
		{ name: "TypeScript", logo: "ts.png" },
		{ name: "Nuxt", logo: "nuxt.png"},
		{ name: "React", logo: "react.svg" },
		{ name: "Vue", logo: "vue.png" },
		{ name: "Svelte", logo: "svelte.png" },
		{ name: "Vite", logo: "vite.png" },
		{ name: "Laravel", logo: "laravel.svg" },
		{ name: "Python", logo: "python.png" },
		{ name: "Flask", logo: "flask.svg" },
		{ name: "Java", logo: "java.png" },
		{ name: "PostgreSQL", logo: "postgres.png" },
		{ name: "Firebase", logo: "firebase.png" },
		{ name: "Tailwind CSS", logo: "tailwind.svg" },
	];

	const experiences = [
		{
			company: "VML | Wunderman Thompson Indonesia (Intern)",
			period: "Sep 2023 - Dec 2023",
			description: "Assisted in the development of the company\'s main product and gained valuable experience."
		},
		{
			company: "Dcreativ Indonesia",
			period: "Oct 2023 - Sep 2024",
			description: "Developing and maintaining the company\'s website and their food delivery application project."
		}
	];

	const projects = [
		{
			title: "Unit3C",
			subtitle: "Assignment",
			description: "Unit3C is a platform for sertificate computing course for my university.",
			image: "https://realizy.my.id/U3C-1.png",
			locked: true,
			aspectRatio: "aspect-video"
		},
		{
			title: "Dkampus",
			subtitle: "PRODUCT",
			description: "Dkampus is a platform food delivery service for students in Local University.",
			image: "https://realizy.my.id/DK-1.png",
			locked: true,
			aspectRatio: "aspect-square"
		},
		{
			title: "Dkampus V.2",
			subtitle: "SELF PROJECT",
			description: "Ongoing to remake of Dkampus with new features and framework.",
			image: "https://realizy.my.id/DKSV-2.png",
			locked: true,
			aspectRatio: "aspect-square"
		},
		{
			title: "Run Planet Sport Asia",
			subtitle: "PRODUCT",
			description: "Run Planet Sport Asia is a platform for sport event in Indonesia.",
			image: "https://realizy.my.id/PSR-1.png",
			locked: true,
			aspectRatio: "aspect-video"
		},
		{
			title: "Dashboard Banker Indonesia",
			subtitle: "PRODUCT",
			description: "Dashboard Banker Indonesia is a platform for banking service in Indonesia.",
			image: "https://realizy.my.id/BC-1.png",
			locked: true,
			aspectRatio: "aspect-square"
		},
		{
			title: "Shoptify",
			subtitle: "SELF PROJECT",
			description: "Shoptify is a platform for online shop with new features and design.",
			image: "https://realizy.my.id/SPy-1.png",
			locked: true,
			aspectRatio: "aspect-square"
		}
	];
</script>

<div class="min-h-screen bg-black text-white font-mono">
	<div class="flex flex-col md:flex-row justify-center items-center min-h-screen p-4 md:p-8 gap-8">
		<div class="w-full md:w-1/2 max-w-2xl">
			<h1 class="tracking-[4px] font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:text-left mb-4">
				Hello!
			</h1>
			<p class="text-center md:text-left text-base sm:text-lg md:text-xl font-light mb-6">
				I'm Muhammad Real Andri Faqih, Software Engineer student in Indonesia. I'm currently learning about web development and mobile development. I'm also interested in UI/UX Design and Data Science.
			</p>
			<div class="flex justify-center md:justify-start gap-6">
				<a class="hover:opacity-80 transition-opacity" href="https://github.com/realizyy/" target="_blank" rel="noreferrer" aria-label="GitHub">
					<svg viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6 sm:w-8 sm:h-8">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
				</a>
				<a class="hover:opacity-80 transition-opacity" href="https://www.linkedin.com/in/real-andri/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
					<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 sm:w-8 sm:h-8">
						<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
					</svg>
				</a>
				<a class="hover:opacity-80 transition-opacity" href="https://discord.com/users/335850003094437898" target="_blank" rel="noreferrer" aria-label="Discord">
					<svg width="32px" height="32px" viewBox="0 -28.5 256 256" fill="currentColor" class="w-6 h-6 sm:w-8 sm:h-8">
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="5.632"></g>
						<g id="SVGRepo_iconCarrier"> <g> <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero"> </path> </g> </g>
					</svg>
				</a>
				<a class="hover:opacity-80 transition-opacity" href="mailto:andriifaqih@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
					<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 sm:w-8 sm:h-8">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
					</svg>
				</a>
			</div>
		</div>
		<!-- Carousel icon programming language -->
		<Carousel.Root class="w-full max-w-xs m-5" plugins={[plugin]}>
			<Carousel.Content>
				{#each languages as lang, i}
					<Carousel.Item>
						<div class="p-5">
							<Card.Root class="bg-white/[0.7] border-none">
								<Card.Content class="flex aspect-square items-center justify-center">
									<img src="/logos/{lang.logo}" alt={lang.name} class="w-36 h-36" />
								</Card.Content>
							</Card.Root>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</div>
	<main class="grid grid-cols-1 md:grid-cols-3 gap-0">
		<!-- About Section -->
		<section class="p-6 border-b md:border-b-0 md:border-r border-zinc-800">
			<h2 class="text-xs uppercase tracking-wider text-zinc-500 mb-4">About</h2>
			<p class="text-sm leading-relaxed text-zinc-300">
				Dri (He/Him) Junior Web Developer. He thrives in complex, ambiguous problem spaces
				focused around Frontend Development, Backend Development, Automation stuff, and
				Something design. He studied <a class="hover:underline hover:text-yellow-300"
				href="https://en.wikipedia.org/wiki/Software_engineering">Software Engineer<span class="text-xs">↗</span></a>
				at <a href="https://bse.telkomuniversity.ac.id" class="hover:underline hover:text-yellow-300">Telkom University<span class="text-xs">↗,</span></a>
				an experience he holds fondly and will cherish for the rest of his life.
				If you have an interesting idea, please get in touch.
			</p>
		</section>

		<!-- Team Section -->
		<section class="p-6 border-b md:border-b-0 md:border-r border-zinc-800">
			<h2 class="text-xs uppercase tracking-wider text-zinc-500 mb-4">Experience</h2>
			<div class="space-y-6">
				{#each experiences as exp}
					<div class="space-y-1">
						<div class="flex justify-between text-sm">
							<span>{exp.company}</span>
							<span class="text-zinc-500">{exp.period}</span>
						</div>
						<p class="text-sm text-zinc-300">{exp.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Skills Section -->
		<section class="p-6 border-b md:border-b-0 md:border-r border-zinc-800">
			<h2 class="text-xs uppercase tracking-wider text-zinc-500 mb-4">Skills</h2>
			<div class="space-y-6">
				<div class="space-y-1">
					<h3 class="font-medium text-sm">Frontend</h3>
					<p class="text-sm text-zinc-300">React.js, Next.js, Vue.js, Svelte, JavaScript, TypeScript, Vite, Tailwind CSS, Bootstrap</p>
				</div>
				<div class="space-y-1">
					<h3 class="font-medium text-sm">Backend</h3>
					<p class="text-sm text-zinc-300">Laravel, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Supabase, Firebase, Flask, Django</p>
				</div>
				<div class="space-y-1">
					<h3 class="font-medium text-sm">Design</h3>
					<p class="text-sm text-zinc-300">Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop, Sketch</p>
				</div>
			</div>
		</section>
	</main>

	<!-- Section for project -->
	<section class="p-6">
		<h2 class="text-xs uppercase tracking-wider text-zinc-500 mb-4">Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as project}
				<Card.Root class="bg-zinc-900 border-zinc-800 overflow-hidden">
					{#if project.image}
						<div class="relative aspect-[2/1]">
							<img
								src={project.image}
								alt={project.title}
								class="object-cover w-full h-full transition-transform transform hover:scale-95"
							/>
							{#if project.locked}
								<div class="absolute top-2 right-2">
									<Button variant="secondary" size="sm" class="text-xs bg-black/50 backdrop-blur-sm text-white hover:bg-black/60">
										LOCKED
									</Button>
								</div>
							{/if}
						</div>
					{/if}
					<div class="p-4">
						<div class="text-xs text-zinc-500">{project.subtitle}</div>
						<div class="text-sm text-white font-medium">{project.title}</div>
					</div>
				</Card.Root>
			{/each}
		</div>
	</section>
</div>

<style>
    :global(body) {
        @apply bg-black text-white;
    }

    :global(*) {
        font-family: "SF Mono", Menlo, Monaco, Consolas, monospace;
    }
</style>
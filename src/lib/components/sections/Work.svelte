<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';
	import WorkRow from '$lib/components/ui/WorkRow.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let secondaryImage = $state('');
	let showPrimary = $state(false);

	const handleHover = (img: string) => {
		secondaryImage = img;
		showPrimary = true;
	};

	const handleLeave = () => {
		showPrimary = false;
	};

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('.work-list-item', {
			scrollTrigger: {
				trigger: '#work',
				start: 'top 70%',
				toggleActions: 'play none none reverse'
			},
			opacity: 0,
			y: 40,
			duration: 1,
			stagger: 0.15,
			ease: 'power4.out'
		});

		gsap.to('.cinematic-bg-layer', {
			scrollTrigger: {
				trigger: '#work',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			},
			y: '-8%',
			ease: 'none'
		});
	});
</script>

<section
	id="work"
	class="text-ink relative z-10 w-full bg-[var(--bg)] py-32 transition-colors duration-500"
>
	<div class="px-6 md:px-[52px]">
		<div
			class="text-soft mb-14 flex items-center gap-4 font-mono text-[9px] tracking-[0.22em] uppercase"
		>
			<span>Selected Work Showcase</span>
			<div class="h-px flex-1 bg-[var(--line)]"></div>
		</div>
	</div>

	<div class="relative z-20 flex w-full flex-col border-b border-[var(--line)]">
		{#each projects as project, i (project.id)}
			<div
				class="work-list-item hover:bg-ink/[0.01] px-6 transition-colors duration-500 md:px-[52px] dark:hover:bg-white/[0.01]"
			>
				<WorkRow {project} index={i + 1} onhover={handleHover} onleave={handleLeave} />
			</div>
		{/each}
	</div>

	<div
		class="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-all duration-700"
		style="opacity: {showPrimary ? 1 : 0}; visibility: {showPrimary
			? 'visible'
			: 'hidden'}; background-color: var(--bg);"
	>
		<div
			class="absolute inset-0 z-10 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] opacity-60"
		></div>

		<div
			class="cinematic-bg-layer absolute inset-[-10%] bg-cover bg-center brightness-[0.85] saturate-[0.15] sepia-[0.1] transition-transform duration-[1s] ease-out dark:brightness-[0.4]"
			style="background-image: url({secondaryImage}); transform: scale({showPrimary
				? 1.03
				: 1.08});"
		></div>
	</div>
</section>

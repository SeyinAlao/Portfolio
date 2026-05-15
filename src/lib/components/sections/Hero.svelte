<script lang="ts">
	import { onMount } from 'svelte';
	const today = new Date().toLocaleDateString('en-GB');
	let mounted = $state(false);
	onMount(() => (mounted = true));

	const resumeLink =
		'https://docs.google.com/document/d/1Wx4pL1BmkBh4T5yv5XG-knpt7VMBtL93Ouml9IPHRB8/edit?usp=sharing';
</script>

<section class="hero relative flex min-h-[90vh] flex-col justify-center px-6 pt-20 md:px-[52px]">
	{#if mounted}
		<div class="flex flex-col gap-12">
			<div
				class="animate-up flex items-center justify-between opacity-0"
				style="animation-delay: 0.2s"
			>
				<div class="flex items-center gap-4">
					<div class="h-px w-8 bg-[var(--line)]"></div>
					<span class="text-soft font-mono text-[10px] tracking-[0.2em] uppercase"
						>Frontend Developer</span
					>
				</div>
				<div class="flex gap-6">
					<a
						href="https://github.com/SeyinAlao"
						target="_blank"
						class="hover:text-green font-mono text-[9px] uppercase transition-colors">GitHub</a
					>
					<a
						href="https://www.linkedin.com/in/seyinalao"
						target="_blank"
						class="hover:text-green font-mono text-[9px] uppercase transition-colors">LinkedIn</a
					>
				</div>
			</div>

			<div class="py-10">
				<h1
					class="font-space text-ink animate-up text-[clamp(48px,12vw,110px)] leading-[0.85] font-bold tracking-[-0.02em] uppercase opacity-0"
					style="animation-delay: 0.1s"
				>
					Alao<br />
					<span class="text-green font-normal italic">Oluwaseyin.</span>
				</h1>
				<div class="animate-up mt-8 flex flex-col gap-3 opacity-0" style="animation-delay: 0.3s">
					<span class="text-soft font-mono text-[9px] tracking-[0.3em] uppercase">
						Engineering for the Avant-Garde.
					</span>
				</div>
			</div>

			<div
				class="animate-up flex flex-col items-end justify-between gap-8 border-t border-[var(--line)] pt-10 opacity-0 md:flex-row"
				style="animation-delay: 0.6s"
			>
				<a
					href={resumeLink}
					target="_blank"
					class="group bg-ink hover:bg-green flex items-center gap-4 px-8 py-4 font-mono text-[10px] tracking-widest text-[var(--bg)] uppercase transition-all duration-500"
				>
					Download CV
					<span class="transition-transform group-hover:translate-x-1">→</span>
				</a>

				<div class="text-soft text-right font-mono text-[9px] leading-loose tracking-widest">
					<span class="block">LAGOS, NIGERIA</span>
					<span class="block uppercase">{today}</span>
				</div>
			</div>
		</div>
	{/if}
</section>

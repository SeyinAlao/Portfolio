<script lang="ts">
	import Terminal from '../ui/Terminal.svelte';

	const shelf = [
		{ key: 'Listening', val: 'Asake, Mavo' },
		{ key: 'Watching', val: 'Football, Polo at Ikoyi, Gallery exhibitions' },
		{ key: 'Building', val: 'AI-powered interfaces & problem-solving systems' }
	];
</script>

<section id="about" class="relative z-10 border-t border-[var(--line)] bg-[var(--bg)] py-32">
	<div class="mx-auto max-w-[1200px] px-6 md:px-[52px]">
		<div
			class="text-soft mb-20 flex items-center gap-4 font-mono text-[9px] tracking-[0.22em] uppercase"
		>
			<span>About // System & Soul</span>
			<div class="h-px flex-1 bg-[var(--line)]"></div>
		</div>

		<div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="flex flex-col gap-16 pt-2 lg:col-span-4">
				<div class="border-green border-l-[3px] pl-5">
					<span class="text-soft mb-2 block font-mono text-[9px] tracking-[0.3em] uppercase"
						>Operating From</span
					>
					<span class="font-space text-ink text-2xl font-medium tracking-tight uppercase"
						>Lagos, NG</span
					>
					<span class="text-ink-muted mt-2 block font-mono text-[10px]">WAT // UTC+1</span>
				</div>

				<div class="space-y-6">
					<h4 class="text-ink font-mono text-[10px] font-bold tracking-widest uppercase">
						Current Rotation
					</h4>
					<div class="space-y-4">
						{#each shelf as item (item.key)}
							<div class="flex flex-col gap-1">
								<span class="text-soft font-mono text-[9px] uppercase">{item.key}</span>
								<span class="text-ink/90 text-sm font-medium italic">{item.val}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="space-y-12 lg:col-span-8">
				<div class="max-w-2xl">
					<h2
						class="font-space mb-8 text-3xl leading-tight font-bold tracking-tighter uppercase md:text-5xl"
					>
						Engineering products <br />
						<span class="text-green font-normal italic">people actually want</span> <br />
						to use.
					</h2>

					<div class="text-ink-muted space-y-6 font-sans text-sm leading-[1.8] md:text-base">
						<p>
							I’m a software engineering student who bridges the gap between <b>rigorous logic</b>
							and <b>creative inspiration</b>. I spend my time building frontend experiences with
							React, experimenting with AI-powered interfaces, and creating systems that solve real
							problems—from attendance monitors to chatbot architectures.
						</p>
						<p>
							What makes me different is my "creative-engineer" hybrid lens. I’m just as likely to
							spend hours fixing a 1px UI misalignment as I am to brainstorm product ideas inspired
							by minimalist art exhibitions, Nigerian street culture, or fashion aesthetics.
						</p>
						<p>
							At my core, I'm building things that feel <b>modern, useful, and memorable.</b>
						</p>
					</div>
				</div>

				<div class="border-t border-[var(--line)] pt-8">
					<div class="mb-6 flex items-center gap-3">
						<div class="bg-green h-1.5 w-1.5 animate-pulse rounded-full"></div>
						<span class="text-soft font-mono text-[9px] tracking-widest uppercase"
							>Interactive Console // v1.0.4</span
						>
					</div>
					<Terminal />
					<p class="text-soft mt-4 font-mono text-[9px] italic">
						// Hint: Type 'skills', 'socials', or 'whoami' to see the tech-stack
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

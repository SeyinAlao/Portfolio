<script lang="ts">
	const projects = [
		{
			id: '01',
			name: 'Fridgewise',
			description:
				'AI-powered meal orchestration. Inventories your fridge and generates recipes with real-time NGN/USD currency conversion.',
			stack: ['React', 'Tailwind', 'Spoonacular API'],
			live: 'https://fridgewise-ruddy.vercel.app/',
			github: 'https://github.com/SeyinAlao/Fridgewise'
		},
		{
			id: '02',
			name: 'Market Intelligence',
			description:
				'A high-performance financial dashboard engineered with real-time data from the Yahoo Finance API, transforming raw metrics into readable intelligence.',
			stack: ['React', 'Tailwind', 'Rapid API'],
			live: 'https://market-intelligent-dashboard.vercel.app/',
			github: 'https://github.com/SeyinAlao/Market-Intelligent-Dashboard'
		}
	];
</script>

<section id="projects" class="relative z-10 border-t border-(--line) bg-[var(--bg)] py-32">
	<div class="mx-auto max-w-[1200px] px-6 md:px-13">
		<div
			class="text-soft mb-20 flex items-center gap-4 font-mono text-[9px] tracking-[0.22em] uppercase"
		>
			<span>Projects // The Proof</span>
			<div class="h-px flex-1 bg-(--line)"></div>
		</div>

		<div class="flex flex-col border-t border-(--line)">
			{#each projects as project (project.id)}
				<div
					class="group hover:bg-ink relative -mx-4 grid grid-cols-1 gap-6 border-b border-[var(--line)] px-4 py-12 transition-colors duration-500 md:-mx-8 md:grid-cols-[100px_1fr_auto] md:gap-12 md:px-8"
				>
					<div
						class="text-soft group-hover:text-green pt-2 font-mono text-[10px] tracking-widest transition-colors"
					>
						{project.id}
					</div>

					<div class="flex max-w-2xl flex-col">
						<h3
							class="font-space text-ink mb-4 text-3xl font-bold tracking-tighter uppercase transition-colors group-hover:text-[var(--bg)] md:text-5xl"
						>
							{project.name}
						</h3>
						<p
							class="text-ink-muted group-hover:text-soft mb-8 text-sm leading-relaxed transition-colors md:text-base"
						>
							{project.description}
						</p>

						<div class="flex flex-wrap gap-3">
							{#each project.stack as tech (tech)}
								<span
									class="text-ink group-hover:border-soft/30 group-hover:text-soft border border-[var(--line)] px-3 py-1 font-mono text-[9px] tracking-[0.2em] uppercase transition-colors"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>

					<div
						class="flex items-center justify-start gap-8 pt-4 md:flex-col md:items-end md:justify-end md:gap-4 md:pt-2"
					>
						<a
							href={project.live}
							target="_blank"
							rel="external noopener noreferrer"
							class="text-ink hover:!text-green flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors group-hover:text-[var(--bg)]"
						>
							Live Site <span class="transition-transform group-hover:translate-x-1">→</span>
						</a>
						<a
							href={project.github}
							target="_blank"
							rel="external noopener noreferrer"
							class="text-soft group-hover:text-soft/60 hover:!text-green flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors"
						>
							GitHub 
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

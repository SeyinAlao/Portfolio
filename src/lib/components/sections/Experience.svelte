<script lang="ts">
	const experiences = [
		{
			period: 'Present',
			role: 'Frontend Developer Intern',
			company: 'FirstBank — Lagos, NG',
			description:
				'Building and optimizing enterprise-level web applications. Translating complex workflows into seamless, highly performant user interfaces.',
			type: 'Corporate'
		},
		{
			period: 'Jun — Aug 2025',
			role: 'Frontend Developer Intern',
			company: 'Babcock University APU',
			description:
				'Automated a class-monitoring system for 600+ daily classes. Replaced manual tracking with validated reports, significantly improving staff monitoring efficiency.',
			type: 'Engineering'
		}
	];
</script>

<section id="experience" class="relative z-10 bg-[var(--bg2)] py-28">
	<div class="mx-auto max-w-[1080px] px-6 md:px-[52px]">
		<div
			class="text-soft mb-14 flex items-center gap-4 font-mono text-[9px] tracking-[0.22em] uppercase"
		>
			<span>Experience</span>
			<div class="h-px flex-1 bg-black/10"></div>
		</div>

		<div class="flex flex-col">
			{#each experiences as exp, i (exp.role + i)}
				<div
					class="grid grid-cols-1 gap-6 border-t border-black/10 py-9 last:border-b md:grid-cols-[160px_1fr_auto] md:gap-12"
				>
					<span class="text-soft pt-1 font-mono text-[10px] tracking-widest">{exp.period}</span>

					<div>
						<h3
							class="font-space text-ink mb-2 text-lg leading-tight font-bold tracking-wider uppercase md:text-2xl"
						>
							{exp.role}
						</h3>
						<p class="text-green mb-3 text-sm italic">{exp.company}</p>
						<p class="text-ink-muted max-w-lg text-sm leading-relaxed">{exp.description}</p>
					</div>

					<div class="hidden md:block">
						<span
							class="text-soft border border-black/10 px-3 py-1 font-mono text-[9px] tracking-[0.16em] uppercase"
						>
							{exp.type}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

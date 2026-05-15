<script lang="ts">
	let { project, index, onhover, onleave } = $props();
	const formattedIndex = $derived(String(index).padStart(3, '0'));
</script>

<a
	href={project.link || project.github || '#'}
	target="_blank"
	class="group grid grid-cols-[40px_1fr] items-center gap-8 border-t border-[var(--line)] py-12 text-current no-underline transition-all duration-500 hover:pl-4 md:grid-cols-[60px_1fr_200px]"
	onmouseenter={() => onhover(project.image)}
	onmouseleave={onleave}
>
	<span class="text-soft font-mono text-[10px] tracking-widest">{formattedIndex}</span>

	<div>
		<h3
			class="font-space group-hover:text-green text-3xl leading-none font-bold uppercase transition-all group-hover:italic md:text-5xl"
		>
			{project.title}
		</h3>
		<p class="text-ink-muted mt-3 line-clamp-2 max-w-md text-xs md:text-sm">
			{project.description}
		</p>
	</div>

	<div class="hidden flex-col items-end gap-1 text-right md:flex">
		<span class="text-soft font-mono text-[9px] tracking-widest uppercase">
			{project.stack.join(' · ')}
		</span>
		<span class="text-soft font-mono text-[9px] opacity-50">{project.year}</span>
	</div>
</a>

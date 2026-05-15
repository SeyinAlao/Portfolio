<script lang="ts">
	let { text } = $props();
</script>

<div class="animate-fade-in mb-16 flex items-center gap-4 opacity-0">
	<span class="text-soft font-mono text-[9px] tracking-[0.25em] uppercase">
		{text}
	</span>
	<div class="bg-line h-px flex-1"></div>
</div>

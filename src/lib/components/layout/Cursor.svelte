<script lang="ts">
	import { onMount } from 'svelte';
	import { cursorState } from '$lib/stores/cursor';

	let mx = $state(0);
	let my = $state(0);
	let cx = $state(0);
	let cy = $state(0);

	onMount(() => {
		const moveCursor = (e: MouseEvent) => {
			mx = e.clientX;
			my = e.clientY;
		};

		const tick = () => {
			cx += (mx - cx) * 0.15;
			cy += (my - cy) * 0.15;
			requestAnimationFrame(tick);
		};

		window.addEventListener('mousemove', moveCursor);
		tick();

		return () => {
			window.removeEventListener('mousemove', moveCursor);
		};
	});
</script>

<div
	class="border-amber pointer-events-none fixed z-9999 -translate-x-1/2 -translate-y-1/2 rounded-full border mix-blend-difference transition-[width,height] duration-300"
	class:w-3={$cursorState.type === 'default'}
	class:h-3={$cursorState.type === 'default'}
	class:w-12={$cursorState.type === 'big'}
	class:h-12={$cursorState.type === 'big'}
	style="left: {cx}px; top: {cy}px;"
></div>

<style>
	div {
		will-change: left, top;
		border-width: 1px;
	}
</style>

<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import Cursor from '$lib/components/layout/Cursor.svelte';
	import Grain from '$lib/components/layout/Grain.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="app">
	<Grain />
	<Cursor />
	<Nav />

	<main>
		{@render children()}
	</main>
</div>

<style>
	:global(html) {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--bg);
	}
	main {
		flex: 1;
	}
</style>

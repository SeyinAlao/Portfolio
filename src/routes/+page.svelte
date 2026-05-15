<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Projects from '$lib/components/project/ProjectDetail.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
</script>

<svelte:head>
	<title>Alao Oluwaseyin | Frontend Engineer</title>
	<meta
		name="description"
		content="Portfolio of Alao Oluwaseyin, Frontend Engineer building for the Avant-Garde."
	/>
</svelte:head>

<main class="selection:bg-green selection:text-ink min-h-screen bg-(--bg)">
	<Hero />
	<Projects />
	<About />
	<Experience />
	<Contact />
</main>

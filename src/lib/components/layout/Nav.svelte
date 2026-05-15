<script lang="ts">
	let isDark = $state(false);

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
	}
</script>

<nav class="fixed top-0 z-[100] flex w-full justify-between p-6 md:px-[52px]">
	<div class="font-mono text-[10px] uppercase">A.O — Alao Oluwaseyin</div>

	<div class="flex items-center gap-8">
		<button
			onclick={toggleTheme}
			class="hover:border-ink group relative overflow-hidden border border-[var(--line)] px-4 py-2 font-mono text-[9px] tracking-[0.2em] uppercase transition-colors"
		>
			<span class="relative z-10">{isDark ? 'Go Light' : 'Go Dark'}</span>
			<div
				class="bg-ink absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
			></div>
		</button>

		<div class="text-soft hidden gap-8 font-mono text-[9px] tracking-widest uppercase md:flex">
			<a href="#work" class="hover:text-ink transition-colors">Work</a>
			<a href="#about" class="hover:text-ink transition-colors">About</a>
			<a href="#contact" class="hover:text-ink transition-colors">Contact</a>
		</div>
	</div>
</nav>

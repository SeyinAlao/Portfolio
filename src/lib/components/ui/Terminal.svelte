<script lang="ts">
	let input = $state('');
	let history = $state([{ type: 'system', content: 'Alao OS v1.0.4 - Type "help" for commands' }]);
	let terminalElement: HTMLElement;

	const commands: Record<string, string> = {
		help: 'Available commands: about, skills, socials, clear, whoami',
		about: 'Frontend Engineer based in Lagos. Obsessed with performance and cinematic UI.',
		skills: 'SvelteKit, React, Next.js, TypeScript, TailwindCSS, AI Interface Design, Node.js.',
		socials: 'Twitter: @alao_seyin | GitHub: SeyinAlao',
		whoami: 'A software engineering student blending technical precision with creative culture.'
	};

	function handleCommand(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			const cmd = input.toLowerCase().trim();

			if (cmd === 'clear') {
				history = [];
			} else if (commands[cmd]) {
				history = [
					...history,
					{ type: 'user', content: input },
					{ type: 'system', content: commands[cmd] }
				];
			} else if (cmd !== '') {
				history = [
					...history,
					{ type: 'user', content: input },
					{ type: 'system', content: `Command not found: ${cmd}` }
				];
			}

			input = '';

			setTimeout(() => {
				if (terminalElement) {
					terminalElement.scrollTop = terminalElement.scrollHeight;
				}
			}, 10);
		}
	}
</script>

<div
	class="w-full max-w-3xl overflow-hidden rounded-lg border border-white/10 bg-[#0F0F0F] font-mono text-xs shadow-2xl md:text-sm"
>
	<div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2">
		<div class="flex gap-1.5">
			<div class="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
			<div class="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
			<div class="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
		</div>
		<span class="ml-2 text-[10px] tracking-widest text-white/30 uppercase"
			>alao_terminal — bash</span
		>
	</div>

	<div
		bind:this={terminalElement}
		class="scrollbar-hide text-green/90 flex h-[300px] flex-col gap-2 overflow-y-auto p-6"
	>
		{#each history as line, i (i)}
			<div class="flex gap-2">
				{#if line.type === 'user'}
					<span class="text-white/40">visitor@alao:~$</span>
					<span class="font-medium text-white">{line.content}</span>
				{:else}
					<span class="leading-relaxed opacity-80">{line.content}</span>
				{/if}
			</div>
		{/each}

		<div class="flex items-center gap-2">
			<span class="text-white/40">visitor@alao:~$</span>
			<input
				type="text"
				bind:value={input}
				onkeydown={handleCommand}
				class="caret-green w-full border-none bg-transparent text-white outline-none"
			/>
		</div>
	</div>
</div>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>

<script lang="ts">
	const links = [
		{ label: 'Email', val: 'hello@alao.dev', href: 'mailto:seyin231@proton.me' },
		{ label: 'Twitter/X', val: '@alao_seyin', href: 'https://x.com/seyinalao' },
		{ label: 'GitHub', val: 'github.com', href: 'https://github.com/SeyinAlao' },
		{ label: 'LinkedIn', val: 'linkedin.com', href: 'https://www.linkedin.com/in/seyinalao' }
	];

	let email = $state('');
	let message = $state('');
</script>

<section
	id="contact"
	class="text-ink relative z-30 border-t border-[var(--line)] bg-[var(--bg)] py-32 transition-colors duration-500"
>
	<div class="mx-auto max-w-[1200px] px-6 md:px-[52px]">
		<div
			class="text-soft mb-20 flex items-center gap-4 font-mono text-[9px] tracking-[0.22em] uppercase"
		>
			<span>Get In Touch</span>
			<div class="h-px flex-1 bg-[var(--line)]"></div>
		</div>

		<div class="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
			<div class="space-y-12 lg:col-span-7">
				<div class="space-y-4">
					<h2 class="font-space text-4xl font-bold tracking-tight uppercase md:text-5xl">
						Let's build something <br /><span class="text-green font-normal italic"
							>exceptional.</span
						>
					</h2>
				</div>

				<form
					class="flex flex-col gap-8 pt-4"
					onsubmit={(e) => {
						e.preventDefault();
						window.location.href = `mailto:seyin231@proton.me?subject=Inquiry from ${email}&body=${encodeURIComponent(message)}`;
					}}
				>
					<div class="flex flex-col gap-2">
						<label
							for="email"
							class="text-soft font-mono text-[10px] font-bold tracking-wider uppercase"
							>Your Email</label
						>
						<input
							id="email"
							type="email"
							bind:value={email}
							placeholder="email@example.com"
							class="bg-ink/[0.05] border-ink/30 focus:border-green text-ink font-space placeholder:text-ink/30 w-full rounded-t-md border-b-2 px-4 py-4 text-sm transition-all outline-none dark:bg-white/[0.05]"
							required
						/>
					</div>

					<div class="flex flex-col gap-2">
						<label
							for="message"
							class="text-soft font-mono text-[10px] font-bold tracking-wider uppercase"
							>Project Brief</label
						>
						<textarea
							id="message"
							bind:value={message}
							placeholder="Tell me about what you are engineering..."
							rows="4"
							class="bg-ink/[0.05] border-ink/30 focus:border-green text-ink font-space placeholder:text-ink/30 w-full resize-none rounded-t-md border-b-2 px-4 py-4 text-sm transition-all outline-none dark:bg-white/[0.05]"
							required
						></textarea>
					</div>

					<button
						type="submit"
						class="group bg-ink hover:bg-green relative w-max cursor-pointer overflow-hidden px-10 py-5 font-mono text-[11px] font-bold tracking-widest text-[var(--bg)] uppercase transition-colors duration-300"
					>
						<span class="relative z-10">Send Inquiry ↗</span>
					</button>
				</form>
			</div>

			<div
				class="flex flex-col justify-between gap-12 border-l border-[var(--line)] lg:col-span-5 lg:pl-16"
			>
				<div class="space-y-8">
					<div>
						<span class="text-soft mb-1 block font-mono text-[9px] tracking-widest uppercase"
							>Local Time</span
						>
						<span class="font-space text-ink-muted text-sm uppercase">Lagos, NG // WAT</span>
					</div>
					<div>
						<span class="text-soft mb-1 block font-mono text-[9px] tracking-widest uppercase"
							>Status</span
						>
						<span class="font-space text-ink-muted text-sm"
							>Digital Nomad / Student / Shipping Code</span
						>
					</div>
				</div>

				<div class="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
					{#each links as link (link.label)}
						<div class="border-b border-[var(--line)] pb-4">
							<span class="text-soft mb-1 block font-mono text-[9px] tracking-[0.2em] uppercase"
								>{link.label}</span
							>
							<a
								href={link.href}
								target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
								rel="external noopener noreferrer"
								class="font-space text-ink hover:text-green relative z-40 cursor-pointer text-sm font-medium break-words transition-colors md:text-base"
							>
								{link.val}
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

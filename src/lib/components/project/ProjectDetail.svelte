<script lang="ts">
    const projects = [
        {
            id: '01',
            name: 'REA AI',
            description: 'A spiritual companion leveraging LLMs to help users engage with the Word of God daily. Faith meets technology.',
            stack: ['Next.js', 'TypeScript'],
            live: 'https://reabible.app/',
            github: '', 
            image: '/images/projects/Rea.png'
        },
        {
            id: '02',
            name: 'Zero Meal Waste Planner',
            description: 'AI-powered meal orchestration. Inventories your fridge and generates recipes with real-time NGN/USD currency conversion.',
            stack: ['React', 'AI API', 'Node.js'],
            live: 'https://fridgewise-ruddy.vercel.app/sign-in',
            github: 'https://github.com/SeyinAlao/Fridgewise',
            image: '/images/projects/Fridgewise.png'
        },
        {
            id: '03',
            name: 'Market Intelligence',
            description: 'High-frequency data dashboard utilizing the Yahoo Finance API to track market volatility and stock trends.',
            stack: ['React', 'RapidAPI', 'Chart.js'],
            live: 'https://market-intelligent-dashboard.vercel.app/',
            github: 'https://github.com/SeyinAlao/Market-Intelligent-Dashboard',
            image: '/images/projects/MarketIntelligence.png'
        },
    ];
</script>

<section id="projects" class="relative z-10 border-t border-[var(--line)] bg-[var(--bg)] py-32">
    <div class="mx-auto max-w-[1200px] px-6 md:px-13">
        <div class="text-soft mb-20 flex items-center gap-4 font-mono text-[9px] tracking-[0.22em] uppercase">
            <span>Projects // The Proof</span>
            <div class="h-px flex-1 bg-[var(--line)]"></div>
        </div>

        <div class="flex flex-col border-t border-[var(--line)]">
            {#each projects as project (project.id)}
                <div
                    class="group relative overflow-hidden -mx-4 grid grid-cols-1 gap-6 border-b border-[var(--line)] px-4 py-12 transition-colors duration-500 md:-mx-8 md:grid-cols-[100px_1fr_auto] md:gap-12 md:px-8 min-h-[300px]"
                >
                    <div class="absolute inset-0 z-0 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 flex items-center justify-center overflow-hidden pointer-events-none">
                        
                        <img 
                            src={project.image} 
                            alt="" 
                            class="absolute inset-0 h-full w-full object-cover blur-2xl scale-125 opacity-40 dark:opacity-60 transition-transform duration-1000 group-hover:scale-110" 
                        />
                        
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            class="relative z-10 h-full w-full object-contain p-4 md:p-8 scale-95 transition-all duration-1000 ease-out group-hover:scale-100 drop-shadow-2xl" 
                        />
                        
                        <div class="absolute inset-0 bg-gradient-to-r from-[var(--bg)]/10 via-transparent to-[var(--ink)]/80"></div>
                    </div>

                    <div
                        class="relative z-10 text-soft pt-2 font-mono text-[10px] tracking-widest transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-x-4 pointer-events-none"
                    >
                        {project.id}
                    </div>

                    <div class="relative z-10 flex max-w-2xl flex-col transition-all duration-500 ease-out delay-75 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                        <h3 class="font-space text-ink mb-4 text-3xl font-bold tracking-tighter uppercase md:text-5xl">
                            {project.name}
                        </h3>
                        <p class="text-ink-muted mb-8 text-sm leading-relaxed md:text-base">
                            {project.description}
                        </p>

                        <div class="flex flex-wrap gap-3">
                            {#each project.stack as tech (tech)}
                                <span class="text-ink border border-[var(--line)] px-3 py-1 font-mono text-[9px] tracking-[0.2em] uppercase">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>

                    <div class="relative z-20 flex items-center justify-start gap-8 pt-4 md:flex-col md:items-end md:justify-end md:gap-4 md:pt-2 transition-colors duration-500">
                        {#if project.live}
                            <a
                                href={project.live}
                                target="_blank"
                                rel="external noopener noreferrer"
                                class="text-ink group-hover:text-white flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 hover:scale-105"
                            >
                                Live Site <span class="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        {/if}
                        
                        {#if project.github}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="external noopener noreferrer"
                                class="text-soft group-hover:text-white/70 hover:!text-white flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 hover:scale-105"
                            >
                                GitHub 
                            </a>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
<script lang="ts">
  import { projects } from "$lib/data/projects";

  let layerA: HTMLElement | undefined = $state();
  let layerB: HTMLElement | undefined = $state();
  let activeLayer: 'a' | 'b' = $state('a'); 
  let hideT: ReturnType<typeof setTimeout> | undefined;

  function showBg(url: string) {
    if (hideT) clearTimeout(hideT);
    if (!layerA || !layerB) return;

    const incoming = activeLayer === 'a' ? layerB : layerA;
    const outgoing = activeLayer === 'a' ? layerA : layerB;

    incoming.style.backgroundImage = `url(${url})`;
    incoming.classList.add('active');
    outgoing.classList.remove('active');
    
    activeLayer = activeLayer === 'a' ? 'b' : 'a';
  }

  function hideBg() {
    hideT = setTimeout(() => {
      if (layerA) layerA.classList.remove('active');
      if (layerB) layerB.classList.remove('active');
    }, 280);
  }
</script>

<div class="work-bg">
  <div bind:this={layerA} class="work-bg-img"></div>
  <div bind:this={layerB} class="work-bg-img"></div>
</div>

<section id="work" class="relative z-10">
  <div class="wrap">
    <div class="s-tag">Work</div>

    <div class="flex flex-col">
      {#each projects as project (project.id)}
      
        <a 
          href={project.link || '#'} 
          target="_blank" 
          rel="external noreferrer"
          class="work-row group"
          onmouseenter={() => showBg(project.image)}
          onmouseleave={hideBg}
        >
          <div class="w-num">{project.id}</div>
          
          <div class="flex flex-col">
            <h3 class="w-title">{project.title}</h3>
            <p class="w-desc">{project.description}</p>
          </div>

          <div class="w-meta">
            <span class="w-stack">{project.stack.join(' · ')}</span>
            <span class="w-year">{project.year}</span>
          </div>
        </a>
        
      {/each}
    </div>
  </div>
</section>
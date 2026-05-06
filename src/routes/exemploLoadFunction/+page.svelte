<script lang="ts">
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

{#each data.resultado as resultadoatual, i (i)}
	<div>
		{resultadoatual.name}
	</div>
{/each}

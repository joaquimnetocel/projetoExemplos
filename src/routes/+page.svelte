<script lang="ts">
	import { obterDados } from './obterDados';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let estado = $state<any[]>();

	$effect(() => {
		(async function () {
			estado = await obterDados();
		})();
	});
</script>

{#if estado}
	<div>
		{#each estado as estadoatual (estadoatual.id)}
			<!-- <img src={estadoatual.images.xs} alt="aaaa" /> -->
			<div>
				{estadoatual.name}
			</div>
		{/each}
	</div>
{/if}

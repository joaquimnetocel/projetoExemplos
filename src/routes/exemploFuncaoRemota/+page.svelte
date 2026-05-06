<script lang="ts">
	import { obterDadosRemota } from './obterdados.remote';

	let estado = $state(await obterDadosRemota());
</script>

{#each estado as resultadoatual, i (i)}
	<div>
		{resultadoatual.name}
	</div>
{/each}

<script lang="ts">
	import { obterDadosRemota } from './obterdados.remote';

	let estado = $state(await obterDadosRemota());
</script>

{estado[0].name}

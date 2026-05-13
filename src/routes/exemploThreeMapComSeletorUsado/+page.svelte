<script lang="ts">
	import ApexCharts, { type ApexOptions } from 'apexcharts';
	import { funcaoObterDados } from './funcaoObterDados';
	import { type typeTreeMap } from './typeTreeMap';

	let chartElement = $state<HTMLDivElement>();
	let chart = $state<ApexCharts>();
	let dados = $state<typeTreeMap[]>([]);

	let valorMinimo = $state(42);
	let valorMaximo = $state(90);

	// svelte-ignore state_referenced_locally
	let valorMinimoUsado = $state(valorMinimo);
	// svelte-ignore state_referenced_locally
	let valorMaximoUsado = $state(valorMaximo);

	const filtrados = $derived(
		dados.filter((corrente) => {
			const validacao1 = corrente.y < valorMaximoUsado;
			const validacao2 = corrente.y > valorMinimoUsado;
			return validacao1 && validacao2;
		}),
	);

	let minimoAbsoluto = $derived(Math.min(...dados.map((current) => current.y)));
	let maximoAbsoluto = $derived(Math.max(...dados.map((current) => current.y)));

	$effect(() => {
		(async function () {
			dados = await funcaoObterDados();
		})();
	});

	$effect(() => {
		(async function () {
			funcaoRenderizarGrafico();
		})();
	});

	function funcaoRenderizarGrafico() {
		const options: ApexOptions = {
			series: [
				{
					data: filtrados,
				},
			],
			legend: {
				show: false,
			},
			chart: {
				height: 750,
				type: 'treemap',
			},
			title: {
				text: 'Distribuição de Personagens',
			},
			colors: ['#3B82F6'],
			plotOptions: {
				treemap: {
					distributed: true,
					enableShades: true,
				},
			},
		};

		if (chart) {
			chart.updateOptions(options);
		} else if (chartElement) {
			chart = new ApexCharts(chartElement, options);
			chart.render();
		}
	}
</script>

<div
	class="mx-auto flex max-w-xl flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
>
	<div>
		<h2 class="text-lg font-semibold text-zinc-800">Faixa de preço</h2>
		<p class="text-sm text-zinc-500">Selecione o valor mínimo e máximo</p>
	</div>

	<div class="relative h-10">
		<!-- Linha -->
		<div class="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-zinc-200"></div>

		<!-- Faixa ativa -->
		<div
			class="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-zinc-900"
			style="left: {100 *
				((valorMinimo - minimoAbsoluto) / (maximoAbsoluto - minimoAbsoluto))}%; right: {100 -
				100 * ((valorMaximo - minimoAbsoluto) / (maximoAbsoluto - minimoAbsoluto))}%;"
		></div>

		<!-- Range mínimo -->
		<input
			type="range"
			min={minimoAbsoluto}
			max={maximoAbsoluto}
			oninput={(e: Event) => {
				const input = e.target as HTMLInputElement;
				let val = parseInt(input.value);

				if (val >= valorMaximo) {
					val = valorMaximo;
					input.value = val.toString();
				}

				valorMinimo = val;
			}}
			onchange={() => {
				valorMinimoUsado = valorMinimo;
			}}
			bind:value={valorMinimo}
			class="pointer-events-none absolute h-1 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-zinc-900"
		/>

		<!-- Range máximo -->
		<input
			type="range"
			min={minimoAbsoluto}
			max={maximoAbsoluto}
			oninput={(e: Event) => {
				const input = e.target as HTMLInputElement;
				let val = parseInt(input.value);

				if (val <= valorMinimo) {
					val = valorMinimo;
					input.value = val.toString();
				}

				valorMaximo = val;
			}}
			onchange={() => {
				valorMaximoUsado = valorMaximo;
			}}
			bind:value={valorMaximo}
			class="pointer-events-none absolute h-1 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-zinc-900"
		/>
	</div>

	<div class="flex items-center justify-between text-sm font-medium text-zinc-700">
		<span>{valorMinimo}</span>
		<span>{valorMaximo}</span>
	</div>
</div>

<div class="w-full rounded-lg bg-white p-4" bind:this={chartElement}></div>

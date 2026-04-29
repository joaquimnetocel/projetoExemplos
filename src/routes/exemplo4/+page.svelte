<script lang="ts">
	import ApexCharts, { type ApexOptions } from 'apexcharts';
	import { obterDados } from './obterdados';

	let chartElement: HTMLDivElement;

	let chart: ApexCharts;

	let dados = $state<{ x: string; y: number }[]>([]);

	$effect(() => {
		async function carregar() {
			dados = await obterDados();
			renderizarGrafico();
		}
		carregar();
	});

	function renderizarGrafico() {
		const options: ApexOptions = {
			series: [
				{
					data: dados,
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

<div bind:this={chartElement}></div>

<style>
	div {
		width: 100%;
		background: #fff;
		padding: 1rem;
		border-radius: 8px;
	}
</style>

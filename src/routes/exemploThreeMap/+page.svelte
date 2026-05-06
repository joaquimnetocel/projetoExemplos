<script lang="ts">
	import ApexCharts, { type ApexOptions } from 'apexcharts';
	import { funcaoObterDados } from './funcaoObterDados';
	import { type typeTreeMap } from './typeTreeMap';

	let chartElement = $state<HTMLDivElement>();
	let chart = $state<ApexCharts>();
	let dados = $state<typeTreeMap[]>([]);

	$effect(() => {
		(async function () {
			dados = await funcaoObterDados();
			funcaoRenderizarGrafico();
		})();
	});

	function funcaoRenderizarGrafico() {
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

<div class="w-full rounded-lg bg-white p-4" bind:this={chartElement}></div>

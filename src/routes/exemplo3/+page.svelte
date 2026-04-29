<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import ApexCharts from 'apexcharts';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	let elemento: HTMLDivElement;

	onMount(() => {
		const opcoes: ApexOptions = {
			series: [
				{
					data: data.resultados,
				},
			],
			chart: {
				height: 350,
				type: 'treemap',
			},
			title: {
				text: 'Basic Treemap',
			},
		};

		const chart = new ApexCharts(elemento, opcoes);
		chart.render();

		return () => chart.destroy();
	});
</script>

<div bind:this={elemento}></div>

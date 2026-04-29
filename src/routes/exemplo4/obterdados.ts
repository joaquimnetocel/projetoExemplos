import { query } from '$app/server';

export const obterDados = query(async () => {
	const dados = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
	const dadosemformatojson: { powerstats: { speed: number }; name: string }[] = await dados.json();

	const resultados = dadosemformatojson.map((current) => {
		return {
			x: current.name,
			y: current.powerstats.speed,
		};
	});

	return resultados;
});

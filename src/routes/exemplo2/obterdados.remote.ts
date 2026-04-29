import { query } from '$app/server';

export const obterDadosRemota = query(async () => {
	const dados = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
	const dadosemformatojson: { name: string; id: string }[] = await dados.json();

	return dadosemformatojson;
});

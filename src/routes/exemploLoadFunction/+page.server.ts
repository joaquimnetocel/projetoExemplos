import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const dados = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
	const dadosemformatojson: { name: string; id: string }[] = await dados.json();
	console.log('apenas no servidor');
	return {
		resultado: dadosemformatojson,
	};
};

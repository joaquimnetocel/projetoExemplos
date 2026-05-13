import { form } from '$app/server';
import * as valibot from 'valibot';

const meuschema = valibot.object({
	nome: valibot.string(),
	email: valibot.pipe(valibot.string(), valibot.email()),
});

export const funcaoFormulario = form(meuschema, async ({ nome, email }) => {
	console.log(nome);
	console.log(email);
});

<script lang="ts">
	import { funcaoFormulario } from './funcaoFormulario.remote';
</script>

<h2>Cadastro</h2>

<form {...funcaoFormulario} method="POST">
	<label for="nome">Nome:</label><br />
	<input type="text" id="nome" name="nome" required /><br /><br />

	<label for="email">Email:</label><br />
	<input type="email" id="email" name="email" required /><br /><br />

	<!-- <label for="senha">Senha:</label><br />
	<input type="password" id="senha" name="senha" required /><br /><br />

	<label for="idade">Idade:</label><br />
	<input type="number" id="idade" name="idade" min="0" /><br /><br />

	<label>Gênero:</label><br />
	<input type="radio" id="masculino" name="genero" value="masculino" />
	<label for="masculino">Masculino</label><br />

	<input type="radio" id="feminino" name="genero" value="feminino" />
	<label for="feminino">Feminino</label><br /><br />

	<label>Interesses:</label><br />
	<input type="checkbox" name="interesses" value="tecnologia" /> Tecnologia<br />
	<input type="checkbox" name="interesses" value="esportes" /> Esportes<br />
	<input type="checkbox" name="interesses" value="musica" /> Música<br /><br />

	<label for="pais">País:</label><br />
	<select id="pais" name="pais">
		<option value="br">Brasil</option>
		<option value="pt">Portugal</option>
		<option value="us">Estados Unidos</option>
	</select><br /><br />

	<label for="mensagem">Mensagem:</label><br />
	<textarea id="mensagem" name="mensagem" rows="4" cols="30"></textarea><br /><br /> -->

	<button type="submit">Enviar</button>
	<button type="reset">Limpar</button>
</form>

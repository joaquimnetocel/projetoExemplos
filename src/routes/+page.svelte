<script lang="ts">
	let nome = $state('João da Silva');
	let profissao = $state('Desenvolvedor Full Stack');
	let email = $state('joao@email.com');
	let telefone = $state('(32) 99999-9999');
	let foto = $state('https://i.pravatar.cc/150');
</script>

<div
	class="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
>
	<img
		class="w-24 h-24 rounded-full mb-4 border-4 border-gray-200"
		src={foto}
		alt="Foto de perfil"
	/>

	<h2 class="text-xl font-semibold text-gray-800">{nome}</h2>
	<p class="text-gray-500 mb-4">{profissao}</p>

	<div class="text-sm text-gray-600 space-y-1">
		<p>📧 {email}</p>
		<p>📱 {telefone}</p>
	</div>

	<button
		class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
		onclick={() => alert(`Entrar em contato com ${nome}`)}
	>
		Entrar em contato
	</button>
</div>

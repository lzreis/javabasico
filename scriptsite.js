
// Seleciona o botão de tema pelo ID
const botaoTema = document.getElementById('btn-tema');

// Adiciona um evento de clique
botaoTema.addEventListener('click', () => {
    // Liga/Desliga a classe 'dark-mode' no corpo (body) do site
    document.body.classList.toggle('dark-mode');
});
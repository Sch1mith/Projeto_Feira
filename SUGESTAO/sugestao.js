document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os valores dos campos
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const tipo = document.getElementById('tipo').value;
    const sugestoes = document.getElementById('sugestoes').value;

    // Validação simples
    if (nome && sobrenome && email && sugestoes) {
        const mensagemDiv = document.getElementById('mensagem');
        mensagemDiv.style.color = '#2e8b57'; // Cor verde para sucesso
        mensagemDiv.textContent = "Obrigado pela sua sugestão! Vamos analisá-la com carinho.";

        // Limpa os campos do formulário
        document.getElementById('formulario').reset();

        // Exibe no console (opcional)
        console.log('Sugestão enviada:');
        console.log('Nome:', nome);
        console.log('Sobrenome:', sobrenome);
        console.log('E-mail:', email);
        console.log('Tipo de Sugestão:', tipo);
        console.log('Sugestões:', sugestoes);
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

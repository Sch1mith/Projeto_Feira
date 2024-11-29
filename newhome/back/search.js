const valorProcurado = localStorage.getItem('dataValor');

if (valorProcurado) {
    const button = document.querySelector(`button[data-valor="${valorProcurado}"]`);
    
    if (button) {
        const buttonAtivo = document.querySelector('button.active');
        const tabAtiva = document.querySelector('.tab-pane.active');
        if (buttonAtivo) {
            buttonAtivo.classList.remove('active');
        }
        if (tabAtiva) {
            tabAtiva.classList.remove('active');
        }
        
        button.classList.add('active');
        const tab = document.querySelector(`#${button.getAttribute('data-valor')}`);
        if (tab) {
            tab.classList.add('active');
        }
        console.log("Botão encontrado e ativado:", button);
        localStorage.removeItem('dataValor');
    } else {
        console.log("Nenhum botão com o valor correspondente foi encontrado.");
    }
} else {
    console.error("Nenhum valor encontrado no LocalStorage.");
}
function calcular() {
    const sal = parseFloat(document.getElementById('salario').value) || 0;
    const ut = parseFloat(document.getElementById('h-uteis').value) || 0;
    const fds = parseFloat(document.getElementById('h-fds').value) || 0;

    const vHora = sal / 200;
    const total = sal + (vHora * ut) + (vHora * 1.5 * fds);
    
    document.getElementById('res-total').innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Lógica de Data/Hora (Desafio 2)
function update() {
    // Objeto Date captura o horário do sistema do usuário
    const agora = new Date();
    document.getElementById('data-hora').innerText = agora.toLocaleString('pt-BR');
}
setInterval(update, 1000); update();
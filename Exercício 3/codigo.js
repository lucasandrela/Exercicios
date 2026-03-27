function calcular() {
    const p = parseInt(document.getElementById('pessoas').value) || 0;
    const d = parseInt(document.getElementById('dias').value) || 0;
    let v = 0;

    if (p <= 49) v = 4.5;
    else if (p <= 99) v = 4.1;
    else if (p <= 149) v = 3.8;
    else v = 3.6;

    const total = p * v * d;
    document.getElementById('res-total').innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function update() {
    const agora = new Date(); // Objeto Date do JS
    document.getElementById('data-hora').innerText = agora.toLocaleString('pt-BR');
}
setInterval(update, 1000); update();
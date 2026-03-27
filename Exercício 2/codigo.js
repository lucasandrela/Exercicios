function calcular() {
    const sal = parseFloat(document.getElementById('sal-atual').value) || 0;
    let pct = 0;

    if (sal <= 1200) pct = 16;
    else if (sal <= 2100) pct = 13;
    else if (sal <= 3000) pct = 10;
    else pct = 5;

    const total = sal + (sal * pct / 100);
    document.getElementById('pct').innerText = `${pct}% de aumento aplicado`;
    document.getElementById('res-total').innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function update() {
    const agora = new Date();
    document.getElementById('data-hora').innerText = agora.toLocaleString('pt-BR');
}
setInterval(update, 1000); update();
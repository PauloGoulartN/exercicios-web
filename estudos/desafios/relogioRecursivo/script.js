function atualizarRelogio() {
    let agora = new Date();

    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');
    
    let horario = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').textContent = horario;

    // Chamada recursiva usando setTimeout
    setTimeout(atualizarRelogio, 1000);
}
// Inicia o relógio
atualizarRelogio();
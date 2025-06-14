// --- Contador Regresivo ---
function updateCountdown() {
    const targetDate = new Date('2025-06-16T12:00:00-05:00'); // 16 de junio 2025 a las 12:00 PM
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = `
            <p class="text-2xl font-bold text-white">¡SORTEO FINALIZADO!</p>
            <p class="text-white">El sorteo se realizó el 16 de junio de 2025.</p>`;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <p class="text-2xl font-bold text-white">El sorteo se realizará el</p>
        <p class="text-4xl font-bold text-white">LUNES</p>
        <div class="flex gap-4 mt-4">
            <div class="bg-white/10 p-4 rounded-lg">
                <p class="text-white">${days.toString().padStart(2, '0')} Días</p>
            </div>
            <div class="bg-white/10 p-4 rounded-lg">
                <p class="text-white">${hours.toString().padStart(2, '0')} Horas</p>
            </div>
            <div class="bg-white/10 p-4 rounded-lg">
                <p class="text-white">${minutes.toString().padStart(2, '0')} Minutos</p>
            </div>
            <div class="bg-white/10 p-4 rounded-lg">
                <p class="text-white">${seconds.toString().padStart(2, '0')} Segundos</p>
            </div>
        </div>
        <p class="text-white mt-4">¡Mucho suerte a todos los participantes!</p>`;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

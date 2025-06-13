// --- Lógica para el Generador de Ideas con Gemini API ---
const generateBtn = document.getElementById('generate-ideas-btn');
const ideaPromptInput = document.getElementById('idea-prompt');
const ideaResultsDiv = document.getElementById('idea-results');
const buttonText = document.getElementById('button-text');

// Función para generar ideas (temporal hasta que se configure la API real)
async function generateIdeas(prompt) {
    try {
        // Simulación de llamada a API
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Respuesta simulada
        const ideasArray = [
            `Un organizador de escritorio moderno con compartimentos para lápices y papeles`,
            `Un soporte para teléfono móvil con diseño ergonómico`,
            `Un portavasos con diseño minimalista`,
            `Un llavero personalizado con tu nombre`,
            `Un porta lapiceros con forma de árbol`
        ];
        
        return ideasArray;
    } catch (error) {
        console.error("Error en el generador de ideas:", error);
        throw error;
    }
}

generateBtn.addEventListener('click', async () => {
    const userPrompt = ideaPromptInput.value.trim();
    if (!userPrompt) {
        ideaResultsDiv.innerHTML = '<p class="text-yellow-400">Por favor, escribe un tema o idea para empezar.</p>';
        return;
    }

    // Estado de Carga
    buttonText.textContent = 'Generando...';
    generateBtn.disabled = true;
    ideaResultsDiv.innerHTML = `
        <div class="flex justify-center items-center h-full">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <p class="ml-3">Buscando ideas increíbles...</p>
        </div>`;
    
    try {
        const ideas = await generateIdeas(userPrompt);
        const htmlList = '<ul>' + ideas.map(idea => `<li>${idea}</li>`).join('') + '</ul>';
        ideaResultsDiv.innerHTML = htmlList;
    } catch (error) {
        ideaResultsDiv.innerHTML = '<p class="text-red-400">Hubo un problema al generar ideas. Inténtalo más tarde.</p>';
    } finally {
        buttonText.textContent = 'Generar Ideas';
        generateBtn.disabled = false;
    }
});

// --- Contador Regresivo ---
function updateCountdown() {
    const targetDate = new Date('2025-06-17T12:00:00-05:00'); // 17 de junio 2025 a las 12:00 PM
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = `
            <p class="text-2xl font-bold text-white">¡SORTEO FINALIZADO!</p>
            <p class="text-white">El sorteo se realizó el 17 de junio de 2025.</p>`;
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

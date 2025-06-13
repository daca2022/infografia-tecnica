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
    const targetDate = new Date('2025-06-18T12:00:00-05:00'); // Domingo 18 de junio a las 12:00 PM
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = 
            '<div class="countdown-item">¡SORTEO INICIADO!</div>';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

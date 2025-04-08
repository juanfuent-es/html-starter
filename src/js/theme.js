// Detectar cambio en el tema del sistema
window.addEventListener('storage', function (event) {
    if (event.key === 'prefersColorScheme') {
        const isDarkMode = event.newValue === 'dark';
        document.documentElement.classList.toggle('dark', isDarkMode);
    }
});

// Función para detectar y aplicar el tema inicial
function setTheme() {
    // Verificar si el navegador soporta prefers-color-scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
}

// Aplicar el tema al cargar la página
setTheme();
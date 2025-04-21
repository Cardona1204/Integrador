document.addEventListener('DOMContentLoaded', function() {
    // Inicializar sidenav para móviles
    const sidenavElements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElements);
    
    // Configurar el botón de descarga
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Descargando el manual de identidad tipográfica. Por favor espere...');
            
            // Simulación de descarga
            setTimeout(function() {
                alert('El documento ha sido descargado correctamente.');
            }, 1500);
        });
    }
    
    // Scroll suave para los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a, .sidenav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Solo procesar enlaces internos que comienzan con #
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calcular la posición considerando la barra de navegación
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    // Realizar el scroll suave
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar el sidenav en móvil si está abierto
                    const sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
                    if (sidenavInstance && sidenavInstance.isOpen) {
                        sidenavInstance.close();
                    }
                }
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imageSliders = document.querySelectorAll('.image-slider');

    // Función para precargar imágenes
    function preloadImages() {
        const sliders = document.querySelectorAll('.image-slider');
        sliders.forEach(slider => {
            const images = slider.querySelectorAll('img');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src) {
                    const newImg = new Image();
                    newImg.src = src;
                    newImg.onload = function() {
                        img.classList.add('loaded');
                    }
                }
            });
        });
    }

    // Llamar a la función de precarga
    preloadImages();

    imageSliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        // Mostrar la primera imagen
        images[currentIndex].classList.add('active');

        // Cambiar la imagen cada 5 segundos
        setInterval(showNextImage, 5000);
    });

    // Función para animar la aparición de los elementos al hacer scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.project-card, .impact-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight * 0.9) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Aplicar estilos iniciales para la animación
    document.querySelectorAll('.project-card, .impact-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    // Ejecutar la animación al cargar la página y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Manejar el menú de navegación en dispositivos móviles
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.className = 'menu-toggle';
    document.querySelector('header').appendChild(menuToggle);

    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
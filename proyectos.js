document.addEventListener('DOMContentLoaded', function() {
    // Datos para el gráfico de productividad
    const productivityData = [
        { name: '2023 Q1', UALCompletadas: 6, TiempoPromedio: 70 },
        { name: '2023 Q2', UALCompletadas: 5, TiempoPromedio: 90 },
        { name: '2023 Q3', UALCompletadas: 4, TiempoPromedio: 85 },
        { name: '2023 Q4', UALCompletadas: 2, TiempoPromedio: 45 },
        { name: '2024 Q1', UALCompletadas: 5, TiempoPromedio: 50 },
    ];

    // Configuración y creación del gráfico de productividad
    const ctx = document.getElementById('productivityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productivityData.map(d => d.name),
            datasets: [
                {
                    label: 'UAL Completadas',
                    data: productivityData.map(d => d.UALCompletadas),
                    backgroundColor: '#8884d8',
                    yAxisID: 'y-axis-1',
                },
                {
                    label: 'Tiempo Promedio (días)',
                    data: productivityData.map(d => d.TiempoPromedio),
                    backgroundColor: '#82ca9d',
                    yAxisID: 'y-axis-2',
                }
            ]
        },
        options: {
        responsive: true,
        maintainAspectRatio: true,
            scales: {
                'y-axis-1': {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'UAL Completadas'
                    }
                },
                'y-axis-2': {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Tiempo Promedio (días)'
                    }
                }
            }
        }
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
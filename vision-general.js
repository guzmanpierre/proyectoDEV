document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del carrusel
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('hidden', i !== index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        prevButton.addEventListener('click', prevImage);
        nextButton.addEventListener('click', nextImage);

        // Ciclo automático cada 5 segundos
        setInterval(nextImage, 5000);
    });

    // Gráfico de pastel
    var ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Con Internet', 'Sin Internet'],
            datasets: [{
                data: [66.4, 33.6],
                backgroundColor: ['#0088FE', '#FF8042']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Hogares con Internet en México (2023)'
                }
            }
        }
    });

    // Gráfico de barras
    var ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: '% Docentes Capacitados',
                data: [60, 70, 80, 85, 95],
                backgroundColor: '#8884d8'
            }, {
                label: '% Saturación UA',
                data: [85, 90, 95, 98, 100],
                backgroundColor: '#82ca9d'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Proyección de Capacitación Docente y Saturación de UA'
                }
            }
        }
    });
});
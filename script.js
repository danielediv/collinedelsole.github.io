
    document.addEventListener('DOMContentLoaded', function () {
        const images = document.querySelectorAll('.carousel-images img');
        const totalImages = images.length;
        let currentIndex = 0;

        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        const carouselImages = document.querySelector('.carousel-images');

        // Funzione per mostrare l'immagine corrente
        function showImage(index) {
            carouselImages.style.transform = `translateX(-${index * 100}%)`;
        }

        // Passa all'immagine successiva
        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages; // Torna all'inizio dopo l'ultima immagine
            showImage(currentIndex);
        }

        // Torna all'immagine precedente
        function prevImage() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Va all'ultima immagine se si trova alla prima
            showImage(currentIndex);
        }

        // Event listeners per i pulsanti
        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);

        // Scorrimento automatico ogni 3 secondi
        setInterval(nextImage, 2000);
    });




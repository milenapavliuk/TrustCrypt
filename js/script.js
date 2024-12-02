const images = document.querySelector('.carousel-images');
        const totalImages = document.querySelectorAll('.carousel-images img').length;
        let index = 0;

        function showImage(index) {
            images.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextImage() {
            index = (index + 1) % totalImages;
            showImage(index);
        }

        function prevImage() {
            index = (index - 1 + totalImages) % totalImages;
            showImage(index);
        }

        document.getElementById('next').addEventListener('click', nextImage);
        document.getElementById('prev').addEventListener('click', prevImage);

        setInterval(nextImage, 3000);
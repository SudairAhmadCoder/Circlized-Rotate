function getRandomBorderRadius() {
            return `${Math.floor(Math.random() * 50) + 30}% ${Math.floor(Math.random() * 50) + 30}% ${Math.floor(Math.random() * 50) + 30}% ${Math.floor(Math.random() * 50) + 30}% / ${Math.floor(Math.random() * 50) + 30}% ${Math.floor(Math.random() * 50) + 30}% ${Math.floor(Math.random() * 50) + 30}% ${Math.floor(Math.random() * 50) + 30}%`;
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function getRandomSize() {
            // Generate random size between 100px and 500px
            const size = Math.floor(Math.random() * 300) + 100;
            return `${size}px`;
        }

        setInterval(() => {
            const animatedBg = document.querySelector('.animated-bg');

            // Smoothly change the border-radius, background color, width, and height
            animatedBg.style.borderRadius = getRandomBorderRadius();
            animatedBg.style.background = getRandomColor(); // Changed to single color for simplicity
            animatedBg.style.width = getRandomSize();
            animatedBg.style.height = getRandomSize();
        }, 4000);
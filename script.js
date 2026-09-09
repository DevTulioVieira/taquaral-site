tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                taquaral: {
                    dark: '#0f172a',
                    light: '#f8fafc',
                    gold: '#ca8a04'
                }
            },
            backgroundImage: {
                'holo-gradient': 'linear-gradient(to right, #3b82f6, #ec4899, #eab308)',
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
});
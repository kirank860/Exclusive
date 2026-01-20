/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#121212', // Luxury Black
                    hover: '#2a2a2a',
                },
                secondary: {
                    DEFAULT: '#D4AF37', // Champagne Gold
                    hover: '#B8860B',
                },
                luxury: {
                    black: '#121212',
                    gold: '#D4AF37',
                    cream: '#FAF9F6',
                    graphite: '#1C1C1C',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                primary: ['Inter', 'sans-serif'],
            },
            spacing: {
                'xs': '8px',
                'sm': '16px',
                'md': '24px',
                'lg': '40px',
                'xl': '80px',
                '15': '60px',
            },
        },
    },

    plugins: [],
}

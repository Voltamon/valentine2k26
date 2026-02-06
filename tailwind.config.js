/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-white': '#FAFAFA',
                'brand-brown': '#8B4513',
                'brand-text': '#4A3728',
            },
            fontFamily: {
                'sans': ['Nunito', 'sans-serif'],
                'serif': ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}

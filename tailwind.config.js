/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

    darkMode: ['selector', '[data-mode="dark" ]'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 24s linear infinite',
            },
        },
    },
    plugins: [],
}
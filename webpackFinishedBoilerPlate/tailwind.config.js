/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Views/**/*.cshtml',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'bg-green-500',
        'text-white',
        'hover:bg-green-600',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

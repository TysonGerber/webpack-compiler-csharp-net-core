const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './Views/**/*.cshtml',
        './src/markup/**/*.js',
        './src/markup/**/*.css',
        './src/markup/**/*.hbs',
        './src/styles/**/*.css',
    ],
    safelist: ['bg-green-500', 'text-white', 'hover:bg-green-600'],
    theme: {
        extend: {
            colors: {
                ...colors, // 🧠 INCLUDE ALL Tailwind default colors first
                'inherit-color': 'inherit',
                transparent: 'transparent',
                current: 'currentColor',
                brand: { // Revvity Yellow
                    light: '#fff47a',
                    DEFAULT: '#ffeb0f',
                    dark: '#a89700',
                },
                primary: { // Horizon Blue & Shades
                    light: '#e8f0f4',
                    DEFAULT: '#196b90',
                    dark: '#124d68',
                },
                secondary: { // Horizon Plum & Shades
                    light: '#eee7ec',
                    DEFAULT: '#5d0f43',
                    dark: '#46062f',
                },
                tertiary: {  // Horizon Green & Shades
                    light: '#e5f0ef',
                    DEFAULT: '#006e63',
                    dark: '#004f42',
                },
                white: '#ffffff',
                gray: {
                    200: '#f6f6f6', // Your custom shade overrides default
                    300: '#ddddde',
                    400: '#bbbdbf',
                    500: '#989a9c',
                    600: '#76797b',
                    DEFAULT: '#54575a',
                    800: '#3b3b3b',
                    900: '#1b1c1d',
                },
                black: {
                    DEFAULT: '#000000',
                },
                // Status Colors
                disabled: '#ddddde',
                error: {
                    light: '#fef0f0',
                    DEFAULT: '#920808',
                    dark: '#620505',
                },
                success: {
                    light: '#f7fff4',
                    DEFAULT: '#217d00',
                    dark: '#185b00',
                },
                warning: {
                    light: '#fff9ee',
                    DEFAULT: '#ffad00',
                    dark: '#dd9600',
                },
                // Infographics Colors
                turquoise: '#00a499',
                orange: '#e87722',
                gold: '#8d6b0f',
                beige: '#866f69',
                'light-plum': '#723a5f',
            },
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

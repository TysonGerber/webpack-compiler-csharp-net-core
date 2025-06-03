const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './Views/**/*.cshtml',
        './src/markup/**/*.js',
        './src/markup/**/*.css',
        './src/markup/**/*.hbs',
        './src/styles/**/*.css',
    ],
    safelist: [
        'bg-green-500',
        'text-white',
        'hover:bg-green-600',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#ccff99',
                    DEFAULT: '#39ff14',
                    dark: '#00cc00',
                },
                primary: {
                    light: '#d2f4ff',
                    DEFAULT: '#00ccff',
                    dark: '#0088cc',
                },
                white: '#ffffff',
                gray: {
                    200: '#f6f6f6',
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
                disabled: '#ddddde',
                error: {
                    light: '#ffe5e5',
                    DEFAULT: '#e60000',
                    dark: '#990000',
                },
                success: {
                    light: '#e6ffe6',
                    DEFAULT: '#28a745',
                    dark: '#1c7c2d',
                },
                warning: {
                    light: '#fff6e0',
                    DEFAULT: '#ffc107',
                    dark: '#cc9a00',
                },
            },
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

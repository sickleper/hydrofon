module.exports = {
    mode: 'jit',
    content: [
        './resources/**/*.{php,js}',
        './node_modules/flatpickr/dist/flatpickr.js'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    100: '#FFEFED',
                    200: '#FFD8D1',
                    300: '#FFC1B5',
                    400: '#FF927E',
                    500: '#FF6347',
                    600: '#E65940',
                    700: '#993B2B',
                    800: '#732D20',
                    900: '#4D1E15',
                    DEFAULT: '#FF6347'
                },
            },
            fontFamily: {
                'base': ['Roboto', 'sans-serif']
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
    corePlugins: {
        container: false
    }
};

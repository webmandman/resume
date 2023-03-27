/** @type {import('tailwindcss').Config} */

const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                monse: ['Monserrat', 'sans-serif']
            }
        },
    },
    plugins: [],
};

module.exports = config;
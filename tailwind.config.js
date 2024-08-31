/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js, ts, jsx, tsx}',
        './src/components/**/*.{js, ts, jsx, tsx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            sans: ['Helvetica', 'Arial', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            fontFamily: {
                script: 'Dancing Script',
                roboto: ['Roboto', 'sans-serif'],
            },
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}

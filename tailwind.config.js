/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            red: 'hsl(14, 86%, 42%)',
            green: 'hsl(159, 69%, 38%)',
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            'rose-50': 'hsl(20, 50%, 98%)',
            'rose-100': 'hsl(13, 31%, 94%)',
            'rose-300': 'hsl(14, 25%, 72%)',
            'rose-400': 'hsl(7, 20%, 60%)',
            'rose-500': 'hsl(12, 20%, 44%)',
            'rose-900': 'hsl(14, 65%, 9%)',
        },
        fontFamily: {
            redHatText: ['Red Hat Text', 'sans-serif'],
        },
        fontSize: {
            'preset-1': ['56px', { lineHeight: '120%', letterSpacing: '0px', fontWeight: '700' }],
            'preset-2': ['24px', { lineHeight: '125%', letterSpacing: '0px', fontWeight: '700' }],
            'preset-3': ['16px', { lineHeight: '150%', letterSpacing: '0px', fontWeight: '600' }],
            'preset-4': ['14px', { lineHeight: '150%', letterSpacing: '0px', fontWeight: '400' }],
            'preset-4-semi-bold': ['14px', { lineHeight: '150%', letterSpacing: '0px', fontWeight: '600' }],
        },
        extend: {},
    },
    plugins: [],
}

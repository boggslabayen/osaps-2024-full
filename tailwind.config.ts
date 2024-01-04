import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '-100': '-1',
      }
    },
    colors: {
      'blue-jay': 'hsla(214, 57%, 32%, 1)',
      'ivory': 'hsla(53, 26%, 93%, 1)',
      'coral-blue':'hsla(193, 30%, 82%, 1)',
      'white': 'hsla(0, 0%, 100%, 1)',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});
export default config

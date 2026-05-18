import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F8F8F6',
        ink: '#111111',
        mist: '#D9D9D9'
      },
      letterSpacing: {
        editorial: '0.08em'
      }
    }
  },
  plugins: []
};

export default config;

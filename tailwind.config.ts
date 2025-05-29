import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        subbg: { DEFAULT: 'var(--subbg)' },
        bghover: { DEFAULT: 'var(--bghover)' },
        fgfade: { DEFAULT: 'var(--fgfade)' },
        border: { DEFAULT: 'var(--border)' },
        // Alert
        bdinfo: { DEFAULT: 'var(--bdinfo)' },
        bginfo: { DEFAULT: 'var(--bginfo)' },
        txinfo: { DEFAULT: 'var(--txinfo)' },
        bdwarn: { DEFAULT: 'var(--bdwarn)' },
        bgwarn: { DEFAULT: 'var(--bgwarn)' },
        txwarn: { DEFAULT: 'var(--txwarn)' },
        bdcaution: { DEFAULT: 'var(--bdcaution)' },
        bgcaution: { DEFAULT: 'var(--bgcaution)' },
        txcaution: { DEFAULT: 'var(--txcaution)' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

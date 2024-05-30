import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      serif: ['var(--font-serif)']
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
          pressed: 'hsl(var(--primary-pressed))',
          light: 'hsl(var(--primary-light))',
          lightForeground: 'hsl(var(--primary-light-foreground))'
        },
        secondary1: {
          DEFAULT: 'hsl(var(--secondary1))',
          foreground: 'hsl(var(--secondary1-foreground))',
          hover: 'hsl(var(--secondary1-hover))',
          pressed: 'hsl(var(--secondary1-pressed))',
          light: 'hsl(var(--secondary1-light))',
          lightForeground: 'hsl(var(--secondary1-light-foreground))'
        },
        secondary2: {
          DEFAULT: 'hsl(var(--secondary2))',
          foreground: 'hsl(var(--secondary2-foreground))',
          hover: 'hsl(var(--secondary2-hover))',
          pressed: 'hsl(var(--secondary2-pressed))',
          light: 'hsl(var(--secondary2-light))',
          lightForeground: 'hsl(var(--secondary2-light-foreground))'
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          foreground: 'hsl(var(--disabled-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        cyellow: {
          0: '#fef75d',
          1: '#fef0ac',
          2: '#fde983',
          3: '#fde159',
          4: '#fcda30',
          5: '#FCD307',
          6: '#d2af05',
          7: '#a88c04',
          8: '#7e6903',
          9: '#544602'
        },
        cpurple: {
          0: '#d9d7e3',
          1: '#b3b0c7',
          2: '#8d88ac',
          3: '#676190',
          4: '#413974',
          5: '#1C1259',
          6: '#170f4a',
          7: '#120c3b',
          8: '#0e092c',
          9: '#09061d'
        },
        cpinky: {
          0: '#fcdfe5',
          1: '#f9c0cc',
          2: '#f6a0b2',
          3: '#f38199',
          4: '#f0617f',
          5: '#EE4266',
          6: '#c63755',
          7: '#9e2c44',
          8: '#772133',
          9: '#4f1622'
        },
        cgray: {
          0: '#f8f8fb',
          1: '#f1f2f8',
          2: '#eaecf5',
          3: '#e3e6f1',
          4: '#dce0ee',
          5: '#D5DAEB',
          6: '#b1b5c3',
          7: '#8e919c',
          8: '#6a6d75',
          9: '#47484e'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()'
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    })
  ]
}

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border, 0 0% 100%))',
        input: 'hsl(var(--input, 0 0% 100%))',
        ring: 'hsl(var(--ring, 0 0% 100%))',
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 0 0% 0%))',
        primary: {
          DEFAULT: 'hsl(var(--primary, 0 0% 100%))',
          foreground: 'hsl(var(--primary-foreground, 0 0% 0%))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 0 0% 95%))',
          foreground: 'hsl(var(--secondary-foreground, 0 0% 10%))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, 0 100% 90%))',
          foreground: 'hsl(var(--destructive-foreground, 0 0% 10%))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 0 0% 96%))',
          foreground: 'hsl(var(--muted-foreground, 0 0% 40%))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, 0 0% 98%))',
          foreground: 'hsl(var(--accent-foreground, 0 0% 20%))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
          foreground: 'hsl(var(--popover-foreground, 0 0% 0%))'
        },
        card: {
          DEFAULT: 'hsl(var(--card, 0 0% 100%))',
          foreground: 'hsl(var(--card-foreground, 0 0% 0%))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background, 0 0% 100%))',
          foreground: 'hsl(var(--sidebar-foreground, 0 0% 0%))',
          primary: 'hsl(var(--sidebar-primary, 0 0% 100%))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground, 0 0% 0%))',
          accent: 'hsl(var(--sidebar-accent, 0 0% 100%))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground, 0 0% 0%))',
          border: 'hsl(var(--sidebar-border, 0 0% 80%))',
          ring: 'hsl(var(--sidebar-ring, 0 0% 80%))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Custom colors for our application
                "blue": {
                    "50": "#F0F7FC",
                    "100": "#D8EAF7",
                    "200": "#AED2ED",
                    "300": "#83B9E3",
                    "400": "#4F96C8",
                    "500": "#3278AB",
                    "600": "#266089",
                    "700": "#1A4865",
                    "800": "#0D2433",
                    "900": "#061219"
                },
                "green": {
                    "50": "#F1F9F5",
                    "100": "#DBEEE4",
                    "200": "#B3DACA",
                    "300": "#8BC6AF",
                    "400": "#5EAD7D",
                    "500": "#458F61",
                    "600": "#326847",
                    "700": "#20452F",
                    "800": "#102318",
                    "900": "#08110C"
                },
                "peach": {
                    "50": "#FEF8F2",
                    "100": "#FDEEDE",
                    "200": "#FBD9BD",
                    "300": "#F9C096",
                    "400": "#F6A066",
                    "500": "#F38035",
                    "600": "#C15C18",
                    "700": "#914511",
                    "800": "#602E0B",
                    "900": "#301705"
                },
                "warning": {
                    "light": "#FFECB5",
                    "DEFAULT": "#FFD369",
                    "dark": "#E6B800"
                },
                "danger": {
                    "light": "#FFBABA",
                    "DEFAULT": "#FF5A5A",
                    "dark": "#D10000"
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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

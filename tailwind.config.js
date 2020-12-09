module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
	purge: {
		content: ['./src/**/*.html', './src/**/*.tsx'],
		options: {
			safelist: {
				standard: [/space-(x|y)-.+/],
			},
		},
	},
	theme: {
		extend: {
			colors: {
				theme: {
					primary: 'var(--theme-primary)',
					secondary: 'var(--theme-secondary)',
					tertiary: 'var(--theme-tertiary)',
				},
			},
			screens: {
				'content-xs': '20rem',
				'content-sm': '24rem',
				'content-md': '28rem',
				'content-lg': '32rem',
			},
			spacing: {
				'2px': '2px',
				'3px': '3px',
				'4px': '4px',
				'1/2': '50%',
				'2/3': '66.666%',
				'3/4': '75%',
				'7/8': '87.5%',
				full: '100%',
			},
		},
	},
	variants: {
		borderWidth: ['hover'],
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

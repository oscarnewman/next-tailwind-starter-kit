module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		// note you must disable the base rule as it can report incorrect errors
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-no-undef': ['error', { allowGlobals: true }],
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars-experimental': 0,
		'space-before-function-paren': 0,
		'react/prop-types': 0,
		'react/jsx-handler-names': 0,
		'react/jsx-fragments': 0,
		'react/react-in-jsx-scope': 0,
		'react/no-unused-prop-types': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
	},
}

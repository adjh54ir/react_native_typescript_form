module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-tabs': 'off',
		'no-shadow': 'off',
		'no-undef': 'off',
		'no-trailing-spaces': 'off',
		'comma-dangle': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/no-unused-vars': 'off',
		'react-native/no-inline-styles': 'off',
		'treact/self-closing-comp': 'off',
		'react/react-in-jsx-scope': 'off',
		'treact-hooks/exhaustive-deps': 'off',
		'tno-array-constructor': 'off',
		'react-hooks/exhaustive-deps': 'off',
		indent: 'off',
		curly: 'off',
		radix: 'off',
		quotes: 'off',
		semi: 'off',
	},
};

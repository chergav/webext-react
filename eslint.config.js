import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			react.configs.flat.recommended,
			stylistic.configs['recommended-flat'],
			...tailwind.configs['flat/recommended'],
		],
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.webextensions,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@stylistic': stylistic,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...react.configs.recommended.rules,
			'react/jsx-sort-props': ['warn', {
				callbacksLast: true,
				shorthandFirst: true,
				shorthandLast: false,
				multiline: 'first',
				ignoreCase: true,
				noSortAlphabetically: false,
				reservedFirst: true,
				locale: 'auto',
			}],
			'react/react-in-jsx-scope': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'@stylistic/max-len': ['error', {
				code: 120,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			}],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/jsx-indent-props': [2, 'tab'],
			'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],
			'@stylistic/multiline-ternary': ['error', 'always-multiline'],
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/object-curly-newline': ['error', {
				multiline: true,
				consistent: true,
			}],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/semi-style': ['error', 'last'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			}],
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-unused-vars': 'off',
			'no-irregular-whitespace': [
				'error',
				{
					skipStrings: true,
					skipTemplates: true,
					skipRegExps: true,
					skipComments: true,
				},
			],
		},
	},
);

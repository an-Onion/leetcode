// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/no-unused-expressions': ['off'],
            'semi': [2, 'always'],
            'semi-spacing': ['error', { before: false, after: true }],
            'quotes': ['error', 'single'],
            'object-curly-spacing': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'space-in-parens': ['error', 'always'],
            'no-trailing-spaces': 'error',
            'eqeqeq': 'error',
        },
    },
);

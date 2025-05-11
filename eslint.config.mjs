import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base Next.js configuration
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier configuration to disable rules that conflict with Prettier
  'plugin:prettier/recommended', // Add Prettier plugin rules

  // Optional: If you want to enforce a custom Prettier configuration within ESLint
  {
    rules: {
      'prettier/prettier': ['error', { printWidth: 90, singleQuote: true, semi: true }],
    },
  },
];

export default eslintConfig;

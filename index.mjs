import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config({
  extends: [
    js.configs.recommended,
    ts.configs.recommended,
    perfectionist.configs["recommended-alphabetical"]
  ],
  files: ['*.{js,mjs,ts}', '**/*.{js,mjs,ts}'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      NodeListOf: 'readonly',
    },
  },
  plugins: {
    'prefer-arrow-functions': preferArrowFunctions
  },
  rules: {
    'no-undef': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  }
})

module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'no-useless-constructor': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
}

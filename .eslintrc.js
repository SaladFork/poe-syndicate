module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 7,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  rules: {
    // eslint
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' }
    ],
    'one-var': ['error', 'never'],
    'quotes': ['error', 'single', { avoidEscape: true }],

    // react
    'react/default-props-match-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'off', // prefer redux one below
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true }
    ],
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': [
      'error',
      { callbacksLast: true, requiredFirst: true, sortShapeProp: true }
    ],
    // 'react/state-in-constructor': ['error', 'never'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    // react JSX
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-handler-names': 'error',
    'react/jsx-max-depth': ['error', { max: 9 }], // TODO: lower this max
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-curly-brace-presence': 'error',
    // 'react/jsx-fragments': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-default-props': 'error'
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      env: { browser: true }
    },
    {
      files: ['src/**/*.test.js', 'src/setupTests.js'],
      env: { jest: true, mocha: true }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    },
    'react': {
      version: '16.9'
    }
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'multiline-ternary': 0,
    'no-unused-vars': 1,
    indent: 0,
    eqeqeq: 0,
    'object-shorthand': 0,
    'space-before-function-paren': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

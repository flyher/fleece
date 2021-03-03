module.exports = {
  root: true,
  env: {
    node: true,
  },
  // extends: ['plugin:react/essential', 'eslint:recommended', '@react/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};

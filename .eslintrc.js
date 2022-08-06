module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    },
  },
  "plugins": [
    'prettier', 'testing-library', 'jest-dom'
  ],
  "extends": ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react', 'plugin:import/errors', 'plugin:testing-library/react', 'plugin:jest-dom/recommended'],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  "rules": {
    'no-console': 'off',
    'no-underscore-dangle': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'dot-notation': 'off',
    'no-trailing-spaces': 2,
    "import/extensions": [ // Overrides airbnb config requiring filename types
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
  },
  env: {
    jest: true,
    mocha: true,
    browser: true,
    es6: true,
  },
  globals: {
    React: true,
  },
  ignorePatterns: ["**/*.css", "**/*.d.ts"],
}

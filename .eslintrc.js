module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest": true,
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
      "plugin:css-modules/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true,
      },
      "ecmaVersion": 2018,
      "sourceType": "module",
  },
  "plugins": [
      "react",
      "@typescript-eslint",
      "prettier",
      "css-modules",
  ],
  "rules": {
    "prettier/prettier": ["error", { "singleQuote": true }], 
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore",
    }]
  },  
  "settings": {
      "react": {
        "pragma": "React",
        "version": "detect",
      }
  },
};
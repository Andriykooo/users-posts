module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      "jsx-a11y/label-has-associated-control":"off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "import/prefer-default-export": "off",
      "react/jsx-filename-extension": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    },
};

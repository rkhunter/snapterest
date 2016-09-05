module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "modules"
    ],
    "rules": {
      "func-names": 1,
      "react/jsx-filename-extension": 0,
      "react/prefer-es6-class": 1,
      "react/prefer-stateless-function": 0,
      "global-require": 0,
      "new-cap": 0,
      "import/no-extraneous-dependencies": 0,
    },
    "settings": {
      "ecmascript": 6,
    },
    "globals": {
      "document": true,
      "window": true,
      "jest": true,
      "jasmine": true,
      "describe": true,
      "it": true,
      "expect": true,
    },
};

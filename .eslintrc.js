module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "plugins": [
    "babel"
  ],
  "globals":  {
    "describe": false,
    "it": false,
    "before": false,
    "beforeEach": false,
    "after": false,
    "browser": false,
    "expect": false
  },
  "rules": {
      "linebreak-style": "off",
      "no-console": "off",                                            // Use custom console rather than console
      "padded-blocks": "off",                                         // Don't enforce padded blocks
      "no-use-before-define": ["error", "nofunc"],                    // Don't use identifiers before declaration
      "comma-dangle": ["error", "never"],                             // Don't allow comma dangle
      "complexity": ["warn", 5],                                      // Limit cyclomatic complexity to 5 (ifs, etc)
      "max-params": ["warn", 5],                                      // Limit params to 5, consider condensing
      "max-statements": ["error", 10],                                // Limit statements per function
      "indent": ["error", 2],                                         // Use spaces for indents
      "no-unused-vars": ["warn", {"vars": "local", "args": "none"}],  // Check local fors for usage, do not check args
      "import/prefer-default-export": "off",                          // Don't use default export settings - wdio reference page-object model
      "class-methods-use-this": "off",                                 // Do not enforce method to be static function
      "max-len": ["warn", 150, 2, {"ignoreComments": true, "ignoreStrings": true}],                 // Max length of lines
      "no-param-reassign": "off",                                      // Allow reassign params (pass between cases)
      "max-statements": "off",
      "camelcase": "warn",
      "prefer-destructuring": "off",
      "no-shadow": "warn",
      "import/first": "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "one-var": "off"
  }
};

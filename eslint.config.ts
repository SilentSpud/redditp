import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('typescript-eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        $: false,
        toastr: false,
        Cookies: false,
        embedit: false,
      },
    },

    rules: {
      "accessor-pairs": "error",
      "array-bracket-newline": "error",
      "array-bracket-spacing": ["error", "never"],
      "array-callback-return": "error",
      "array-element-newline": "off",
      "arrow-body-style": "error",
      "arrow-parens": "error",
      "arrow-spacing": "error",
      "block-scoped-var": "off",
      "block-spacing": ["error", "never"],
      "brace-style": "off",
      "callback-return": "error",
      camelcase: "off",
      "capitalized-comments": "off",
      "class-methods-use-this": "error",
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": ["error", "last"],
      complexity: "error",
      "computed-property-spacing": ["error", "never"],
      "consistent-return": "off",
      "consistent-this": "error",
      curly: "off",
      "default-case": "off",
      "dot-location": ["error", "property"],
      "dot-notation": "off",
      "eol-last": "error",
      eqeqeq: "off",
      "for-direction": "error",
      "func-call-spacing": "error",
      "func-name-matching": "error",
      "func-names": ["error", "never"],
      "func-style": "off",
      "function-paren-newline": "off",
      "generator-star-spacing": "error",
      "getter-return": "error",
      "global-require": "error",
      "guard-for-in": "error",
      "handle-callback-err": "error",
      "id-blacklist": "error",
      "id-length": "off",
      "id-match": "error",
      "implicit-arrow-linebreak": "error",
      indent: "off",
      "indent-legacy": "off",
      "init-declarations": "off",
      "jsx-quotes": "error",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "line-comment-position": "off",
      "linebreak-style": ["error", "unix"],
      "lines-around-comment": "off",
      "lines-around-directive": "error",
      "lines-between-class-members": "error",
      "max-depth": "error",
      "max-len": "off",
      "max-lines": "off",
      "max-nested-callbacks": "error",
      "max-params": "error",
      "max-statements": "off",
      "max-statements-per-line": "error",
      "multiline-comment-style": "off",
      "new-cap": "error",
      "new-parens": "error",
      "newline-after-var": "off",
      "newline-before-return": "off",
      "newline-per-chained-call": "off",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-buffer-constructor": "error",
      "no-caller": "error",
      "no-catch-shadow": "error",
      "no-confusing-arrow": "error",
      "no-console": "off",
      "no-continue": "off",
      "no-div-regex": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "off",
      "no-empty-function": "error",
      "no-eq-null": "off",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-extra-parens": "off",
      "no-floating-decimal": "error",
      "no-implicit-globals": "off",
      "no-implied-eval": "error",
      "no-inline-comments": "off",
      "no-inner-declarations": ["error", "functions"],
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "off",
      "no-loop-func": "error",
      "no-magic-numbers": "off",

      "no-mixed-operators": [
        "error",
        {
          allowSamePrecedence: true,
        },
      ],

      "no-mixed-requires": "error",
      "no-multi-assign": "error",
      "no-multi-spaces": "off",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "off",
      "no-native-reassign": "error",
      "no-negated-condition": "off",
      "no-negated-in-lhs": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-object": "error",
      "no-new-require": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "off",
      "no-path-concat": "error",

      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],

      "no-process-env": "error",
      "no-process-exit": "error",
      "no-proto": "error",
      "no-prototype-builtins": "error",
      "no-restricted-globals": "error",
      "no-restricted-imports": "error",
      "no-restricted-modules": "error",
      "no-restricted-properties": "error",
      "no-restricted-syntax": "error",
      "no-return-assign": "error",
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-spaced-func": "error",
      "no-sync": "error",
      "no-tabs": "error",
      "no-template-curly-in-string": "error",
      "no-ternary": "off",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef-init": "error",
      "no-undefined": "off",
      "no-underscore-dangle": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-use-before-define": "off",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "off",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "off",
      "no-void": "error",
      "no-warning-comments": "off",
      "no-whitespace-before-property": "error",
      "no-with": "error",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "error",
      "object-shorthand": "off",
      "one-var": "off",
      "one-var-declaration-per-line": "error",
      "operator-assignment": ["error", "always"],
      "operator-linebreak": "error",
      "padded-blocks": "off",
      "padding-line-between-statements": "error",
      "prefer-arrow-callback": "off",
      "prefer-const": "error",
      "prefer-destructuring": "off",
      "prefer-numeric-literals": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-reflect": "off",
      "prefer-rest-params": "off",
      "prefer-spread": "error",
      "prefer-template": "off",
      "quote-props": "off",
      quotes: "off",
      radix: "error",
      "require-await": "error",
      "require-jsdoc": "off",
      "rest-spread-spacing": "error",
      semi: "off",

      "semi-spacing": [
        "error",
        {
          after: true,
          before: false,
        },
      ],

      "semi-style": ["error", "last"],
      "sort-imports": "error",
      "sort-keys": "off",
      "sort-vars": "error",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-in-parens": "off",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": "off",
      strict: ["error", "never"],
      "switch-colon-spacing": "error",
      "symbol-description": "error",
      "template-curly-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": ["error", "never"],
      "valid-jsdoc": "error",
      "vars-on-top": "off",
      "wrap-iife": "error",
      "wrap-regex": "error",
      "yield-star-spacing": "error",
    },
  },
];

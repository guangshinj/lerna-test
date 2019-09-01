module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript"],
  plugins: ["vue", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    //   // @fixable function 的小括号之前必须要有空格
    //   'space-before-function-paren': 'off',
    //   'no-eval': 'off',
    //   'no-val': 'off',
    // 'semi': [2, 'never'],
    // 'semi-spacing': [2, {
    //     'before': false,
    //     'after': true
    // }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: true
      }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};

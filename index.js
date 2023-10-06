module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint/eslint-plugin"],
  ignorePatterns: [
    ".github",
    ".husky",
    ".vscode",
    "coverage",
    "dist",
    "node_modules",
    "public",
  ],
  rules: {
    indent: "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

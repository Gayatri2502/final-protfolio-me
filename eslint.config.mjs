import eslint from "eslint";
import tseslint from "typescript-eslint";
import nextPlugin from "eslint-plugin-next";

export default tseslint.config(
  { ignores: [".next/", "node_modules/", "out/"] },
  ...tseslint.configs.recommended,
  {
    plugins: { next: nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/no-unescaped-entities": "off",
    },
  }
);
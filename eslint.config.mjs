// eslint.config.mjs
// ESLint 9/10 flat config, adapted from a legacy .eslintrc.cjs for a Docusaurus project.
//
// Install (adjust versions to taste):
//   npm i -D eslint typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh \
//     eslint-plugin-jsonc jsonc-eslint-parser eslint-plugin-i18next eslint-config-prettier \
//     eslint-plugin-mdx

import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import jsonc from "eslint-plugin-jsonc"
import * as jsoncParser from "jsonc-eslint-parser"
import * as mdx from "eslint-plugin-mdx"
import prettier from "eslint-config-prettier"
import docusaurus from "@docusaurus/eslint-plugin"

export default tseslint.config(
  // ---- Docusaurus main eslint configurations ----
  {
    plugins: {
      "@docusaurus": docusaurus,
    },
    rules: {
      "@docusaurus/no-untranslated-text": "error",
      "@docusaurus/string-literal-i18n-messages": "error",
    },
  },

  // ---- global ignores (replaces `ignorePatterns`) ----
  {
    ignores: [
      "build",
      "blog", // No blog yet
      "tsconfig.json",
      ".docusaurus", // Docusaurus build cache
      "node_modules",
      ".eslintrc.mjs",
    ],
  },

  // ---- base JS/TS rules (replaces `extends: eslint:recommended` + the two @typescript-eslint presets) ----
  js.configs.recommended,
  // Scope the type-checked TS rules to actual TS/TSX files only. Without this,
  // flat config applies them to every file ESLint touches (including README.md
  // picked up by eslint-plugin-mdx), and they fail because there's no TS
  // parser/program for those files.
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),

  // ---- app source: ts/tsx/js/jsx (rules that don't need type info) ----
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      indent: "off",
    },
  },

  // ---- app source: ts/tsx only (type-aware rules, need the TS program) ----
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-return": "error",
    },
  },

  // ---- Docusaurus docs/blog content: .md / .mdx ----
  // MDX files can contain JSX, so this lets ESLint lint the embedded code blocks
  // and JSX in docs/blog pages (e.g. src/pages/*.mdx, docs/**/*.mdx).
  {
    ...mdx.flat,
    files: ["**/*.mdx"], // pin explicitly: don't inherit any .md glob from mdx.flat
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
    }),
    rules: {
      ...mdx.flat.rules,
      // MDX prose is not app UI copy, so don't flag literal strings here.
      //"i18next/no-literal-string": "off",
    },
  },

  // ---- JSON files (config files, package.json, locale bundles, etc.) ----
  {
    files: ["**/*.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: { jsonc },
    rules: {
      "jsonc/indent": ["error", 2],
      "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      // Type-aware TS rules don't apply to JSON; disable the ones inherited
      // from recommendedTypeChecked above.
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-enum-comparison": "off",
      "@typescript-eslint/await-thenable": "off",
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/no-duplicate-type-constituents": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-implied-eval": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  },

  // ---- Docusaurus i18n locale JSON (translated strings) ----
  // Covers both the classic `public/locales/**` pattern and Docusaurus's own
  // `i18n/<locale>/**` translation JSON output.
  {
    files: ["public/locales/**/*.json", "i18n/**/*.json"],
    rules: {
      "no-irregular-whitespace": "off",
    },
  },

  // ---- Docusaurus config/theme files often run under Node, not the browser ----
  {
    files: [
      "docusaurus.config.{js,ts}",
      "sidebars.{js,ts}",
      "src/**/*.{js,jsx,ts,tsx}",
    ],
    languageOptions: {
      globals: {
        // browser env for React/theme code
        window: "readonly",
        document: "readonly",
      },
    },
  },

  // ---- must be last: turns off stylistic rules that conflict with Prettier ----
  prettier,
)

import pluginPerfectionist from "eslint-plugin-perfectionist";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */

const config = [
  {
    files: ["**/*"],
    ignores: ["**/.git/", "**/node_modules/", "**/package-lock.json"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  {
    files: ["**/*.?([cm])js"],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      "perfectionist/sort-named-exports": [
        "error",
        {
          "group-kind": "values-first",
        },
      ],
      "perfectionist/sort-objects": "error",
    },
  },
];

export default config;

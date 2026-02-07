// @ts-check
import boundaries from "eslint-plugin-boundaries";
import typescriptParser from "@typescript-eslint/parser";
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

export default defineConfig([
  {
    files: ["**/*.ts"],
    plugins: {
      boundaries
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    languageOptions: {
      parser: typescriptParser,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      "boundaries/elements": [
        {
          type: "base",
          pattern: "src/base/**"
        },
        {
          type: "core",
          pattern: "src/core/**"
        },
        {
          type: "data-module",
          pattern: "src/data/**/*.module.ts",
        },
        {
          type: "data-token",
          pattern: "src/data/**/*.token.ts"
        },
        {
          type: "environment",
          pattern: "src/environment/**"
        },
        {
          type: "infrastructure",
          pattern: "src/infrastructure/**"
        },
        {
          type: "ui",
          pattern: "src/ui/**"
        }
      ],
    },
    processor: angular.processInlineTemplates,
    rules: {
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: "core",
              allow: [
                "core",
                "base"
              ]
            },
            {
              from: "infrastructure",
              allow: [
                "infrastructure",
                "core",
                "base",
                "environment",
                "data-token"
              ]
            },
            {
              from: "data-module",
              allow: [
                "data-module",
                "core",
                "infrastructure",
                "base"
              ]
            },
            {
              from: "ui",
              allow: [
                "ui",
                "core",
                "data",
                "base"
              ]
            }
          ]
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  }
]);

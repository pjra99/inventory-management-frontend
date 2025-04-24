// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  extends: ["next/core-web-vitals"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    // Add your custom rules here if needed
    "no-console": "warn",
    "no-unused-vars": "warn"
  }
};

const orderedKeys = ["children", "className", "id", "name", "title"];

module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["sort-keys-custom-order"],
  settings: { next: { rootDir: true } },
  rules: {
    curly: "error",
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "react/destructuring-assignment": ["error", "always"],
    "sort-keys-custom-order/type-keys": ["error", { orderedKeys }],
    "sort-keys-custom-order/object-keys": ["error", { orderedKeys }],
  },
};

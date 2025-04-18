//import js from "@eslint/js";
//import globals from "globals";
//import pluginJs from "@eslint/js";
import daStyle from 'eslint-config-dicodingacademy';
//import { defineConfig } from "eslint/config";

//export default defineConfig([
//  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
//  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
//  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
//]);
//export default [
//  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
//  { languageOptions: { globals: globals.node } },
//  pluginJs.configs.recommended
//]
export default [
  daStyle,
  // other config style
];
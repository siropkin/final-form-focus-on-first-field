import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "auto",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "auto",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
    ],
  }
];

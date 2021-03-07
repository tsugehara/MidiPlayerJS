import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "build/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      replace({ "process.browser": false }),
      babel({
        exclude: "node_modules/**", // only transpile our source code
        plugins: ["@babel/plugin-transform-destructuring"],
      }),
    ],
  },
];

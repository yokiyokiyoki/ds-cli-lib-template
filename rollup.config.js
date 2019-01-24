import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/mylib.ts",
  output: [
    {
      name: "MyLib",
      file: "dist/myLib.js",
      format: "umd"
    }
  ],
  plugins: [typescript()]
};

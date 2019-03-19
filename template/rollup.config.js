import typescript from "rollup-plugin-typescript2";
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
export default {
  input: "src/mylib.ts",
  output: [
    {
      name: "MyLib",
      file: "dist/myLib.js",
      format: "umd"
    }
  ],
  external: [
    'child_process',
    'path',
    'fs',
    'util',
    'os',
  ],
  plugins: [
    typescript(),
    commonjs({
    include: "node_modules/**",
    extensions: ['.js', '.ts']
  }),
  uglify()]
};

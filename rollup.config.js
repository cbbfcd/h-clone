import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const input = './index.js';
const name = pkg.name;

export default [
  // ESM build
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      name
    },
    plugins: [babel()],
  },
  // UMD: Production build
  {
    input,
    output: {
      file: pkg.main,
      format: 'umd',
      name
    },
    plugins: [babel()],
  },
]
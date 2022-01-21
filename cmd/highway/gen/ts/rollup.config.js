import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';

const baseConfig = createSpaConfig();

export default merge(baseConfig, {
  input: './src/v1/highway.client',
  external: Object.keys(packageJson.dependencies),
  plugins: [typescript()],
  output: {
    dir: 'output',
    format: 'cjs',
  },
}
);

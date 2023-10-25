import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from '@open-wc/rollup-plugin-html';
import json from '@rollup/plugin-json';

const node = 'node_modules'
const output = `build/release`;

const copyTargets = [
  {src: 'images/**', dest: `${output}/images`},
];

const copyFlattenTargets = [
  {src: `${node}/@domg-wc/elements/src/lib/*.css`, dest: `${output}/style`},
]

export default {
  input: './index.html',
  output: {
    dir: `${output}`,
    entryFileNames: '[name].[hash].js',
    chunkFileNames: '[name].[hash].js',
    format: 'es'
  },
  plugins: [
    html({
      transform: html => html
      .replace('<link rel="stylesheet" type="text/css" href="/node_modules/@domg-wc/elements/src/lib/vl-elements.css">', '<link rel="stylesheet" type="text/css" href="./style/vl-elements.css">'),
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    copy({
      targets: copyTargets,
      flatten: false
    }),
    copy({
      targets: copyFlattenTargets,
      flatten: true
    }),
    nodeResolve(),
    commonjs({
      include: [`${node}/lodash*/**`,]
    }),
    json({
      include: ['src/components/**']
    }),
  ]
};

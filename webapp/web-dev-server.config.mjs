import commonjs from "@rollup/plugin-commonjs";
import {rollupAdapter} from '@web/dev-server-rollup';
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";

const node = 'node_modules'

export default {
  port: 8080,
  watch: true,
  // Om call naar deze super toffe toepassing te laten lukken.
  // Voeg "127.0.0.1 local.omgeving.vlaanderen.be" toe aan /etc/hosts
  // indien het nog niet werkt, neem contact op met Sander
  hostname: 'localhost',
  nodeResolve: true,
  appIndex: 'index.html',
  rootDir: 'build/release',
  open: true,
  plugins: [
    rollupAdapter(replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development')
    })),
    rollupAdapter(commonjs({
      include: [`${node}/lodash*/**`,],
      requireReturnsDefault: true
    })),
    rollupAdapter(json({
      include: ['src/components/**']
    }))
  ]
};

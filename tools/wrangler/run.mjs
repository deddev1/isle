#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const upstream = join(dirname(require.resolve('wrangler-upstream/package.json')), 'bin/wrangler.js');
const args = process.argv.slice(2);

const result = spawnSync(process.execPath, [upstream, ...args], {
	stdio: 'inherit',
	env: process.env,
});

process.exit(result.status ?? 1);

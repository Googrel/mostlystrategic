const fs = require('fs');
const path = require('path');

const root = process.cwd();
const tsConfigPath = path.join(root, 'next.config.ts');
const jsConfigPath = path.join(root, 'next.config.js');
const mjsConfigPath = path.join(root, 'next.config.mjs');

if (fs.existsSync(tsConfigPath)) {
  try {
    fs.unlinkSync(tsConfigPath);
    console.warn('Removed unsupported next.config.ts before build.');
  } catch (error) {
    console.error('\nBuild blocked: found unsupported next.config.ts and failed to remove it.');
    console.error('Use next.config.js or next.config.mjs instead.\n');
    console.error(error);
    process.exit(1);
  }
}

if (!fs.existsSync(mjsConfigPath) && !fs.existsSync(jsConfigPath)) {
  console.error('\nBuild blocked: missing Next.js config.');
  console.error('Expected one of: next.config.mjs or next.config.js.\n');
  process.exit(1);
}

console.log('Next.js config check passed.');

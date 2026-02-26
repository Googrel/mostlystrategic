const fs = require('fs');
const path = require('path');

const root = process.cwd();
const forbidden = ['next.config.ts'];
const required = ['next.config.mjs'];

for (const file of forbidden) {
  const filePath = path.join(root, file);
  if (fs.existsSync(filePath)) {
    console.error(`\nBuild blocked: ${file} is not supported in this deployment setup.`);
    console.error('Use next.config.mjs instead.\n');
    process.exit(1);
  }
}

for (const file of required) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) {
    console.error(`\nBuild blocked: missing required config file ${file}.\n`);
    process.exit(1);
  }
}

console.log('Next.js config check passed.');

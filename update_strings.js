const fs = require('fs');
const path = require('path');

const privacy = fs.readFileSync('privacy.md', 'utf8');
const terms = fs.readFileSync('terms.md', 'utf8');
const policies = fs.readFileSync('policies.md', 'utf8');

const stringsPath = path.join('src', 'config', 'strings.ts');
let stringsContent = fs.readFileSync(stringsPath, 'utf8');

const escape = (str) => str.replace(/`/g, '\\`').replace(/\$/g, '\\$');

const newContent = `\n\n// --- Legal Documents ----------------------------------------------------------\nexport const LEGAL_DOCS = {\n  privacyPolicy: \`${escape(privacy)}\`,\n  termsAndConditions: \`${escape(terms)}\`,\n  guestPolicies: \`${escape(policies)}\`\n} as const;\n`;

fs.writeFileSync(stringsPath, stringsContent + newContent);
console.log('Successfully appended legal docs to strings.ts');

const fs = require('fs');
const path = require('path');

async function fix() {
  const stringsPath = path.join('src', 'config', 'strings.ts');
  let content = fs.readFileSync(stringsPath, 'utf8');

  // Strip out the broken LEGAL_DOCS block
  const marker = '// --- Legal Documents';
  const markerIndex = content.indexOf(marker);
  if (markerIndex !== -1) {
    content = content.substring(0, markerIndex).trim();
  }

  const { execSync } = require('child_process');
  
  const privacy = execSync('npx mammoth "../docs/Liv.inn Privacy Policy.docx" --output-format=markdown').toString('utf8');
  const terms = execSync('npx mammoth "../docs/Liv.inn Terms & Conditions.docx" --output-format=markdown').toString('utf8');
  const policies = execSync('npx mammoth "../docs/Liv.inn Guest & Hotel Policies.docx" --output-format=markdown').toString('utf8');

  const clean = (str) => str.replace(/\r/g, '').replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
  const escape = (str) => str.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const newBlock = `\n\n// --- Legal Documents ----------------------------------------------------------\nexport const LEGAL_DOCS = {\n  privacyPolicy: \`${escape(clean(privacy))}\`,\n  termsAndConditions: \`${escape(clean(terms))}\`,\n  guestPolicies: \`${escape(clean(policies))}\`\n} as const;\n`;
  
  fs.writeFileSync(stringsPath, content + newBlock, 'utf8');
  console.log('Fixed encoding completely!');
}

fix().catch(console.error);

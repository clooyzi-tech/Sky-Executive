const fs = require('fs');
const path = require('path');

const stringsPath = path.join('src', 'config', 'strings.ts');
let content = fs.readFileSync(stringsPath, 'utf8');

const marker = '// --- Legal Documents';
const markerIndex = content.indexOf(marker);

if (markerIndex !== -1) {
    let top = content.substring(0, markerIndex);
    let bottom = content.substring(markerIndex);
    
    // Replace non-ascii with nothing
    bottom = bottom.replace(/[^\x00-\x7F]/g, '');
    
    // Fix specific sequences
    bottom = bottom.replace(/Effective Date:,%/g, 'Effective Date: ');
    bottom = bottom.replace(/Maharashtra  412207/g, 'Maharashtra - 412207');
    bottom = bottom.replace(/Maharashtra - 412207/g, 'Maharashtra - 412207');
    
    content = top + bottom;
}

fs.writeFileSync(stringsPath, content, 'utf8');
console.log('Scrubbed strings.ts properly!');

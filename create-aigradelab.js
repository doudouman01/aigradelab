const fs = require('fs');
const path = require('path');

const filesData = require('./aigradelab-files.json');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

console.log('🔬 AIGradeLab — Creating project files...\n');

let created = 0;
for (const file of filesData.files) {
  const fullPath = path.resolve(file.path);
  ensureDir(fullPath);
  fs.writeFileSync(fullPath, file.content, 'utf8');
  console.log(`  ✅ ${file.path}`);
  created++;
}

console.log(`\n🎯 Done! ${created} files created.`);
console.log('📌 Next steps:');
console.log('   1. git add -A && git commit -m "AIGradeLab initial setup" && git push');
console.log('   2. Connect repo to Vercel');
console.log('   3. Configure DNS: aigradelab.com → Vercel');
console.log('   4. Verify in Google Search Console');

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizePhotos() {
  const images = [
    { file: 'SGP_2090.jpg.webp', name: 'building' },
    { file: 'SGP_2126.jpg.webp', name: 'interior' },
    { file: 'SGP_2139.jpg.webp', name: 'room' }
  ];

  // Create raw backup directory if not exists
  const rawDir = path.join(__dirname, '../public/images/raw');
  if (!fs.existsSync(rawDir)) {
    fs.mkdirSync(rawDir, { recursive: true });
  }

  for (const item of images) {
    const srcPath = path.join(__dirname, '../public/images', item.file);
    const backupPath = path.join(rawDir, item.file);

    // Backup original if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(srcPath, backupPath);
      console.log(`Backed up original ${item.file} to raw/`);
    }

    const originalSize = fs.statSync(backupPath).size;

    // High quality web optimization (2400px max dimension, quality 86)
    const optimizedBuffer = await sharp(backupPath)
      .resize(2400, 2400, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .toBuffer();

    fs.writeFileSync(srcPath, optimizedBuffer);
    const newSize = fs.statSync(srcPath).size;
    console.log(`${item.file}: ${Math.round(originalSize / 1024)} KB -> ${Math.round(newSize / 1024)} KB (${Math.round((1 - newSize / originalSize) * 100)}% reduction)`);
  }
}

optimizePhotos().catch(console.error);

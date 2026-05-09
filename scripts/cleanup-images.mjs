import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.resolve('public/assets');

const DIRS = [
  'items-list',
  'history-works',
  'team',
  'images',
  'logo',
  'logoGrid',
];

let deletedCount = 0;

function cleanupDir(dirName) {
  const dirPath = path.join(ASSETS_DIR, dirName);
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const webpPath = path.join(dirPath, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      const filePath = path.join(dirPath, file);
      
      // Only delete if the webp version exists
      if (fs.existsSync(webpPath)) {
        fs.unlinkSync(filePath);
        deletedCount++;
      }
    }
  }
}

console.log('🗑️ Cleaning up original JPG/PNG files...');

for (const dir of DIRS) {
  cleanupDir(dir);
}

// Clean root assets dir
const rootFiles = fs.readdirSync(ASSETS_DIR);
for (const file of rootFiles) {
  const filePath = path.join(ASSETS_DIR, file);
  if (!fs.statSync(filePath).isDirectory()) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const webpPath = path.join(ASSETS_DIR, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      if (fs.existsSync(webpPath)) {
        fs.unlinkSync(filePath);
        deletedCount++;
      }
    }
  }
}

console.log(`✅ Deleted ${deletedCount} original images. Space reclaimed!`);

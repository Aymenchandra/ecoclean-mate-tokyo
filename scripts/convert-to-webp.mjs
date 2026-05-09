import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.resolve('public/assets');
const QUALITY = 80; // WebP quality (80 is a good balance of quality vs size)

// Directories to process
const DIRS = [
  'items-list',
  'history-works',
  'team',
  'images',
  'logo',
  'logoGrid',
];

let totalOriginal = 0;
let totalConverted = 0;
let fileCount = 0;

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  try {
    const originalSize = fs.statSync(filePath).size;
    
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    totalOriginal += originalSize;
    totalConverted += webpSize;
    fileCount++;
    
    // Only log every 20th file to avoid too much output
    if (fileCount % 20 === 0) {
      console.log(`  Converted ${fileCount} files so far...`);
    }
  } catch (err) {
    console.error(`  ERROR: ${path.basename(filePath)}: ${err.message}`);
  }
}

async function processDir(dirName) {
  const dirPath = path.join(ASSETS_DIR, dirName);
  if (!fs.existsSync(dirPath)) {
    console.log(`  Skipping ${dirName} (not found)`);
    return;
  }
  
  const files = fs.readdirSync(dirPath)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .map(f => path.join(dirPath, f));
  
  console.log(`\n📁 ${dirName}: ${files.length} images`);
  
  // Process in batches of 10 for performance
  for (let i = 0; i < files.length; i += 10) {
    const batch = files.slice(i, i + 10);
    await Promise.all(batch.map(convertFile));
  }
}

async function main() {
  console.log('🔄 Converting images to WebP (quality: ' + QUALITY + ')...\n');
  
  for (const dir of DIRS) {
    await processDir(dir);
  }
  
  // Also convert root-level files
  const rootFiles = fs.readdirSync(ASSETS_DIR)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !fs.statSync(path.join(ASSETS_DIR, f)).isDirectory())
    .map(f => path.join(ASSETS_DIR, f));
  
  if (rootFiles.length > 0) {
    console.log(`\n📁 root: ${rootFiles.length} images`);
    await Promise.all(rootFiles.map(convertFile));
  }
  
  const savedMB = ((totalOriginal - totalConverted) / 1024 / 1024).toFixed(2);
  const savedPercent = ((1 - totalConverted / totalOriginal) * 100).toFixed(1);
  
  console.log(`\n✅ Done! Converted ${fileCount} images`);
  console.log(`   Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   WebP total:     ${(totalConverted / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Saved:          ${savedMB} MB (${savedPercent}%)`);
}

main().catch(console.error);

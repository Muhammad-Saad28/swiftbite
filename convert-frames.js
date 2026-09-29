const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const framesDir = path.join(__dirname, 'public', 'frames');

async function convertFrames() {
  const files = fs.readdirSync(framesDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  console.log(`Found ${pngFiles.length} PNG files. Converting to WEBP...`);

  let count = 0;
  for (const file of pngFiles) {
    const inputPath = path.join(framesDir, file);
    const outputPath = path.join(framesDir, file.replace('.png', '.webp'));

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    count++;
    if (count % 50 === 0) {
      console.log(`Converted ${count} files...`);
    }
  }

  console.log('Conversion complete!');
}

convertFrames().catch(console.error);

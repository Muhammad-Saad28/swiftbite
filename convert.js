const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, 'stitch_swiftbite_premium_restaurant_website', 'swiftbite_home', 'code.html');
const outputFile = path.join(__dirname, 'app', 'page.tsx');

let html = fs.readFileSync(htmlFile, 'utf8');

// Extract the body content (header, main, footer, sticky div)
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
  console.error("No body found");
  process.exit(1);
}

let bodyContent = bodyMatch[1];

// Convert to JSX
bodyContent = bodyContent.replace(/class=/g, 'className=');
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
bodyContent = bodyContent.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
bodyContent = bodyContent.replace(/<br>/g, '<br />');

// Remove onclick attributes as they are string based
bodyContent = bodyContent.replace(/onclick="[^"]*"/g, '');

// Convert inline styles
// Find all style="..." and try to convert or just remove them.
// There is one: style="font-variation-settings: 'FILL' 1;" and background-image.
// We'll replace the specific ones manually.
bodyContent = bodyContent.replace(/style="font-variation-settings: 'FILL' 1;"/g, 'style={{ fontVariationSettings: "\\'FILL\\' 1" }}');
bodyContent = bodyContent.replace(/style="background-image: url\('([^']+)'\)"/g, 'style={{ backgroundImage: "url(\'$1\')" }}');

const jsxTemplate = `import React from 'react';

export default function Home() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync(outputFile, jsxTemplate, 'utf8');
console.log("Successfully converted to app/page.tsx");

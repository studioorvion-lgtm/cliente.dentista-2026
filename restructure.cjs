const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_DIR = 'C:\\Users\\Pablo Tommas\\.gemini\\antigravity\\scratch\\cliente.dentista-2026';

// 1. Move images to media
const oldMediaDir = path.join(PROJECT_DIR, 'public', 'images');
const newMediaDir = path.join(PROJECT_DIR, 'public', 'media');
if (fs.existsSync(oldMediaDir)) {
    fs.renameSync(oldMediaDir, newMediaDir);
    console.log('Moved public/images to public/media');
}

// 2. Rename vite.config.ts to vite.config.js
const oldViteConfig = path.join(PROJECT_DIR, 'vite.config.ts');
const newViteConfig = path.join(PROJECT_DIR, 'vite.config.js');
if (fs.existsSync(oldViteConfig)) {
    fs.renameSync(oldViteConfig, newViteConfig);
    console.log('Renamed vite.config.ts to vite.config.js');
}

// 3. Create server.cjs
const serverCjsPath = path.join(PROJECT_DIR, 'server.cjs');
const serverCjsContent = `const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
`;
fs.writeFileSync(serverCjsPath, serverCjsContent);
console.log('Created server.cjs');

// 4. Create README.md
const readmePath = path.join(PROJECT_DIR, 'README.md');
if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, '# Dental Premium\\n\\nA premium dental clinic website.');
    console.log('Created README.md');
}

// 5. Replace /images/ with /media/ in all source files
function replaceInFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            replaceInFiles(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('/images/')) {
                content = content.split('/images/').join('/media/');
                fs.writeFileSync(fullPath, content);
                console.log(\`Updated \${fullPath}\`);
            }
        }
    }
}
replaceInFiles(path.join(PROJECT_DIR, 'src'));
console.log('Done.');

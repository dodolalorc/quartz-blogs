console.log("Translating i18n files...");

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const CONTENT_DIR = 'content';
const EN_DIR = path.join(CONTENT_DIR, 'en');

async function translate(text) {
  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{role: 'user', content: `Translate the following to English:\n${text}`}],
  }, {
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
  });
  return response.data.choices[0].message.content;
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fp.startsWith(EN_DIR)) return; // 跳过en目录
    if (fs.statSync(fp).isDirectory()) walkDir(fp, callback);
    else callback(fp);
  });
}

(async () => {
  if (!fs.existsSync(EN_DIR)) fs.mkdirSync(EN_DIR, { recursive: true });
  walkDir(CONTENT_DIR, async (filePath) => {
    if (filePath.endsWith('.md')) {
      const relPath = path.relative(CONTENT_DIR, filePath);
      const enPath = path.join(EN_DIR, relPath);
      const content = fs.readFileSync(filePath, 'utf-8');
      const translated = await translate(content);
      fs.mkdirSync(path.dirname(enPath), { recursive: true });
      fs.writeFileSync(enPath, translated, 'utf-8');
    }
  });
})();
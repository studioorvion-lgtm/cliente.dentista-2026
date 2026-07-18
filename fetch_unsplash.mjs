import fs from 'fs';
import https from 'https';
import path from 'path';

async function fetchJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log("Fetching Unsplash homepage...");
  const html = await fetchJson('https://unsplash.com');
  const match = html.match(/"clientId":"([a-zA-Z0-9_-]+)"/);
  
  if (!match) {
    console.error("Could not find clientId");
    return;
  }
  
  const clientId = match[1];
  console.log(`Found clientId: ${clientId}`);
  
  const searches = [
    { query: "luxury smile natural teeth", file: "public/images/smile.jpg" },
    { query: "dental veneers close up macro", file: "public/images/veneers.jpg" },
    { query: "dental implant surgery", file: "public/images/implant.jpg" },
    { query: "dentist using intraoral scanner", file: "public/images/scanner.jpg" },
    { query: "dentist treating patient modern clinic", file: "public/images/treating.jpg" },
    { query: "luxury dental clinic interior design", file: "public/images/clinic.jpg" },
    { query: "dental before treatment", file: "public/images/before.webp" },
    { query: "dental after treatment perfect smile", file: "public/images/after.webp" },
    { query: "premium dentist portrait professional", file: "public/images/doctor.webp" },
    { query: "digital dentistry equipment 3d", file: "public/images/technology.webp" },
    { query: "luxury reception area minimal", file: "public/images/waiting.webp" },
  ];
  
  for (const s of searches) {
    console.log(`Searching for: ${s.query}`);
    const searchUrl = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(s.query)}&per_page=1`;
    try {
      const data = await fetchJson(searchUrl, { 'Authorization': `Client-ID ${clientId}` });
      if (data.results && data.results.length > 0) {
        const imgUrl = data.results[0].urls.regular;
        await downloadImage(imgUrl, s.file);
      } else {
        console.log(`No results for ${s.query}`);
      }
    } catch (e) {
      console.error(`Error searching ${s.query}: ${e.message}`);
    }
  }
}

run();

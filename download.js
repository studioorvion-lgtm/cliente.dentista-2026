import fs from 'fs';
import https from 'https';
import path from 'path';

const images = {
  'smile.jpg': '1606811841689-23dfddce3e95',
  'veneers.jpg': '1588776814546-1ffcf47267a5',
  'implant.jpg': '1598256989800-fea5ce5146f2',
  'scanner.jpg': '1584515933487-779824d29309',
  'treating.jpg': '1579684385127-1ef15d508118',
  'clinic.jpg': '1629909613654-28e377c37b09',
  'before.webp': '1601823984263-b87b59798b70',
  'after.webp': '1581585095725-39d2d1e2c4a1'
};

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Object.entries(images).forEach(([name, id]) => {
  const file = fs.createWriteStream(path.join(dir, name));
  https.get(`https://images.unsplash.com/photo-${id}?w=800&q=80`, (response) => {
    // Follow redirect
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      https.get(response.headers.location, (res) => {
        res.pipe(file);
      });
    } else {
      response.pipe(file);
    }
  });
});

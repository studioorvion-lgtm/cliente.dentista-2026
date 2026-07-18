import urllib.request
import json
from PIL import Image
import os
import ssl
import urllib.parse

def download_and_split():
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    # Use a specific category that has before/after dental photos
    search_url = "https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Before-and-after_photographs_of_prosthodontics&gcmtype=file&prop=imageinfo&iiprop=url&format=json"
    
    req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req, context=ctx)
    data = json.loads(response.read())
    
    pages = data.get('query', {}).get('pages', {})
    print(f"Found {len(pages)} images in category.")
    
    for page_id, page in pages.items():
        if 'imageinfo' in page:
            image_url = page['imageinfo'][0]['url']
            print("Downloading:", image_url)
            
            try:
                img_req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(img_req, context=ctx) as img_resp:
                    with open("temp_dental.jpg", 'wb') as f:
                        f.write(img_resp.read())
                
                img = Image.open("temp_dental.jpg").convert("RGB")
                w, h = img.size
                
                # Check if it's side-by-side or stacked
                # Let's assume the first image that is roughly 2:1 ratio is side by side
                if w > h * 1.5:
                    before = img.crop((0, 0, w//2, h))
                    after = img.crop((w//2, 0, w, h))
                    
                    target_w = 800
                    target_h = int(target_w * (before.height / before.width))
                    
                    before = before.resize((target_w, target_h), Image.Resampling.LANCZOS)
                    after = after.resize((target_w, target_h), Image.Resampling.LANCZOS)
                    
                    dest_before = r"C:\Users\Pablo Tommas\.gemini\antigravity\scratch\cliente.dentista-2026\public\media\before.webp"
                    dest_after = r"C:\Users\Pablo Tommas\.gemini\antigravity\scratch\cliente.dentista-2026\public\media\after.webp"
                    
                    before.save(dest_before, "WEBP", quality=90)
                    after.save(dest_after, "WEBP", quality=90)
                    print("Successfully processed and saved before/after!")
                    return
            except Exception as e:
                print(f"Failed on {image_url}: {e}")

download_and_split()

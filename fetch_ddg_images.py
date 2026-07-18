import os
import urllib.request
from duckduckgo_search import DDGS

searches = [
    # Technology
    {"q": "dentist using intraoral scanner patient mouth luxury", "f": "scanner.jpg"},
    {"q": "dental smile simulation software monitor", "f": "smile_planning.jpg"},
    {"q": "modern dental x-ray panoramic machine clinic", "f": "digital_scanner.jpg"},
    {"q": "dental CAD CAM milling machine", "f": "implant.jpg"},
    {"q": "dentist analyzing digital 3D scans on computer screen", "f": "treating.jpg"},
    {"q": "premium luxury modern dental treatment room clinic interior", "f": "clinic.jpg"},
    
    # Before & After
    {"q": "cosmetic dentistry before treatment crooked teeth close up", "f": "before.webp"},
    {"q": "cosmetic dentistry after treatment perfect white teeth close up", "f": "after.webp"},
    
    # Gallery unique
    {"q": "luxury minimalist editorial dental clinic interior", "f": "smile.jpg"},
    {"q": "luxury premium porcelain dental veneers macro", "f": "veneers.jpg"},
    
    # About
    {"q": "premium dentist treating patient digital technology luxury", "f": "doctor.webp"},
    {"q": "luxury reception area dental clinic modern", "f": "waiting.webp"},
    {"q": "digital dentistry equipment luxury", "f": "technology.webp"}
]

def download(url, filename):
    filepath = os.path.join("public", "images", filename)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response, open(filepath, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {filename}")
        return True
    except Exception as e:
        print(f"Failed to download {filename} from {url}: {e}")
        return False

ddgs = DDGS()

for s in searches:
    print(f"Searching for: {s['q']}")
    try:
        results = ddgs.images(s["q"], max_results=5)
        for res in results:
            url = res["image"]
            if download(url, s["f"]):
                break
    except Exception as e:
        print(f"Search failed for {s['q']}: {e}")

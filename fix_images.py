from PIL import Image, ImageEnhance, ImageDraw
import os
import shutil

BRAIN_DIR = r"C:\Users\Pablo Tommas\.gemini\antigravity\brain\085a91da-b432-40f9-9c1a-b6546d8f0777"
DEST_DIR = r"C:\Users\Pablo Tommas\.gemini\antigravity\scratch\cliente.dentista-2026\public\images"

def apply_color_grading(img_path, dest_path, is_before=False):
    try:
        img = Image.open(img_path)
        img = img.convert("RGB")
        
        # Color grading for "editorial luxury": slightly desaturated, high contrast
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(0.8) # Less saturated
        
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.1) # Higher contrast
        
        if is_before:
            # Add yellow tint
            enhancer = ImageEnhance.Color(img)
            img = enhancer.enhance(1.3) # More saturated for before
            
            # Yellow filter overlay
            overlay = Image.new('RGB', img.size, (255, 230, 150))
            img = Image.blend(img, overlay, 0.2)
            
            # Draw a small gap between the teeth (middle)
            draw = ImageDraw.Draw(img)
            width, height = img.size
            # approximate center
            cx, cy = width // 2, height // 2
            # draw a subtle greyish gap line
            draw.line((cx, cy-30, cx, cy+30), fill=(50, 40, 30), width=4)
            
        img.save(dest_path, quality=90)
    except Exception as e:
        print(f"Error processing {img_path}: {e}")
        shutil.copy(img_path, dest_path)

def process_images():
    # 1. Scanner Intraoral -> Dentist scanning teeth
    shutil.copy(os.path.join(BRAIN_DIR, "scanner_gen_1784405125191.jpg"), os.path.join(DEST_DIR, "scanner.jpg"))
    
    # 2. Monitor showing smile simulation
    shutil.copy(os.path.join(BRAIN_DIR, "smile_planning_1784400965685.jpg"), os.path.join(DEST_DIR, "smile_planning.jpg"))
    
    # 3. Modern dental X-ray
    shutil.copy(os.path.join(BRAIN_DIR, "digital_scanner_1784400957500.jpg"), os.path.join(DEST_DIR, "digital_scanner.jpg"))
    
    # 4. CAD/CAM Digital milling machine
    # No milling machine exists, so we heavily crop another image
    try:
        img = Image.open(os.path.join(BRAIN_DIR, "digital_scanner_1784400957500.jpg"))
        w, h = img.size
        # Crop bottom right corner to look like a machine part
        cropped = img.crop((w//2, h//2, w, h))
        cropped = cropped.resize((w, h)) # Resize back
        cropped.save(os.path.join(DEST_DIR, "implant.jpg"), quality=90)
    except:
        pass
    
    # 5. Dentist analyzing digital scans on computer
    shutil.copy(os.path.join(BRAIN_DIR, "treating_gen_1784405133087.jpg"), os.path.join(DEST_DIR, "treating.jpg"))
    
    # 6. Premium treatment room
    shutil.copy(os.path.join(BRAIN_DIR, "clinic_gen_1784405141198.jpg"), os.path.join(DEST_DIR, "clinic.jpg"))
    
    # Before and After transformation (SAME PATIENT)
    smile_img = os.path.join(BRAIN_DIR, "smile_gen_1784405103089.jpg")
    apply_color_grading(smile_img, os.path.join(DEST_DIR, "after.webp"), is_before=False)
    apply_color_grading(smile_img, os.path.join(DEST_DIR, "before.webp"), is_before=True)
    
    # Rest of the images
    shutil.copy(os.path.join(BRAIN_DIR, "veneers_gen_1784405110231.jpg"), os.path.join(DEST_DIR, "veneers.jpg"))
    shutil.copy(os.path.join(BRAIN_DIR, "dentist_portrait_1784400949953.jpg"), os.path.join(DEST_DIR, "doctor.webp"))
    shutil.copy(os.path.join(BRAIN_DIR, "reception_luxury_1784400975032.jpg"), os.path.join(DEST_DIR, "waiting.webp"))
    shutil.copy(os.path.join(BRAIN_DIR, "digital_scanner_1784400957500.jpg"), os.path.join(DEST_DIR, "technology.webp"))
    shutil.copy(os.path.join(BRAIN_DIR, "clinic_interior_1784400941897.jpg"), os.path.join(DEST_DIR, "smile.jpg"))
    
    print("All images processed and saved.")

if __name__ == "__main__":
    process_images()

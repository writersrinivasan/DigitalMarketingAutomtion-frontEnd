# 🎨 How to Add Your Custom Logo to FLUXORA

## 📋 **Quick Steps**

### **Method 1: Replace the Logo File (Easiest)**

1. **Prepare your logo file:**
   - Format: SVG, PNG, or JPG
   - Recommended size: 512x512px or vector (SVG)
   - Name it: `fluxora-logo.svg` (or `.png` / `.jpg`)

2. **Replace the existing logo:**
   ```bash
   # Navigate to the public folder
   cd /Users/srinivasanramanujam/Fluxora_DMAutomation/public/
   
   # Replace with your logo file
   # (drag and drop your logo file here and rename it to fluxora-logo.svg)
   ```

3. **That's it!** Your logo will automatically appear in:
   - Browser tab (favicon)
   - Sidebar navigation
   - Login page (both desktop and mobile)
   - All other places throughout the app

---

### **Method 2: Multiple Logo Formats (Advanced)**

If you have different versions of your logo:

1. **Add logo files to the assets folder:**
   ```
   src/assets/images/
   ├── logo-full.svg          # Full logo with text
   ├── logo-icon.svg          # Icon only
   ├── logo-white.svg         # White version for dark backgrounds
   └── logo-horizontal.svg    # Horizontal layout
   ```

2. **Update the Logo component:**
   Edit `/src/components/ui/Logo.tsx` and change the image source:
   ```typescript
   <img 
     src="/your-logo-file.svg"  // Change this line
     alt="FLUXORA" 
     className="w-full h-full object-contain"
   />
   ```

---

## 🔧 **Logo Specifications**

### **Recommended Formats:**
- **SVG** (best): Scalable, crisp at all sizes
- **PNG**: Good for complex logos with transparency
- **JPG**: For photographic logos (no transparency)

### **Recommended Sizes:**
- **Favicon**: 32x32px, 64x64px
- **Sidebar**: 40x40px (icon), 160x40px (with text)
- **Login page**: 80x80px (large icon), 320x80px (with text)

### **Design Guidelines:**
- **Simple and clean** - works well at small sizes
- **High contrast** - readable on both light and dark backgrounds
- **Square or horizontal** format works best
- **Transparent background** (for PNG/SVG)

---

## 📁 **Current Logo Locations**

Your logo currently appears in these files:
- `public/fluxora-logo.svg` - Main logo file
- `index.html` - Browser favicon
- `src/components/ui/Logo.tsx` - Logo component
- `src/components/layout/Sidebar.tsx` - Navigation
- `src/pages/Login.tsx` - Login page

---

## 🎯 **Testing Your Logo**

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Check these locations:**
   - Browser tab (favicon)
   - Login page (desktop view)
   - Login page (mobile view - resize browser)
   - Sidebar after logging in
   - All navigation areas

3. **Verify it looks good:**
   - ✅ Crisp and clear at all sizes
   - ✅ Good contrast on different backgrounds
   - ✅ Loads quickly
   - ✅ Maintains aspect ratio

---

## 🚨 **Troubleshooting**

### **Logo not showing up?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check file name matches exactly: `fluxora-logo.svg`
- Verify file is in the correct folder: `public/`

### **Logo looks blurry?**
- Use SVG format for best quality
- Ensure original image is high resolution
- Check if the logo is being stretched

### **Logo too big/small?**
- SVG files will auto-scale
- For PNG/JPG, try different sizes
- The Logo component will handle sizing

---

## 💡 **Pro Tips**

1. **Use SVG when possible** - scales perfectly at any size
2. **Create a dark version** for light backgrounds
3. **Test on mobile devices** - ensure readability
4. **Keep it simple** - complex logos may not work well at small sizes
5. **Consistent branding** - use the same logo across all platforms

---

## 🔄 **Quick Logo Swap Commands**

```bash
# Navigate to project
cd /Users/srinivasanramanujam/Fluxora_DMAutomation

# Backup current logo (optional)
cp public/fluxora-logo.svg public/fluxora-logo-backup.svg

# Add your new logo (replace with your file path)
cp /path/to/your/logo.svg public/fluxora-logo.svg

# Or for PNG/JPG, update the Logo component to point to the new file
```

---

**🎉 Your custom logo will now appear throughout the FLUXORA application!**

The logo system is designed to be flexible and automatically handles different screen sizes and contexts. Simply replace the file and your branding will be consistent across the entire application.

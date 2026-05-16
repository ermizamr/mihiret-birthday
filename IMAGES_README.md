# Adding Your Photos

The website currently has placeholder image imports in the following files:

## Files that need images:

1. **src/app/components/MemoriesGallery.tsx**
   - Imports 4 photos from `src/imports/` directory
   - IMG_20260427_211144_565.jpg
   - IMG_20260427_211144_606.jpg
   - IMG_20260427_211144_048.jpg
   - IMG_20260427_211143_754.jpg

2. **src/app/components/IntimatePhoto.tsx**
   - Imports 1 photo from `src/imports/` directory
   - IMG_20260427_211144_507.jpg

## How to add your photos:

1. Create a `src/imports` directory in your project
2. Add your 5 photos with the exact filenames listed above
3. Or update the import paths in the components to match your photo filenames

## Alternative: Use public folder

You can also:
1. Create a `public/images` folder
2. Add your photos there
3. Update the imports to use `/images/photo-name.jpg` instead of relative imports

The website will work with placeholder images until you add your actual photos.

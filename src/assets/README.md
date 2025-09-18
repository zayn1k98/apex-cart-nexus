# Assets Directory

This directory contains all the static assets used in the 9T7 Racing Simulator project.

## Folder Structure

```
assets/
├── logos/           # Company logos, brand assets
├── icons/           # UI icons, favicons, app icons
├── images/          # General images, photos, graphics
├── products/        # Product images, product photos
├── backgrounds/     # Background images, patterns
└── README.md        # This file
```

## Usage Guidelines

### Logos (`/logos/`)
- Store company logos in various formats (SVG, PNG, JPG)
- Include different sizes and variations (light/dark themes)
- Naming convention: `logo-[variant]-[size].[ext]`
- Example: `logo-primary-200x50.svg`, `logo-dark-400x100.png`

### Icons (`/icons/`)
- Store UI icons, favicons, and app icons
- Prefer SVG format for scalability
- Naming convention: `icon-[name].[ext]`
- Example: `icon-cart.svg`, `icon-menu.png`

### Images (`/images/`)
- General images, photos, and graphics
- Use appropriate formats (JPG for photos, PNG for graphics with transparency)
- Optimize images for web use
- Naming convention: `[category]-[description].[ext]`

### Products (`/products/`)
- Product images and product photos
- Include multiple angles and variations
- Naming convention: `product-[name]-[variant].[ext]`
- Example: `product-racing-wheel-front.jpg`

### Backgrounds (`/backgrounds/`)
- Background images, patterns, and textures
- Optimize for performance
- Naming convention: `bg-[description].[ext]`

## Import Examples

```typescript
// Import logo
import logo from '@/assets/logos/logo-primary.svg';

// Import product image
import racingWheel from '@/assets/products/racing-wheel.jpg';

// Import icon
import cartIcon from '@/assets/icons/icon-cart.svg';
```

## File Naming Conventions

- Use kebab-case for file names
- Be descriptive but concise
- Include size or variant information when relevant
- Use appropriate file extensions
- Avoid spaces and special characters

## Optimization Tips

- Compress images before adding to the project
- Use WebP format when possible for better compression
- Provide multiple sizes for responsive images
- Consider using SVG for simple graphics and icons

# Serenity Wood - Agarwood E-commerce Website

A premium e-commerce website for agarwood products, featuring meditation rituals, cultural stories, and a complete shopping experience.

## Features

- **Homepage**: Hero section, product pillars, featured products, rituals CTA, stories preview, newsletter signup
- **Shop**: Product filtering by category, grade, type, and price; sorting options
- **Product Detail**: Image gallery, product information, quantity selector, add to cart
- **Rituals**: Guided meditation and mindfulness practice videos with filtering
- **Stories**: Cultural heritage content with timeline and journal articles
- **About**: Brand story, values, founder section, sustainability commitment
- **Shopping Cart**: Sidebar cart with add/remove/update functionality
- **Responsive Design**: Mobile-first approach, works on all devices

## File Structure

```
serenity-wood/
├── index.html          # Homepage
├── shop.html           # Product listing
├── product.html        # Product detail
├── rituals.html        # Rituals page
├── stories.html        # Stories/Journal page
├── about.html          # About us page
├── css/
│   ├── style.css      # Main stylesheet
│   ├── shop.css       # Shop page styles
│   ├── product.css    # Product detail styles
│   ├── rituals.css    # Rituals page styles
│   ├── stories.css    # Stories page styles
│   └── about.css      # About page styles
├── js/
│   ├── data.js        # Product and content data
│   ├── cart.js        # Shopping cart functionality
│   ├── main.js        # Main JavaScript
│   ├── shop.js        # Shop page JavaScript
│   ├── product.js     # Product detail JavaScript
│   ├── rituals.js     # Rituals page JavaScript
│   ├── stories.js     # Stories page JavaScript
│   └── about.js       # About page JavaScript
└── README.md          # This file
```

## Deployment Options

### Option 1: Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `serenity-wood` folder to deploy
3. Your site will be live instantly with a free URL

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your project or drag and drop the folder
3. Deploy with one click

### Option 3: GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be live at `username.github.io/repository-name`

### Option 4: Traditional Web Hosting

1. Purchase hosting from any provider (Bluehost, HostGator, etc.)
2. Upload all files via FTP to the public_html folder
3. Your site will be live at your domain

## SEO Optimization

This website includes comprehensive SEO optimization:

### On-Page SEO
- Unique, optimized titles and meta descriptions for each page
- Proper heading hierarchy (H1, H2, H3)
- Semantic HTML structure
- Image alt attributes
- Internal linking structure

### Technical SEO
- XML Sitemap (`sitemap.xml`)
- Robots.txt configuration
- Canonical URLs
- Structured data (Schema.org JSON-LD)
- Open Graph tags (Facebook sharing)
- Twitter Cards
- Performance optimizations (preconnect, dns-prefetch)

### SEO Tools
- **SEO Checker Script**: Run `seo-check.js` in browser console to audit any page
- **SEO Guide**: See `SEO-GUIDE.md` for detailed optimization instructions

### Before Deployment
1. Update all `serenitywood.com` URLs to your actual domain
2. Create social sharing images in `images/` folder
3. Submit sitemap to Google Search Console after launch

## Customization

### Products
Edit `js/data.js` to modify products:
- Add/remove products
- Update prices
- Change descriptions
- Update categories

### Styling
Edit CSS files in the `css/` folder:
- `style.css` - Main styles, colors, typography
- Page-specific CSS files for individual page styles

### Content
Edit HTML files to update:
- Text content
- Images (replace placeholder divs with actual `<img>` tags)
- Links and navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for demonstration purposes.

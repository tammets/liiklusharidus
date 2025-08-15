# Liiklusharidus.ee - Static HTML Version

This project has been converted from React to static HTML/CSS/JavaScript for better performance and easier deployment.

## Files Structure

- `index.html` - Main homepage with hero section and features
- `materials.html` - Materials page with search and filtering functionality
- `teacher-workbook.html` - Complete teacher workbook with educational content
- `content-bundles.html` - Content bundles page with filtering
- `material-detail.html` - Individual material detail page with dynamic content loading
- `bundle-detail.html` - Individual bundle detail page with materials listing
- `styles.css` - Custom CSS styles and animations
- `app.js` - JavaScript functionality for navigation, search, and interactions
- `public/lovable-uploads/` - Image assets directory

## Features

### ✅ Complete Functionality
- **Responsive Design**: Mobile-first design with Tailwind CSS via CDN
- **Font Size Controls**: Persistent user preference storage with localStorage
- **Mobile Navigation**: Collapsible mobile menu with smooth animations
- **Search & Filtering**: Real-time search and multi-criteria filtering for materials and bundles
- **Dynamic Content**: URL parameter-based content loading for detail pages
- **SEO Optimization**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Estonian Language**: Complete Estonian language content

### 📱 Interactive Elements
- Working dropdowns and filters
- Smooth hover effects and transitions
- Loading animations and visual feedback
- Cross-page navigation with breadcrumbs
- Related content suggestions

### 🎨 Design System
- Consistent color scheme and typography
- Beautiful gradients and shadows
- Card-based layouts with hover effects
- Proper spacing and visual hierarchy

## Page Details

### Homepage (`index.html`)
- Hero section with animated background elements
- Feature cards with hover effects
- Statistics section
- Call-to-action sections

### Materials Page (`materials.html`)
- Advanced search functionality
- Multi-category filtering (Category, Subject, Grade)
- Real-time results counting
- Material cards with detailed information

### Teacher Workbook (`teacher-workbook.html`)
- Comprehensive pedagogical guide
- Structured content sections
- Visual icons and formatting
- Educational methodology explanations

### Content Bundles (`content-bundles.html`)
- Bundle listing with duration and difficulty filters
- Detailed bundle information cards
- Subject and grade level indicators

### Detail Pages
- **Material Detail**: Individual material information, learning objectives, related materials
- **Bundle Detail**: Complete bundle overview, included materials, teaching instructions

## Technical Implementation

### CSS Framework
- **Tailwind CSS** via CDN for rapid styling
- Custom CSS for animations and advanced styling
- Responsive design with mobile-first approach

### JavaScript Features
- ES6+ modern JavaScript
- Local storage for user preferences
- URL parameter handling for dynamic content
- Event-driven interactions
- Cross-browser compatibility

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ with graceful degradation
- Mobile browsers with touch support

## Deployment

### Simple Deployment
1. Upload all files to your web server
2. Ensure proper MIME types for file extensions
3. No build process or dependencies required

### Server Requirements
- Static file serving capability
- No server-side processing needed
- Works with any web server (Apache, Nginx, IIS, etc.)

### Performance
- Optimized images with proper loading attributes
- Minimal JavaScript footprint
- CSS loaded via CDN for better caching
- Semantic HTML for faster parsing

## Development

### Local Development
1. Serve files using any local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

2. Open `http://localhost:8000` in your browser

### Customization
- **Colors**: Update Tailwind classes throughout HTML files
- **Content**: Modify text content directly in HTML files
- **Images**: Replace files in `public/lovable-uploads/` directory
- **Functionality**: Extend JavaScript in `app.js`

## Content Management

### Adding New Materials
1. Add material data to the `materials` object in `material-detail.html`
2. Update the materials array in `materials.html`
3. Add corresponding images to the uploads directory

### Adding New Bundles
1. Add bundle data to the `bundles` object in `bundle-detail.html`
2. Update the bundles array in `content-bundles.html`
3. Configure included materials for each bundle

## Quality Assurance

### SEO Features
- Proper title tags and meta descriptions
- Open Graph and Twitter Card meta tags
- Structured data markup (JSON-LD)
- Semantic HTML structure
- Descriptive alt attributes for images

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

### Performance
- Lazy loading for images
- Optimized asset delivery
- Minimal JavaScript execution
- Efficient CSS loading

This static version maintains all the functionality of the original React application while providing better performance, easier deployment, and broader compatibility.
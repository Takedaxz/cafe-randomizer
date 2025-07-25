# Technical Context: Café Randomizer Web App

## Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Pure CSS (no frameworks required)
- **Storage:** LocalStorage API (browser-based)
- **Maps Integration:** Google Maps links (no API key required)
- **Hosting:** Static hosting (GitHub Pages, Netlify, Vercel)

## Architecture Pattern
**Single Page Application (SPA)**
- Client-side only implementation
- No backend/server required
- All data stored locally in browser
- No external API dependencies

## Key Technical Decisions
1. **Vanilla JavaScript** - No frameworks for simplicity and zero dependencies
2. **LocalStorage** - Browser-based persistence, no database required
3. **Responsive CSS** - Mobile-first design with CSS Grid/Flexbox
4. **Static Hosting** - Zero-cost deployment options

## Data Structure
```javascript
// Café Object Structure
{
  id: string,
  name: string,
  location: string,
  googleMapsLink: string,
  hasWifi: boolean,
  hasPowerOutlets: boolean,
  rating: number (1-5),
  isFavorite: boolean,
  isExcluded: boolean,
  dateAdded: string,
  lastVisited: string
}
```

## Core Algorithms
1. **Weighted Random Selection**
   - Favorites count as 2x weight in selection pool
   - Excluded cafés filtered out before selection
   - Pure random selection for non-favorites

2. **Local Storage Management**
   - JSON serialization for café list
   - Automatic save on every change
   - Backup/restore functionality

## Browser Compatibility
- **Target:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Minimum:** ES6 support, LocalStorage API
- **Responsive:** Works on desktop and mobile browsers

## Performance Considerations
- Minimal JavaScript bundle size
- Efficient DOM manipulation
- Lazy loading for large café lists
- Optimized for quick interactions

## Security Considerations
- No sensitive data (personal café preferences only)
- Client-side only (no server vulnerabilities)
- LocalStorage isolation per domain

---
*Updated: $(date)*

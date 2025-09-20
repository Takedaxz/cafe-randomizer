# Café Randomizer

A web-based application that helps remote workers quickly select work-friendly cafés from their personal list using weighted random selection. Break decision fatigue and discover new spots with this intuitive, accessible tool.

## Features

- **Smart Random Selection**: Weighted algorithm that considers your preferences and café ratings
- **Café Management**: Add, edit, and organize your favorite cafés with detailed information
- **Amenities Tracking**: Track Wi-Fi, power outlets, quiet spaces, food options, and more
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **No Account Required**: All data stored locally in your browser using LocalStorage
- **Accessibility First**: Full WCAG 2.1 AA compliance with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading (< 2 seconds) and responsive interactions (< 100ms)

## Quick Start

1. **Add Your Cafés**: Click the "+ Add Café" button to add your favorite spots
2. **Set Preferences**: Rate cafés and mark your favorites for weighted selection
3. **Shuffle**: Click the shuffle button to get a random café suggestion
4. **Manage**: Edit details, toggle visibility, or remove cafés as needed

## Installation

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start adding your cafés!

### Option 2: Deploy to Web
1. Upload the files to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
2. Access your deployed application
3. Your data will be stored locally in each user's browser

## Usage

### Adding a Café
1. Click "+ Add Café" button
2. Fill in the café name and location
3. Set a rating (1-5 stars)
4. Add opening hours (optional)
5. Select available amenities
6. Click "Save Café"

### Random Selection
1. Click the "Shuffle" button
2. The app will randomly select from your eligible cafés
3. Favorites and higher-rated cafés have increased selection probability
4. Use the eye button to temporarily exclude cafés from selection

### Managing Your List
- **Edit**: Click the edit button on any café card
- **Toggle Visibility**: Use the eye button to hide/show cafés from shuffle
- **Delete**: Remove cafés you no longer visit
- **Export/Import**: Use the settings menu to backup or restore your data

## Features in Detail

### Smart Weighting System
- Favorites get 3x selection probability
- Higher ratings increase selection chance
- Recently visited cafés are slightly weighted down
- Excluded cafés are completely removed from selection

### Amenities Tracking
- Wi-Fi availability
- Power outlets
- Quiet environment
- Food options
- Restroom access
- Natural light (windows)
- Outdoor seating
- Pet-friendly
- Parking
- Air conditioning
- Vegan options
- Wheelchair accessibility
- Kid-friendly
- Live music
- Books/library

### Data Management
- **Local Storage**: All data stays on your device
- **Export**: Download your café list as JSON
- **Import**: Restore from backup files
- **Reset**: Clear all data if needed

## Technical Details

### Tech Stack
- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: CSS3 with custom properties
- **Storage**: Browser LocalStorage
- **No Dependencies**: Pure HTML/CSS/JavaScript
- **No Backend**: Completely client-side

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance
- **Load Time**: < 2 seconds
- **Shuffle Response**: < 100ms
- **Memory Usage**: Optimized for large café lists
- **Animations**: 60fps smooth interactions

## Development

### Project Structure
```
cafe/
├── index.html          # Main application
├── all-cafes.html      # Detailed café list view
├── styles/
│   └── main.css        # Application styles
├── scripts/
│   ├── app.js          # Main application controller
│   ├── cafeManager.js  # Data management
│   ├── randomizer.js   # Selection algorithm
│   ├── uiController.js # UI interactions
│   ├── database.js     # Storage layer
│   ├── performance.js  # Performance optimization
│   └── accessibility.js # Accessibility features
├── assets/
│   └── icons/          # Application icons
└── memory-bank/        # Development documentation
```

### Key Components
- **CafeManager**: Handles all CRUD operations and data persistence
- **Randomizer**: Implements weighted random selection algorithm
- **UIController**: Manages user interface and interactions
- **Performance Optimizer**: Monitors and optimizes application performance
- **Accessibility Manager**: Ensures WCAG compliance

## Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Improve accessibility
- Optimize performance

## License

This project is open source and available under the MIT License.

## About

Café Randomizer was created to solve the common problem of decision fatigue when choosing where to work remotely. It's designed to be simple, fast, and accessible to everyone.

---

**Built with ❤️ for the remote work community** 
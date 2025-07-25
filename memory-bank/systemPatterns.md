# System Patterns: Café Randomizer Web App

## Application Architecture

### Module Structure
```
cafe-randomizer/
├── index.html          # Main application entry point
├── styles/
│   ├── main.css        # Core application styles
│   └── responsive.css  # Mobile/tablet responsive styles
├── scripts/
│   ├── app.js          # Main application logic
│   ├── cafeManager.js  # Café CRUD operations
│   └── randomizer.js   # Weighted random selection logic
└── assets/
    └── icons/          # UI icons and favicons
```

### Core Components

#### 1. CafeManager (Data Layer)
- **Purpose:** Handle café CRUD operations and LocalStorage persistence
- **Key Methods:**
  - `addCafe(cafeData)` - Add new café to list
  - `updateCafe(id, updates)` - Update existing café
  - `deleteCafe(id)` - Remove café from list
  - `getCafes()` - Retrieve all cafés
  - `toggleFavorite(id)` - Toggle favorite status
  - `toggleExcluded(id)` - Toggle excluded status

#### 2. Randomizer (Business Logic)
- **Purpose:** Handle weighted random selection algorithm
- **Key Methods:**
  - `getRandomCafe()` - Main random selection with weighting
  - `getEligibleCafes()` - Filter excluded cafés
  - `applyFavoriteWeighting()` - Apply 2x weight to favorites
  - `selectFromPool()` - Execute random selection

#### 3. UI Controller (Presentation Layer)
- **Purpose:** Handle user interface interactions and updates
- **Key Methods:**
  - `renderCafeList()` - Display all cafés
  - `renderRandomResult()` - Show selected café
  - `handleShuffleClick()` - Process shuffle button
  - `handleCafeActions()` - Process café management actions

## Data Flow Patterns

### 1. Café Selection Flow
```
User clicks "Shuffle" → 
UI Controller calls Randomizer.getRandomCafe() → 
Randomizer calls CafeManager.getCafes() → 
Filter excluded cafés → 
Apply favorite weighting → 
Random selection → 
Return selected café → 
UI Controller renders result
```

### 2. Café Management Flow
```
User adds/edits café → 
UI Controller validates input → 
CafeManager processes CRUD operation → 
Update LocalStorage → 
Refresh UI display → 
Show success feedback
```

### 3. Storage Pattern
```javascript
// LocalStorage Structure
{
  "cafe-randomizer-data": {
    "cafes": [/* café objects */],
    "preferences": {
      "favoriteWeight": 2,
      "theme": "light",
      "lastUsed": "2024-01-01"
    }
  }
}
```

## UI/UX Patterns

### 1. Mobile-First Responsive Design
- **Breakpoints:** 320px, 768px, 1024px
- **Layout:** CSS Grid for café grid, Flexbox for controls
- **Touch-Friendly:** Minimum 44px touch targets

### 2. Immediate Feedback Pattern
- **Actions:** Instant visual feedback for all user interactions
- **States:** Loading, success, error states clearly indicated
- **Animations:** Subtle transitions for better UX

### 3. Progressive Enhancement
- **Core:** Basic functionality works without JavaScript
- **Enhanced:** Rich interactions with JavaScript enabled
- **Fallback:** Graceful degradation for older browsers

## Error Handling Patterns

### 1. Data Validation
```javascript
// Input validation pattern
function validateCafeData(data) {
  const errors = [];
  if (!data.name?.trim()) errors.push('Name is required');
  if (!data.location?.trim()) errors.push('Location is required');
  if (data.rating < 1 || data.rating > 5) errors.push('Rating must be 1-5');
  return errors;
}
```

### 2. Storage Error Handling
```javascript
// LocalStorage error handling
function saveToStorage(data) {
  try {
    localStorage.setItem('cafe-randomizer-data', JSON.stringify(data));
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Storage quota exceeded' };
  }
}
```

### 3. User-Friendly Error Messages
- **Storage Full:** "Unable to save. Please free up browser storage."
- **Invalid Data:** "Please check your input and try again."
- **No Cafés:** "Add some cafés to your list to get started!"

---
*Updated: $(date)*

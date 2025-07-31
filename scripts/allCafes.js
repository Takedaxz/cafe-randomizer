// Placeholder public cafes data
const publicCafes = [
  {
    id: 'pub1',
    name: 'Starbucks Siam Discovery',
    location: 'Starbucks Siam Discovery',
    rating: 4,
    amenities: ['wifi', 'food','power', 'windows','toilet','ac'],
    image: 'assets/pub1.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub2',
    name: 'Baan Saen Saep',
    location: 'https://maps.app.goo.gl/LwEpTGv5DcAB5As98',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet'],
    image: 'assets/pub2.jpeg',
    openingHours: '08:00 - 18:30'
  },
  {
    id: 'pub3',
    name: 'BLUE CHÉRI COFFEE Gaysorn Amarin',
    location: 'https://maps.app.goo.gl/shw8ECzdmWhQcFZ99',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'assets/pub3.webp',
    openingHours: '08:00 - 19:00'
  },
  {
    id: 'pub4',
    name: 'C asean Samyan CO-OP',
    location: 'https://maps.app.goo.gl/dNWxkY78XDpd5R1V9',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','quiet','ac'],
    image: 'assets/pub4.jpg',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub5',
    name: 'KLOUD by KBank',
    location: 'https://maps.app.goo.gl/JZmczBmmLaRjp5jXA',
    rating: 3,
    amenities: ['wifi','power','toilet','quiet','ac'],
    image: 'assets/pub5.webp',
    openingHours: '11:00 - 18:00'
  },
  {
    id: 'pub6',
    name: 'Yellow Lane',
    location: 'https://maps.app.goo.gl/FVHpyFRp2aCwe8j18',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','food','ac','kid','outdoor'],
    image: 'assets/pub6.webp',
    openingHours: '07:30 - 22:00'
  },
  {
    id: 'pub7',
    name: 'Oasis Coffee Chula',
    location: 'https://maps.app.goo.gl/1JE1B24rsSQgpjNWA',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','quiet','ac'],
    image: 'assets/pub7.webp',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub8',
    name: 'VE/LA at Central Embassy',
    location: 'https://maps.app.goo.gl/B2L6wRCBUUQBB4qs8',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'assets/pub8.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub9',
    name: 'BARTELS Asok',
    location: 'https://maps.app.goo.gl/MfZ31JePvijRqUTf8',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac','food'],
    image: 'assets/pub9.webp',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub10',
    name: 'Starbucks Helix Sky Garden',
    location: 'https://maps.app.goo.gl/9KF8TBdhoJVTn9PZ8',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'assets/pub10.jpg',
    openingHours: '08:00 - 22:00'
  },
  {
    id: 'pub11',
    name: 'Starbucks Central World (2nd Floor)',
    location: 'https://maps.app.goo.gl/RUjxt91ocigbCVR78',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'assets/pub11.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub12',
    name: 'PAUL Le Café Iconsiam',
    location: 'https://maps.app.goo.gl/kakfgyXnxCPDbQGx7',
    rating: 3,
    amenities: ['power', 'windows','toilet','quiet','ac'],
    image: 'assets/pub12.jpg',
    openingHours: '10:00 - 20:00'
  },
  {
    id: 'pub13',
    name: 'EATTENTION please!',
    location: 'https://maps.app.goo.gl/Q7i9Vs77iKcdfkeg6',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','food','ac'],
    image: 'assets/pub13.jpg',
    openingHours: '8:30 - 20:30'
  },
  {
    id: 'pub14',
    name: 'Tim Hortons - Samyan Mitrtown',
    location: 'https://maps.app.goo.gl/vEQUWMPD7Z4DRSi59',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'assets/pub14.webp',
    openingHours: '7:00 - 23:00'
  },
  {
    id: 'pub15',
    name: 'TK Park Central World',
    location: 'https://maps.app.goo.gl/YyqjPNGnyRG2V4eS8',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','quiet','kid','books'],
    image: 'assets/pub15.jpg',
    openingHours: '10:00 - 20:00'
  },
  {
    id: 'pub16',
    name: 'Starbucks Reserve @ One Bangkok',
    location: 'https://maps.app.goo.gl/yHHApGWexDvqmDERA',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'assets/pub16.jpg',
    openingHours: '7:00 - 22:00'
  },
  {
    id: 'pub17',
    name: 'Starbucks Central World (1st Floor)',
    location: 'https://maps.app.goo.gl/RUjxt91ocigbCVR78',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'assets/pub17.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub18',
    name: 'Starbucks Central World (5th Floor)',
    location: 'https://maps.app.goo.gl/9swmZRzbpfV6xth96',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'assets/pub18.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub19',
    name: 'theCOMMONS Saladaeng',
    location: 'https://maps.app.goo.gl/MTP1UjazmcaJ7CV7A',
    rating: 3,
    amenities: ['wifi','toilet','food','ac','outdoor','windows'],
    image: 'assets/pub19.jpg',
    openingHours: '08:00 - 01:00'
  },
  {
    id: 'pub20',
    name: 'Bank of Thailand Learning Center',
    location: 'https://maps.app.goo.gl/duuRTPiqpuzUvr4v9',
    rating: 3,
    amenities: ['wifi','power','toilet','quiet','ac','windows'],
    image: 'assets/pub20.jpg',
    openingHours: '09:30 - 20:00'
  },
  {
    id: 'pub21',
    name: 'Ecole Ducasse Nai Lert',
    location: 'https://maps.app.goo.gl/VYAEErMM9L5XfquU8',
    rating: 4,
    amenities: ['wifi','power','toilet','ac','outdoor','windows','kid'],
    image: 'assets/pub21.jpg',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub22',
    name: 'Roots at Ratchathewi',
    location: 'https://maps.app.goo.gl/TKc1yr2P7GwxjvDr7',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'assets/pub22.jpg',
    openingHours: '08:00 - 19:00'
  },
  {
    id: 'pub23',
    name: 'theCOMMONS Thonglor',
    location: 'https://maps.app.goo.gl/WHkw7jhd64sS6Ut6A',
    rating: 4,
    amenities: ['wifi','toilet','food','ac','outdoor','windows'],
    image: 'assets/pub23.jpg',
    openingHours: '08:00 - 01:00'
  },
  {
    id: 'pub24',
    name: 'IKEA Swedish Restaurant & Café Sukhumvit',
    location: 'https://maps.app.goo.gl/ZDjadEeH3rPisdNj9',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'assets/pub24.jpg',
    openingHours: '10:00 - 21:30'
  },
  {
    id: 'pub25',
    name: 'The Office Thonglor',
    location: 'https://maps.app.goo.gl/Yq36tipxhSJKbPAs9',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'assets/pub25.jpg',
    openingHours: '08:30 - 24:00'
  },
  {
    id: 'pub26',
    name: 'Sarnies Roastery',
    location: 'https://maps.app.goo.gl/KRU6gZWLjHsNcUCSA',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'assets/pub26.jpg',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub27',
    name: 'Starbucks Samyan Mitrtown',
    location: 'https://maps.app.goo.gl/GhTLn8XUMNU2CarQ9',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows','outdoor'],
    image: 'assets/pub27.webp',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub28',
    name: 'Too Fast To Sleep - Siam',
    location: 'https://maps.app.goo.gl/WyEUuTdVX2gPTLLGA',
    rating: 2,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'assets/pub28.jpg',
    openingHours: '09:00 - 20:00'
  },
  {
    id: 'pub29',
    name: 'True Coffee Siam Square Soi 2',
    location: 'hhttps://maps.app.goo.gl/cCNeXefUFEm5SuPp7',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'assets/pub29.jpg',
    openingHours: '07:00 - 20:00'
  },
  {
    id: 'pub30',
    name: 'Oasis Coffee Rangnam',
    location: 'https://maps.app.goo.gl/3DCpMg32aTmMsX4g9',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'assets/pub30.jpg',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub31',
    name: 'LAZE',
    location: 'https://maps.app.goo.gl/pmiuZUvJxjukGymS6',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'assets/pub31.png',
    openingHours: '08:00 - 17:00'
  },
  {
    id: 'pub32',
    name: 'Starbucks Siam Square One Flagship',
    location: 'https://maps.app.goo.gl/FZCTFC5sc2CSUSbJ8',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'assets/pub32.jpg',
    openingHours: '07:00 - 22:00'
  },
  {
    id: 'pub33',
    name: 'Tim Hortons - MBK',
    location: 'https://maps.app.goo.gl/F7o5aXj8cMxZL8ySA',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'assets/pub33.jpg',
    openingHours: '07:00 - 24:00'
  },
  {
    id: 'pub34',
    name: 'Plant workshop cafe',
    location: 'https://maps.app.goo.gl/4VXThyKevjPTvJU6A',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'assets/pub34.jpg',
    openingHours: '10:00 - 19:00'
  },
  {
    id: 'pub35',
    name: 'Starbucks Reserve ICONSIAM',
    location: 'https://maps.app.goo.gl/ccBhRuEU41ez2asN6',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac','outdoor'],
    image: 'assets/pub35.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub36',
    name: 'Zimt. German Bakery & Cafe',
    location: 'https://maps.app.goo.gl/T9m5hpjm4SmNSe44A',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'assets/pub36.jpeg',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub37',
    name: 'Peace Oriental Teahouse King Power',
    location: 'https://maps.app.goo.gl/MgzMKGSA8ixD8qKi7',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'assets/pub37.jpg',
    openingHours: '10:00 - 20:00'
  },
  {
    id: 'pub38',
    name: 'Oasis Coffee Huai Khwang',
    location: 'https://maps.app.goo.gl/bUzhQi6TdM6DCSvj9',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'assets/pub38.jpg',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub39',
    name: 'CASA LAPIN x Ratchathewi',
    location: 'https://maps.app.goo.gl/5ZRREGm4nRAZHZ419',
    rating: 3,
    amenities: ['power','toilet','ac','windows'],
    image: 'assets/pub39.jpg',
    openingHours: '06:30 - 18:30'
  },
  {
    id: 'pub40',
    name: 'NAIXUE Tea & Bakery Central World',
    location: 'https://maps.app.goo.gl/qP5KtHs55Yp7AvMXA',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'assets/pub40.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub41',
    name: 'The Food School Bangkok',
    location: 'https://maps.app.goo.gl/X2Rw3jadQ9DoxqSr6',
    rating: 2,
    amenities: ['toilet','ac'],
    image: 'assets/pub41.jpg',
    openingHours: '08:30 - 18:00'
  },
  {
    id: 'pub42',
    name: 'OKONOMI Central Embassy',
    location: 'https://maps.app.goo.gl/jyNW3EKsq1AX3FTq7',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows','food'],
    image: 'assets/pub42.jpg',
    openingHours: '10:00 - 21:00'
  },
  {
    id: 'pub43',
    name: 'TCDC Bangkok, Thailand Creative & Design Center',
    location: 'https://maps.app.goo.gl/nYrawPVMrXgfwxfu7',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','quiet'],
    image: 'assets/pub43.jpg',
    openingHours: '10:30 - 19:00'
  },
  {
    id: 'pub44',
    name: 'Art Library, Bangkok Art and Culture Centre',
    location: 'https://maps.app.goo.gl/GdBscdxzCd1ch5SLA',
    rating: 2,
    amenities: ['wifi','power','toilet','ac','windows','quiet'],
    image: 'assets/pub44.webp',
    openingHours: '10:00 - 19:00'
  },
  {
    id: 'pub45',
    name: 'Starbucks Langsuan',
    location: 'https://maps.app.goo.gl/TV9ot3xhc7uAHrtT7',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows','quiet'],
    image: 'assets/pub45.webp',
    openingHours: '06:30 - 22:00'
  },
  {
    id: 'pub46',
    name: 'Starbucks The Mercury Ville',
    location: 'https://maps.app.goo.gl/7Hx2EeQEJk6dA5BR7',
    rating: 2,
    amenities: ['wifi','power','toilet','ac','windows','quiet'],
    image: 'assets/pub46.webp',
    openingHours: '06:30 - 21:00'
  }
];

// Utility: Use UIController's methods for consistent card rendering
function getUICardHelpers() {
  if (window.ui) {
    return window.ui;
  }
  // Fallback: use the same amenityMap as UIController for consistent icons/labels
  const amenityMap = {
    wifi: '📶 Wi-Fi',
    power: '🔌 Power',
    quiet: '🤫 Quiet',
    food: '🍽️ Food',
    toilet: '🚻 Toilet',
    windows: '🪟 Windows',
    outdoor: '🌳 Outdoor Seating',
    pet: '🐶 Pet Friendly',
    parking: '🅿️ Parking',
    ac: '❄️ Air Conditioning',
    vegan: '🥗 Vegan Options',
    accessible: '♿ Wheelchair Accessible',
    kid: '👶 Kid Friendly',
    music: '🎶 Live Music',
    books: '📚 Books/Library'
  };
  return {
    formatAmenities: (amenities) => (amenities || []).map(a => `<span class='amenity-badge'>${amenityMap[a] || a}</span>`).join(''),
    formatRating: (r) => r ? '★'.repeat(r) + '☆'.repeat(5 - r) + ` (${r}/5)` : '',
    escapeHtml: (t) => t,
    isUrl: (t) => /^https?:\/\//i.test(t),
    normalizeUrl: (u) => u
  };
}

function isCafeOpenNow(openingHours) {
  if (!openingHours) return false;
  // Expect format 'HH:mm - HH:mm'
  const match = openingHours.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
  if (!match) return false;
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
  const closeMinutes = parseInt(match[3], 10) * 60 + parseInt(match[4], 10);
  if (openMinutes < closeMinutes) {
    // Normal range
    return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
  } else {
    // Overnight (e.g., 22:00 - 06:00)
    return nowMinutes >= openMinutes || nowMinutes < closeMinutes;
  }
}

function getCafeFilters() {
  const search = document.getElementById('public-cafe-search')?.value || '';
  const ratings = Array.from(document.querySelectorAll('.public-cafe-filter-rating:checked')).map(cb => cb.value);
  const openings = Array.from(document.querySelectorAll('.public-cafe-filter-opening:checked')).map(cb => cb.value);
  const amenities = Array.from(document.querySelectorAll('.public-cafe-filter-amenities:checked')).map(cb => cb.value);
  return { search, ratings, openings, amenities };
}

function renderPublicCafesWithFilters() {
  const { search, ratings, openings, amenities } = getCafeFilters();
  const filterLower = search.trim().toLowerCase();
  const ui = getUICardHelpers();
  let filteredCafes = publicCafes;
  if (filterLower) {
    filteredCafes = filteredCafes.filter(cafe =>
      cafe.name.toLowerCase().includes(filterLower) ||
      (cafe.amenities && cafe.amenities.some(a => ui.amenityMap && ui.amenityMap[a] && ui.amenityMap[a].toLowerCase().includes(filterLower)))
    );
  }
  if (ratings.length > 0) {
    filteredCafes = filteredCafes.filter(cafe => ratings.includes(String(cafe.rating)));
  }
  if (openings.length > 0) {
    filteredCafes = filteredCafes.filter(cafe => {
      let match = false;
      if (openings.includes('open') && isCafeOpenNow(cafe.openingHours)) match = true;
      if (openings.includes('24h') && cafe.openingHours && /00:00\s*-\s*24:00|24:00\s*-\s*00:00/.test(cafe.openingHours)) match = true;
      return match;
    });
  }
  if (amenities.length > 0) {
    filteredCafes = filteredCafes.filter(cafe => amenities.every(a => cafe.amenities && cafe.amenities.includes(a)));
  }
  renderPublicCafesList(filteredCafes);
}

function renderPublicCafesList(cafes) {
  const grid = document.getElementById('public-cafe-grid');
  if (!grid) return;
  const ui = getUICardHelpers();
  grid.innerHTML = cafes.map(cafe => {
    const amenities = ui.formatAmenities(cafe.amenities);
    const rating = ui.formatRating(cafe.rating);
    let openDot = '';
    if (cafe.openingHours) {
      const isOpen = isCafeOpenNow(cafe.openingHours);
      openDot = `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${isOpen ? '#22c55e' : '#ff0000'};margin-right:0.5em;"></span>`;
    }
    return `
      <div class="cafe-card" data-cafe-id="${cafe.id}">
        ${cafe.image ? `<div class="cafe-card-img-wrap"><img src="${cafe.image}" alt="${ui.escapeHtml(cafe.name)}" class="cafe-card-img"></div>` : ''}
        <div class="card-header">
          <h3 class="cafe-name">${ui.escapeHtml(cafe.name)}</h3>
        </div>
        <div class="card-content">
          ${cafe.openingHours ? `<div class='cafe-opening-hours'>${openDot}<span>Open: </span> ${cafe.openingHours}</div>` : ''}
          ${rating ? `<div class="rating"><span class="stars">${rating}</span></div>` : ''}
          ${amenities ? `<div class="amenities">${amenities}</div>` : ''}
        </div>
        <div class="card-footer">
          <a href="${ui.isUrl(cafe.location) ? ui.normalizeUrl(cafe.location) : `https://maps.google.com/?q=${encodeURIComponent(cafe.location)}`}" 
             class="maps-link" target="_blank"><strong>📍 Directions</strong></a>
          <button class="secondary-btn add-public-cafe-btn" data-cafe-id="${cafe.id}" style="margin-left: 1em;">+ Add</button>
        </div>
      </div>
    `;
  }).join('');
  // Attach event listeners
  grid.querySelectorAll('.add-public-cafe-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cafeId = btn.getAttribute('data-cafe-id');
      addPublicCafeToUserList(cafeId);
    });
  });
}

async function addPublicCafeToUserList(cafeId) {
  const cafe = publicCafes.find(c => c.id === cafeId);
  if (!cafe) return;
  if (window.app && window.app.cafeManager) {
    const cafeData = { ...cafe };
    delete cafeData.id;
    delete cafeData.image;
    // Do NOT delete openingHours; allow it to be added to user's list
    await window.app.cafeManager.addCafe(cafeData);
    if (window.ui) window.ui.showNotification('Café added to your list!', 'success');
  } else {
    alert('Could not add café to your list.');
  }
}

function showPublicCafeModal(cafeId) {
  const cafe = publicCafes.find(c => c.id === cafeId);
  if (!cafe) return;
  const modal = document.getElementById('public-cafe-modal');
  const title = document.getElementById('public-cafe-modal-title');
  const body = document.getElementById('public-cafe-modal-body');
  if (title) title.textContent = cafe.name;
  if (body) {
    body.innerHTML = `
      <p><strong>Location:</strong> ${cafe.location}</p>
      <p><strong>Rating:</strong> ${'★'.repeat(cafe.rating)}${'☆'.repeat(5-cafe.rating)} (${cafe.rating}/5)</p>
      <p><strong>Amenities:</strong> ${(cafe.amenities||[]).join(', ')}</p>
      <p><strong>Notes:</strong> ${cafe.notes||''}</p>
    `;
  }
  modal.hidden = false;
  // Set up add button
  const addBtn = document.getElementById('add-public-cafe-btn');
  if (addBtn) {
    addBtn.onclick = async () => {
      // Try to add to user's list using CafeManager if available
      if (window.app && window.app.cafeManager) {
        const cafeData = { ...cafe };
        delete cafeData.id; // Let user's list assign its own id
        await window.app.cafeManager.addCafe(cafeData);
        if (window.ui) window.ui.showNotification('Café added to your list!', 'success');
      }
      modal.hidden = true;
    };
  }
}

// Hamburger filter panel logic
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('public-cafe-filter-btn');
    const filterPanel = document.getElementById('public-cafe-filter-panel');
    if (filterBtn && filterPanel) {
      filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = filterPanel.classList.toggle('open');
        filterPanel.style.display = isOpen ? 'block' : 'none';
        if (isOpen) {
          setTimeout(() => filterPanel.focus && filterPanel.focus(), 10);
        }
      });
      // Close on click outside
      document.addEventListener('click', (e) => {
        if (filterPanel.classList.contains('open') && !filterPanel.contains(e.target) && e.target !== filterBtn) {
          filterPanel.classList.remove('open');
          filterPanel.style.display = 'none';
        }
      });
      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && filterPanel.classList.contains('open')) {
          filterPanel.classList.remove('open');
          filterPanel.style.display = 'none';
        }
      });
    }
    // Attach filter event listeners
    document.querySelectorAll('.public-cafe-filter-rating, .public-cafe-filter-opening, .public-cafe-filter-amenities').forEach(cb => {
      cb.addEventListener('change', renderPublicCafesWithFilters);
    });
    const searchInput = document.getElementById('public-cafe-search');
    if (searchInput) {
      searchInput.addEventListener('input', renderPublicCafesWithFilters);
    }
    renderPublicCafesWithFilters();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPublicCafes();
  // Modal close
  const modal = document.getElementById('public-cafe-modal');
  const closeBtn = document.getElementById('public-cafe-modal-close');
  if (closeBtn && modal) {
    closeBtn.onclick = () => { modal.hidden = true; };
  }

  // Initialize UIController for settings modal logic
  if (window.CafeManager && window.Randomizer && window.UIController) {
    console.log('[DEBUG] Initializing UIController for settings modal on All Cafés page');
    const dummyCafeManager = new window.CafeManager();
    const dummyRandomizer = new window.Randomizer(dummyCafeManager);
    const ui = new window.UIController(dummyCafeManager, dummyRandomizer);
    window.ui = ui;
    ui.init().then(() => {
      console.log('[DEBUG] UIController.init() complete');
      const settingsBtn = document.getElementById('settings-btn');
      if (settingsBtn) {
        console.log('[DEBUG] Found settings button, checking event listeners...');
        // Check if event is attached
        const listeners = getEventListeners ? getEventListeners(settingsBtn) : null;
        if (listeners && listeners.click) {
          console.log('[DEBUG] Settings button click listeners:', listeners.click);
        } else {
          console.log('[DEBUG] No click listeners found on settings button (may be normal in some browsers)');
        }
      } else {
        console.warn('[DEBUG] Settings button not found!');
      }
    });
  } else {
    console.warn('[DEBUG] CafeManager, Randomizer, or UIController not found on window!');
  }
}); 
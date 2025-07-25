// Placeholder public cafes data
const publicCafes = [
  {
    id: 'pub1',
    name: 'Starbucks Siam Discovery',
    location: 'Starbucks Siam Discovery',
    rating: 4,
    amenities: ['wifi', 'food','power', 'windows','toilet','ac'],
    image: 'https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/514666022_24178371841758105_2103298299982254235_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dXQ7HjeMxlgQ7kNvwFEPOuP&_nc_oc=AdkwG2JmhxI5GcWq4untmZQnrK5dUW_twWtVjknrA3kXiF6k_7wOUHN-F4XMiTntC1z3nrlE2cx5xsv_yjBxdLdT&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=IGiVXDyOtHog2nwKpzQofg&oh=00_AfQNypBEkoHdpr6Uro0d87KpdaJa-gL2d5KUVl_NjPwzaQ&oe=6885342A',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub2',
    name: 'Baan Saen Saep',
    location: 'https://maps.app.goo.gl/LwEpTGv5DcAB5As98',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet'],
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1IYHct.img?w=696&h=527&m=6',
    openingHours: '08:00 - 18:30'
  },
  {
    id: 'pub3',
    name: 'BLUE CHÉRI COFFEE Gaysorn Amarin',
    location: 'https://maps.app.goo.gl/shw8ECzdmWhQcFZ99',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'https://www.gaysornvillage.com/wp-content/uploads/2024/05/099A4888.webp',
    openingHours: '08:00 - 19:00'
  },
  {
    id: 'pub4',
    name: 'C asean Samyan CO-OP',
    location: 'https://maps.app.goo.gl/dNWxkY78XDpd5R1V9',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','quiet','ac'],
    image: 'https://www.brandbuffet.in.th/wp-content/uploads/2019/08/Samyan-COOP-1.jpg',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub5',
    name: 'KLOUD by KBank',
    location: 'https://maps.app.goo.gl/JZmczBmmLaRjp5jXA',
    rating: 3,
    amenities: ['wifi','power','toilet','quiet','ac'],
    image: 'https://assets.brandinside.asia/uploads/2022/07/KLOUD-27.jpeg',
    openingHours: '11:00 - 18:00'
  },
  {
    id: 'pub6',
    name: 'Yellow Lane',
    location: 'https://maps.app.goo.gl/FVHpyFRp2aCwe8j18',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','food','ac','kid','outdoor'],
    image: 'https://img.wongnai.com/p/1920x0/2020/08/26/c86e6f7c1d7d4a47add4ef00ed35cb3e.jpg',
    openingHours: '07:30 - 22:00'
  },
  {
    id: 'pub7',
    name: 'Oasis Coffee Chula',
    location: 'https://maps.app.goo.gl/1JE1B24rsSQgpjNWA',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','quiet','ac'],
    image: 'https://img.wongnai.com/p/1920x0/2024/10/04/0d47b775e56e48cc95611f7454b027a2.jpg',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub8',
    name: 'VE/LA at Central Embassy',
    location: 'https://maps.app.goo.gl/B2L6wRCBUUQBB4qs8',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'https://img.wongnai.com/p/1920x0/2023/06/25/51a12bf2bd4849479d4dc511fa5ee115.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub9',
    name: 'BARTELS Asok',
    location: 'https://maps.app.goo.gl/MfZ31JePvijRqUTf8',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac','food'],
    image: 'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/468569231_18249987652277314_3109788871507353583_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aCBUVosspUcQ7kNvwEeLjMP&_nc_oc=AdmkjqoYXBDN-sDvE9IJFEZQm7cnBZxKr3pt0JGxNT0lp2iOeAs2kJcb9MPuh9vU8uaLZk3xnjRv--JAXkOvFD5I&_nc_zt=23&_nc_ht=scontent-sin6-2.xx&_nc_gid=3bfcOiElG2n1Anoip0BJQw&oh=00_AfQ0opeuDmLZHXzKTlb88yNX8H_gRUsLpCxbvBz8vShl9A&oe=6884FDAE',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub10',
    name: 'Starbucks Helix Sky Garden',
    location: 'https://maps.app.goo.gl/9KF8TBdhoJVTn9PZ8',
    rating: 4,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image:'https://img.wongnai.com/p/1920x0/2023/06/20/32e3c2c72ec94fde97e884fabf52b510.jpg',
    openingHours: '08:00 - 22:00'
  },
  {
    id: 'pub11',
    name: 'Starbucks Central World (2nd Floor)',
    location: 'https://maps.app.goo.gl/RUjxt91ocigbCVR78',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'https://st-th-1.byteark.com/assets.punpro.com/contents/i9805/1596293811827-Starbucks_200801_0004.png',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub12',
    name: 'PAUL Le Café Iconsiam',
    location: 'https://maps.app.goo.gl/kakfgyXnxCPDbQGx7',
    rating: 3,
    amenities: ['power', 'windows','toilet','quiet','ac'],
    image: 'https://img.wongnai.com/p/1920x0/2020/03/01/7dbb1baf2ded4d67850a922a16da6fe4.jpg',
    openingHours: '10:00 - 20:00'
  },
  {
    id: 'pub13',
    name: 'EATTENTION please!',
    location: 'https://maps.app.goo.gl/Q7i9Vs77iKcdfkeg6',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','food','ac'],
    image: 'https://img.wongnai.com/p/1920x0/2020/08/29/bd46e287f395432f84e67c4a86a40653.jpg',
    openingHours: '8:30 - 20:30'
  },
  {
    id: 'pub14',
    name: 'Tim Hortons - Samyan Mitrtown',
    location: 'https://maps.app.goo.gl/vEQUWMPD7Z4DRSi59',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'https://thesmartlocal.com/thailand/wp-content/uploads/2020/01/image1-16.jpg',
    openingHours: '7:00 - 23:00'
  },
  {
    id: 'pub15',
    name: 'TK Park Central World',
    location: 'https://maps.app.goo.gl/YyqjPNGnyRG2V4eS8',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','quiet','kid','books'],
    image: 'https://pbs.twimg.com/media/FCMSbYQVcAk9ebC?format=jpg&name=4096x4096',
    openingHours: '10:00 - 20:00'
  },
  {
    id: 'pub16',
    name: 'Starbucks Reserve @ One Bangkok',
    location: 'https://maps.app.goo.gl/yHHApGWexDvqmDERA',
    rating: 3,
    amenities: ['wifi','power', 'windows','toilet','ac'],
    image: 'https://d1ef7ke0x2i9g8.cloudfront.net/hong-kong/_1200x630_fit_center-center_82_none/Entrance-view-on-the-ground-level_2024-11-28-035548_fsln.jpg?mtime=1732766159',
    openingHours: '7:00 - 22:00'
  },
  {
    id: 'pub17',
    name: 'Starbucks Central World (1st Floor)',
    location: 'https://maps.app.goo.gl/RUjxt91ocigbCVR78',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'https://www.prachachat.net/wp-content/uploads/2018/06/Starbucks-24_-31.jpeg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub18',
    name: 'Starbucks Central World (5th Floor)',
    location: 'https://maps.app.goo.gl/9swmZRzbpfV6xth96',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/61/4e/b0/photo2jpg.jpg?w=900&h=500&s=1',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub19',
    name: 'theCOMMONS Saladaeng',
    location: 'https://maps.app.goo.gl/MTP1UjazmcaJ7CV7A',
    rating: 3,
    amenities: ['wifi','toilet','food','ac','outdoor','windows'],
    image: 'https://gurulist.net/img/address/1207.jpeg',
    openingHours: '08:00 - 01:00'
  },
  {
    id: 'pub20',
    name: 'Bank of Thailand Learning Center',
    location: 'https://maps.app.goo.gl/duuRTPiqpuzUvr4v9',
    rating: 3,
    amenities: ['wifi','power','toilet','quiet','ac','windows'],
    image: 'https://media.timeout.com/images/104713011/image.jpg',
    openingHours: '09:30 - 20:00'
  },
  {
    id: 'pub21',
    name: 'Ecole Ducasse Nai Lert',
    location: 'https://maps.app.goo.gl/VYAEErMM9L5XfquU8',
    rating: 4,
    amenities: ['wifi','power','toilet','ac','outdoor','windows','kid'],
    image: 'https://images.prestigeonline.com/wp-content/uploads/sites/8/2023/02/03114836/ECOLEDUCDSSE-2_1-1348x900.jpg',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub22',
    name: 'Roots at Ratchathewi',
    location: 'https://maps.app.goo.gl/TKc1yr2P7GwxjvDr7',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'https://dinstudio.co/wp-content/uploads/2023/11/ROOTS-RTW_02A.jpg',
    openingHours: '08:00 - 19:00'
  },
  {
    id: 'pub23',
    name: 'theCOMMONS Thonglor',
    location: 'https://maps.app.goo.gl/WHkw7jhd64sS6Ut6A',
    rating: 4,
    amenities: ['wifi','toilet','food','ac','outdoor','windows'],
    image: 'https://dsignsomething.com/wp-content/uploads/2016/03/img_9273.jpg',
    openingHours: '08:00 - 01:00'
  },
  {
    id: 'pub24',
    name: 'IKEA Swedish Restaurant & Café Sukhumvit',
    location: 'https://maps.app.goo.gl/ZDjadEeH3rPisdNj9',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'https://cdn.marketingoops.com/wp-content/uploads/2023/11/IKEA-Sukhumvit-Restaurant_9.jpg',
    openingHours: '10:00 - 21:30'
  },
  {
    id: 'pub25',
    name: 'The Office Thonglor',
    location: 'https://maps.app.goo.gl/Yq36tipxhSJKbPAs9',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'https://routeen.co/wp-content/uploads/2024/02/IMG_2580-scaled.jpg',
    openingHours: '08:30 - 24:00'
  },
  {
    id: 'pub26',
    name: 'Sarnies Roastery',
    location: 'https://maps.app.goo.gl/KRU6gZWLjHsNcUCSA',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'https://img.wongnai.com/p/1920x0/2021/09/17/923350c8b99045e8b47c326cda8c58de.jpg',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub27',
    name: 'Starbucks Samyan Mitrtown',
    location: 'https://maps.app.goo.gl/GhTLn8XUMNU2CarQ9',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows','outdoor'],
    image: 'https://cdn.prod.website-files.com/64b6780f84d27e4bfd91f2d6/6755c60edbde22bab5d8596a_starbucks-samyan-mitrtown-bangkok.webp',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub28',
    name: 'Too Fast To Sleep - Siam',
    location: 'https://maps.app.goo.gl/WyEUuTdVX2gPTLLGA',
    rating: 2,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'https://eventbanana.blob.core.windows.net/venueimagecontainer/wpmh9q9xhsxdynk1mxwv_hNonew600_fill',
    openingHours: '09:00 - 20:00'
  },
  {
    id: 'pub29',
    name: 'True Coffee Siam Square Soi 2',
    location: 'hhttps://maps.app.goo.gl/cCNeXefUFEm5SuPp7',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'https://www.japaikin.com/wp-content/uploads/2018/12/true-coffee-siam-cafe-02.jpg',
    openingHours: '07:00 - 20:00'
  },
  {
    id: 'pub30',
    name: 'Oasis Coffee Rangnam',
    location: 'https://maps.app.goo.gl/3DCpMg32aTmMsX4g9',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'https://img.wongnai.com/p/1920x0/2022/04/17/8de1e613ad334965af6cae9a649aa8b8.jpg',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub31',
    name: 'LAZE',
    location: 'https://maps.app.goo.gl/pmiuZUvJxjukGymS6',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'https://cea-design-week-cdn.5lab.co/wp-content/uploads/2021/12/16171102/161220211639649461.png',
    openingHours: '08:00 - 17:00'
  },
  {
    id: 'pub32',
    name: 'Starbucks Siam Square One Flagship',
    location: 'https://maps.app.goo.gl/FZCTFC5sc2CSUSbJ8',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'https://www.prachachat.net/wp-content/uploads/2017/12/Starbucks_Flagship_Store_8_2000x1333.jpg',
    openingHours: '07:00 - 22:00'
  },
  {
    id: 'pub33',
    name: 'Tim Hortons - MBK',
    location: 'https://maps.app.goo.gl/F7o5aXj8cMxZL8ySA',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac'],
    image: 'https://art4d.com/wp-content/uploads/2024/05/Tom-Hortons-MBK_low-res.jpg',
    openingHours: '07:00 - 24:00'
  },
  {
    id: 'pub34',
    name: 'Plant workshop cafe',
    location: 'https://maps.app.goo.gl/4VXThyKevjPTvJU6A',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'https://urbancreature.co/wp-content/uploads/2024/03/UC-plantworkshopcafe_6-1024x683.jpg',
    openingHours: '10:00 - 19:00'
  },
  {
    id: 'pub35',
    name: 'Starbucks Reserve ICONSIAM',
    location: 'https://maps.app.goo.gl/ccBhRuEU41ez2asN6',
    rating: 3,
    amenities: ['wifi','power','toilet','windows','ac','outdoor'],
    image: 'https://goohiw.com/wp-content/uploads/2021/02/review-starbucks-reserve-chao-phraya-riverfront-at-iconsiam-7th-23.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub36',
    name: 'Zimt. German Bakery & Cafe',
    location: 'https://maps.app.goo.gl/T9m5hpjm4SmNSe44A',
    rating: 3,
    amenities: ['wifi','power','toilet','food','ac','windows'],
    image: 'https://www.lemon8-app.com/seo/image?item_id=7424380214614196753&index=8&sign=2208c68967c2476558e48cd50b4ad3f4',
    openingHours: '07:00 - 18:00'
  },
  {
    id: 'pub37',
    name: 'Peace Oriental Teahouse King Power',
    location: 'https://maps.app.goo.gl/MgzMKGSA8ixD8qKi7',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'https://pbs.twimg.com/media/DQRzbGuVwAEzMh5.jpg:large',
    openingHours: '10:00 - 20:00'
  },
  {
    id: 'pub38',
    name: 'Oasis Coffee Huai Khwang',
    location: 'https://maps.app.goo.gl/bUzhQi6TdM6DCSvj9',
    rating: 3,
    amenities: ['wifi','power','toilet','ac','windows'],
    image: 'https://img.wongnai.com/p/1920x0/2023/07/28/89bcff3fb79743048b12ae3e84ad826e.jpg',
    openingHours: '00:00 - 24:00'
  },
  {
    id: 'pub39',
    name: 'CASA LAPIN x Ratchathewi',
    location: 'https://maps.app.goo.gl/5ZRREGm4nRAZHZ419',
    rating: 3,
    amenities: ['power','toilet','ac','windows'],
    image: 'https://www.globe.co.th/wp-content/uploads/2025/04/casalapinrachatewibangkokentrance.jpg',
    openingHours: '06:30 - 18:30'
  },
  {
    id: 'pub40',
    name: 'NAIXUE Tea & Bakery Central World',
    location: 'https://maps.app.goo.gl/qP5KtHs55Yp7AvMXA',
    rating: 3,
    amenities: ['wifi','power','toilet','ac'],
    image: 'https://tamagofreemag.com/wp-content/uploads/2024/10/Naixue-flagship-store-CTW-04.jpg',
    openingHours: '10:00 - 22:00'
  },
  {
    id: 'pub41',
    name: 'The Food School Bangkok',
    location: 'https://maps.app.goo.gl/X2Rw3jadQ9DoxqSr6',
    rating: 2,
    amenities: ['toilet','ac'],
    image: 'https://www.bkkmenu.com/files/2022/09/TheFoodSchoolBangkok_CafeArea.jpg',
    openingHours: '08:30 - 18:00'
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
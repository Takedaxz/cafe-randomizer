/**
 * UI Controller for Café Randomizer
 * Handles all UI interactions, modal management, and form handling
 */

class UIController {
    constructor(cafeManager, randomizer) {
        this.cafeManager = cafeManager;
        this.randomizer = randomizer;
        this.currentEditId = null;
    }

    async init() {
        this.setupEventListeners();
        this.refreshCafeList();
        this.setupModalHandling();
        this.setupHowToModal();
    }

    setupEventListeners() {
        // Shuffle button
        const shuffleBtn = document.getElementById('shuffle-btn');
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => this.handleShuffle());
        }

        // Add café button
        const addBtn = document.getElementById('add-cafe-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => this.showAddCafeModal());
        }

        // Settings modal
        const settingsBtn = document.getElementById('settings-btn');
        const settingsModal = document.getElementById('settings-modal');
        const settingsClose = document.getElementById('settings-close');
        const settingsHowtoToggle = document.getElementById('settings-howto-toggle');
        const settingsHowtoContent = document.getElementById('settings-howto-content');
        const howtoDontShow = document.getElementById('howto-dontshow');
        if (settingsBtn && settingsModal) {
            settingsBtn.addEventListener('click', () => {
                settingsModal.hidden = false;
                // Expand/collapse How to Use based on localStorage
                if (settingsHowtoContent && howtoDontShow) {
                    if (localStorage.getItem('howtoDontShow')) {
                        settingsHowtoContent.style.display = 'none';
                        settingsHowtoToggle.classList.remove('open');
                        howtoDontShow.checked = true;
                    } else {
                        settingsHowtoContent.style.display = 'block';
                        settingsHowtoToggle.classList.add('open');
                        howtoDontShow.checked = false;
                    }
                }
            });
        }
        if (settingsClose && settingsModal) {
            settingsClose.addEventListener('click', () => {
                settingsModal.hidden = true;
            });
        }
        // Close settings modal when clicking outside content
        if (settingsModal) {
            settingsModal.addEventListener('click', (e) => {
                if (e.target === settingsModal) settingsModal.hidden = true;
            });
        }
        // How to Use toggle
        if (settingsHowtoToggle && settingsHowtoContent) {
            settingsHowtoToggle.addEventListener('click', () => {
                const isOpen = settingsHowtoContent.style.display === 'block';
                settingsHowtoContent.style.display = isOpen ? 'none' : 'block';
                settingsHowtoToggle.classList.toggle('open', !isOpen);
            });
        }
        // Don't show again checkbox
        if (howtoDontShow && settingsHowtoContent && settingsHowtoToggle) {
            howtoDontShow.addEventListener('change', () => {
                if (howtoDontShow.checked) {
                    localStorage.setItem('howtoDontShow', '1');
                    settingsHowtoContent.style.display = 'none';
                    settingsHowtoToggle.classList.remove('open');
                } else {
                    localStorage.removeItem('howtoDontShow');
                    settingsHowtoContent.style.display = 'block';
                    settingsHowtoToggle.classList.add('open');
                }
            });
        }

        // Form submission
        const cafeForm = document.getElementById('cafe-form');
        if (cafeForm) {
            cafeForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Modal close buttons
        const modalClose = document.getElementById('modal-close');
        const cancelBtn = document.getElementById('cancel-btn');
        const modalOverlay = document.getElementById('modal-overlay');

        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeModal());
        }
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => this.closeModal());
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    setupModalHandling() {
        const modal = document.getElementById('cafe-modal');
        const modalContent = modal ? modal.querySelector('.modal-content') : null;
        const modalOverlay = document.getElementById('modal-overlay');
        
        if (modalContent) {
            // Prevent modal from closing when clicking inside modal content
            modalContent.addEventListener('click', (e) => e.stopPropagation());
        }
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => this.closeModal());
        }
    }

    async handleShuffle() {
        const shuffleBtn = document.getElementById('shuffle-btn');
        const resultDisplay = document.getElementById('result-display');

        if (!shuffleBtn || !resultDisplay) return;

        // Add loading state
        shuffleBtn.classList.add('loading');
        shuffleBtn.disabled = true;

        // Simulate shuffle animation
        await this.showShuffleLoading();

        try {
            // Get random café
            const result = await this.randomizer.getRandomCafe();
            
            if (result.success) {
                this.showResult(result.cafe);
            } else {
                this.showError(result.error);
            }
        } catch (error) {
            console.error('Error in shuffle:', error);
            this.showError('An error occurred while selecting a café. Please try again.');
        } finally {
            // Remove loading state
            shuffleBtn.classList.remove('loading');
            shuffleBtn.disabled = false;
        }
    }

    async showShuffleLoading() {
        const resultDisplay = document.getElementById('result-display');
        if (!resultDisplay) return;

        resultDisplay.innerHTML = `
            <div class="result-card">
                <h3>🎲 Shuffling...</h3>
                <p>Finding your perfect café...</p>
            </div>
        `;

        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1500));
    }

    showResult(cafe) {
        const resultDisplay = document.getElementById('result-display');
        if (!resultDisplay) return;

        const amenities = this.formatAmenities(cafe.amenities);
        const rating = this.formatRating(cafe.rating);

        resultDisplay.innerHTML = `
            <div class="result-card">
                <h3>🎉 ${cafe.name}</h3>
                <p><a href="${this.isUrl(cafe.location) ? this.normalizeUrl(cafe.location) : `https://maps.google.com/?q=${encodeURIComponent(cafe.location)}`}" 
                       class="maps-link" target="_blank"><strong>📍 Directions</strong></a></p>
                ${rating ? `<p><strong>⭐ Rating:</strong> ${rating}</p>` : ''}
                ${amenities ? `<p><strong>🏪 Amenities:</strong> ${amenities}</p>` : ''}
                ${cafe.notes ? `<p><strong>📝 Notes:</strong> ${cafe.notes}</p>` : ''}
            </div>
        `;
    }

    showError(message) {
        const resultDisplay = document.getElementById('result-display');
        if (!resultDisplay) return;

        resultDisplay.innerHTML = `
            <div class="result-card" style="border-color: var(--error-500); background: #fef2f2;">
                <h3 style="color: var(--error-500);">❌ Error</h3>
                <p>${message}</p>
            </div>
        `;
    }

    showAddCafeModal() {
        this.currentEditId = null;
        this.showModal('Add New Café');
    }

    async showEditCafeModal(cafeId) {
        try {
            const cafe = await this.cafeManager.getCafe(cafeId);
            if (!cafe) {
                this.showNotification('Café not found', 'error');
                return;
            }

            this.currentEditId = cafeId;
            this.showModal('Edit Café', cafe);
        } catch (error) {
            console.error('Error loading café for editing:', error);
            this.showNotification('Error loading café data', 'error');
        }
    }

    showModal(title, cafeData = null) {
        const modal = document.getElementById('cafe-modal');
        const modalOverlay = document.getElementById('modal-overlay');
        const modalTitle = document.getElementById('modal-title');
        const form = document.getElementById('cafe-form');
        const deleteBtn = document.getElementById('delete-cafe-btn');

        if (!modal || !modalOverlay || !modalTitle || !form || !deleteBtn) return;

        // Set title
        modalTitle.textContent = title;

        // Populate form if editing
        if (cafeData) {
            this.populateForm(cafeData);
            // Show and set up Delete button
            deleteBtn.style.display = 'inline-block';
            deleteBtn.onclick = async () => {
                await this.deleteCafe(this.currentEditId);
                this.closeModal();
            };
        } else {
            form.reset();
            // Hide Delete button
            deleteBtn.style.display = 'none';
            deleteBtn.onclick = null;
        }

        // Show modal
        modal.hidden = false;
        modalOverlay.hidden = false;
        document.body.style.overflow = 'hidden';

        // Focus first input
        const firstInput = form.querySelector('input, select');
        if (firstInput) {
            firstInput.focus();
        }
    }

    closeModal() {
        const modal = document.getElementById('cafe-modal');
        const modalOverlay = document.getElementById('modal-overlay');
        const deleteBtn = document.getElementById('delete-cafe-btn');
        if (deleteBtn) {
            deleteBtn.style.display = 'none';
            deleteBtn.onclick = null;
        }
        if (modal && modalOverlay) {
            modal.hidden = true;
            modalOverlay.hidden = true;
            document.body.style.overflow = '';
        }
        this.currentEditId = null;
    }

    populateForm(cafeData) {
        const form = document.getElementById('cafe-form');
        if (!form) return;

        // Set basic fields
        const nameInput = form.querySelector('#cafe-name');
        const locationInput = form.querySelector('#cafe-location');
        const ratingSelect = form.querySelector('#cafe-rating');
        const openingHoursInput = form.querySelector('#cafe-openingHours');
        const notesInput = form.querySelector('#cafe-notes');

        if (nameInput) nameInput.value = cafeData.name || '';
        if (locationInput) locationInput.value = cafeData.location || '';
        if (ratingSelect) ratingSelect.value = cafeData.rating || 5;
        if (openingHoursInput) openingHoursInput.value = cafeData.openingHours || '';
        if (notesInput) notesInput.value = cafeData.notes || '';

        // Set amenities checkboxes
        const amenityCheckboxes = form.querySelectorAll('input[name="amenities"]');
        amenityCheckboxes.forEach(checkbox => {
            checkbox.checked = cafeData.amenities && cafeData.amenities.includes(checkbox.value);
        });
    }

    async handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Validate required fields
        const name = formData.get('name')?.trim();
        const location = formData.get('location')?.trim();
        const openingHours = formData.get('openingHours')?.trim();
        const notes = formData.get('notes')?.trim();

        // Limit cafe name length
        const MAX_NAME_LENGTH = 40;
        if (name.length > MAX_NAME_LENGTH) {
            this.showNotification(`Café name must be at most ${MAX_NAME_LENGTH} characters.`, 'error');
            return;
        }

        if (!name || !location) {
            this.showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Collect amenities
        const amenities = [];
        const amenityCheckboxes = form.querySelectorAll('input[name="amenities"]:checked');
        amenityCheckboxes.forEach(checkbox => {
            amenities.push(checkbox.value);
        });

        const cafeData = {
            name: name,
            location: location,
            rating: parseInt(formData.get('rating')) || 5,
            amenities: amenities,
            notes: notes || '',
        };
        if (openingHours) {
            cafeData.openingHours = openingHours;
        }

        // Provide feedback about URL detection
        if (this.isUrl(location)) {
            const normalizedUrl = this.normalizeUrl(location);
            console.log('URL detected and normalized:', normalizedUrl);
        }

        console.log('Submitting café data:', cafeData);
        console.log('CafeManager instance:', this.cafeManager);

        try {
            let result;
            if (this.currentEditId) {
                result = await this.cafeManager.updateCafe(this.currentEditId, cafeData);
            } else {
                result = await this.cafeManager.addCafe(cafeData);
            }

            console.log('CafeManager result:', result);

            if (result && result.success) {
                this.closeModal();
                await this.refreshCafeList();
                
                // Enhanced success message with URL detection info
                let successMessage = this.currentEditId ? 'Café updated successfully!' : 'Café added successfully!';
                if (this.isUrl(location)) {
                    successMessage += ' (Direct link detected)';
                }
                
                this.showNotification(successMessage, 'success');
            } else {
                const errorMessage = result && result.error ? result.error : 'Failed to save café. Please try again.';
                console.error('Failed to save café:', result);
                this.showNotification(errorMessage, 'error');
            }
        } catch (error) {
            console.error('Error in form submission:', error);
            this.showNotification('An error occurred while saving the café. Please try again.', 'error');
        }
    }

    async refreshCafeList() {
        const cafeGrid = document.getElementById('cafe-grid');
        if (!cafeGrid) return;

        try {
            const cafes = await this.cafeManager.getCafes();
            
            if (cafes.length === 0) {
                cafeGrid.innerHTML = `
                    <div class="text-center" style="grid-column: 1 / -1; padding: var(--space-12); color: var(--neutral-500);">
                        <h3>No cafés added yet</h3>
                        <p>Click "Add Café" to get started!</p>
                    </div>
                `;
                return;
            }

            cafeGrid.innerHTML = cafes.map(cafe => this.createCafeCard(cafe)).join('');
        } catch (error) {
            console.error('Error refreshing café list:', error);
            cafeGrid.innerHTML = `
                <div class="text-center" style="grid-column: 1 / -1; padding: var(--space-12); color: var(--error-500);">
                    <h3>Error loading cafés</h3>
                    <p>Please refresh the page and try again.</p>
                </div>
            `;
        }
    }

    createCafeCard(cafe) {
        const amenities = this.formatAmenities(cafe.amenities);
        const rating = this.formatRating(cafe.rating);
        const excludedClass = cafe.isExcluded ? 'active' : '';

        // Opening hours dot logic
        let openDot = '';
        let openStatus = '';
        if (cafe.openingHours) {
            const match = cafe.openingHours.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
            let isOpen = false;
            if (match) {
                const now = new Date();
                const nowMinutes = now.getHours() * 60 + now.getMinutes();
                const openMinutes = parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
                const closeMinutes = parseInt(match[3], 10) * 60 + parseInt(match[4], 10);
                if (openMinutes < closeMinutes) {
                    isOpen = nowMinutes >= openMinutes && nowMinutes < closeMinutes;
                } else {
                    isOpen = nowMinutes >= openMinutes || nowMinutes < closeMinutes;
                }
            }
            openDot = `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${isOpen ? '#22c55e' : '#ff0000'};margin-right:0.5em;"></span>`;
            openStatus = `${openDot}${isOpen ? 'Now Open' : 'Closed'}`;
        }

        return `
            <div class="cafe-card${cafe.isExcluded ? ' excluded' : ''}" data-cafe-id="${cafe.id}">
                <div class="card-header">
                    <h3 class="cafe-name">${this.escapeHtml(cafe.name)}</h3>
                    <div class="card-actions">
                        <button class="exclude-btn ${excludedClass}"
                                onclick="ui.toggleExcluded('${cafe.id}')"
                                aria-label="Toggle exclusion">
                            👁️
                        </button>
                    </div>
                </div>
                <div class="card-content">
                    ${cafe.openingHours ? `<div class='cafe-opening-hours'>${openStatus}</div>` : ''}
                    ${rating ? `<div class="rating"><span class="stars">${rating}</span></div>` : ''}
                    ${amenities ? `<div class="amenities">${amenities}</div>` : ''}
                    ${cafe.notes ? `<div class="cafe-notes" style="margin-top:0.5em;color:var(--text-secondary);font-size:0.98em;"><strong>📝 Notes:</strong> ${this.escapeHtml(cafe.notes)}</div>` : ''}
                </div>
                <div class="card-footer">
                    <a href="${this.isUrl(cafe.location) ? this.normalizeUrl(cafe.location) : `https://maps.google.com/?q=${encodeURIComponent(cafe.location)}`}" 
                       class="maps-link" target="_blank"><strong>📍 Directions</strong></a>
                    <button class="edit-btn" onclick="ui.showEditCafeModal('${cafe.id}')">✏️ Edit</button>
                </div>
            </div>
        `;
    }

    async toggleExcluded(id) {
        try {
            const result = await this.cafeManager.toggleExcluded(id);
            if (result.success) {
                await this.refreshCafeList();
                this.showNotification('Exclusion status updated!', 'success');
            } else {
                this.showNotification(result.error || 'Failed to update exclusion status', 'error');
            }
        } catch (error) {
            console.error('Error toggling excluded:', error);
            this.showNotification('Error updating exclusion status', 'error');
        }
    }

    async deleteCafe(id) {
        if (confirm('Are you sure you want to delete this café?')) {
            try {
                const result = await this.cafeManager.deleteCafe(id);
                if (result.success) {
                    await this.refreshCafeList();
                    this.showNotification('Café deleted!', 'success');
                } else {
                    this.showNotification(result.error || 'Failed to delete café', 'error');
                }
            } catch (error) {
                console.error('Error deleting café:', error);
                this.showNotification('Error deleting café', 'error');
            }
        }
    }

    formatAmenities(amenities) {
        if (!amenities || amenities.length === 0) return '';

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

        return amenities
            .map(amenity => `<span class="amenity-badge">${amenityMap[amenity] || amenity}</span>`)
            .join('');
    }

    formatRating(rating) {
        if (!rating) return '';
        
        const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        return `${stars} (${rating}/5)`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    isUrl(text) {
        if (!text) return false;
        
        // Check for common URL patterns
        const urlPatterns = [
            /^https?:\/\//i,  // http:// or https://
            /^www\./i,        // www.
            /^maps\.google\./i, // Google Maps
            /^maps\.apple\./i,  // Apple Maps
            /^openstreetmap\./i, // OpenStreetMap
            /^bing\.com\/maps/i, // Bing Maps
            /^waze\.com/i,      // Waze
            /^yandex\.ru\/maps/i // Yandex Maps
        ];
        
        return urlPatterns.some(pattern => pattern.test(text.trim()));
    }

    normalizeUrl(url) {
        if (!url) return url;
        
        let normalizedUrl = url.trim();
        
        // Add https:// if no protocol is specified
        if (!/^https?:\/\//i.test(normalizedUrl)) {
            normalizedUrl = 'https://' + normalizedUrl;
        }
        
        return normalizedUrl;
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        const bgColor = type === 'success' ? 'var(--success-500)' : 
                       type === 'error' ? 'var(--error-500)' : 
                       type === 'warning' ? 'var(--warning-500)' : 
                       'var(--info-500)';

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: var(--space-3) var(--space-4);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 1001;
            font-weight: 500;
            max-width: 300px;
            animation: slideIn 0.3s ease;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Utility methods for external access
    handleResize() {
        // Handle responsive behavior if needed
    }

    closeAllModals() {
        this.closeModal();
    }

    setupHowToModal() {
        const howtoModal = document.getElementById('howto-modal');
        const howtoClose = document.getElementById('howto-close');
        const howtoDontShow = document.getElementById('howto-dontshow');
        // Show on first visit unless suppressed
        if (!localStorage.getItem('howtoDontShow')) {
            howtoModal.hidden = false;
        }
        // Close button
        if (howtoClose) {
            howtoClose.onclick = () => {
                howtoModal.hidden = true;
                if (howtoDontShow && howtoDontShow.checked) {
                    localStorage.setItem('howtoDontShow', '1');
                }
            };
        }
        // Checkbox
        if (howtoDontShow) {
            howtoDontShow.onchange = () => {
                if (howtoDontShow.checked) {
                    localStorage.setItem('howtoDontShow', '1');
                } else {
                    localStorage.removeItem('howtoDontShow');
                }
            };
        }
        // Expose for settings
        window.showHowToModal = () => {
            howtoModal.hidden = false;
        };
    }

    showHowToModal() {
        const howtoModal = document.getElementById('howto-modal');
        if (howtoModal) howtoModal.hidden = false;
    }
}

/**
 * Render user cafés as markers on a Leaflet map.
 * @param {L.Map} map - The Leaflet map instance.
 * @param {Array} cafes - Array of café objects.
 * @param {Function} onEdit - Callback when Edit is clicked, receives cafe object.
 */
function renderCafeMarkersOnMap(map, cafes, onEdit) {
  if (!window.L || !map) return;
  cafes.forEach(cafe => {
    if (cafe.latitude && cafe.longitude) {
      const marker = L.marker([cafe.latitude, cafe.longitude]).addTo(map);
      let notes = cafe.notes ? `<div style='margin-top:0.5em; color:#888;'>${cafe.notes}</div>` : '';
      marker.bindPopup(
        `<b>${cafe.name}</b>${notes}<br><button class='edit-cafe-btn' data-cafe-id='${cafe.id}'>Edit</button>`
      );
      marker.on('popupopen', function() {
        setTimeout(() => {
          const btn = document.querySelector('.edit-cafe-btn[data-cafe-id="' + cafe.id + '"]');
          if (btn) btn.onclick = () => onEdit(cafe);
        }, 100);
      });
    }
  });
}

// Add slideOut animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style); 
/**
 * Performance Optimization Module
 * Handles performance monitoring, optimization, and lazy loading
 */

class PerformanceOptimizer {
    constructor() {
        this.metrics = {
            loadTime: 0,
            renderTime: 0,
            memoryUsage: 0,
            lastUpdate: Date.now()
        };
        this.observers = [];
        this.init();
    }

    init() {
        this.setupPerformanceMonitoring();
        this.setupLazyLoading();
        this.optimizeAnimations();
    }

    /**
     * Setup performance monitoring
     */
    setupPerformanceMonitoring() {
        // Monitor page load performance
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                this.metrics.loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                this.logPerformance('Page Load', this.metrics.loadTime);
            });
        }

        // Monitor memory usage (if available)
        if ('memory' in performance) {
            setInterval(() => {
                this.metrics.memoryUsage = performance.memory.usedJSHeapSize;
                this.metrics.lastUpdate = Date.now();
            }, 30000); // Check every 30 seconds
        }
    }

    /**
     * Setup lazy loading for images and heavy content
     */
    setupLazyLoading() {
        // Intersection Observer for lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            // Observe all lazy images
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Optimize animations for performance
     */
    optimizeAnimations() {
        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--transition-fast', '0s');
            document.documentElement.style.setProperty('--transition-normal', '0s');
            document.documentElement.style.setProperty('--transition-slow', '0s');
        }

        // Use requestAnimationFrame for smooth animations
        this.optimizeShuffleAnimation();
    }

    /**
     * Optimize shuffle button animation
     */
    optimizeShuffleAnimation() {
        const shuffleBtn = document.getElementById('shuffle-btn');
        if (!shuffleBtn) return;

        let animationId;
        let startTime;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;

            // Smooth pulse animation
            const scale = 1 + Math.sin(elapsed * 0.01) * 0.05;
            shuffleBtn.style.transform = `scale(${scale})`;

            if (shuffleBtn.classList.contains('loading')) {
                animationId = requestAnimationFrame(animate);
            } else {
                shuffleBtn.style.transform = 'scale(1)';
            }
        };

        // Override the loading animation
        const originalAddClass = shuffleBtn.classList.add.bind(shuffleBtn.classList);
        shuffleBtn.classList.add = function(...args) {
            originalAddClass(...args);
            if (args.includes('loading')) {
                animationId = requestAnimationFrame(animate);
            }
        };

        const originalRemoveClass = shuffleBtn.classList.remove.bind(shuffleBtn.classList);
        shuffleBtn.classList.remove = function(...args) {
            originalRemoveClass(...args);
            if (args.includes('loading')) {
                cancelAnimationFrame(animationId);
                shuffleBtn.style.transform = 'scale(1)';
            }
        };
    }

    /**
     * Debounce function for performance
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Throttle function for performance
     */
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Log performance metrics
     */
    logPerformance(operation, duration) {

        
        // Store in localStorage for analysis
        const perfLog = JSON.parse(localStorage.getItem('cafe-perf-log') || '[]');
        perfLog.push({
            operation,
            duration,
            timestamp: Date.now()
        });

        // Keep only last 100 entries
        if (perfLog.length > 100) {
            perfLog.splice(0, perfLog.length - 100);
        }

        localStorage.setItem('cafe-perf-log', JSON.stringify(perfLog));
    }

    /**
     * Get performance report
     */
    getPerformanceReport() {
        const perfLog = JSON.parse(localStorage.getItem('cafe-perf-log') || '[]');
        const operations = {};
        
        perfLog.forEach(entry => {
            if (!operations[entry.operation]) {
                operations[entry.operation] = [];
            }
            operations[entry.operation].push(entry.duration);
        });

        const report = {};
        Object.keys(operations).forEach(op => {
            const durations = operations[op];
            report[op] = {
                count: durations.length,
                average: durations.reduce((a, b) => a + b, 0) / durations.length,
                min: Math.min(...durations),
                max: Math.max(...durations)
            };
        });

        return report;
    }

    /**
     * Clear performance logs
     */
    clearPerformanceLogs() {
        localStorage.removeItem('cafe-perf-log');
    }

    /**
     * Optimize DOM operations
     */
    optimizeDOMOperations() {
        // Use DocumentFragment for batch DOM updates
        this.createFragment = (elements) => {
            const fragment = document.createDocumentFragment();
            elements.forEach(element => fragment.appendChild(element));
            return fragment;
        };

        // Batch café list updates
        this.batchUpdateCafeList = (cafes) => {
            const cafeGrid = document.getElementById('cafe-grid');
            if (!cafeGrid) return;

            // Clear existing content
            cafeGrid.innerHTML = '';

            // Create all café cards
            const cafeCards = cafes.map(cafe => this.createCafeCardElement(cafe));
            
            // Batch append
            const fragment = this.createFragment(cafeCards);
            cafeGrid.appendChild(fragment);
        };
    }

    /**
     * Create café card element (optimized)
     */
    createCafeCardElement(cafe) {
        const card = document.createElement('div');
        card.className = 'cafe-card';
        card.dataset.cafeId = cafe.id;
        
        // Use template literals for better performance
        card.innerHTML = `
            <div class="card-header">
                <h3 class="cafe-name">${this.escapeHtml(cafe.name)}</h3>
                <div class="card-actions">
                    <button class="favorite-btn ${cafe.isFavorite ? 'active' : ''}" 
                            data-action="favorite" data-id="${cafe.id}" 
                            aria-label="${cafe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                        ${cafe.isFavorite ? '❤️' : '🤍'}
                    </button>
                    <button class="exclude-btn ${cafe.isExcluded ? 'active' : ''}" 
                            data-action="exclude" data-id="${cafe.id}"
                            aria-label="${cafe.isExcluded ? 'Include in selection' : 'Exclude from selection'}">
                        ${cafe.isExcluded ? '🚫' : '✅'}
                    </button>
                </div>
            </div>
            <div class="card-content">
                <p class="cafe-location">📍 ${this.escapeHtml(cafe.location)}</p>
                ${this.renderAmenities(cafe.amenities)}
                ${this.renderRating(cafe.rating)}
            </div>
            <div class="card-footer">
                <button class="edit-btn" data-action="edit" data-id="${cafe.id}">
                    ✏️ Edit
                </button>
                <button class="maps-link" onclick="window.open('https://maps.google.com/?q=${encodeURIComponent(cafe.location)}', '_blank')">
                    🗺️ Maps
                </button>
            </div>
        `;

        return card;
    }

    /**
     * Render amenities (optimized)
     */
    renderAmenities(amenities) {
        if (!amenities || amenities.length === 0) return '';
        
        const amenityIcons = {
            wifi: '📶',
            power: '🔌',
            quiet: '🤫',
            food: '🍽️'
        };

        const amenityLabels = {
            wifi: 'Wi-Fi',
            power: 'Power',
            quiet: 'Quiet',
            food: 'Food'
        };

        const amenityElements = amenities.map(amenity => 
            `<span class="amenity">${amenityIcons[amenity] || '•'} ${amenityLabels[amenity] || amenity}</span>`
        ).join('');

        return `<div class="amenities">${amenityElements}</div>`;
    }

    /**
     * Render rating (optimized)
     */
    renderRating(rating) {
        if (!rating) return '';
        
        const stars = '⭐'.repeat(rating);
        return `<div class="rating"><span class="stars">${stars}</span> <span class="rating-text">${rating}/5</span></div>`;
    }

    /**
     * Escape HTML for security
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize performance optimizer
const performanceOptimizer = new PerformanceOptimizer(); 
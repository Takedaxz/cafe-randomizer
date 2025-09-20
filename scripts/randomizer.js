/**
 * Randomizer - Business Logic
 * Handles weighted random selection algorithm and selection logic
 */

class Randomizer {
    constructor(cafeManager) {
        this.cafeManager = cafeManager;
    }

    /**
     * Get a random café with weighted selection
     */
    async getRandomCafe() {
        try {
            const eligibleCafes = await this.cafeManager.getEligibleCafes();
            if (eligibleCafes.length === 0) {
                return { success: false, error: 'No cafés available for selection' };
            }
            // Only shuffle from open cafes
            const openCafes = eligibleCafes.filter(cafe => isCafeOpenNow(cafe.openingHours));
            if (openCafes.length === 0) {
                return { success: false, error: 'No open cafés available for selection' };
            }
            // Create weighted selection pool
            const selectionPool = this.createWeightedPool(openCafes);
            if (selectionPool.length === 0) {
                return { success: false, error: 'No cafés in selection pool' };
            }
            // Select random café from pool
            const selectedCafe = this.selectFromPool(selectionPool);
            // Update last visited and add to history
            await this.cafeManager.updateLastVisited(selectedCafe.id);
            await this.cafeManager.addToHistory(selectedCafe.id);
            // Update total selections count
            await this.updateSelectionCount();
            return {
                success: true, 
                cafe: selectedCafe,
                poolSize: selectionPool.length,
                totalEligible: openCafes.length
            };
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Create selection pool
     */
    createWeightedPool(cafes) {
        return [...cafes]; // Return all cafés equally
    }

    /**
     * Select random café from pool
     */
    selectFromPool(pool) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        return pool[randomIndex];
    }

    /**
     * Get selection statistics
     */
    async getSelectionStats() {
        const cafes = await this.cafeManager.getCafes();
        const eligibleCafes = await this.cafeManager.getEligibleCafes();
        const favoriteCafes = await this.cafeManager.getFavoriteCafes();
        const preferences = await this.cafeManager.getPreferences();

        const totalCafes = cafes.length;
        const eligibleCount = eligibleCafes.length;
        const favoriteCount = favoriteCafes.length;
        const excludedCount = totalCafes - eligibleCount;

        // Calculate effective pool size
        const effectivePoolSize = this.calculateEffectivePoolSize(eligibleCafes);

        return {
            totalCafes,
            eligibleCount,
            favoriteCount,
            excludedCount,
            effectivePoolSize: eligibleCount,
            totalSelections: preferences.totalSelections || 0
        };
    }

    /**
     * Calculate effective pool size
     */
    calculateEffectivePoolSize(cafes) {
        return cafes.length; // All cafés have equal weight
    }

    /**
     * Get selection probability for each café
     */
    async getSelectionProbabilities() {
        const eligibleCafes = await this.cafeManager.getEligibleCafes();
        const poolSize = eligibleCafes.length;
        
        return eligibleCafes.map(cafe => {
            const probability = (1 / poolSize) * 100;
            return {
                cafe,
                weight: 1,
                probability: Math.round(probability * 10) / 10 // Round to 2 places
            };
        }).sort((a, b) => b.probability - a.probability); // Sort by probability descending
    }

    /**
     * Simulate multiple selections for testing
     */
    async simulateSelections(count = 1000) {
        const results = {};
        const eligibleCafes = await this.cafeManager.getEligibleCafes();
        
        // Initialize results
        eligibleCafes.forEach(cafe => {
            results[cafe.id] = {
                cafe: cafe,
                selections: 0,
                percentage: 0
            };
        });

        // Run simulations
        for (let i = 0; i < count; i++) {
            const result = await this.getRandomCafe();
            if (result.success) {
                results[result.cafe.id].selections++;
            }
        }

        // Calculate percentages
        Object.values(results).forEach(result => {
            result.percentage = Math.round((result.selections / count) * 100);
        });

        return {
            simulations: count,
            results: Object.values(results).sort((a, b) => b.selections - a.selections)
        };
    }

    /**
     * Update selection count in preferences
     */
    async updateSelectionCount() {
        const preferences = await this.cafeManager.getPreferences();
        const newCount = (preferences.totalSelections || 0) + 1;
        await this.cafeManager.updatePreferences({ totalSelections: newCount });
    }



    /**
     * Reset selection count
     */
    async resetSelectionCount() {
        await this.cafeManager.updatePreferences({ totalSelections: 0 });
        return { success: true };
    }

    /**
     * Get recent selection history
     */
    async getRecentSelections(limit = 10) {
        const history = await this.cafeManager.getHistory();
        const recentSelections = history.slice(0, limit);
        
        const results = [];
        for (const entry of recentSelections) {
            const cafe = await this.cafeManager.getCafeById(entry.cafeId);
            if (cafe) {
                results.push({
                    cafe: cafe,
                    timestamp: entry.timestamp,
                    date: new Date(entry.timestamp)
                });
            }
        }
        
        return results;
    }

    /**
     * Get selection frequency analysis
     */
    async getSelectionFrequency() {
        const history = await this.cafeManager.getHistory();
        const frequency = {};
        
        history.forEach(entry => {
            if (frequency[entry.cafeId]) {
                frequency[entry.cafeId]++;
            } else {
                frequency[entry.cafeId] = 1;
            }
        });

        const results = [];
        for (const [cafeId, count] of Object.entries(frequency)) {
            const cafe = await this.cafeManager.getCafeById(cafeId);
            if (cafe) {
                results.push({
                    cafe: cafe,
                    selections: count,
                    percentage: Math.round((count / history.length) * 100)
                });
            }
        }
        
        return results.sort((a, b) => b.selections - a.selections);
    }
}

function isCafeOpenNow(openingHours) {
    if (!openingHours) return true; // If no hours, treat as always open
    const match = openingHours.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
    if (!match) return true;
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
    const closeMinutes = parseInt(match[3], 10) * 60 + parseInt(match[4], 10);
    if (openMinutes < closeMinutes) {
        return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
    } else {
        return nowMinutes >= openMinutes || nowMinutes < closeMinutes;
    }
}

// Export for use in other modules
window.Randomizer = Randomizer; 
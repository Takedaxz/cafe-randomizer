/**
 * Café Manager - Data Layer using IndexedDB
 * Handles all café CRUD operations and database persistence
 */

class CafeManager {
    constructor() {
        this.database = new DatabaseManager();
        this.isInitialized = false;
    }

    /**
     * Initialize the database
     */
    async init() {
        if (this.isInitialized) return;
        
        try {
            await this.database.init();
            this.isInitialized = true;

        } catch (error) {

            throw error;
        }
    }

    /**
     * Get all cafés from database
     */
    async getCafes() {
        await this.init();
        try {
            return await this.database.getCafes();
        } catch (error) {

            return [];
        }
    }

    /**
     * Get a specific café by ID
     */
    async getCafeById(id) {
        await this.init();
        try {
            return await this.database.getCafe(id);
        } catch (error) {

            return null;
        }
    }

    /**
     * Get a specific café by ID (alias for getCafeById)
     */
    async getCafe(id) {
        return await this.getCafeById(id);
    }

    /**
     * Add a new café
     */
    async addCafe(cafeData) {
        await this.init();
        try {

            const result = await this.database.addCafe(cafeData);

            return result;
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Update an existing café
     */
    async updateCafe(id, updates) {
        await this.init();
        try {

            const result = await this.database.updateCafe(id, updates);

            return result;
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Delete a café
     */
    async deleteCafe(id) {
        await this.init();
        try {

            const result = await this.database.deleteCafe(id);

            return result;
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Toggle favorite status
     */
    async toggleFavorite(id) {
        await this.init();
        try {
            const cafe = await this.getCafeById(id);
            if (!cafe) {
                return { success: false, error: 'Café not found' };
            }
            return await this.updateCafe(id, { isFavorite: !cafe.isFavorite });
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Toggle excluded status
     */
    async toggleExcluded(id) {
        await this.init();
        try {
            const cafe = await this.getCafeById(id);
            if (!cafe) {
                return { success: false, error: 'Café not found' };
            }
            return await this.updateCafe(id, { isExcluded: !cafe.isExcluded });
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Get eligible cafés (not excluded)
     */
    async getEligibleCafes() {
        await this.init();
        try {
            const cafes = await this.getCafes();
            return cafes.filter(cafe => !cafe.isExcluded);
        } catch (error) {

            return [];
        }
    }

    /**
     * Get favorite cafés
     */
    async getFavoriteCafes() {
        await this.init();
        try {
            const cafes = await this.getCafes();
            return cafes.filter(cafe => cafe.isFavorite);
        } catch (error) {

            return [];
        }
    }

    /**
     * Update last visited timestamp
     */
    async updateLastVisited(id) {
        await this.init();
        try {
            return await this.updateCafe(id, { lastVisited: new Date().toISOString() });
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Get preferences
     */
    async getPreferences() {
        await this.init();
        try {
            return await this.database.getPreferences();
        } catch (error) {

            return {
                theme: 'light',
                lastUsed: new Date().toISOString(),
                totalSelections: 0
            };
        }
    }

    /**
     * Update preferences
     */
    async updatePreferences(preferences) {
        await this.init();
        try {
            return await this.database.updatePreferences(preferences);
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Set preferences
     */
    async setPreferences(preferences) {
        return await this.updatePreferences(preferences);
    }

    /**
     * Import cafés from array
     */
    async importCafes(cafes) {
        await this.init();
        try {
            // Clear existing cafés
            const existingCafes = await this.getCafes();
            for (const cafe of existingCafes) {
                await this.deleteCafe(cafe.id);
            }
            
            // Add new cafés
            for (const cafe of cafes) {
                await this.addCafe(cafe);
            }
            
            return { success: true };
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Add to selection history
     */
    async addToHistory(cafeId) {
        await this.init();
        try {
            return await this.database.addToHistory(cafeId);
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Get selection history
     */
    async getHistory() {
        await this.init();
        try {
            return await this.database.getHistory();
        } catch (error) {

            return [];
        }
    }

    /**
     * Export data as JSON
     */
    async exportData() {
        await this.init();
        try {
            return await this.database.exportData();
        } catch (error) {

            return null;
        }
    }

    /**
     * Import data from JSON
     */
    async importData(jsonData) {
        await this.init();
        try {
            return await this.database.importData(jsonData);
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Clear all data
     */
    async clearAllData() {
        await this.init();
        try {
            return await this.database.clearAllData();
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Reset database completely (delete and recreate)
     */
    async resetDatabase() {
        try {
            return await this.database.resetDatabase();
        } catch (error) {

            return { success: false, error: error.message };
        }
    }

    /**
     * Generate unique ID
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Legacy methods for compatibility (synchronous versions that return promises)
    getCafesSync() {
        return this.getCafes();
    }

    addCafeSync(cafeData) {
        return this.addCafe(cafeData);
    }

    updateCafeSync(id, updates) {
        return this.updateCafe(id, updates);
    }

    deleteCafeSync(id) {
        return this.deleteCafe(id);
    }

    toggleFavoriteSync(id) {
        return this.toggleFavorite(id);
    }

    toggleExcludedSync(id) {
        return this.toggleExcluded(id);
    }

    getPreferencesSync() {
        return this.getPreferences();
    }

    updatePreferencesSync(preferences) {
        return this.updatePreferences(preferences);
    }
}

// Export for use in other modules
window.CafeManager = CafeManager; 
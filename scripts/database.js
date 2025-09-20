/**
 * Database Manager using IndexedDB
 * Provides reliable, persistent storage for the Café Randomizer app
 */

class DatabaseManager {
    constructor() {
        this.dbName = 'CafeRandomizerDB';
        this.dbVersion = 1;
        this.db = null;
        this.isReady = false;
    }

    /**
     * Initialize the database
     */
    async init() {
        if (this.isReady && this.db) return;
        
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {

                this.isReady = false;
                this.db = null;
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                this.isReady = true;

                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create cafes store
                if (!db.objectStoreNames.contains('cafes')) {
                    const cafesStore = db.createObjectStore('cafes', { keyPath: 'id' });
                    cafesStore.createIndex('name', 'name', { unique: false });
                    cafesStore.createIndex('location', 'location', { unique: false });

                }

                // Create preferences store
                if (!db.objectStoreNames.contains('preferences')) {
                    const preferencesStore = db.createObjectStore('preferences', { keyPath: 'key' });

                }

                // Create history store
                if (!db.objectStoreNames.contains('history')) {
                    const historyStore = db.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
                    historyStore.createIndex('cafeId', 'cafeId', { unique: false });
                    historyStore.createIndex('timestamp', 'timestamp', { unique: false });

                }
            };
        });
    }

    /**
     * Get all cafés
     */
    async getCafes() {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            try {
                const transaction = this.db.transaction(['cafes'], 'readonly');
                const store = transaction.objectStore('cafes');
                const request = store.getAll();

                request.onsuccess = () => {
                    const cafes = request.result || [];

                    resolve(cafes);
                };

                request.onerror = () => {

                    reject(request.error);
                };
            } catch (error) {

                reject(error);
            }
        });
    }

    /**
     * Get a specific café by ID
     */
    async getCafe(id) {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['cafes'], 'readonly');
            const store = transaction.objectStore('cafes');
            const request = store.get(id);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {

                reject(request.error);
            };
        });
    }

    /**
     * Add a new café
     */
    async addCafe(cafeData) {
        if (!this.isReady) await this.init();
        
        // Validate input data
        if (!cafeData || typeof cafeData !== 'object') {
            return Promise.reject({ success: false, error: 'Invalid café data provided' });
        }
        
        if (!cafeData.name || typeof cafeData.name !== 'string' || cafeData.name.trim() === '') {
            return Promise.reject({ success: false, error: 'Café name is required' });
        }
        
        if (!cafeData.location || typeof cafeData.location !== 'string' || cafeData.location.trim() === '') {
            return Promise.reject({ success: false, error: 'Café location is required' });
        }
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['cafes'], 'readwrite');
            const store = transaction.objectStore('cafes');

            const cafe = {
                id: this.generateId(),
                name: this.sanitizeInput(cafeData.name.trim()),
                location: cafeData.location.trim(),
                rating: parseInt(cafeData.rating) || 5,
                amenities: Array.isArray(cafeData.amenities) ? cafeData.amenities : [],
                isFavorite: false,
                isExcluded: false,
                dateAdded: new Date().toISOString(),
                lastVisited: null,
                notes: cafeData.notes ? this.sanitizeInput(cafeData.notes.trim()) : '',
                ...(cafeData.openingHours ? { openingHours: this.sanitizeInput(cafeData.openingHours.trim()) } : {})
            };

            const request = store.add(cafe);

            request.onsuccess = () => {

                resolve({ success: true, cafe });
            };

            request.onerror = () => {

                reject({ success: false, error: request.error.message });
            };
        });
    }

    /**
     * Update an existing café
     */
    async updateCafe(id, updates) {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['cafes'], 'readwrite');
            const store = transaction.objectStore('cafes');

            // First get the existing café
            const getRequest = store.get(id);

            getRequest.onsuccess = () => {
                if (!getRequest.result) {
                    reject({ success: false, error: 'Café not found' });
                    return;
                }

                const updatedCafe = { ...getRequest.result, ...updates };
                const updateRequest = store.put(updatedCafe);

                updateRequest.onsuccess = () => {

                    resolve({ success: true, cafe: updatedCafe });
                };

                updateRequest.onerror = () => {

                    reject({ success: false, error: updateRequest.error.message });
                };
            };

            getRequest.onerror = () => {

                reject({ success: false, error: getRequest.error.message });
            };
        });
    }

    /**
     * Delete a café
     */
    async deleteCafe(id) {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['cafes'], 'readwrite');
            const store = transaction.objectStore('cafes');
            const request = store.delete(id);

            request.onsuccess = () => {

                resolve({ success: true });
            };

            request.onerror = () => {

                reject({ success: false, error: request.error.message });
            };
        });
    }

    /**
     * Get preferences
     */
    async getPreferences() {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['preferences'], 'readonly');
            const store = transaction.objectStore('preferences');
            const request = store.getAll();

            request.onsuccess = () => {
                const preferences = {};
                request.result.forEach(item => {
                    preferences[item.key] = item.value;
                });
                
                // Set defaults if missing
                
                if (!preferences.theme) preferences.theme = 'light';
                if (!preferences.lastUsed) preferences.lastUsed = new Date().toISOString();
                if (!preferences.totalSelections) preferences.totalSelections = 0;
                

                resolve(preferences);
            };

            request.onerror = () => {

                reject(request.error);
            };
        });
    }

    /**
     * Update preferences
     */
    async updatePreferences(preferences) {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['preferences'], 'readwrite');
            const store = transaction.objectStore('preferences');

            const promises = Object.entries(preferences).map(([key, value]) => {
                return new Promise((res, rej) => {
                    const request = store.put({ key, value });
                    request.onsuccess = () => res();
                    request.onerror = () => rej(request.error);
                });
            });

            Promise.all(promises)
                .then(() => {

                    resolve({ success: true });
                })
                .catch(error => {

                    reject({ success: false, error: error.message });
                });
        });
    }

    /**
     * Add to history
     */
    async addToHistory(cafeId) {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['history'], 'readwrite');
            const store = transaction.objectStore('history');

            const historyEntry = {
                cafeId,
                timestamp: new Date().toISOString()
            };

            const request = store.add(historyEntry);

            request.onsuccess = () => {

                resolve({ success: true });
            };

            request.onerror = () => {

                reject({ success: false, error: request.error.message });
            };
        });
    }

    /**
     * Get history
     */
    async getHistory() {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['history'], 'readonly');
            const store = transaction.objectStore('history');
            const request = store.getAll();

            request.onsuccess = () => {
                const history = request.result || [];
                // Sort by timestamp descending (newest first)
                history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

                resolve(history);
            };

            request.onerror = () => {

                reject(request.error);
            };
        });
    }

    /**
     * Reset database completely (delete and recreate)
     */
    async resetDatabase() {
        return new Promise((resolve, reject) => {
            // Close existing connection
            if (this.db) {
                this.db.close();
                this.db = null;
                this.isReady = false;
            }

            // Delete the database
            const deleteRequest = indexedDB.deleteDatabase(this.dbName);
            
            deleteRequest.onerror = () => {

                reject(deleteRequest.error);
            };

            deleteRequest.onsuccess = () => {

                
                // Recreate the database
                this.init()
                    .then(() => {

                        resolve({ success: true });
                    })
                    .catch(error => {

                        reject(error);
                    });
            };
        });
    }

    /**
     * Clear all data
     */
    async clearAllData() {
        if (!this.isReady) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['cafes', 'preferences', 'history'], 'readwrite');
            
            const cafesStore = transaction.objectStore('cafes');
            const preferencesStore = transaction.objectStore('preferences');
            const historyStore = transaction.objectStore('history');

            const cafesRequest = cafesStore.clear();
            const preferencesRequest = preferencesStore.clear();
            const historyRequest = historyStore.clear();

            Promise.all([
                new Promise((res, rej) => {
                    cafesRequest.onsuccess = res;
                    cafesRequest.onerror = rej;
                }),
                new Promise((res, rej) => {
                    preferencesRequest.onsuccess = res;
                    preferencesRequest.onerror = rej;
                }),
                new Promise((res, rej) => {
                    historyRequest.onsuccess = res;
                    historyRequest.onerror = rej;
                })
            ])
            .then(() => {

                resolve({ success: true });
            })
            .catch(error => {

                reject({ success: false, error: error.message });
            });
        });
    }

    /**
     * Export all data
     */
    async exportData() {
        if (!this.isReady) await this.init();
        
        try {
            const [cafes, preferences, history] = await Promise.all([
                this.getCafes(),
                this.getPreferences(),
                this.getHistory()
            ]);

            const exportData = {
                version: '1.0',
                timestamp: new Date().toISOString(),
                cafes,
                preferences,
                history
            };


            return JSON.stringify(exportData, null, 2);
        } catch (error) {

            throw error;
        }
    }

    /**
     * Import data
     */
    async importData(jsonData) {
        if (!this.isReady) await this.init();
        
        try {
            const data = JSON.parse(jsonData);
            
            // Clear existing data
            await this.clearAllData();

            // Import cafés
            if (data.cafes && Array.isArray(data.cafes)) {
                for (const cafe of data.cafes) {
                    await this.addCafe(cafe);
                }
            }

            // Import preferences
            if (data.preferences && typeof data.preferences === 'object') {
                await this.updatePreferences(data.preferences);
            }

            // Import history
            if (data.history && Array.isArray(data.history)) {
                for (const entry of data.history) {
                    await this.addToHistory(entry.cafeId);
                }
            }


            return { success: true };
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

    /**
     * Sanitize user input to prevent XSS
     */
    sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        
        // Use browser's DOM parser for safe HTML stripping
        const temp = document.createElement('div');
        temp.textContent = input;
        return temp.textContent;
    }
}

// Export for use in other modules
window.DatabaseManager = DatabaseManager; 
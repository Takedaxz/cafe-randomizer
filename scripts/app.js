/**
 * Main Application Controller
 * Initializes and coordinates all application modules
 */

class CafeRandomizerApp {
    constructor() {
        this.cafeManager = null;
        this.randomizer = null;
        this.uiController = null;
        this.isInitialized = false;
        this.resizeTimeout = null;
    }

    /**
     * Initialize the application
     */
    async init() {
        try {


            // Initialize core modules
            this.cafeManager = new CafeManager();
            this.randomizer = new Randomizer(this.cafeManager);
            this.uiController = new UIController(this.cafeManager, this.randomizer);

            // Initialize UI
            await this.uiController.init();

            // Set up event listeners
            this.setupEventListeners();

            // Load initial data
            await this.loadInitialData();

            // Mark as initialized
            this.isInitialized = true;


            this.showWelcomeMessage();

        } catch (error) {

            this.showErrorMessage('Failed to initialize application. Please refresh the page.');
        }
    }

    /**
     * Set up global event listeners
     */
    setupEventListeners() {
        // Handle settings button clicks
        const settingsBtn = document.querySelector('.settings-btn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => this.showSettings());
        }

        // Handle keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));

        // Handle window resize for responsive design
        window.addEventListener('resize', () => this.handleResize());

        // Handle beforeunload for data persistence
        window.addEventListener('beforeunload', () => this.handleBeforeUnload());
    }

    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(e) {
        // Space bar or Enter to shuffle (when not in input)
        if ((e.code === 'Space' || e.code === 'Enter') && !this.isInputFocused()) {
            e.preventDefault();
            this.uiController.handleShuffle();
        }

        // Escape to close modals
        if (e.code === 'Escape') {
            this.uiController.closeAllModals();
        }

        // Ctrl/Cmd + N to add new café
        if ((e.ctrlKey || e.metaKey) && e.code === 'KeyN') {
            e.preventDefault();
            this.uiController.showAddCafeModal();
        }

        // Ctrl/Cmd + S to open settings
        if ((e.ctrlKey || e.metaKey) && e.code === 'KeyS') {
            e.preventDefault();
            this.showSettings();
        }
    }

    /**
     * Check if any input element is focused
     */
    isInputFocused() {
        const activeElement = document.activeElement;
        return activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.tagName === 'SELECT' ||
            activeElement.contentEditable === true
        );
    }

    /**
     * Handle window resize
     */
    handleResize() {
        // Debounce resize events
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.uiController.handleResize();
        }, 250);
    }

    /**
     * Handle before unload
     */
    handleBeforeUnload() {
        // Data is automatically saved by IndexedDB
        // No manual save needed
    }

    /**
     * Load initial data and setup
     */
    async loadInitialData() {
        try {

            
            // Load preferences
            const preferences = await this.cafeManager.getPreferences();

            // Load and apply theme
            const savedTheme = preferences.theme || 'light';
            await this.setTheme(savedTheme);

            // Load and display cafés
            await this.uiController.refreshCafeList();

            // Show stats if available
            await this.updateStats();
            

        } catch (error) {

            this.showErrorMessage('Failed to load data. Please refresh the page.');
        }
    }

    /**
     * Update application statistics
     */
    async updateStats() {
        try {
            const stats = await this.randomizer.getSelectionStats();
            
            // Update any stats display elements
            const statsElements = document.querySelectorAll('[data-stat]');
            statsElements.forEach(element => {
                const statType = element.dataset.stat;
                switch (statType) {
                    case 'total-cafes':
                        element.textContent = stats.totalCafes;
                        break;
                    case 'eligible-cafes':
                        element.textContent = stats.eligibleCount;
                        break;
                    case 'favorite-cafes':
                        element.textContent = stats.favoriteCount;
                        break;
                    case 'total-selections':
                        element.textContent = stats.totalSelections;
                        break;
                }
            });
        } catch (error) {
            // Silently handle stats error
        }
    }

    /**
     * Show settings panel
     */
    async showSettings() {
        try {
            const stats = await this.randomizer.getSelectionStats();
            const preferences = await this.cafeManager.getPreferences();
            const currentTheme = preferences.theme || 'light';

            const settingsHtml = `
                <div class="settings-panel">
                <button class="primary-btn" id="settings-howto-toggle" style="width:100%;margin-bottom:1rem;">How to Use</button>
                    <div class="setting-group">
                        <label for="theme-toggle">Theme:</label>
                        <div class="theme-toggle">
                            <button class="theme-btn ${currentTheme === 'light' ? 'active' : ''}" data-theme="light">
                                Light
                            </button>
                            <button class="theme-btn ${currentTheme === 'dark' ? 'active' : ''}" data-theme="dark">
                                Dark
                            </button>
                        </div>
                    </div>
                    <div class="setting-group">
                        <label>Statistics:</label>
                        <p>Total Cafés: ${stats.totalCafes}</p>
                        <p>Eligible: ${stats.eligibleCount}</p>
                        <p>Favorites: ${stats.favoriteCount}</p>
                        <p>Total Selections: ${stats.totalSelections}</p>
                    </div>
                    <div class="setting-actions">
                        <button onclick="app.exportData()">Export Data</button>
                        <button onclick="app.importData()">Import Data</button>
                        <button onclick="app.resetData()">Reset All Data</button>
                    </div>
                </div>
            `;

            // Create a simple settings modal
            this.showSimpleModal('Settings', settingsHtml);
            
            // Add event listeners for theme toggle
            this.setupThemeToggle();
            
            // After injecting settingsHtml into the modal, attach event listener to open the How to Use modal
            const howtoToggle = document.getElementById('settings-howto-toggle');
            if (howtoToggle) {
                howtoToggle.addEventListener('click', function() {
                    const howtoModal = document.getElementById('howto-modal');
                    if (howtoModal) howtoModal.hidden = false;
                });
            }
            
        } catch (error) {
            this.showErrorMessage('Failed to load settings');
        }
    }

    /**
     * Set up theme toggle functionality
     */
    setupThemeToggle() {
        const themeButtons = document.querySelectorAll('.theme-toggle .theme-btn');
        themeButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const newTheme = button.dataset.theme;
                await this.setTheme(newTheme);
                this.uiController.showNotification(`Theme set to ${newTheme}`, 'info');
            });
        });
    }

    /**
     * Set the application theme
     */
    async setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        await this.cafeManager.setPreferences({ theme: theme });
        
        // Update theme buttons if settings modal is open
        const themeButtons = document.querySelectorAll('.theme-toggle .theme-btn');
        themeButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.theme === theme) {
                button.classList.add('active');
            }
        });
    }

    /**
     * Show a simple modal (fallback for settings)
     */
    showSimpleModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'simple-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: var(--modal-bg);
            padding: var(--space-6);
            border-radius: var(--radius-xl);
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transition: background-color var(--transition-fast);
        `;

        modalContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-4);">
                <h3 style="color: var(--text-primary); margin: 0; transition: color var(--transition-fast);">${title}</h3>
                <button onclick="this.closest('.simple-modal').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-secondary); padding: var(--space-1); border-radius: var(--radius-sm); transition: var(--transition-fast);">×</button>
            </div>
            ${content}
        `;

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Add hover effect to close button
        const closeButton = modalContent.querySelector('button');
        if (closeButton) {
            closeButton.addEventListener('mouseenter', () => {
                closeButton.style.color = 'var(--text-primary)';
                closeButton.style.backgroundColor = 'var(--button-hover)';
            });
            closeButton.addEventListener('mouseleave', () => {
                closeButton.style.color = 'var(--text-secondary)';
                closeButton.style.backgroundColor = 'transparent';
            });
        }

        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    /**
     * Export data to JSON file
     */
    async exportData() {
        try {
            const [cafes, preferences, stats] = await Promise.all([
                this.cafeManager.getCafes(),
                this.cafeManager.getPreferences(),
                this.randomizer.getSelectionStats()
            ]);

            const data = { cafes, preferences, stats };

            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `cafe-randomizer-data-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            this.uiController.showNotification('Data exported successfully!', 'success');
        } catch (error) {

            this.uiController.showNotification('Failed to export data', 'error');
        }
    }

    /**
     * Import data from JSON file
     */
    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        
                        if (data.cafes) {
                            await this.cafeManager.importCafes(data.cafes);
                        }
                        if (data.preferences) {
                            await this.cafeManager.setPreferences(data.preferences);
                        }
                        
                        await this.uiController.refreshCafeList();
                        await this.updateStats();
                        this.uiController.showNotification('Data imported successfully!', 'success');
                    } catch (error) {
                        this.uiController.showNotification('Failed to import data. Invalid file format.', 'error');
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }

    /**
     * Reset all data
     */
    async resetData() {
        if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
            try {
                await this.cafeManager.clearAllData();
                await this.uiController.refreshCafeList();
                await this.updateStats();
                this.uiController.showNotification('All data has been reset', 'success');
            } catch (error) {
                this.uiController.showNotification('Failed to reset data', 'error');
            }
        }
    }

    /**
     * Show welcome message
     */
    async showWelcomeMessage() {
        try {
            const cafes = await this.cafeManager.getCafes();
            if (cafes.length === 0) {
                this.uiController.showNotification('Welcome! Add your first café to get started.', 'info');
            }
        } catch (error) {
            // Silently handle welcome message error
        }
    }

    /**
     * Show success message
     */
    showSuccessMessage(message) {
        this.uiController.showNotification(message, 'success');
    }

    /**
     * Show error message
     */
    showErrorMessage(message) {
        this.uiController.showNotification(message, 'error');
    }

    /**
     * Show info message
     */
    showInfoMessage(message) {
        this.uiController.showNotification(message, 'info');
    }

    /**
     * Get singleton instance
     */
    static getInstance() {
        if (!CafeRandomizerApp.instance) {
            CafeRandomizerApp.instance = new CafeRandomizerApp();
        }
        return CafeRandomizerApp.instance;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = CafeRandomizerApp.getInstance();
    window.app.init().then(() => {
        // Set global UI reference for inline onclick handlers
        window.ui = window.app.uiController;
    });
});

// Export for use in other modules
window.CafeRandomizerApp = CafeRandomizerApp; 
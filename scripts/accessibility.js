/**
 * Accessibility Module
 * Ensures WCAG compliance and provides screen reader support
 */

class AccessibilityManager {
    constructor() {
        this.focusableElements = [];
        this.currentFocusIndex = 0;
        this.init();
    }

    init() {
        this.setupARIA();
        this.setupKeyboardNavigation();
        this.setupScreenReaderSupport();
        this.setupFocusManagement();
        this.setupColorContrast();
    }

    /**
     * Setup ARIA attributes and roles
     */
    setupARIA() {
        // Main application landmarks
        this.addLandmarks();
        
        // Form accessibility
        this.setupFormAccessibility();
        
        // Button accessibility
        this.setupButtonAccessibility();
        
        // Modal accessibility
        this.setupModalAccessibility();
    }

    /**
     * Add semantic landmarks
     */
    addLandmarks() {
        // Main content area
        const mainContent = document.querySelector('.main-content');
        if (mainContent && !mainContent.getAttribute('role')) {
            mainContent.setAttribute('role', 'main');
        }

        // Header
        const header = document.querySelector('.app-header');
        if (header && !header.getAttribute('role')) {
            header.setAttribute('role', 'banner');
        }

        // Navigation (if we add one)
        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
            nav.setAttribute('role', 'navigation');
        }

        // Content sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (!section.getAttribute('role')) {
                section.setAttribute('role', 'region');
            }
        });
    }

    /**
     * Setup form accessibility
     */
    setupFormAccessibility() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // Add form role
            if (!form.getAttribute('role')) {
                form.setAttribute('role', 'form');
            }

            // Setup fieldset and legend for grouped inputs
            const amenitiesGroup = form.querySelector('.amenities-grid');
            if (amenitiesGroup && !amenitiesGroup.closest('fieldset')) {
                const fieldset = document.createElement('fieldset');
                const legend = document.createElement('legend');
                legend.textContent = 'Amenities';
                fieldset.appendChild(legend);
                amenitiesGroup.parentNode.insertBefore(fieldset, amenitiesGroup);
                fieldset.appendChild(amenitiesGroup);
            }

            // Add error handling
            this.setupFormErrorHandling(form);
        });
    }

    /**
     * Setup form error handling
     */
    setupFormErrorHandling(form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            // Add aria-describedby for error messages
            input.addEventListener('invalid', (e) => {
                e.preventDefault();
                this.showFieldError(input);
            });

            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    /**
     * Show field error with ARIA
     */
    showFieldError(input) {
        const errorId = `error-${input.id || input.name}`;
        let errorElement = document.getElementById(errorId);
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = errorId;
            errorElement.className = 'field-error';
            errorElement.setAttribute('role', 'alert');
            errorElement.setAttribute('aria-live', 'polite');
            input.parentNode.appendChild(errorElement);
        }

        const message = this.getErrorMessage(input);
        errorElement.textContent = message;
        input.setAttribute('aria-describedby', errorId);
        input.setAttribute('aria-invalid', 'true');
    }

    /**
     * Get error message for field
     */
    getErrorMessage(input) {
        if (input.validity.valueMissing) {
            return `${input.name || 'This field'} is required.`;
        }
        if (input.validity.typeMismatch) {
            return `Please enter a valid ${input.type}.`;
        }
        return 'Please check this field.';
    }

    /**
     * Validate field and clear errors
     */
    validateField(input) {
        const errorId = input.getAttribute('aria-describedby');
        if (errorId && input.validity.valid) {
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.remove();
            }
            input.removeAttribute('aria-describedby');
            input.removeAttribute('aria-invalid');
        }
    }

    /**
     * Setup button accessibility
     */
    setupButtonAccessibility() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            // Add button role if not present
            if (!button.getAttribute('role')) {
                button.setAttribute('role', 'button');
            }

            // Add keyboard support for custom buttons
            if (!button.type) {
                button.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        button.click();
                    }
                });
            }

            // Add loading state announcements
            if (button.classList.contains('shuffle-btn')) {
                button.addEventListener('click', () => {
                    setTimeout(() => {
                        this.announceToScreenReader('Shuffling cafés, please wait...');
                    }, 100);
                });
            }
        });
    }

    /**
     * Setup modal accessibility
     */
    setupModalAccessibility() {
        const modal = document.getElementById('cafe-modal');
        if (modal) {
            // Set modal role
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            modal.setAttribute('aria-labelledby', 'modal-title');

            // Trap focus in modal
            this.setupFocusTrap(modal);
        }
    }

    /**
     * Setup focus trap for modal
     */
    setupFocusTrap(modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }

    /**
     * Setup keyboard navigation
     */
    setupKeyboardNavigation() {
        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Skip if in input field
            if (this.isInputFocused()) return;

            switch (e.key) {
                case 'h':
                case 'H':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.announceToScreenReader('Café Randomizer Help: Press Space or Enter to shuffle, Ctrl+N to add café, Ctrl+S for settings');
                    }
                    break;
                case '?':
                    e.preventDefault();
                    this.showKeyboardShortcuts();
                    break;
            }
        });

        // Skip links for keyboard navigation (disabled)
        // this.setupSkipLinks();
    }

    /**
     * Setup skip links (disabled)
     */
    /*
    setupSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.setAttribute('tabindex', '0');
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    */

    /**
     * Setup screen reader support
     */
    setupScreenReaderSupport() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.id = 'screen-reader-announcements';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);

        // Setup result announcements
        this.setupResultAnnouncements();
    }

    /**
     * Setup result announcements
     */
    setupResultAnnouncements() {
        const resultDisplay = document.getElementById('result-display');
        if (resultDisplay) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        const resultCard = resultDisplay.querySelector('.result-card');
                        if (resultCard) {
                            const cafeName = resultCard.querySelector('h3');
                            if (cafeName) {
                                this.announceToScreenReader(`Selected: ${cafeName.textContent}`);
                            }
                        }
                    }
                });
            });

            observer.observe(resultDisplay, { childList: true, subtree: true });
        }
    }

    /**
     * Announce to screen reader
     */
    announceToScreenReader(message) {
        const liveRegion = document.getElementById('screen-reader-announcements');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    /**
     * Setup focus management
     */
    setupFocusManagement() {
        // Track focusable elements
        this.updateFocusableElements();

        // Handle focus changes
        document.addEventListener('focusin', (e) => {
            this.handleFocusChange(e.target);
        });

        // Handle focus out
        document.addEventListener('focusout', (e) => {
            this.handleFocusOut(e.target);
        });
    }

    /**
     * Update focusable elements list
     */
    updateFocusableElements() {
        this.focusableElements = Array.from(document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ));
    }

    /**
     * Handle focus change
     */
    handleFocusChange(element) {
        // Add focus indicator
        element.classList.add('focus-visible');
        
        // Announce focus changes for screen readers
        if (element.getAttribute('role') === 'button') {
            const label = element.getAttribute('aria-label') || element.textContent;
            this.announceToScreenReader(`Focused: ${label}`);
        }
    }

    /**
     * Handle focus out
     */
    handleFocusOut(element) {
        element.classList.remove('focus-visible');
    }

    /**
     * Setup color contrast
     */
    setupColorContrast() {
        // Check for high contrast mode
        if (window.matchMedia('(prefers-contrast: high)').matches) {
            document.documentElement.classList.add('high-contrast');
        }

        // Check for dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark-mode');
        }
    }

    /**
     * Show keyboard shortcuts
     */
    showKeyboardShortcuts() {
        const shortcuts = [
            { key: 'Space/Enter', action: 'Shuffle cafés' },
            { key: 'Ctrl/Cmd + N', action: 'Add new café' },
            { key: 'Ctrl/Cmd + S', action: 'Open settings' },
            { key: 'Escape', action: 'Close modal' },
            { key: 'H', action: 'Show this help' }
        ];

        const helpHtml = `
            <div class="keyboard-shortcuts">
                <h3>Keyboard Shortcuts</h3>
                <ul>
                    ${shortcuts.map(shortcut => 
                        `<li><kbd>${shortcut.key}</kbd> - ${shortcut.action}</li>`
                    ).join('')}
                </ul>
            </div>
        `;

        // Show in a modal or notification
        this.showNotification(helpHtml, 'info');
    }

    /**
     * Show notification
     */
    showNotification(content, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `accessibility-notification ${type}`;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        notification.innerHTML = content;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    /**
     * Check if input is focused
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
     * Run accessibility audit
     */
    runAccessibilityAudit() {
        const issues = [];

        // Check for missing alt text
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.alt && !img.getAttribute('aria-label')) {
                issues.push(`Image missing alt text: ${img.src}`);
            }
        });

        // Check for missing labels
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (!input.labels.length && !input.getAttribute('aria-label')) {
                issues.push(`Input missing label: ${input.name || input.id}`);
            }
        });

        // Check for proper heading structure
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let previousLevel = 0;
        headings.forEach(heading => {
            const level = parseInt(heading.tagName[1]);
            if (level > previousLevel + 1) {
                issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel}`);
            }
            previousLevel = level;
        });

        // Check color contrast (basic check)
        const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
        textElements.forEach(element => {
            const style = window.getComputedStyle(element);
            const color = style.color;
            const backgroundColor = style.backgroundColor;
            
            // Basic contrast check (simplified)
            if (color === backgroundColor) {
                issues.push(`Potential contrast issue: ${element.textContent.substring(0, 50)}`);
            }
        });

        return {
            totalIssues: issues.length,
            issues: issues,
            timestamp: new Date().toISOString()
        };
    }
}

// Initialize accessibility manager
const accessibilityManager = new AccessibilityManager(); 
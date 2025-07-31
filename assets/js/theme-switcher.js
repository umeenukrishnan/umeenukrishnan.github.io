// Theme Switcher JavaScript
(function() {
    'use strict';

    // Theme switcher functionality
    const ThemeSwitcher = {
        init: function() {
            this.themeToggle = document.getElementById('theme-toggle');
            this.themeIcon = document.getElementById('theme-icon');
            this.currentTheme = localStorage.getItem('theme') || 'light';
            
            this.setTheme(this.currentTheme);
            this.bindEvents();
        },

        setTheme: function(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            this.updateIcon(theme);
        },

        toggleTheme: function() {
            const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            this.currentTheme = newTheme;
            this.setTheme(newTheme);
        },

        updateIcon: function(theme) {
            if (this.themeIcon) {
                if (theme === 'dark') {
                    this.themeIcon.className = 'fas fa-sun';
                    this.themeIcon.setAttribute('title', 'Switch to Light Mode');
                } else {
                    this.themeIcon.className = 'fas fa-moon';
                    this.themeIcon.setAttribute('title', 'Switch to Dark Mode');
                }
            }
        },

        bindEvents: function() {
            if (this.themeToggle) {
                this.themeToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleTheme();
                });
            }
        }
    };

    // Initialize theme switcher when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            ThemeSwitcher.init();
        });
    } else {
        ThemeSwitcher.init();
    }

    // Smooth transition for theme changes
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
    `;
    document.head.appendChild(style);
})(); 
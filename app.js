// This is a wrapper to ensure the entire script runs only after the page is fully loaded.
document.addEventListener('DOMContentLoaded', () => {

    try {
        /*********************************/
        /* THEME SWITCHER LOGIC          */
        /*********************************/
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        if (themeToggle) {
            const applyTheme = () => {
                const isDarkMode = localStorage.getItem('darkMode') === 'true';
                themeToggle.checked = isDarkMode;
                if (isDarkMode) {
                    body.classList.add('dark-mode');
                } else {
                    body.classList.remove('dark-mode');
                }
            };

            themeToggle.addEventListener('change', () => {
                if (themeToggle.checked) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('darkMode', 'true');
                } else {
                    body.classList.remove('dark-mode');
                    localStorage.setItem('darkMode', 'false');
                }
            });

            applyTheme();
        }

        /*********************************/
        /* LANGUAGE SWITCHER LOGIC       */
        /*********************************/
        const translations = {
            en: {
                // Nav & Footer
                logo_text: '<h1 class="logo"><a href="index.html">DesignerGPT</a></h1>',
                nav_features: 'Features',
                nav_pricing: 'Pricing',
                nav_login: 'Login',
                footer_text: '&copy; 2025 DesignerGPT. All rights reserved.',
                // Other text translations would be here...
            },
            fr: {
                // Nav & Footer
                logo_text: '<h1 class="logo"><a href="index.html">CréateurGPT</a></h1>',
                nav_features: 'Fonctionnalités',
                nav_pricing: 'Tarifs',
                nav_login: 'Connexion',
                footer_text: '&copy; 2025 CréateurGPT. Tous droits réservés.',
                // Other text translations would be here...
            }
        };

        const langEnBtn = document.getElementById('lang-en');
        const langFrBtn = document.getElementById('lang-fr');

        if (langEnBtn && langFrBtn) {
            const setLanguage = (lang) => {
                document.querySelectorAll('[data-lang]').forEach(element => {
                    const key = element.getAttribute('data-lang');
                    if (translations[lang] && translations[lang][key]) {
                        element.innerHTML = translations[lang][key];
                    }
                });
                
                localStorage.setItem('language', lang);
                
                if (lang === 'fr') {
                    langFrBtn.classList.add('active');
                    langEnBtn.classList.remove('active');
                } else {
                    langEnBtn.classList.add('active');
                    langFrBtn.classList.remove('active');
                }
            };

            langEnBtn.addEventListener('click', () => setLanguage('en'));
            langFrBtn.addEventListener('click', () => setLanguage('fr'));

            const savedLang = localStorage.getItem('language') || 'en';
            setLanguage(savedLang);
        }

        /*********************************/
        /* NETLIFY IDENTITY LOGIN LOGIC  */
        /*********************************/
        const loginButton = document.getElementById('login-button');
        const logoutButton = document.getElementById('logout-button');

        const updateUserStatus = (user) => {
            if (user) {
                loginButton.style.display = 'none';
                logoutButton.style.display = 'block';
            } else {
                loginButton.style.display = 'block';
                logoutButton.style.display = 'none';
            }
        };

        if (window.netlifyIdentity) {
            // Manually handle the click on the main login button in the nav
            loginButton.addEventListener('click', (e) => {
                e.preventDefault();
                netlifyIdentity.open();
            });

            // ** NEW CODE for pricing buttons **
            // Find all buttons with the 'js-login-trigger' class and make them open the modal
            const loginTriggerButtons = document.querySelectorAll('.js-login-trigger');
            loginTriggerButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    netlifyIdentity.open();
                });
            });

            netlifyIdentity.on('init', user => {
                updateUserStatus(user);
            });

            netlifyIdentity.on('login', user => {
                updateUserStatus(user);
                netlifyIdentity.close();
            });

            netlifyIdentity.on('logout', () => {
                updateUserStatus(null);
            });

            logoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                netlifyIdentity.logout();
            });
        }

    } catch (error) {
        console.error("A critical error occurred in app.js:", error);
    }
});

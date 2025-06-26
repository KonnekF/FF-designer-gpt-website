// This is a wrapper to ensure the entire script runs only after the page is fully loaded.
document.addEventListener('DOMContentLoaded', () => {

    try {
        /*********************************/
        /* THEME SWITCHER LOGIC          */
        /*********************************/
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check if the toggle button actually exists on the page before adding listeners
        if (themeToggle) {
            // Function to apply the saved theme from localStorage
            const applyTheme = () => {
                const isDarkMode = localStorage.getItem('darkMode') === 'true';
                themeToggle.checked = isDarkMode;
                if (isDarkMode) {
                    body.classList.add('dark-mode');
                } else {
                    body.classList.remove('dark-mode');
                }
            };

            // Event listener for when the user clicks the toggle switch
            themeToggle.addEventListener('change', () => {
                if (themeToggle.checked) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('darkMode', 'true'); // Save preference
                } else {
                    body.classList.remove('dark-mode');
                    localStorage.setItem('darkMode', 'false'); // Save preference
                }
            });

            // Apply the correct theme when the page first loads
            applyTheme();
        }


        /*********************************/
        /* LANGUAGE SWITCHER LOGIC       */
        /*********************************/

        // 1. Define all the text translations
        const translations = {
            en: {
                logo_text: '<h1 class="logo"><a href="index.html">DesignerGPT</a></h1>',
                nav_features: 'Features',
                nav_pricing: 'Pricing',
                nav_login: 'Login',
                hero_title: 'Build and Scale Your Dream Business with AI',
                hero_subtitle: 'From business plans to branding, DesignerGPT is the co-founder you\'ve always wanted. For entrepreneurs, solopreneurs, and side-hustlers.',
                hero_button: 'Get Started for Free',
                features_title: 'Core Features',
                feature1_title: 'AI Business Plan',
                feature1_text: 'Generate a comprehensive business plan tailored to your vision.',
                feature2_title: 'Logo & Branding',
                feature2_text: 'Create a unique logo and business card designs in seconds.',
                feature3_title: 'Strategic Planning',
                feature3_text: 'Get AI-driven forecasts based on market trends, risk analysis, and more.',
                feature4_title: 'Document Templates',
                feature4_text: 'Instantly generate invoices, proposals, and other essential documents.',
                footer_text: '&copy; 2025 DesignerGPT. All rights reserved.'
            },
            fr: {
                logo_text: '<h1 class="logo"><a href="index.html">CréateurGPT</a></h1>',
                nav_features: 'Fonctionnalités',
                nav_pricing: 'Tarifs',
                nav_login: 'Connexion',
                hero_title: 'Créez et Développez votre Entreprise de Rêve avec l\'IA',
                hero_subtitle: 'Des plans d\'affaires à l\'image de marque, CréateurGPT est le co-fondateur que vous avez toujours voulu. Pour entrepreneurs, solopreneurs et indépendants.',
                hero_button: 'Commencez Gratuitement',
                features_title: 'Fonctionnalités Clés',
                feature1_title: 'Plan d\'Affaires IA',
                feature1_text: 'Générez un plan d\'affaires complet adapté à votre vision.',
                feature2_title: 'Logo & Image de Marque',
                feature2_text: 'Créez un logo unique et des cartes de visite en quelques secondes.',
                feature3_title: 'Planification Stratégique',
                feature3_text: 'Obtenez des prévisions par IA basées sur les tendances du marché, l\'analyse des risques, et plus encore.',
                feature4_title: 'Modèles de Documents',
                feature4_text: 'Générez instantanément des factures, des propositions et d\'autres documents essentiels.',
                footer_text: '&copy; 2025 CréateurGPT. Tous droits réservés.'
            }
        };

        const langEnBtn = document.getElementById('lang-en');
        const langFrBtn = document.getElementById('lang-fr');

        // Check if language buttons exist before proceeding
        if (langEnBtn && langFrBtn) {
            // 2. Function to change the language on the page
            const setLanguage = (lang) => {
                document.querySelectorAll('[data-lang]').forEach(element => {
                    const key = element.getAttribute('data-lang');
                    // Check if a translation exists for this key and language
                    if (translations[lang] && translations[lang][key]) {
                        element.innerHTML = translations[lang][key];
                    }
                });
                
                // Save the user's language preference
                localStorage.setItem('language', lang);
                
                // Update the style of the active language button
                if (lang === 'fr') {
                    langFrBtn.classList.add('active');
                    langEnBtn.classList.remove('active');
                } else {
                    langEnBtn.classList.add('active');
                    langFrBtn.classList.remove('active');
                }
            };

            // 3. Event listeners for when the user clicks a language button
            langEnBtn.addEventListener('click', () => setLanguage('en'));
            langFrBtn.addEventListener('click', () => setLanguage('fr'));

            // 4. Apply the saved language (or default to English) when the page loads
            const savedLang = localStorage.getItem('language') || 'en';
            setLanguage(savedLang);
        }

    } catch (error) {
        console.error("A critical error occurred in app.js:", error);
    }
});

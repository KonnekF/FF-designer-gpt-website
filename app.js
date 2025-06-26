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
                // Homepage
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
                // Pricing Page
                pricing_title: 'Choose Your Plan',
                pricing_subtitle: "Start for free, and upgrade when you're ready to scale.",
                pricing_free_title: 'Free',
                pricing_free_f1: '✓ 2 AI Generations per day',
                pricing_free_f2: '✓ Access to all tools',
                pricing_free_btn: 'Sign Up',
                pricing_popular_badge: 'Most Popular',
                pricing_pro_title: 'Pro',
                pricing_pro_f1: '✓ 10 AI Generations per day',
                pricing_pro_f2: '✓ Priority Support',
                pricing_pro_f3: '✓ Access to all tools',
                pricing_pro_btn: 'Choose Pro',
                pricing_premium_title: 'Premium',
                pricing_premium_f1: '✓ 20 AI Generations per day',
                pricing_premium_f2: '✓ Priority Support',
                pricing_premium_f3: '✓ Access to advanced analytics',
                pricing_premium_btn: 'Choose Premium',
                pricing_oneoff_title: 'One-Off',
                pricing_oneoff_f1: '✓ 100 AI Generations Total',
                pricing_oneoff_f2: '✓ No Expiration',
                pricing_oneoff_f3: '✓ Perfect for single projects',
                pricing_oneoff_btn: 'Buy Now',
                // Dashboard
                dashboard_nav_bp: 'Business Plan',
                dashboard_nav_logo: 'Logo Design',
                dashboard_nav_bc: 'Business Card',
                dashboard_nav_invoice: 'Invoice Template',
                dashboard_nav_forecast: 'Strategic Forecast',
                dashboard_usage: 'Usage: 0/2 Today',
                dashboard_logout: 'Logout',
                dashboard_header_title: 'AI Business Plan Generator',
                dashboard_gpt_name: 'DesignerGPT:',
                dashboard_welcome_msg: 'Welcome! What is the name of your business and what industry are you in? Let\'s start building your business plan.',
                dashboard_upload_btn: 'Upload Document',
                dashboard_send_btn: 'Send',
            },
            fr: {
                // Nav & Footer
                logo_text: '<h1 class="logo"><a href="index.html">CréateurGPT</a></h1>',
                nav_features: 'Fonctionnalités',
                nav_pricing: 'Tarifs',
                nav_login: 'Connexion',
                footer_text: '&copy; 2025 CréateurGPT. Tous droits réservés.',
                // Homepage
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
                // Pricing Page
                pricing_title: 'Choisissez Votre Forfait',
                pricing_subtitle: 'Commencez gratuitement et mettez à niveau lorsque vous êtes prêt à grandir.',
                pricing_free_title: 'Gratuit',
                pricing_free_f1: '✓ 2 générations IA par jour',
                pricing_free_f2: '✓ Accès à tous les outils',
                pricing_free_btn: 'S\'inscrire',
                pricing_popular_badge: 'Le plus populaire',
                pricing_pro_title: 'Pro',
                pricing_pro_f1: '✓ 10 générations IA par jour',
                pricing_pro_f2: '✓ Support prioritaire',
                pricing_pro_f3: '✓ Accès à tous les outils',
                pricing_pro_btn: 'Choisir Pro',
                pricing_premium_title: 'Premium',
                pricing_premium_f1: '✓ 20 générations IA par jour',
                pricing_premium_f2: '✓ Support prioritaire',
                pricing_premium_f3: '✓ Accès à des analyses avancées',
                pricing_premium_btn: 'Choisir Premium',
                pricing_oneoff_title: 'Achat Unique',
                pricing_oneoff_f1: '✓ 100 générations IA au total',
                pricing_oneoff_f2: '✓ Sans expiration',
                pricing_oneoff_f3: '✓ Parfait pour les projets uniques',
                pricing_oneoff_btn: 'Acheter maintenant',
                // Dashboard
                dashboard_nav_bp: 'Plan d\'Affaires',
                dashboard_nav_logo: 'Création de Logo',
                dashboard_nav_bc: 'Carte de Visite',
                dashboard_nav_invoice: 'Modèle de Facture',
                dashboard_nav_forecast: 'Prévision Stratégique',
                dashboard_usage: 'Utilisation: 0/2 Aujourd\'hui',
                dashboard_logout: 'Déconnexion',
                dashboard_header_title: 'Générateur de Plan d\'Affaires IA',
                dashboard_gpt_name: 'CréateurGPT :',
                dashboard_welcome_msg: 'Bienvenue ! Quel est le nom de votre entreprise et votre secteur d\'activité ? Commençons à créer votre plan d\'affaires.',
                dashboard_upload_btn: 'Charger un Document',
                dashboard_send_btn: 'Envoyer',
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
        const userTierSpan = document.getElementById('user-tier'); // Get the new span element

        // This function updates the UI based on login status and user role
        const updateUserStatus = (user) => {
            if (user) {
                // If user is logged in
                loginButton.style.display = 'none';
                logoutButton.style.display = 'block';

                // ** NEW CODE TO DISPLAY USER ROLE **
                if (userTierSpan) {
                    const roles = user.app_metadata.roles || ['free-tier']; // Default to free if no roles
                    // Display the first role, capitalized
                    const currentRole = roles[0].charAt(0).toUpperCase() + roles[0].slice(1);
                    userTierSpan.textContent = currentRole.replace('-',' '); // show "Free Tier"
                }

            } else {
                // If user is logged out
                loginButton.style.display = 'block';
                logoutButton.style.display = 'none';
                 if (userTierSpan) {
                    userTierSpan.textContent = "N/A"; // Show N/A when logged out
                }
            }
        };

        if (window.netlifyIdentity) {
            loginButton.addEventListener('click', (e) => {
                e.preventDefault();
                netlifyIdentity.open();
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

    } catch (error)
    {
        console.error("A critical error occurred in app.js:", error);
    }
});

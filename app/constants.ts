import { 
    // Icônes spécifiques aux thèmes
    Anchor, Rocket, HeartPulse, Building, Scale, DollarSign,
    // Icônes des services
    Globe, Brain, Search, Map,
    Compass, Activity, BarChart3, LineChart,
    Users, Key, Vote, PieChart, Leaf
  } from 'lucide-react';

  type ThemeColors = {
    primary: string;
    text: string;
    textHover: string;
    border: string;
    border600: string;
    badge: string;
    background: string;
    background600: string;
    backgroundHover700: string;
    hoverBg: string;
    gradient: string;
    backgroundImage: string;
  };

  type ThemeKey = 'ocean' | 'nature' | 'space' | 'medical' | 'finance' | 'politics' | 'realestate';

  type ColorMap = {
    [key in ThemeKey]: ThemeColors;
  };

export const getThemeClasses = (theme: ThemeKey): ThemeColors=> {
    const colorMap = {
      ocean: {
        primary: 'bg-blue-600 hover:bg-blue-700',
        text: 'text-blue-600',
        textHover: 'hover:text-blue-600',
        border: 'border-blue-100',
        border600: 'border-blue-600',
        badge: 'bg-blue-50 text-blue-700',
        background: 'bg-blue-50 ',
        background600: 'bg-blue-600 ',
        backgroundHover700: 'hover:bg-blue-700 ',
        hoverBg: 'hover:bg-blue-100',
        gradient: 'from-blue-50/80',
                backgroundImage: 'https://images.unsplash.com/photo-1488921618671-463b781ac428?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8fDB8fHww'
      },
      nature: {
        primary: 'bg-green-600 hover:bg-green-700',
        text: 'text-green-600',
        textHover: 'hover:text-green-600',
        border: 'border-green-100',
        border600: 'border-green-600',
        badge: 'bg-green-50 text-green-700',
        background: 'bg-green-50 ',
        background600: 'bg-green-600 ',
        backgroundHover700: 'hover:bg-green-700 ',
        hoverBg: 'hover:bg-green-100',
        gradient: 'from-green-50/80',
        backgroundImage: 'https://images.unsplash.com/photo-1520716497194-0bde97ce9abe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
      },
      space: {
        primary: 'bg-purple-600 hover:bg-purple-700',
        text: 'text-purple-600',
        textHover: 'hover:text-purple-600',
        border: 'border-purple-100',
        border600: 'border-purple-600',
        badge: 'bg-purple-50 text-purple-700',
        background: 'bg-purple-50 ',
        background600: 'bg-purple-600 ',
        backgroundHover700: 'hover:bg-purple-700 ',
        hoverBg: 'hover:bg-purple-100',
                gradient: 'from-purple-50/80',
                        backgroundImage: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvc21vc3xlbnwwfHwwfHx8MA%3D%3D'
      },
      medical: {
        primary: 'bg-sky-600 hover:bg-sky-700',
        text: 'text-sky-600',
        textHover: 'hover:text-sky-600',
        border: 'border-sky-100',
        border600: 'border-sky-600',
        badge: 'bg-sky-50 text-sky-700',
        background: 'bg-sky-50 ',
        background600: 'bg-sky-600 ',
        backgroundHover700: 'hover:bg-sky-700 ',
        hoverBg: 'hover:bg-sky-100',
                        gradient: 'from-sky-50/80',
                                backgroundImage: 'https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bSVDMyVBOWRpY2FsfGVufDB8fDB8fHww'
      },
      finance: {
        primary: 'bg-emerald-600 hover:bg-emerald-700',
        text: 'text-emerald-600',
        textHover: 'hover:text-emerald-600',
        border: 'border-emerald-100',
        border600: 'border-emerald-600',
        badge: 'bg-emerald-50 text-emerald-700',
        background: 'bg-emerald-50 ',
        background600: 'bg-emerald-600 ',
        backgroundHover700: 'hover:bg-emerald-700 ',
        hoverBg: 'hover:bg-emerald-100',
         gradient: 'from-emerald-50/80',
                 backgroundImage: 'https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D'
      },
      politics: {
        primary: 'bg-indigo-600 hover:bg-indigo-700',
        text: 'text-indigo-600',
        textHover: 'hover:text-indigo-600',
        border: 'border-indigo-100',
        border600: 'border-indigo-600',
        badge: 'bg-indigo-50 text-indigo-700',
        background: 'bg-indigo-50 ',
        background600: 'bg-indigo-600 ',
        backgroundHover700: 'hover:bg-indigo-700 ',
        hoverBg: 'hover:bg-indigo-100',
         gradient: 'from-indigo-50/80',
                 backgroundImage: 'https://media.istockphoto.com/id/1525048071/fr/photo/palais-bourbon-assembl%C3%A9e-nationale-%C3%A0-paris.webp?a=1&b=1&s=612x612&w=0&k=20&c=rrfdgTwj1vIIZED4vo57KE4cPuHz5yLW6SB89JciZqM='
      },
      realestate: {
        primary: 'bg-orange-600 hover:bg-orange-700',
        text: 'text-orange-600',
        textHover: 'hover:text-orange-600',
        border: 'border-orange-100',
        border600: 'border-orange-600',
        badge: 'bg-orange-50 text-orange-700',
        background: 'bg-orange-50 ',
        background600: 'bg-orange-600 ',
        backgroundHover700: 'hover:bg-orange-700 ',
        hoverBg: 'hover:bg-orange-100',
             gradient: 'from-orange-50/80',
                     backgroundImage: 'https://media.istockphoto.com/id/1477536010/fr/photo/paris-de-beaux-immeubles-dans-un-quartier-de-luxe.webp?a=1&b=1&s=612x612&w=0&k=20&c=GG0Q8aPuTArbUK--_YLn9YQh_6oR0s2VVFrbl99X74o='
      }
    };
  
    return colorMap[theme];
  };

export const themes = {
    ocean: {
      name: "Marine Explorer",
      icon: Anchor,
      tagline: "Explorateur des Océans Numériques",
      title: "Plongeons dans des expériences digitales",
      highlight: "immersives",
      description: "Expert en création d'expériences numériques inspirées par l'océan, je fusionne innovation technologique et sensibilisation environnementale.",
      serviceIcons: [Compass, Map, Activity],
      services: [
        {
          title: "Exploration Océanique",
          desc: "Création d'expériences immersives pour sensibiliser à la préservation des océans."
        },
        {
          title: "Navigation Digitale",
          desc: "Développement de solutions innovantes pour l'exploration marine."
        },
        {
          title: "Écosystème Marin",
          desc: "Conception d'outils de surveillance et protection de la vie marine."
        }
      ],
      projects: [
        {
          title: "OceanWatch",
          desc: "Plateforme de surveillance des écosystèmes marins",
          tags: ["React", "IoT", "Machine Learning"],
                 img: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG9jZWFufGVufDB8fDB8fHww'
        },
        {
          title: "WaveConnect",
          desc: "Réseau social pour passionnés de l'océan",
          tags: ["Vue.js", "Node.js", "MongoDB"],
                 img: 'https://plus.unsplash.com/premium_photo-1664124381898-5f79552b408d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F2ZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          title: "MarineGuard",
          desc: "System de protection des zones marines protégées",
          tags: ["Python", "Tensorflow", "AWS"],
                 img: 'https://plus.unsplash.com/premium_photo-1686397308449-4b925a91c81b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyaW5lJTIwZ3VhcmR8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "CoralMap",
          desc: "Cartographie interactive des récifs coralliens",
          tags: ["React", "MapBox", "Django"],
                 img: 'https://plus.unsplash.com/premium_photo-1661862758718-d68e9ee13357?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q29yYWx8ZW58MHx8MHx8fDA%3D'
        }
      ]
    },
    nature: {
        name: "Nature Explorer",
        icon: Leaf,
        tagline: "Innovation pour la Protection de la Nature",
        title: "Développons des solutions pour préserver",
        highlight: "notre planète",
        description: "Expert en développement de solutions numériques dédiées à la protection de l'environnement, je crée des outils innovants pour préserver notre écosystème.",
        serviceIcons: [Globe, Search, BarChart3],
        services: [
          {
            title: "Monitoring Environnemental",
            desc: "Solutions de surveillance et d'analyse des écosystèmes naturels en temps réel."
          },
          {
            title: "Sensibilisation Écologique",
            desc: "Plateformes interactives d'éducation et de sensibilisation à l'environnement."
          },
          {
            title: "Gestion des Ressources",
            desc: "Outils intelligents pour optimiser l'utilisation des ressources naturelles."
          }
        ],
        projects: [
          {
            title: "EcoSense",
            desc: "Réseau de capteurs pour la surveillance de la biodiversité",
            tags: ["IoT", "IA", "Cloud Computing"],
                   img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80'
          },
          {
            title: "GreenPath",
            desc: "Application de suivi d'empreinte carbone personnelle",
            tags: ["React Native", "Node.js", "Machine Learning"],
                   img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80'
          },
          {
            title: "BioDiversityHub",
            desc: "Plateforme collaborative de recensement de la faune et flore",
            tags: ["Vue.js", "PostgreSQL", "API"],
                   img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80'
          },
          {
            title: "ResourceWatch",
            desc: "Dashboard de gestion des ressources naturelles",
            tags: ["React", "D3.js", "Python"],
                   img: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?auto=format&fit=crop&q=80'
          }
        ]
      },
    space: {
      name: "Cosmos Explorer",
      icon: Rocket,
      tagline: "Explorateur de l'Espace Digital",
      title: "Voyageons vers des expériences digitales",
      highlight: "stellaires",
      description: "Expert en création d'expériences numériques inspirées par le cosmos, je fusionne innovation technologique et exploration spatiale.",
      serviceIcons: [Compass, Globe, Search],
      services: [
        {
          title: "Exploration Spatiale",
          desc: "Création d'expériences immersives inspirées par l'exploration spatiale et l'astronomie."
        },
        {
          title: "Navigation Stellaire",
          desc: "Développement de solutions innovantes pour l'exploration des données spatiales."
        },
        {
          title: "Découverte Cosmique",
          desc: "Conception d'outils de visualisation et d'analyse de données astronomiques."
        }
      ],
      projects: [
        {
          title: "StarMapper",
          desc: "Cartographie interactive des constellations",
          tags: ["React", "ThreeJS", "WebGL"],
          img: 'https://plus.unsplash.com/premium_photo-1721253879683-acb6504ccb7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3Rhck1hcHBlcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          title: "ExoConnect",
          desc: "Application de suivi des exoplanètes",
          tags: ["Vue.js", "D3.js", "NASA API"],
                    img: 'https://images.unsplash.com/photo-1712509846751-cd6082dcfff1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhvcGxhbiVDMyVBOHRlc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          title: "CosmicGuard",
          desc: "Système de détection d'objets célestes",
          tags: ["Python", "TensorFlow", "AWS"],
                    img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9iamV0cyUyMGMlQzMlQTlsZXN0ZXN8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "GalaxyViz",
          desc: "Visualisation 3D de la Voie Lactée",
          tags: ["React", "ThreeJS", "WebGL"],
                    img: 'https://plus.unsplash.com/premium_photo-1676607445719-ac329296a85a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFZvaWUlMjBMYWN0JUMzJUE5ZXxlbnwwfHwwfHx8MA%3D%3D'
        }
      ]
    },
    medical: {
      name: "MedTech Explorer",
      icon: HeartPulse,
      tagline: "Innovation MedTech & e-Santé",
      title: "Créons des solutions numériques pour la",
      highlight: "santé de demain",
      description: "Expert en développement de solutions innovantes pour le secteur médical, je connecte technologie et santé pour améliorer la vie des patients.",
      serviceIcons: [Brain, Activity, Search],
      services: [
        {
          title: "Diagnostic Digital",
          desc: "Développement d'outils d'aide au diagnostic utilisant l'intelligence artificielle."
        },
        {
          title: "Suivi Patient",
          desc: "Solutions connectées pour le monitoring et le suivi des patients à distance."
        },
        {
          title: "Recherche Médicale",
          desc: "Outils d'analyse et de visualisation pour la recherche clinique."
        }
      ],
      projects: [
        {
          title: "HealthTrack",
          desc: "Plateforme de télémédecine intelligente",
          tags: ["React", "AI", "FHIR"],
          img: 'https://plus.unsplash.com/premium_photo-1682141268892-3c31617c7eb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUMzJUE5bCVDMyVBOW0lQzMlQTlkZWNpbmUlMjBpbnRlbGxpZ2VudGV8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "MedAssist",
          desc: "Assistant virtuel pour le diagnostic médical",
          tags: ["Python", "Machine Learning", "API"],
          img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpYWdub3N0aWMlMjBtJUMzJUE5ZGljYWx8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "BioViz",
          desc: "Visualisation de données biomédicales",
          tags: ["D3.js", "WebGL", "Node.js"],
          img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9ubiVDMyVBOWVzJTIwYmlvbSVDMyVBOWRpY2FsZXN8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "CareConnect",
          desc: "Réseau sécurisé pour professionnels de santé",
          tags: ["React", "GraphQL", "AWS"],
          img: 'https://plus.unsplash.com/premium_photo-1681967028128-05342e038b7d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UiVDMyVBOXNlYXUlMjBzJUMzJUE5Y3VyaXMlQzMlQTklMjBwb3VyJTIwcHJvZmVzc2lvbm5lbHMlMjBkZSUyMHNhbnQlQzMlQTl8ZW58MHx8MHx8fDA%3D'
        }
      ]
    },
    finance: {
      name: "FinTech Solutions",
      icon: DollarSign,
      tagline: "Solutions FinTech Innovantes",
      title: "Transformons la finance avec des solutions",
      highlight: "intelligentes",
      description: "Expert en développement de solutions financières innovantes, je crée des outils performants pour optimiser vos opérations financières.",
      serviceIcons: [LineChart, BarChart3, PieChart],
      services: [
        {
          title: "Analyse Financière",
          desc: "Développement d'outils d'analyse et de visualisation de données financières."
        },
        {
          title: "Trading Algorithmique",
          desc: "Solutions automatisées pour l'optimisation des stratégies de trading."
        },
        {
          title: "Gestion de Portefeuille",
          desc: "Outils intelligents pour l'optimisation et le suivi de portefeuilles."
        }
      ],
      projects: [
        {
          title: "TradeMaster Pro",
          desc: "Plateforme de trading algorithmique avancée",
          tags: ["React", "Python", "Machine Learning"],
          img: 'https://media.istockphoto.com/id/802540554/fr/photo/int%C3%A9gration-des-donn%C3%A9es.webp?a=1&b=1&s=612x612&w=0&k=20&c=G4gRQFqr-UOivgECv7V9xAktrZ6YEA71S0e6B5uHMqM='
        },
        {
          title: "PortfolioGenius",
          desc: "Système intelligent de gestion de portefeuille",
          tags: ["Vue.js", "Node.js", "AI"],
          img: 'https://plus.unsplash.com/premium_photo-1661313688756-2e38d59fb9f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VzdGlvbiUyMGRlJTIwcG9ydGVmZXVpbGxlfGVufDB8fDB8fHww'
        },
        {
          title: "RiskAnalyzer",
          desc: "Solution d'analyse et gestion des risques",
          tags: ["Python", "R", "BigData"],
          img: 'https://plus.unsplash.com/premium_photo-1661281307045-edb4d54e313f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2VzdGlvbiUyMGRlcyUyMHJpc3F1ZXN8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "WealthViz",
          desc: "Visualisation interactive de données financières",
          tags: ["D3.js", "React", "API"],
          img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvbm4lQzMlQTllcyUyMGZpbmFuY2klQzMlQThyZXN8ZW58MHx8MHx8fDA%3D'
        }
      ]
    },
    politics: {
      name: "CivicTech Solutions",
      icon: Scale,
      tagline: "Solutions Démocratiques Innovantes",
      title: "Modernisons la démocratie avec des outils",
      highlight: "participatifs",
      description: "Expert en développement de solutions numériques pour la démocratie participative, je crée des outils pour rapprocher citoyens et institutions.",
      serviceIcons: [Users, Vote, BarChart3],
      services: [
        {
          title: "Participation Citoyenne",
          desc: "Plateformes de consultation et d'engagement citoyen pour une démocratie plus participative."
        },
        {
          title: "Gestion Publique",
          desc: "Solutions pour améliorer la transparence et l'efficacité des institutions."
        },
        {
          title: "Analyse des Politiques",
          desc: "Outils d'analyse et de visualisation pour évaluer l'impact des politiques publiques."
        }
      ],
      projects: [
        {
          title: "CitizenVoice",
          desc: "Plateforme de consultation citoyenne",
          tags: ["React", "Node.js", "Blockchain"],
          img: 'https://images.unsplash.com/photo-1573165067541-4cd6d9837902?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3VsdGF0aW9ufGVufDB8fDB8fHww'
        },
        {
          title: "PolicyTracker",
          desc: "Suivi et analyse des politiques publiques",
          tags: ["Python", "D3.js", "Machine Learning"],
          img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHlzZSUyMGRlcyUyMHBvbGl0aXF1ZXMlMjBwdWJsaXF1ZXN8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "TransparenCity",
          desc: "Plateforme de transparence des données publiques",
          tags: ["Vue.js", "GraphQL", "Open Data"],
          img: 'https://media.istockphoto.com/id/1180187740/fr/photo/vue-a%C3%A9rienne-de-la-foule-reli%C3%A9e-par-des-lignes.webp?a=1&b=1&s=612x612&w=0&k=20&c=TWJChAPB9u9_1v0BiNaFMExm9WK6onPUWrZujFii8Gc='
        },
        {
          title: "DemocracyLab",
          desc: "Outils de simulation et d'analyse politique",
          tags: ["React", "R", "Data Science"],
          img: 'https://plus.unsplash.com/premium_photo-1726848121953-354d20f7f522?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3V0aWxzJTIwZGUlMjBzaW11bGF0aW9uJTIwZXQlMjBkJ2FuYWx5c2UlMjBwb2xpdGlxdWV8ZW58MHx8MHx8fDA%3D'
        }
      ]
    },
    realestate: {
      name: "PropTech Solutions",
      icon: Building,
      tagline: "Solutions Immobilières Innovantes",
      title: "Transformons l'immobilier avec des solutions",
      highlight: "intelligentes",
      description: "Expert en développement de solutions numériques pour l'immobilier, je crée des outils pour simplifier la gestion et la transaction immobilière.",
      serviceIcons: [Search, Key, BarChart3],
      services: [
        {
          title: "Recherche Intelligente",
          desc: "Solutions avancées de recherche et de matching pour les biens immobiliers."
        },
        {
          title: "Gestion Locative",
          desc: "Outils de gestion pour propriétaires et gestionnaires de biens."
        },
        {
          title: "Analyse de Marché",
          desc: "Solutions d'analyse et de prédiction du marché immobilier."
        }
      ],
      projects: [
        {
          title: "PropertyMatch",
          desc: "Plateforme de matching immobilier intelligent",
          tags: ["React", "AI", "Machine Learning"],
          img: 'https://plus.unsplash.com/premium_photo-1661749901127-d621fc7dff90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF0Y2hpbmclMjBpbW1vYmlsaWVyJTIwaW50ZWxsaWdlbnR8ZW58MHx8MHx8fDA%3D'
        },
        {
          title: "RentalFlow",
          desc: "Solution complète de gestion locative",
          tags: ["Vue.js", "Node.js", "MongoDB"],
          img: 'https://images.unsplash.com/photo-1505758480-67e8d1b6fcec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VzdGlvbiUyMGxvY2F0aXZlfGVufDB8fDB8fHww'
        },
        {
          title: "MarketPulse",
          desc: "Analyse prédictive du marché immobilier",
          tags: ["Python", "R", "Data Science"],
          img: 'https://plus.unsplash.com/premium_photo-1680721444845-66364722d019?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyY2glQzMlQTklMjBpbW1vYmlsaWVyfGVufDB8fDB8fHww'
        },
        {
          title: "VisitVirtual",
          desc: "Plateforme de visites virtuelles immersives",
          tags: ["Three.js", "WebGL", "React"],
          img: 'https://media.istockphoto.com/id/2169856541/fr/photo/femme-avec-casque-vr-%C3%A0-londres.webp?a=1&b=1&s=612x612&w=0&k=20&c=1MJ0tOOPSNElw0BCrthvVi_sspUXeBLLyihe2IOU2ZM='
        }
      ]
    }
  };
const SUPPORT_EMAIL = "jsteunou+bbqexpertsupport@gmail.com";
const PRIVACY_EMAIL = "jsteunou+bbqexpertprivacy@gmail.com";

const translations = {
  fr: {
    support: {
      navFaq: "FAQ",
      navContact: "Contact",
      navTerms: "Conditions",
      navPrivacy: "Confidentialité",
      languageLabel: "Langue",
      heroEyebrow: "Support officiel",
      heroTitle: "Besoin d'aide avec BBQ Expert ?",
      heroLead:
        "BBQ Expert est une application mobile de cuisson BBQ guidée avec timer intelligent, règle de mesure à l'écran, AI Pit Coach et options Premium. Cette page centralise l'assistance, les questions fréquentes et les informations sur la confidentialité.",
      heroSupportCta: "Contacter le support",
      heroPrivacyCta: "Lire la politique de confidentialité",
      supportEmailLabel: "Adresse de support :",
      heroCardBadge: "Application mobile",
      heroCardTitle: "Support pour cuisson guidée, Premium et historique local",
      heroCardBody:
        "Pour accélérer le traitement, indiquez votre appareil, la version de l'application, votre langue, et les étapes qui ont conduit au problème.",
      heroList1: "Timer et plan de cuisson",
      heroList2: "Règle de mesure et étalonnage",
      heroList3: "Premium et restauration d'achats",
      heroList4: "Confidentialité et données locales",
      quickEyebrow: "Aide rapide",
      quickTitle: "Les sujets les plus fréquents",
      quickCard1Title: "Cuisson et timer",
      quickCard1Body:
        "Aide sur le calcul de cuisson, les étapes face 1 / face 2 / finition / repos, ou le comportement du timer optimisé.",
      quickCard2Title: "Mesure et étalonnage",
      quickCard2Body:
        "Problème de règle à l'écran, calibration avec carte bancaire ou mesure d'épaisseur selon votre appareil.",
      quickCard3Title: "Premium et historique",
      quickCard3Body:
        "Questions sur AI Pit Coach, mode service, historique des cuissons et achats intégrés.",
      productEyebrow: "Produit",
      productTitle: "Ce que fait BBQ Expert",
      productCard1Title: "Cuisson multi-viandes",
      productCard1Body:
        "BBQ Expert aide à cuire bœuf, veau, agneau, porc et poulet selon la pièce, l'épaisseur, la chaleur et le mode de cuisson.",
      productCard2Title: "Mesure à l'écran",
      productCard2Body:
        "L'application propose une règle calibrable à l'aide d'une carte bancaire pour mieux estimer l'épaisseur de la viande.",
      productCard3Title: "Guidage pas à pas",
      productCard3Body:
        "Le timer indique quand retourner, finir et laisser reposer la viande pour une exécution plus régulière.",
      productCard4Title: "Fonctions Premium",
      productCard4Body:
        "Le plan Pitmaster ajoute AI Pit Coach, l'historique complet des cuissons et le mode service de 3 à 10 pièces.",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes",
      faq1Title: "Faut-il créer un compte pour utiliser l'application ?",
      faq1Body:
        "Non. D'après la version actuelle du projet, BBQ Expert ne nécessite pas de création de compte pour fonctionner.",
      faq2Title: "Où sont stockées mes préférences et mon historique ?",
      faq2Body:
        "Les préférences, l'étalonnage et l'historique local des cuissons sont stockés sur votre appareil.",
      faq3Title: "Que faire si la mesure à l'écran semble incorrecte ?",
      faq3Body:
        "Vérifiez l'étalonnage dans les paramètres avec une carte bancaire, puis contrôlez le zoom d'affichage ou un changement de protection d'écran.",
      faq4Title: "Comment contacter le support ?",
      faq4Prefix: "Écrivez à",
      faq4Suffix:
        "avec votre appareil, votre version de l'app et une description précise du souci.",
      contactEyebrow: "Contact",
      contactTitle: "Nous écrire",
      contactSupportLabel: "Pour toute question d'assistance :",
      contactPrivacyLabel: "Pour les demandes liées à la confidentialité :",
      contactBundleLabel: "Bundle iOS / package Android du projet actuel :",
      publishTitle: "Avant publication",
      publishBody:
        "Le contenu de support est maintenant aligné avec le projet principal. Il reste à confirmer le nom légal de l'éditeur.",
      footerCopy: "© 2026 BBQ Expert. Tous droits réservés.",
      footerSupport: "Support",
      footerTerms: "Conditions",
      footerPrivacy: "Confidentialité",
    },
    privacy: {
      navSupport: "Support",
      navTerms: "Conditions",
      navPrivacy: "Confidentialité",
      languageLabel: "Langue",
      privacyEyebrow: "Vie privée",
      privacyTitle: "Politique de confidentialité",
      privacyLead:
        "Cette page décrit comment BBQ Expert traite les données dans sa version actuelle, principalement autour des préférences locales, de l'historique de cuisson et des achats intégrés.",
      privacyUpdated: "Dernière mise à jour : 4 avril 2026",
      summaryTitle: "Résumé",
      summary1: "Pas de compte requis dans la version actuelle",
      summary2: "Préférences et historique stockés localement",
      summary3: "Achats intégrés gérés via RevenueCat et les stores",
      summary4: "Contact :",
      section1Title: "1. Responsable du traitement",
      section1Body:
        "Le responsable du traitement des données de BBQ Expert est Julien Steunou, joignable à " + PRIVACY_EMAIL + ".",
      section2Title: "2. Données susceptibles d'être collectées",
      section2Lead:
        "D'après la version actuelle du projet, l'application ne demande pas de création de compte et fonctionne principalement avec des données locales enregistrées sur l'appareil.",
      section2Item1: "Préférences de langue, d'unités et d'alertes.",
      section2Item2: "Réglages d'étalonnage de la règle de mesure.",
      section2Item3: "Historique local des cuissons.",
      section2Item4:
        "Informations liées à l'état Premium récupérées via les plateformes d'achat intégré.",
      section2Item5: "Informations que vous choisissez d'envoyer au support par email.",
      section3Title: "3. Finalités du traitement",
      section3Lead: "Ces données peuvent être utilisées pour :",
      section3Item1: "Fournir, exploiter et sécuriser l'application.",
      section3Item2: "Répondre aux demandes de support.",
      section3Item3: "Enregistrer vos préférences et votre historique local sur l'appareil.",
      section3Item4: "Vérifier et restaurer vos droits d'accès aux fonctions Premium.",
      section3Item5: "Respecter les obligations légales applicables.",
      section4Title: "4. Base légale",
      section4Body:
        "Le traitement repose, selon les cas, sur l'exécution du service, votre consentement, l'intérêt légitime de l'éditeur ou une obligation légale.",
      section5Title: "5. Conservation des données",
      section5Body:
        "Les préférences et l'historique de cuisson sont conservés localement sur votre appareil jusqu'à leur suppression par l'utilisateur, par des actions dans l'application ou par la désinstallation. Les emails de support peuvent être conservés le temps nécessaire au traitement de la demande.",
      section6Title: "6. Partage des données",
      section6Body:
        "Les données locales de cuisson ne sont pas décrites comme étant transmises à un serveur exploité par BBQ Expert pour les fonctions locales actuelles. En revanche, si vous utilisez les achats intégrés Premium, certaines informations techniques et de transaction peuvent être traitées par les stores de la plateforme et par RevenueCat pour gérer l'achat, la validation et la restauration des accès Premium.",
      section7Title: "7. Vos droits",
      section7Body:
        "Vous pouvez demander l'accès, la rectification, l'effacement, la limitation du traitement ou l'opposition, selon la législation applicable. Pour les données stockées uniquement sur votre appareil, une partie du contrôle s'exerce directement via l'application ou la suppression locale de ses données.",
      section7ContactPrefix: "Pour exercer vos droits, contactez",
      section8Title: "8. Cookies et technologies similaires",
      section8Body:
        "Le site de support ne prévoit pas de cookies fonctionnels complexes dans cette version statique. Si des outils d'analyse ou de mesure d'audience sont ajoutés plus tard, cette politique devra être mise à jour.",
      section9Title: "9. Sécurité",
      section9Body:
        "Nous mettons en oeuvre des mesures raisonnables pour protéger les données contre l'accès non autorisé, l'altération, la divulgation ou la destruction.",
      section10Title: "10. Modifications",
      section10Body:
        "Cette politique peut être mise à jour à tout moment, notamment si de futures fonctionnalités impliquent des comptes, de l'analytique, des partenaires, de l'e-commerce ou des accessoires connectés.",
      footerCopy: "© 2026 BBQ Expert. Tous droits réservés.",
      footerSupport: "Support",
      footerTerms: "Conditions",
      footerPrivacy: "Confidentialité",
    },
    terms: {
      navSupport: "Support",
      navTerms: "Conditions",
      navPrivacy: "Confidentialité",
      languageLabel: "Langue",
      termsEyebrow: "Conditions",
      termsTitle: "Conditions d'utilisation",
      termsLead:
        "Ces conditions encadrent l'utilisation de l'application BBQ Expert et du site de support associé.",
      termsUpdated: "Dernière mise à jour : 22 avril 2026",
      summaryTitle: "Résumé",
      termsSummary1: "Usage personnel de l'application",
      termsSummary2: "Informations fournies à titre indicatif",
      termsSummary3: "Aucune garantie de résultat culinaire parfait",
      termsSummary4: "Contact : jsteunou+bbqexpertsupport@gmail.com",
      termsSection1Title: "1. Éditeur",
      termsSection1Body:
        "L'application BBQ Expert et son site de support sont proposés par Julien Steunou.",
      termsSection2Title: "2. Objet du service",
      termsSection2Body:
        "BBQ Expert aide l'utilisateur à estimer et suivre une cuisson au barbecue à l'aide de paramètres saisis manuellement, d'une règle de mesure à l'écran et d'un timer guidé.",
      termsSection3Title: "3. Usage autorisé",
      termsSection3Body:
        "Vous vous engagez à utiliser l'application conformément aux lois en vigueur et uniquement pour un usage personnel ou professionnel légitime lié à la cuisson et à l'organisation de vos sessions BBQ.",
      termsSection4Title: "4. Avertissement important",
      termsSection4Body:
        "Les temps, recommandations et estimations fournis par BBQ Expert constituent une aide pratique. Ils ne remplacent ni la vigilance de l'utilisateur, ni les règles d'hygiène alimentaire, ni l'usage d'une sonde à cœur lorsque la sécurité alimentaire l'exige, notamment pour le porc et le poulet.",
      termsSection5Title: "5. Fonctions Premium",
      termsSection5Body:
        "Certaines fonctionnalités peuvent être proposées sous forme d'achats intégrés ou d'abonnement, selon les plateformes de distribution. Les conditions tarifaires, de facturation et de renouvellement applicables sont celles affichées au moment de l'achat via l'App Store.",
      termsSection6Title: "6. Propriété intellectuelle",
      termsSection6Body:
        "Les contenus, textes, visuels, logos et éléments logiciels liés à BBQ Expert sont protégés par les droits applicables. Toute reproduction, diffusion ou exploitation non autorisée est interdite sauf accord préalable.",
      termsSection7Title: "7. Limitation de responsabilité",
      termsSection7Body:
        "Dans les limites permises par la loi, Julien Steunou ne pourra être tenu responsable des dommages indirects, des pertes de données, ni des résultats de cuisson ne correspondant pas aux attentes de l'utilisateur.",
      termsSection8Title: "8. Contact",
      termsSection8Prefix: "Pour toute question relative aux conditions d'utilisation, contactez",
      termsSection9Title: "9. Mise à jour",
      termsSection9Body:
        "Ces conditions peuvent être modifiées à tout moment. La version publiée sur ce site fait foi à la date de consultation.",
      footerCopy: "© 2026 BBQ Expert. Tous droits réservés.",
      footerSupport: "Support",
      footerTerms: "Conditions",
      footerPrivacy: "Confidentialité",
    },
  },
  en: {
    support: {
      navFaq: "FAQ",
      navContact: "Contact",
      navTerms: "Terms",
      navPrivacy: "Privacy",
      languageLabel: "Language",
      heroEyebrow: "Official support",
      heroTitle: "Need help with BBQ Expert?",
      heroLead:
        "BBQ Expert is a guided BBQ cooking mobile app with a smart timer, on-screen measuring ruler, AI Pit Coach, and Premium features. This page centralizes support, frequently asked questions, and privacy information.",
      heroSupportCta: "Contact support",
      heroPrivacyCta: "Read the privacy policy",
      supportEmailLabel: "Support email:",
      heroCardBadge: "Mobile app",
      heroCardTitle: "Support for guided cooking, Premium, and local history",
      heroCardBody:
        "To speed up support, include your device, app version, language, and the steps that led to the issue.",
      heroList1: "Timer and cooking plan",
      heroList2: "Measuring ruler and calibration",
      heroList3: "Premium and purchase restore",
      heroList4: "Privacy and local data",
      quickEyebrow: "Quick help",
      quickTitle: "Most common topics",
      quickCard1Title: "Cooking and timer",
      quickCard1Body:
        "Help with cooking calculations, side 1 / side 2 / finish / rest stages, or smart timer behavior.",
      quickCard2Title: "Measurement and calibration",
      quickCard2Body:
        "Issues with the on-screen ruler, bank-card calibration, or thickness measurement on your device.",
      quickCard3Title: "Premium and history",
      quickCard3Body:
        "Questions about AI Pit Coach, service mode, cook history, and in-app purchases.",
      productEyebrow: "Product",
      productTitle: "What BBQ Expert does",
      productCard1Title: "Multi-meat cooking",
      productCard1Body:
        "BBQ Expert helps cook beef, veal, lamb, pork, and chicken based on cut, thickness, heat, and cooking mode.",
      productCard2Title: "On-screen measurement",
      productCard2Body:
        "The app includes a ruler that can be calibrated with a bank card to better estimate meat thickness.",
      productCard3Title: "Step-by-step guidance",
      productCard3Body:
        "The timer tells you when to flip, finish, and rest the meat for more consistent execution.",
      productCard4Title: "Premium features",
      productCard4Body:
        "The Pitmaster plan adds AI Pit Coach, full cook history, and service mode for 3 to 10 pieces.",
      faqEyebrow: "FAQ",
      faqTitle: "Frequently asked questions",
      faq1Title: "Do I need an account to use the app?",
      faq1Body:
        "No. Based on the current version of the project, BBQ Expert does not require account creation.",
      faq2Title: "Where are my preferences and history stored?",
      faq2Body:
        "Preferences, calibration settings, and local cook history are stored on your device.",
      faq3Title: "What if the on-screen measurement looks wrong?",
      faq3Body:
        "Check ruler calibration in settings with a bank card, then review display zoom or any screen protector changes.",
      faq4Title: "How do I contact support?",
      faq4Prefix: "Write to",
      faq4Suffix:
        "with your device, app version, and a precise description of the issue.",
      contactEyebrow: "Contact",
      contactTitle: "Write to us",
      contactSupportLabel: "For support requests:",
      contactPrivacyLabel: "For privacy requests:",
      contactBundleLabel: "Current project iOS bundle / Android package:",
      publishTitle: "Before launch",
      publishBody:
        "Support content is now aligned with the main project. The legal publisher name still needs to be confirmed.",
      footerCopy: "© 2026 BBQ Expert. All rights reserved.",
      footerSupport: "Support",
      footerTerms: "Terms",
      footerPrivacy: "Privacy",
    },
    privacy: {
      navSupport: "Support",
      navTerms: "Terms",
      navPrivacy: "Privacy",
      languageLabel: "Language",
      privacyEyebrow: "Privacy",
      privacyTitle: "Privacy Policy",
      privacyLead:
        "This page describes how BBQ Expert handles data in its current version, mainly around local preferences, cooking history, and in-app purchases.",
      privacyUpdated: "Last updated: April 4, 2026",
      summaryTitle: "Summary",
      summary1: "No account required in the current version",
      summary2: "Preferences and history stored locally",
      summary3: "In-app purchases managed through RevenueCat and stores",
      summary4: "Contact:",
      section1Title: "1. Data controller",
      section1Body:
        "The data controller for BBQ Expert is Julien Steunou, reachable at " + PRIVACY_EMAIL + ".",
      section2Title: "2. Data that may be processed",
      section2Lead:
        "Based on the current version of the project, the app does not require account creation and mainly works with local data stored on the device.",
      section2Item1: "Language, units, and alert preferences.",
      section2Item2: "Measuring ruler calibration settings.",
      section2Item3: "Local cooking history.",
      section2Item4: "Premium status information retrieved through in-app purchase platforms.",
      section2Item5: "Information you choose to send through support email.",
      section3Title: "3. Processing purposes",
      section3Lead: "This data may be used to:",
      section3Item1: "Provide, operate, and secure the app.",
      section3Item2: "Respond to support requests.",
      section3Item3: "Store your preferences and local history on the device.",
      section3Item4: "Verify and restore your access to Premium features.",
      section3Item5: "Comply with applicable legal obligations.",
      section4Title: "4. Legal basis",
      section4Body:
        "Depending on the case, processing relies on service performance, your consent, the publisher's legitimate interest, or a legal obligation.",
      section5Title: "5. Data retention",
      section5Body:
        "Preferences and cooking history are stored locally on your device until removed by the user, through actions in the app, or by uninstalling it. Support emails may be retained for as long as needed to process the request.",
      section6Title: "6. Data sharing",
      section6Body:
        "Local cooking data is not described as being sent to a server operated by BBQ Expert for the current local features. However, if you use Premium in-app purchases, some technical and transaction information may be processed by platform stores and RevenueCat to manage purchases, validation, and restoration of Premium access.",
      section7Title: "7. Your rights",
      section7Body:
        "You may request access, rectification, erasure, restriction, or objection, depending on applicable law. For data stored only on your device, part of that control can be exercised directly through the app or local deletion of its data.",
      section7ContactPrefix: "To exercise your rights, contact",
      section8Title: "8. Cookies and similar technologies",
      section8Body:
        "This static support site does not currently rely on complex functional cookies. If analytics or audience measurement tools are added later, this policy will need to be updated.",
      section9Title: "9. Security",
      section9Body:
        "We implement reasonable measures to protect data against unauthorized access, alteration, disclosure, or destruction.",
      section10Title: "10. Changes",
      section10Body:
        "This policy may be updated at any time, especially if future features involve accounts, analytics, partners, e-commerce, or connected accessories.",
      footerCopy: "© 2026 BBQ Expert. All rights reserved.",
      footerSupport: "Support",
      footerTerms: "Terms",
      footerPrivacy: "Privacy",
    },
    terms: {
      navSupport: "Support",
      navTerms: "Terms",
      navPrivacy: "Privacy",
      languageLabel: "Language",
      termsEyebrow: "Terms",
      termsTitle: "Terms of Use",
      termsLead:
        "These terms govern the use of the BBQ Expert app and its associated support site.",
      termsUpdated: "Last updated: April 22, 2026",
      summaryTitle: "Summary",
      termsSummary1: "Personal use of the app",
      termsSummary2: "Information provided for guidance purposes",
      termsSummary3: "No guarantee of a perfect cooking result",
      termsSummary4: "Contact: jsteunou+bbqexpertsupport@gmail.com",
      termsSection1Title: "1. Publisher",
      termsSection1Body:
        "The BBQ Expert app and its support site are provided by Julien Steunou.",
      termsSection2Title: "2. Purpose of the service",
      termsSection2Body:
        "BBQ Expert helps users estimate and follow BBQ cooking using manually entered settings, an on-screen ruler, and a guided timer.",
      termsSection3Title: "3. Authorized use",
      termsSection3Body:
        "You agree to use the app in compliance with applicable law and only for personal use or legitimate professional use related to cooking and organizing BBQ sessions.",
      termsSection4Title: "4. Important notice",
      termsSection4Body:
        "The timings, recommendations, and estimates provided by BBQ Expert are practical guidance only. They do not replace user attention, food safety rules, or the use of a core thermometer when food safety requires it, especially for pork and chicken.",
      termsSection5Title: "5. Premium features",
      termsSection5Body:
        "Some features may be offered as in-app purchases or subscriptions depending on the distribution platform. Applicable pricing, billing, and renewal conditions are those shown at the time of purchase through the App Store.",
      termsSection6Title: "6. Intellectual property",
      termsSection6Body:
        "The content, text, visuals, logos, and software elements related to BBQ Expert are protected by applicable rights. Any unauthorized reproduction, distribution, or exploitation is prohibited unless previously authorized.",
      termsSection7Title: "7. Limitation of liability",
      termsSection7Body:
        "To the extent permitted by law, Julien Steunou shall not be liable for indirect damages, data loss, or cooking results that do not meet user expectations.",
      termsSection8Title: "8. Contact",
      termsSection8Prefix: "For any question regarding these terms, contact",
      termsSection9Title: "9. Updates",
      termsSection9Body:
        "These terms may be modified at any time. The version published on this site shall prevail on the consultation date.",
      footerCopy: "© 2026 BBQ Expert. All rights reserved.",
      footerSupport: "Support",
      footerTerms: "Terms",
      footerPrivacy: "Privacy",
    },
  },
  it: {
    support: {
      navFaq: "FAQ",
      navContact: "Contatto",
      navTerms: "Condizioni",
      navPrivacy: "Privacy",
      languageLabel: "Lingua",
      heroEyebrow: "Supporto ufficiale",
      heroTitle: "Hai bisogno di aiuto con BBQ Expert?",
      heroLead:
        "BBQ Expert è un'app mobile per la cottura BBQ guidata con timer intelligente, righello di misura sullo schermo, AI Pit Coach e funzioni Premium. Questa pagina raccoglie supporto, domande frequenti e informazioni sulla privacy.",
      heroSupportCta: "Contatta il supporto",
      heroPrivacyCta: "Leggi l'informativa sulla privacy",
      supportEmailLabel: "Email di supporto:",
      heroCardBadge: "App mobile",
      heroCardTitle: "Supporto per cottura guidata, Premium e storico locale",
      heroCardBody:
        "Per velocizzare l'assistenza, indica dispositivo, versione dell'app, lingua e passaggi che hanno portato al problema.",
      heroList1: "Timer e piano di cottura",
      heroList2: "Righello e calibrazione",
      heroList3: "Premium e ripristino acquisti",
      heroList4: "Privacy e dati locali",
      quickEyebrow: "Aiuto rapido",
      quickTitle: "Argomenti più frequenti",
      quickCard1Title: "Cottura e timer",
      quickCard1Body:
        "Aiuto su calcoli di cottura, fasi lato 1 / lato 2 / finitura / riposo e comportamento del timer intelligente.",
      quickCard2Title: "Misura e calibrazione",
      quickCard2Body:
        "Problemi con il righello sullo schermo, calibrazione con carta bancaria o misura dello spessore.",
      quickCard3Title: "Premium e storico",
      quickCard3Body:
        "Domande su AI Pit Coach, modalità servizio, storico cotture e acquisti in-app.",
      productEyebrow: "Prodotto",
      productTitle: "Cosa fa BBQ Expert",
      productCard1Title: "Cottura multi-carne",
      productCard1Body:
        "BBQ Expert aiuta a cuocere manzo, vitello, agnello, maiale e pollo in base al taglio, allo spessore, al calore e alla modalità di cottura.",
      productCard2Title: "Misura sullo schermo",
      productCard2Body:
        "L'app include un righello calibrabile con una carta bancaria per stimare meglio lo spessore della carne.",
      productCard3Title: "Guida passo dopo passo",
      productCard3Body:
        "Il timer indica quando girare, finire e far riposare la carne per una cottura più regolare.",
      productCard4Title: "Funzioni Premium",
      productCard4Body:
        "Il piano Pitmaster aggiunge AI Pit Coach, storico completo delle cotture e modalità servizio da 3 a 10 pezzi.",
      faqEyebrow: "FAQ",
      faqTitle: "Domande frequenti",
      faq1Title: "Serve un account per usare l'app?",
      faq1Body:
        "No. In base alla versione attuale del progetto, BBQ Expert non richiede la creazione di un account.",
      faq2Title: "Dove vengono salvate preferenze e storico?",
      faq2Body:
        "Preferenze, calibrazione e storico locale delle cotture sono salvati sul tuo dispositivo.",
      faq3Title: "Cosa fare se la misura sullo schermo sembra errata?",
      faq3Body:
        "Controlla la calibrazione del righello nelle impostazioni con una carta bancaria, poi verifica zoom display o protezione schermo.",
      faq4Title: "Come contattare il supporto?",
      faq4Prefix: "Scrivi a",
      faq4Suffix:
        "indicando dispositivo, versione dell'app e una descrizione precisa del problema.",
      contactEyebrow: "Contatto",
      contactTitle: "Scrivici",
      contactSupportLabel: "Per richieste di supporto:",
      contactPrivacyLabel: "Per richieste privacy:",
      contactBundleLabel: "Bundle iOS / package Android del progetto attuale:",
      publishTitle: "Prima della pubblicazione",
      publishBody:
        "I contenuti di supporto sono ora allineati al progetto principale. Resta da confermare il nome legale dell'editore.",
      footerCopy: "© 2026 BBQ Expert. Tutti i diritti riservati.",
      footerSupport: "Supporto",
      footerTerms: "Condizioni",
      footerPrivacy: "Privacy",
    },
    privacy: {
      navSupport: "Supporto",
      navTerms: "Condizioni",
      navPrivacy: "Privacy",
      languageLabel: "Lingua",
      privacyEyebrow: "Privacy",
      privacyTitle: "Informativa sulla privacy",
      privacyLead:
        "Questa pagina descrive come BBQ Expert tratta i dati nella versione attuale, soprattutto in relazione a preferenze locali, storico di cottura e acquisti in-app.",
      privacyUpdated: "Ultimo aggiornamento: 4 aprile 2026",
      summaryTitle: "Riepilogo",
      summary1: "Nessun account richiesto nella versione attuale",
      summary2: "Preferenze e storico salvati localmente",
      summary3: "Acquisti in-app gestiti tramite RevenueCat e store",
      summary4: "Contatto:",
      section1Title: "1. Titolare del trattamento",
      section1Body:
        "Il titolare del trattamento di BBQ Expert è Julien Steunou, contattabile all'indirizzo " + PRIVACY_EMAIL + ".",
      section2Title: "2. Dati che possono essere trattati",
      section2Lead:
        "In base alla versione attuale del progetto, l'app non richiede la creazione di un account e funziona principalmente con dati locali salvati sul dispositivo.",
      section2Item1: "Preferenze di lingua, unità e avvisi.",
      section2Item2: "Impostazioni di calibrazione del righello.",
      section2Item3: "Storico locale delle cotture.",
      section2Item4: "Informazioni sullo stato Premium recuperate tramite piattaforme di acquisto in-app.",
      section2Item5: "Informazioni che scegli di inviare via email al supporto.",
      section3Title: "3. Finalità del trattamento",
      section3Lead: "Questi dati possono essere utilizzati per:",
      section3Item1: "Fornire, gestire e proteggere l'app.",
      section3Item2: "Rispondere alle richieste di supporto.",
      section3Item3: "Salvare preferenze e storico locale sul dispositivo.",
      section3Item4: "Verificare e ripristinare l'accesso alle funzioni Premium.",
      section3Item5: "Rispettare gli obblighi legali applicabili.",
      section4Title: "4. Base giuridica",
      section4Body:
        "A seconda dei casi, il trattamento si basa sull'esecuzione del servizio, sul tuo consenso, sul legittimo interesse dell'editore o su un obbligo legale.",
      section5Title: "5. Conservazione dei dati",
      section5Body:
        "Preferenze e storico di cottura sono conservati localmente sul dispositivo fino alla loro rimozione da parte dell'utente, tramite azioni nell'app o tramite disinstallazione. Le email di supporto possono essere conservate per il tempo necessario alla gestione della richiesta.",
      section6Title: "6. Condivisione dei dati",
      section6Body:
        "I dati locali di cottura non sono descritti come trasmessi a un server gestito da BBQ Expert per le funzioni locali attuali. Tuttavia, se utilizzi gli acquisti in-app Premium, alcune informazioni tecniche e di transazione possono essere trattate dagli store della piattaforma e da RevenueCat per gestire acquisto, validazione e ripristino dell'accesso Premium.",
      section7Title: "7. I tuoi diritti",
      section7Body:
        "Puoi richiedere accesso, rettifica, cancellazione, limitazione del trattamento o opposizione, secondo la normativa applicabile. Per i dati salvati solo sul dispositivo, parte del controllo può essere esercitata direttamente tramite l'app o la cancellazione locale dei dati.",
      section7ContactPrefix: "Per esercitare i tuoi diritti, contatta",
      section8Title: "8. Cookie e tecnologie simili",
      section8Body:
        "Questo sito statico di supporto non utilizza attualmente cookie funzionali complessi. Se in futuro verranno aggiunti strumenti di analisi o misurazione dell'audience, questa informativa dovrà essere aggiornata.",
      section9Title: "9. Sicurezza",
      section9Body:
        "Adottiamo misure ragionevoli per proteggere i dati da accessi non autorizzati, alterazione, divulgazione o distruzione.",
      section10Title: "10. Modifiche",
      section10Body:
        "Questa informativa può essere aggiornata in qualsiasi momento, soprattutto se future funzionalità includeranno account, analytics, partner, e-commerce o accessori connessi.",
      footerCopy: "© 2026 BBQ Expert. Tutti i diritti riservati.",
      footerSupport: "Supporto",
      footerTerms: "Condizioni",
      footerPrivacy: "Privacy",
    },
    terms: {
      navSupport: "Supporto",
      navTerms: "Condizioni",
      navPrivacy: "Privacy",
      languageLabel: "Lingua",
      termsEyebrow: "Condizioni",
      termsTitle: "Condizioni d'uso",
      termsLead:
        "Queste condizioni disciplinano l'utilizzo dell'app BBQ Expert e del sito di supporto associato.",
      termsUpdated: "Ultimo aggiornamento: 22 aprile 2026",
      summaryTitle: "Riepilogo",
      termsSummary1: "Uso personale dell'app",
      termsSummary2: "Informazioni fornite a scopo indicativo",
      termsSummary3: "Nessuna garanzia di risultato perfetto in cottura",
      termsSummary4: "Contatto: jsteunou+bbqexpertsupport@gmail.com",
      termsSection1Title: "1. Editore",
      termsSection1Body:
        "L'app BBQ Expert e il relativo sito di supporto sono forniti da Julien Steunou.",
      termsSection2Title: "2. Oggetto del servizio",
      termsSection2Body:
        "BBQ Expert aiuta l'utente a stimare e seguire una cottura BBQ tramite parametri inseriti manualmente, un righello sullo schermo e un timer guidato.",
      termsSection3Title: "3. Uso consentito",
      termsSection3Body:
        "Ti impegni a usare l'app nel rispetto delle leggi applicabili e solo per uso personale o per un uso professionale legittimo legato alla cottura e all'organizzazione delle tue sessioni BBQ.",
      termsSection4Title: "4. Avvertenza importante",
      termsSection4Body:
        "Tempi, raccomandazioni e stime forniti da BBQ Expert costituiscono solo un aiuto pratico. Non sostituiscono l'attenzione dell'utente, le regole di igiene alimentare o l'uso di una sonda al cuore quando la sicurezza alimentare lo richiede, in particolare per maiale e pollo.",
      termsSection5Title: "5. Funzioni Premium",
      termsSection5Body:
        "Alcune funzioni possono essere offerte come acquisti in-app o abbonamenti, a seconda della piattaforma di distribuzione. Prezzi, fatturazione e condizioni di rinnovo applicabili sono quelli mostrati al momento dell'acquisto tramite App Store.",
      termsSection6Title: "6. Proprietà intellettuale",
      termsSection6Body:
        "Contenuti, testi, elementi visivi, loghi e componenti software legati a BBQ Expert sono protetti dai diritti applicabili. Qualsiasi riproduzione, distribuzione o sfruttamento non autorizzato è vietato salvo previo consenso.",
      termsSection7Title: "7. Limitazione di responsabilità",
      termsSection7Body:
        "Nei limiti consentiti dalla legge, Julien Steunou non potrà essere ritenuto responsabile per danni indiretti, perdite di dati o risultati di cottura non conformi alle aspettative dell'utente.",
      termsSection8Title: "8. Contatto",
      termsSection8Prefix: "Per qualsiasi domanda relativa a queste condizioni, contatta",
      termsSection9Title: "9. Aggiornamenti",
      termsSection9Body:
        "Queste condizioni possono essere modificate in qualsiasi momento. Fa fede la versione pubblicata su questo sito alla data di consultazione.",
      footerCopy: "© 2026 BBQ Expert. Tutti i diritti riservati.",
      footerSupport: "Supporto",
      footerTerms: "Condizioni",
      footerPrivacy: "Privacy",
    },
  },
  es: {
    support: {
      navFaq: "FAQ",
      navContact: "Contacto",
      navTerms: "Términos",
      navPrivacy: "Privacidad",
      languageLabel: "Idioma",
      heroEyebrow: "Soporte oficial",
      heroTitle: "¿Necesitas ayuda con BBQ Expert?",
      heroLead:
        "BBQ Expert es una aplicación móvil de cocción BBQ guiada con temporizador inteligente, regla de medición en pantalla, AI Pit Coach y funciones Premium. Esta página reúne soporte, preguntas frecuentes e información de privacidad.",
      heroSupportCta: "Contactar con soporte",
      heroPrivacyCta: "Leer la política de privacidad",
      supportEmailLabel: "Correo de soporte:",
      heroCardBadge: "App móvil",
      heroCardTitle: "Soporte para cocción guiada, Premium e historial local",
      heroCardBody:
        "Para agilizar la asistencia, indica tu dispositivo, versión de la app, idioma y pasos que llevaron al problema.",
      heroList1: "Temporizador y plan de cocción",
      heroList2: "Regla de medición y calibración",
      heroList3: "Premium y restauración de compras",
      heroList4: "Privacidad y datos locales",
      quickEyebrow: "Ayuda rápida",
      quickTitle: "Temas más frecuentes",
      quickCard1Title: "Cocción y temporizador",
      quickCard1Body:
        "Ayuda sobre cálculos de cocción, fases lado 1 / lado 2 / acabado / reposo y comportamiento del temporizador inteligente.",
      quickCard2Title: "Medición y calibración",
      quickCard2Body:
        "Problemas con la regla en pantalla, calibración con tarjeta bancaria o medición del grosor.",
      quickCard3Title: "Premium e historial",
      quickCard3Body:
        "Preguntas sobre AI Pit Coach, modo servicio, historial de cocciones y compras integradas.",
      productEyebrow: "Producto",
      productTitle: "Qué hace BBQ Expert",
      productCard1Title: "Cocción multi-carne",
      productCard1Body:
        "BBQ Expert ayuda a cocinar vacuno, ternera, cordero, cerdo y pollo según el corte, grosor, calor y modo de cocción.",
      productCard2Title: "Medición en pantalla",
      productCard2Body:
        "La app incluye una regla calibrable con una tarjeta bancaria para estimar mejor el grosor de la carne.",
      productCard3Title: "Guía paso a paso",
      productCard3Body:
        "El temporizador indica cuándo girar, terminar y dejar reposar la carne para una ejecución más regular.",
      productCard4Title: "Funciones Premium",
      productCard4Body:
        "El plan Pitmaster añade AI Pit Coach, historial completo de cocciones y modo servicio de 3 a 10 piezas.",
      faqEyebrow: "FAQ",
      faqTitle: "Preguntas frecuentes",
      faq1Title: "¿Necesito una cuenta para usar la app?",
      faq1Body:
        "No. Según la versión actual del proyecto, BBQ Expert no requiere crear una cuenta.",
      faq2Title: "¿Dónde se guardan mis preferencias e historial?",
      faq2Body:
        "Las preferencias, la calibración y el historial local de cocciones se guardan en tu dispositivo.",
      faq3Title: "¿Qué hago si la medición en pantalla parece incorrecta?",
      faq3Body:
        "Comprueba la calibración de la regla en ajustes con una tarjeta bancaria y revisa el zoom de pantalla o cambios en el protector.",
      faq4Title: "¿Cómo contacto con soporte?",
      faq4Prefix: "Escribe a",
      faq4Suffix:
        "con tu dispositivo, versión de la app y una descripción precisa del problema.",
      contactEyebrow: "Contacto",
      contactTitle: "Escríbenos",
      contactSupportLabel: "Para solicitudes de soporte:",
      contactPrivacyLabel: "Para solicitudes de privacidad:",
      contactBundleLabel: "Bundle iOS / package Android del proyecto actual:",
      publishTitle: "Antes de publicar",
      publishBody:
        "El contenido de soporte ya está alineado con el proyecto principal. Falta confirmar el nombre legal del editor.",
      footerCopy: "© 2026 BBQ Expert. Todos los derechos reservados.",
      footerSupport: "Soporte",
      footerTerms: "Términos",
      footerPrivacy: "Privacidad",
    },
    privacy: {
      navSupport: "Soporte",
      navTerms: "Términos",
      navPrivacy: "Privacidad",
      languageLabel: "Idioma",
      privacyEyebrow: "Privacidad",
      privacyTitle: "Política de privacidad",
      privacyLead:
        "Esta página describe cómo BBQ Expert trata los datos en su versión actual, principalmente en torno a preferencias locales, historial de cocción y compras integradas.",
      privacyUpdated: "Última actualización: 4 de abril de 2026",
      summaryTitle: "Resumen",
      summary1: "No se requiere cuenta en la versión actual",
      summary2: "Preferencias e historial almacenados localmente",
      summary3: "Compras integradas gestionadas mediante RevenueCat y las tiendas",
      summary4: "Contacto:",
      section1Title: "1. Responsable del tratamiento",
      section1Body:
        "El responsable del tratamiento de BBQ Expert es Julien Steunou, disponible en " + PRIVACY_EMAIL + ".",
      section2Title: "2. Datos que pueden tratarse",
      section2Lead:
        "Según la versión actual del proyecto, la aplicación no requiere crear una cuenta y funciona principalmente con datos locales guardados en el dispositivo.",
      section2Item1: "Preferencias de idioma, unidades y alertas.",
      section2Item2: "Ajustes de calibración de la regla de medición.",
      section2Item3: "Historial local de cocciones.",
      section2Item4: "Información del estado Premium recuperada mediante plataformas de compra integrada.",
      section2Item5: "Información que decides enviar por email al soporte.",
      section3Title: "3. Finalidades del tratamiento",
      section3Lead: "Estos datos pueden utilizarse para:",
      section3Item1: "Proporcionar, operar y proteger la aplicación.",
      section3Item2: "Responder a solicitudes de soporte.",
      section3Item3: "Guardar tus preferencias e historial local en el dispositivo.",
      section3Item4: "Verificar y restaurar tu acceso a funciones Premium.",
      section3Item5: "Cumplir con obligaciones legales aplicables.",
      section4Title: "4. Base jurídica",
      section4Body:
        "Según el caso, el tratamiento se basa en la ejecución del servicio, tu consentimiento, el interés legítimo del editor o una obligación legal.",
      section5Title: "5. Conservación de los datos",
      section5Body:
        "Las preferencias y el historial de cocción se guardan localmente en tu dispositivo hasta que el usuario los elimine, mediante acciones en la app o desinstalándola. Los correos de soporte pueden conservarse el tiempo necesario para gestionar la solicitud.",
      section6Title: "6. Cesión de datos",
      section6Body:
        "Los datos locales de cocción no se describen como enviados a un servidor operado por BBQ Expert para las funciones locales actuales. Sin embargo, si utilizas compras integradas Premium, cierta información técnica y de transacción puede ser tratada por las tiendas de la plataforma y por RevenueCat para gestionar la compra, validación y restauración del acceso Premium.",
      section7Title: "7. Tus derechos",
      section7Body:
        "Puedes solicitar acceso, rectificación, supresión, limitación del tratamiento u oposición, según la legislación aplicable. Para datos guardados solo en tu dispositivo, parte del control puede ejercerse directamente desde la app o eliminando localmente sus datos.",
      section7ContactPrefix: "Para ejercer tus derechos, contacta con",
      section8Title: "8. Cookies y tecnologías similares",
      section8Body:
        "Este sitio de soporte estático no utiliza actualmente cookies funcionales complejas. Si más adelante se añaden herramientas de analítica o medición de audiencia, esta política deberá actualizarse.",
      section9Title: "9. Seguridad",
      section9Body:
        "Aplicamos medidas razonables para proteger los datos frente a accesos no autorizados, alteración, divulgación o destrucción.",
      section10Title: "10. Cambios",
      section10Body:
        "Esta política puede actualizarse en cualquier momento, especialmente si futuras funciones implican cuentas, analítica, socios, comercio electrónico o accesorios conectados.",
      footerCopy: "© 2026 BBQ Expert. Todos los derechos reservados.",
      footerSupport: "Soporte",
      footerTerms: "Términos",
      footerPrivacy: "Privacidad",
    },
    terms: {
      navSupport: "Soporte",
      navTerms: "Términos",
      navPrivacy: "Privacidad",
      languageLabel: "Idioma",
      termsEyebrow: "Términos",
      termsTitle: "Términos de uso",
      termsLead:
        "Estos términos regulan el uso de la app BBQ Expert y de su sitio de soporte asociado.",
      termsUpdated: "Última actualización: 22 de abril de 2026",
      summaryTitle: "Resumen",
      termsSummary1: "Uso personal de la app",
      termsSummary2: "Información facilitada con fines orientativos",
      termsSummary3: "Sin garantía de resultado culinario perfecto",
      termsSummary4: "Contacto: jsteunou+bbqexpertsupport@gmail.com",
      termsSection1Title: "1. Editor",
      termsSection1Body:
        "La app BBQ Expert y su sitio de soporte asociado son ofrecidos por Julien Steunou.",
      termsSection2Title: "2. Objeto del servicio",
      termsSection2Body:
        "BBQ Expert ayuda al usuario a estimar y seguir una cocción BBQ mediante parámetros introducidos manualmente, una regla en pantalla y un temporizador guiado.",
      termsSection3Title: "3. Uso autorizado",
      termsSection3Body:
        "Te comprometes a usar la app conforme a la ley aplicable y solo para un uso personal o profesional legítimo relacionado con la cocina y la organización de tus sesiones BBQ.",
      termsSection4Title: "4. Aviso importante",
      termsSection4Body:
        "Los tiempos, recomendaciones y estimaciones ofrecidos por BBQ Expert son solo una ayuda práctica. No sustituyen la atención del usuario, las normas de seguridad alimentaria ni el uso de una sonda interna cuando la seguridad alimentaria lo requiera, especialmente para cerdo y pollo.",
      termsSection5Title: "5. Funciones Premium",
      termsSection5Body:
        "Algunas funciones pueden ofrecerse como compras integradas o suscripciones, según la plataforma de distribución. Las condiciones de precio, facturación y renovación aplicables son las mostradas en el momento de la compra a través del App Store.",
      termsSection6Title: "6. Propiedad intelectual",
      termsSection6Body:
        "Los contenidos, textos, elementos visuales, logotipos y componentes de software relacionados con BBQ Expert están protegidos por los derechos aplicables. Cualquier reproducción, distribución o explotación no autorizada está prohibida salvo autorización previa.",
      termsSection7Title: "7. Limitación de responsabilidad",
      termsSection7Body:
        "Dentro de los límites permitidos por la ley, Julien Steunou no será responsable de daños indirectos, pérdida de datos ni resultados de cocción que no correspondan a las expectativas del usuario.",
      termsSection8Title: "8. Contacto",
      termsSection8Prefix: "Para cualquier pregunta sobre estos términos, contacta con",
      termsSection9Title: "9. Actualizaciones",
      termsSection9Body:
        "Estos términos pueden modificarse en cualquier momento. La versión publicada en este sitio será la válida en la fecha de consulta.",
      footerCopy: "© 2026 BBQ Expert. Todos los derechos reservados.",
      footerSupport: "Soporte",
      footerTerms: "Términos",
      footerPrivacy: "Privacidad",
    },
  },
  de: {
    support: {
      navFaq: "FAQ",
      navContact: "Kontakt",
      navTerms: "Bedingungen",
      navPrivacy: "Datenschutz",
      languageLabel: "Sprache",
      heroEyebrow: "Offizieller Support",
      heroTitle: "Brauchst du Hilfe mit BBQ Expert?",
      heroLead:
        "BBQ Expert ist eine mobile App für geführtes BBQ-Garen mit intelligentem Timer, Messlineal auf dem Bildschirm, AI Pit Coach und Premium-Funktionen. Diese Seite bündelt Support, häufige Fragen und Datenschutzinformationen.",
      heroSupportCta: "Support kontaktieren",
      heroPrivacyCta: "Datenschutzerklärung lesen",
      supportEmailLabel: "Support-E-Mail:",
      heroCardBadge: "Mobile App",
      heroCardTitle: "Support für geführtes Garen, Premium und lokalen Verlauf",
      heroCardBody:
        "Für schnellere Hilfe gib bitte dein Gerät, die App-Version, die Sprache und die Schritte bis zum Problem an.",
      heroList1: "Timer und Garplan",
      heroList2: "Messlineal und Kalibrierung",
      heroList3: "Premium und Kaufwiederherstellung",
      heroList4: "Datenschutz und lokale Daten",
      quickEyebrow: "Schnellhilfe",
      quickTitle: "Häufigste Themen",
      quickCard1Title: "Garen und Timer",
      quickCard1Body:
        "Hilfe bei Garberechnungen, Phase 1 / Phase 2 / Finish / Ruhezeit oder beim Verhalten des intelligenten Timers.",
      quickCard2Title: "Messung und Kalibrierung",
      quickCard2Body:
        "Probleme mit dem Bildschirm-Lineal, der Kalibrierung per Bankkarte oder der Dickenmessung.",
      quickCard3Title: "Premium und Verlauf",
      quickCard3Body:
        "Fragen zu AI Pit Coach, Service-Modus, Garverlauf und In-App-Käufen.",
      productEyebrow: "Produkt",
      productTitle: "Was BBQ Expert macht",
      productCard1Title: "Garen für mehrere Fleischsorten",
      productCard1Body:
        "BBQ Expert hilft beim Garen von Rind, Kalb, Lamm, Schwein und Huhn je nach Zuschnitt, Dicke, Hitze und Garmodus.",
      productCard2Title: "Messung auf dem Bildschirm",
      productCard2Body:
        "Die App enthält ein mit Bankkarte kalibrierbares Lineal, um die Fleischdicke besser zu schätzen.",
      productCard3Title: "Schritt-für-Schritt-Anleitung",
      productCard3Body:
        "Der Timer sagt dir, wann du wenden, fertig garen und ruhen lassen sollst, für konstantere Ergebnisse.",
      productCard4Title: "Premium-Funktionen",
      productCard4Body:
        "Der Pitmaster-Plan ergänzt AI Pit Coach, vollständigen Garverlauf und Service-Modus für 3 bis 10 Stücke.",
      faqEyebrow: "FAQ",
      faqTitle: "Häufig gestellte Fragen",
      faq1Title: "Brauche ich ein Konto, um die App zu nutzen?",
      faq1Body:
        "Nein. Auf Basis der aktuellen Projektversion erfordert BBQ Expert keine Kontoerstellung.",
      faq2Title: "Wo werden meine Einstellungen und mein Verlauf gespeichert?",
      faq2Body:
        "Einstellungen, Kalibrierung und lokaler Garverlauf werden auf deinem Gerät gespeichert.",
      faq3Title: "Was tun, wenn die Bildschirmmessung falsch wirkt?",
      faq3Body:
        "Prüfe die Kalibrierung in den Einstellungen mit einer Bankkarte und kontrolliere Display-Zoom oder Änderungen am Displayschutz.",
      faq4Title: "Wie kontaktiere ich den Support?",
      faq4Prefix: "Schreibe an",
      faq4Suffix:
        "mit deinem Gerät, deiner App-Version und einer genauen Problembeschreibung.",
      contactEyebrow: "Kontakt",
      contactTitle: "Schreib uns",
      contactSupportLabel: "Für Support-Anfragen:",
      contactPrivacyLabel: "Für Datenschutz-Anfragen:",
      contactBundleLabel: "Aktuelles Projekt iOS-Bundle / Android-Paket:",
      publishTitle: "Vor der Veröffentlichung",
      publishBody:
        "Die Support-Inhalte sind jetzt am Hauptprojekt ausgerichtet. Der rechtliche Name des Herausgebers muss noch bestätigt werden.",
      footerCopy: "© 2026 BBQ Expert. Alle Rechte vorbehalten.",
      footerSupport: "Support",
      footerTerms: "Bedingungen",
      footerPrivacy: "Datenschutz",
    },
    privacy: {
      navSupport: "Support",
      navTerms: "Bedingungen",
      navPrivacy: "Datenschutz",
      languageLabel: "Sprache",
      privacyEyebrow: "Datenschutz",
      privacyTitle: "Datenschutzerklärung",
      privacyLead:
        "Diese Seite beschreibt, wie BBQ Expert in der aktuellen Version Daten verarbeitet, vor allem lokale Einstellungen, Garverlauf und In-App-Käufe.",
      privacyUpdated: "Zuletzt aktualisiert: 4. April 2026",
      summaryTitle: "Zusammenfassung",
      summary1: "In der aktuellen Version ist kein Konto erforderlich",
      summary2: "Einstellungen und Verlauf werden lokal gespeichert",
      summary3: "In-App-Käufe werden über RevenueCat und Stores verwaltet",
      summary4: "Kontakt:",
      section1Title: "1. Verantwortlicher",
      section1Body:
        "Verantwortlich für die Datenverarbeitung von BBQ Expert ist Julien Steunou, erreichbar unter " + PRIVACY_EMAIL + ".",
      section2Title: "2. Welche Daten verarbeitet werden können",
      section2Lead:
        "Nach der aktuellen Projektversion verlangt die App keine Kontoerstellung und arbeitet hauptsächlich mit lokal auf dem Gerät gespeicherten Daten.",
      section2Item1: "Sprach-, Einheiten- und Alarm-Einstellungen.",
      section2Item2: "Kalibrierungseinstellungen des Messlineals.",
      section2Item3: "Lokaler Garverlauf.",
      section2Item4: "Premium-Statusinformationen aus In-App-Kauf-Plattformen.",
      section2Item5: "Informationen, die du per Support-E-Mail sendest.",
      section3Title: "3. Zwecke der Verarbeitung",
      section3Lead: "Diese Daten können verwendet werden, um:",
      section3Item1: "die App bereitzustellen, zu betreiben und zu sichern.",
      section3Item2: "Support-Anfragen zu beantworten.",
      section3Item3: "deine Einstellungen und den lokalen Verlauf auf dem Gerät zu speichern.",
      section3Item4: "deinen Zugang zu Premium-Funktionen zu prüfen und wiederherzustellen.",
      section3Item5: "geltende rechtliche Verpflichtungen einzuhalten.",
      section4Title: "4. Rechtsgrundlage",
      section4Body:
        "Je nach Fall beruht die Verarbeitung auf der Vertragserfüllung, deiner Einwilligung, dem berechtigten Interesse des Herausgebers oder einer gesetzlichen Pflicht.",
      section5Title: "5. Speicherdauer",
      section5Body:
        "Einstellungen und Garverlauf werden lokal auf deinem Gerät gespeichert, bis sie durch den Nutzer, durch Aktionen in der App oder durch Deinstallation entfernt werden. Support-E-Mails können so lange gespeichert werden, wie es zur Bearbeitung der Anfrage nötig ist.",
      section6Title: "6. Weitergabe von Daten",
      section6Body:
        "Lokale Gardaten werden für die aktuellen lokalen Funktionen nicht als an einen von BBQ Expert betriebenen Server übertragen beschrieben. Wenn du jedoch Premium-In-App-Käufe nutzt, können bestimmte technische und Transaktionsdaten von Plattform-Stores und RevenueCat verarbeitet werden, um Kauf, Validierung und Wiederherstellung des Premium-Zugangs zu verwalten.",
      section7Title: "7. Deine Rechte",
      section7Body:
        "Du kannst je nach anwendbarem Recht Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch verlangen. Bei Daten, die nur auf deinem Gerät gespeichert sind, lässt sich ein Teil dieser Kontrolle direkt über die App oder durch lokale Löschung ausüben.",
      section7ContactPrefix: "Um deine Rechte auszuüben, kontaktiere",
      section8Title: "8. Cookies und ähnliche Technologien",
      section8Body:
        "Diese statische Support-Seite nutzt derzeit keine komplexen funktionalen Cookies. Falls später Analyse- oder Reichweitenmessungs-Tools hinzugefügt werden, muss diese Erklärung aktualisiert werden.",
      section9Title: "9. Sicherheit",
      section9Body:
        "Wir setzen angemessene Maßnahmen um, um Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen.",
      section10Title: "10. Änderungen",
      section10Body:
        "Diese Erklärung kann jederzeit aktualisiert werden, insbesondere wenn künftige Funktionen Konten, Analytics, Partner, E-Commerce oder vernetzte Zubehörteile umfassen.",
      footerCopy: "© 2026 BBQ Expert. Alle Rechte vorbehalten.",
      footerSupport: "Support",
      footerTerms: "Bedingungen",
      footerPrivacy: "Datenschutz",
    },
    terms: {
      navSupport: "Support",
      navTerms: "Bedingungen",
      navPrivacy: "Datenschutz",
      languageLabel: "Sprache",
      termsEyebrow: "Bedingungen",
      termsTitle: "Nutzungsbedingungen",
      termsLead:
        "Diese Bedingungen regeln die Nutzung der BBQ Expert App und der dazugehörigen Support-Website.",
      termsUpdated: "Zuletzt aktualisiert: 22. April 2026",
      summaryTitle: "Zusammenfassung",
      termsSummary1: "Persönliche Nutzung der App",
      termsSummary2: "Informationen nur zu Orientierungszwecken",
      termsSummary3: "Keine Garantie für ein perfektes Garergebnis",
      termsSummary4: "Kontakt: jsteunou+bbqexpertsupport@gmail.com",
      termsSection1Title: "1. Herausgeber",
      termsSection1Body:
        "Die BBQ Expert App und die dazugehörige Support-Website werden von Julien Steunou bereitgestellt.",
      termsSection2Title: "2. Zweck des Dienstes",
      termsSection2Body:
        "BBQ Expert unterstützt Nutzer dabei, einen BBQ-Garvorgang anhand manuell eingegebener Parameter, eines Bildschirm-Lineals und eines geführten Timers zu schätzen und zu verfolgen.",
      termsSection3Title: "3. Zulässige Nutzung",
      termsSection3Body:
        "Du verpflichtest dich, die App im Einklang mit geltendem Recht und nur für persönliche oder legitime berufliche Zwecke im Zusammenhang mit Kochen und der Organisation deiner BBQ-Sessions zu nutzen.",
      termsSection4Title: "4. Wichtiger Hinweis",
      termsSection4Body:
        "Die von BBQ Expert bereitgestellten Zeiten, Empfehlungen und Schätzungen sind nur praktische Hilfen. Sie ersetzen weder die Aufmerksamkeit des Nutzers noch Lebensmittelsicherheitsregeln oder die Verwendung eines Kerntemperaturfühlers, wenn dies aus Gründen der Lebensmittelsicherheit erforderlich ist, insbesondere bei Schwein und Huhn.",
      termsSection5Title: "5. Premium-Funktionen",
      termsSection5Body:
        "Einige Funktionen können je nach Vertriebsplattform als In-App-Käufe oder Abonnements angeboten werden. Es gelten die Preis-, Abrechnungs- und Verlängerungsbedingungen, die zum Kaufzeitpunkt im App Store angezeigt werden.",
      termsSection6Title: "6. Geistiges Eigentum",
      termsSection6Body:
        "Inhalte, Texte, visuelle Elemente, Logos und Softwarebestandteile von BBQ Expert sind durch geltende Rechte geschützt. Jede unbefugte Vervielfältigung, Verbreitung oder Nutzung ist ohne vorherige Zustimmung untersagt.",
      termsSection7Title: "7. Haftungsbeschränkung",
      termsSection7Body:
        "Soweit gesetzlich zulässig, haftet Julien Steunou nicht für mittelbare Schäden, Datenverluste oder Garergebnisse, die nicht den Erwartungen des Nutzers entsprechen.",
      termsSection8Title: "8. Kontakt",
      termsSection8Prefix: "Bei Fragen zu diesen Bedingungen kontaktiere",
      termsSection9Title: "9. Aktualisierungen",
      termsSection9Body:
        "Diese Bedingungen können jederzeit geändert werden. Maßgeblich ist die auf dieser Website veröffentlichte Version zum Zeitpunkt des Aufrufs.",
      footerCopy: "© 2026 BBQ Expert. Alle Rechte vorbehalten.",
      footerSupport: "Support",
      footerTerms: "Bedingungen",
      footerPrivacy: "Datenschutz",
    },
  },
  zh: {
    support: {
      navFaq: "常见问题",
      navContact: "联系",
      navTerms: "使用条款",
      navPrivacy: "隐私政策",
      languageLabel: "语言",
      heroEyebrow: "官方支持",
      heroTitle: "需要 BBQ Expert 的帮助吗？",
      heroLead:
        "BBQ Expert 是一款烧烤烹饪辅助移动应用，提供智能计时器、屏幕测量尺、AI Pit Coach 和 Premium 功能。本页面集中提供支持、常见问题和隐私信息。",
      heroSupportCta: "联系支持",
      heroPrivacyCta: "阅读隐私政策",
      supportEmailLabel: "支持邮箱：",
      heroCardBadge: "移动应用",
      heroCardTitle: "支持引导式烹饪、Premium 与本地历史记录",
      heroCardBody:
        "为了更快处理请求，请提供你的设备、应用版本、语言，以及导致问题的操作步骤。",
      heroList1: "计时器与烹饪计划",
      heroList2: "测量尺与校准",
      heroList3: "Premium 与购买恢复",
      heroList4: "隐私与本地数据",
      quickEyebrow: "快速帮助",
      quickTitle: "最常见主题",
      quickCard1Title: "烹饪与计时器",
      quickCard1Body:
        "帮助你理解烹饪计算、第一面 / 第二面 / 完成 / 静置阶段，或智能计时器的行为。",
      quickCard2Title: "测量与校准",
      quickCard2Body:
        "关于屏幕尺、银行卡校准或设备厚度测量的问题。",
      quickCard3Title: "Premium 与历史记录",
      quickCard3Body:
        "关于 AI Pit Coach、服务模式、烹饪历史和应用内购买的问题。",
      productEyebrow: "产品",
      productTitle: "BBQ Expert 能做什么",
      productCard1Title: "多种肉类烹饪",
      productCard1Body:
        "BBQ Expert 可根据部位、厚度、火力和烹饪模式帮助你烹饪牛肉、小牛肉、羊肉、猪肉和鸡肉。",
      productCard2Title: "屏幕测量",
      productCard2Body:
        "应用内提供可用银行卡校准的测量尺，以更准确估算肉的厚度。",
      productCard3Title: "分步引导",
      productCard3Body:
        "计时器会提示你何时翻面、何时完成、何时静置，让操作更稳定。",
      productCard4Title: "Premium 功能",
      productCard4Body:
        "Pitmaster 计划包含 AI Pit Coach、完整烹饪历史，以及 3 到 10 份食材的服务模式。",
      faqEyebrow: "常见问题",
      faqTitle: "常见问题",
      faq1Title: "使用应用需要创建账户吗？",
      faq1Body:
        "不需要。根据当前项目版本，BBQ Expert 无需创建账户即可使用。",
      faq2Title: "我的偏好设置和历史记录存在哪里？",
      faq2Body:
        "偏好设置、校准信息和本地烹饪历史都存储在你的设备上。",
      faq3Title: "如果屏幕测量看起来不准确怎么办？",
      faq3Body:
        "请在设置中使用银行卡检查测量尺校准，并确认显示缩放或屏幕保护膜是否发生变化。",
      faq4Title: "如何联系支持？",
      faq4Prefix: "请写信到",
      faq4Suffix:
        "并附上你的设备、应用版本以及问题的准确描述。",
      contactEyebrow: "联系",
      contactTitle: "联系我们",
      contactSupportLabel: "支持请求：",
      contactPrivacyLabel: "隐私请求：",
      contactBundleLabel: "当前项目的 iOS bundle / Android package：",
      publishTitle: "发布前",
      publishBody:
        "支持内容现已与主项目保持一致。仍需确认发布者的法定名称。",
      footerCopy: "© 2026 BBQ Expert。保留所有权利。",
      footerSupport: "支持",
      footerTerms: "使用条款",
      footerPrivacy: "隐私政策",
    },
    privacy: {
      navSupport: "支持",
      navTerms: "使用条款",
      navPrivacy: "隐私政策",
      languageLabel: "语言",
      privacyEyebrow: "隐私",
      privacyTitle: "隐私政策",
      privacyLead:
        "本页面说明 BBQ Expert 当前版本如何处理数据，重点涉及本地偏好设置、烹饪历史以及应用内购买。",
      privacyUpdated: "最后更新：2026年4月4日",
      summaryTitle: "摘要",
      summary1: "当前版本无需账户",
      summary2: "偏好设置和历史记录存储在本地",
      summary3: "应用内购买由 RevenueCat 和应用商店处理",
      summary4: "联系：",
      section1Title: "1. 数据控制者",
      section1Body:
        "BBQ Expert 的数据控制者为 Julien Steunou，可通过 " + PRIVACY_EMAIL + " 联系。",
      section2Title: "2. 可能处理的数据",
      section2Lead:
        "根据当前项目版本，应用无需创建账户，主要依赖存储在设备上的本地数据运行。",
      section2Item1: "语言、单位和提醒偏好设置。",
      section2Item2: "屏幕测量尺校准设置。",
      section2Item3: "本地烹饪历史。",
      section2Item4: "通过应用内购买平台获取的 Premium 状态信息。",
      section2Item5: "你主动通过支持邮箱发送的信息。",
      section3Title: "3. 处理目的",
      section3Lead: "这些数据可能用于：",
      section3Item1: "提供、运行并保护应用。",
      section3Item2: "回复支持请求。",
      section3Item3: "在设备上保存你的偏好和本地历史记录。",
      section3Item4: "验证并恢复你对 Premium 功能的访问权限。",
      section3Item5: "遵守适用的法律义务。",
      section4Title: "4. 法律依据",
      section4Body:
        "根据不同情况，处理依据可能是服务履行、你的同意、发布者的合法利益或法律义务。",
      section5Title: "5. 数据保留",
      section5Body:
        "偏好设置和烹饪历史保存在你的设备本地，直到用户删除、在应用中执行清除操作，或卸载应用。支持邮件可能会保留至请求处理完成所需的时间。",
      section6Title: "6. 数据共享",
      section6Body:
        "对于当前本地功能，本地烹饪数据并未被描述为会发送到 BBQ Expert 运营的服务器。不过，如果你使用 Premium 应用内购买，某些技术和交易信息可能由平台商店及 RevenueCat 处理，用于管理购买、验证和恢复 Premium 权限。",
      section7Title: "7. 你的权利",
      section7Body:
        "根据适用法律，你可以请求访问、更正、删除、限制处理或提出反对。对于仅存储在设备上的数据，你也可以直接通过应用或本地删除来行使部分控制权。",
      section7ContactPrefix: "如需行使你的权利，请联系",
      section8Title: "8. Cookie 与类似技术",
      section8Body:
        "当前这个静态支持网站不使用复杂的功能性 Cookie。如果以后添加分析或受众测量工具，本政策需要相应更新。",
      section9Title: "9. 安全",
      section9Body:
        "我们会采取合理措施，保护数据免受未经授权的访问、篡改、披露或销毁。",
      section10Title: "10. 政策变更",
      section10Body:
        "本政策可能随时更新，尤其是在未来功能涉及账户、分析、合作伙伴、电商或联网配件时。",
      footerCopy: "© 2026 BBQ Expert。保留所有权利。",
      footerSupport: "支持",
      footerTerms: "使用条款",
      footerPrivacy: "隐私政策",
    },
    terms: {
      navSupport: "支持",
      navTerms: "使用条款",
      navPrivacy: "隐私政策",
      languageLabel: "语言",
      termsEyebrow: "条款",
      termsTitle: "使用条款",
      termsLead:
        "本条款适用于 BBQ Expert 应用及其相关支持网站的使用。",
      termsUpdated: "最后更新：2026年4月22日",
      summaryTitle: "摘要",
      termsSummary1: "应用供个人使用",
      termsSummary2: "所提供信息仅供参考",
      termsSummary3: "不保证完美的烹饪结果",
      termsSummary4: "联系：jsteunou+bbqexpertsupport@gmail.com",
      termsSection1Title: "1. 发布者",
      termsSection1Body:
        "BBQ Expert 应用及其支持网站由 Julien Steunou 提供。",
      termsSection2Title: "2. 服务内容",
      termsSection2Body:
        "BBQ Expert 通过手动输入参数、屏幕测量尺和引导式计时器，帮助用户估算并跟踪烧烤烹饪过程。",
      termsSection3Title: "3. 允许的使用",
      termsSection3Body:
        "你同意仅在符合法律规定的前提下，将本应用用于与烹饪和组织烧烤活动相关的个人用途或正当专业用途。",
      termsSection4Title: "4. 重要提示",
      termsSection4Body:
        "BBQ Expert 提供的时间、建议和估算仅为实用参考，并不能替代用户的注意义务、食品安全规范，或在食品安全需要时使用中心温度探针，尤其是猪肉和鸡肉。",
      termsSection5Title: "5. Premium 功能",
      termsSection5Body:
        "某些功能可能根据分发平台以应用内购买或订阅形式提供。适用的价格、计费和续订条件以购买时在 App Store 显示的信息为准。",
      termsSection6Title: "6. 知识产权",
      termsSection6Body:
        "与 BBQ Expert 相关的内容、文本、视觉元素、标志和软件元素均受适用权利保护。未经事先授权，禁止任何复制、传播或利用行为。",
      termsSection7Title: "7. 责任限制",
      termsSection7Body:
        "在法律允许的范围内，Julien Steunou 不对间接损害、数据丢失或未达到用户预期的烹饪结果承担责任。",
      termsSection8Title: "8. 联系方式",
      termsSection8Prefix: "如对本条款有任何疑问，请联系",
      termsSection9Title: "9. 更新",
      termsSection9Body:
        "本条款可随时修改。以访问当日网站上发布的版本为准。",
      footerCopy: "© 2026 BBQ Expert。保留所有权利。",
      footerSupport: "支持",
      footerTerms: "使用条款",
      footerPrivacy: "隐私政策",
    },
  },
};

const page = document.body.dataset.page;
const selector = document.getElementById("language-select");
const storageKey = "bbq-expert-support-language";
const params = new URLSearchParams(window.location.search);
const requestedLanguage = params.get("lang");
const defaultLanguage = "fr";

function updateMeta(language) {
  const descriptions = {
    support: {
      fr: "Centre de support officiel de BBQ Expert, l'application mobile de cuisson BBQ guidée avec mesure d'épaisseur, timer intelligent et fonctions premium.",
      en: "Official support center for BBQ Expert, the guided BBQ cooking mobile app with thickness measurement, smart timer, and premium features.",
      it: "Centro di supporto ufficiale di BBQ Expert, l'app mobile per la cottura BBQ guidata con misurazione dello spessore, timer intelligente e funzioni Premium.",
      es: "Centro de soporte oficial de BBQ Expert, la app móvil de cocción BBQ guiada con medición de grosor, temporizador inteligente y funciones Premium.",
      de: "Offizielles Support-Center für BBQ Expert, die mobile App für geführtes BBQ-Garen mit Dickenmessung, intelligentem Timer und Premium-Funktionen.",
      zh: "BBQ Expert 官方支持中心，提供引导式烧烤烹饪、厚度测量、智能计时器和 Premium 功能支持。",
    },
    privacy: {
      fr: "Politique de confidentialité de BBQ Expert. Informations sur les données locales, les achats intégrés et vos droits.",
      en: "BBQ Expert privacy policy. Information about local data, in-app purchases, and your rights.",
      it: "Informativa sulla privacy di BBQ Expert. Informazioni su dati locali, acquisti in-app e tuoi diritti.",
      es: "Política de privacidad de BBQ Expert. Información sobre datos locales, compras integradas y tus derechos.",
      de: "Datenschutzerklärung von BBQ Expert. Informationen zu lokalen Daten, In-App-Käufen und deinen Rechten.",
      zh: "BBQ Expert 隐私政策，说明本地数据、应用内购买和你的权利。",
    },
    terms: {
      fr: "Conditions d'utilisation de BBQ Expert.",
      en: "BBQ Expert terms of use.",
      it: "Condizioni d'uso di BBQ Expert.",
      es: "Términos de uso de BBQ Expert.",
      de: "Nutzungsbedingungen von BBQ Expert.",
      zh: "BBQ Expert 使用条款。",
    },
  };

  const titleMap = {
    support: {
      fr: "BBQ Expert | Support",
      en: "BBQ Expert | Support",
      it: "BBQ Expert | Supporto",
      es: "BBQ Expert | Soporte",
      de: "BBQ Expert | Support",
      zh: "BBQ Expert | 支持",
    },
    privacy: {
      fr: "BBQ Expert | Politique de confidentialité",
      en: "BBQ Expert | Privacy Policy",
      it: "BBQ Expert | Informativa sulla privacy",
      es: "BBQ Expert | Política de privacidad",
      de: "BBQ Expert | Datenschutzerklärung",
      zh: "BBQ Expert | 隐私政策",
    },
    terms: {
      fr: "BBQ Expert | Conditions d'utilisation",
      en: "BBQ Expert | Terms of Use",
      it: "BBQ Expert | Condizioni d'uso",
      es: "BBQ Expert | Términos de uso",
      de: "BBQ Expert | Nutzungsbedingungen",
      zh: "BBQ Expert | 使用条款",
    },
  };

  document.title = titleMap[page][language];
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", descriptions[page][language]);
  }
}

function applyLanguage(language) {
  const safeLanguage = translations[language] ? language : defaultLanguage;
  const content = translations[safeLanguage][page];
  document.documentElement.lang = safeLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (content[key]) {
      node.textContent = content[key];
    }
  });
  if (selector) {
    selector.value = safeLanguage;
  }
  updateMeta(safeLanguage);
  localStorage.setItem(storageKey, safeLanguage);
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("lang", safeLanguage);
  window.history.replaceState({}, "", nextUrl);
}

const initialLanguage =
  requestedLanguage ||
  localStorage.getItem(storageKey) ||
  (navigator.language || "").slice(0, 2) ||
  defaultLanguage;

applyLanguage(initialLanguage);

if (selector) {
  selector.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

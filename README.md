# BBQ expert support site

Site statique de support et de politique de confidentialité pour le projet BBQ Expert.

## Fichiers

- `index.html` : page d'accueil support
- `terms.html` : conditions d'utilisation
- `privacy.html` : déclaration / politique de confidentialité
- `assets/styles.css` : styles du site
- `assets/icon-bbq-expert.svg` : icone reprise des assets marketing du projet principal
- `assets/site.js` : gestion multilingue pour les 6 langues supportées par l'app

## Personnalisation avant mise en ligne

Remplacer les valeurs suivantes par vos informations réelles :

- `[Nom de l'éditeur / société]`
- les mentions légales, si nécessaire

Le contenu du site a été aligné avec l'application mobile située dans
`/Users/juliensteunou/Documents/BBQ Expert`, notamment :

- application sans compte dans la version actuelle
- préférences et historique stockés localement
- achats intégrés Premium via RevenueCat / stores
- bundle/package : `com.juliensteunou.bbqexpert`
- langues supportées sur le site : `fr`, `en`, `it`, `es`, `de`, `zh`

## Publication

Le site est statique et peut etre publie tel quel sur GitHub Pages, Netlify, Vercel ou n'importe quel hebergeur web statique.

## Deploiement sur Vercel

1. Creez un depot Git avec le contenu de ce dossier.
2. Poussez-le sur GitHub, GitLab ou Bitbucket.
3. Dans Vercel, cliquez sur `Add New...` puis `Project`.
4. Importez le depot.
5. Conservez les reglages par defaut :
   - Framework Preset : `Other`
   - Root Directory : `.`
   - Build Command : vide
   - Output Directory : vide
6. Lancez le deploiement.

Le fichier `vercel.json` est deja configure pour :

- servir le site comme un projet statique
- activer des URLs propres
- exposer la page des conditions sur `/terms`
- exposer la page de confidentialite sur `/privacy`
- ajouter quelques en-tetes de securite simples

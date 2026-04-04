# BBQ expert support site

Site statique de support et de politique de confidentialite pour le projet BBQ expert.

## Fichiers

- `index.html` : page d'accueil support
- `privacy.html` : declaration / politique de confidentialite
- `assets/styles.css` : styles du site

## Personnalisation avant mise en ligne

Remplacer les valeurs suivantes par vos informations reelles :

- `support@bbqexpert.app`
- `privacy@bbqexpert.app`
- `[Nom de l'editeur / societe]`
- les mentions legales, si necessaire

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
- exposer la page de confidentialite sur `/privacy`
- ajouter quelques en-tetes de securite simples

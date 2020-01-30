# Marvel API x React 

## Fonctionnalités : 

- Liste des 100 premiers super-héros. (l'Api en compte 1493 mais a une limite de 100 héros pour un call)
- Pagination s'adaptant lors du changement de variable `herosPerPage`.
- Pages dynamiques avec les informations des héros sur la route **/hero/:id**  (Nom, image, description, listes des comics, events...)
- Local storage pour éviter de faire de multiples calls
- Style : utilisation de **bootstrap** et **scss**.
- Page not found.

## Configuration :

1. Installer les nodes modules :

```
npm i
```

2. Lancer le projet en serveur local

```
npm start ou yarn start 
```

## Compléments pour configuration : 

Le projet utilise l'Api Marvel. Afin de pouvoir récupérer les données, il est nécessaire de posséder une clef d'API et d'ajouter les domaines pour lesquels les calls seront possibles.

Apparemment les calls marcheront avec ma clefs.
Si non, les deux étapes sont : 
- Vous devez vous inscrire sur https://developer.marvel.com/ afin de récupérer vos clefs d'API et les modifier dans le fichier **/src/config/config.js**.
- Ajouter votre domaine en copiant votre adresse IP que vous trouverez sur https://whatismyipaddress.com/fr/mon-ip





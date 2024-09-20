# 🌤 Weather App

Une application météo simple et interactive développée avec **React.js**. Cette application permet de rechercher la météo actuelle pour une ville spécifique, affichant la température, l'humidité, la vitesse du vent, ainsi qu'une icône descriptive des conditions météorologiques.

## 🎨 Aperçu

L'application **Weather App** affiche des informations météorologiques en temps réel pour n'importe quelle ville saisie par l'utilisateur. L'interface moderne et minimaliste permet une expérience utilisateur fluide et agréable.

![Weather App Screenshot](https://github.com/bounyamine/weather/blob/master/public/screenshots/screen.png)

## 🚀 Fonctionnalités

- Recherchez la météo actuelle pour n'importe quelle ville.
- Affiche les détails de la température en Celsius, la description du climat, l'humidité et la vitesse du vent.
- Icône descriptive des conditions météorologiques.
- Gère les erreurs pour les villes non trouvées avec un message d'alerte.
- Animation fluide de l'apparition des données météorologiques.
- Loader (animation de chargement) pendant la récupération des données.

## 🛠️ Technologies

- **React.js** : pour la création de l'interface utilisateur et la gestion des états.
- **FontAwesome** : pour les icônes météo.
- **CSS3** : pour le style et les animations.
- **API météo** : pour récupérer les données en temps réel.

## 📦 Installation

1. **Cloner le projet :**

   ```bash
   git clone https://github.com/bounyamine/weather.git
   cd weather
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Démarrer l'application :**

   ```bash
   npm start
   ```

4. **Accéder à l'application :**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📖 Utilisation

1. Entrez le nom d'une ville dans la barre de recherche.
2. Cliquez sur l'icône de recherche pour afficher les données météorologiques.
3. Les informations affichées incluent la température actuelle, l'humidité, la vitesse du vent, et une description du climat.
4. En cas de ville non trouvée, un message d'erreur s'affiche.

## 🗂 Structure du projet

```
/public
  index.html              # Page HTML principale
/src
  App.js                  # Composant principal de l'application
  App.css                 # Style de l'application principale
  index.js                # Point d'entrée de React
  index.css               # Style général des composants
```

## 🎥 Démo

Découvrez une démo en direct de l'application [ici](https://your-demo-url.com) !

## 🤝 Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer cette application ou ajouter de nouvelles fonctionnalités, suivez ces étapes :

1. Fork le projet.
2. Créez une nouvelle branche (`git checkout -b feature/new-feature`).
3. Committez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez sur la branche (`git push origin feature/new-feature`).
5. Créez une Pull Request.

## 📄 Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.

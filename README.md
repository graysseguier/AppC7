# AppC7
Application de propagation d'informations pendant le Centrale Sevens.

Auteurs :
Produit par le pôle Info du ©C7

2018-2019 : Création du projet, choix de la techno et création du squelette
Paul YEME (1A), Baudouin DANEL (1A), Wassim BOUZIT (1A), Tanguy HOUETTE (1A) \

2019-2020 : Minimal Valuable Product - Navigations et la V0 de tous les onglets
Tanguy HOUETTE (2A), Tancrède DE GUIGNE (1A), Pascal RAILLE (1A), Saad CHTOUKI (1A), Corentin DELLOYE (1A)
Contact : tanguy.houette@student-cs.fr

2020-2021 : Minimal Valuable Product - Connection avec une base de données pour permettre des actualisations rapides et faciles, refonte de la navigation
Tancrède DE GUIGNE (2A), Pascal RAILLE (2A), Pierre PELLETIER de CHAMBURE (2A), Guillaume RAYSSEGUIER, Eliott PI\

Description générale du projet :
Le but du projet est de développer une application mobile qui puisse faciliter la communication d'informations entre les parties prenantes du tournois Centrale 7 : organisateurs, public, équipes, staffeurs.

Prérequis techniques (à installer pour le développeur) :
NodeJS : version v12.1.0
--> React-Native et Expo : sdk 35
Je vous suggère de vous référer à la documentation Expo (Get Started) pour ces téléchargements. Vous pouvez vous référrer à la section dependencies des fichiers package.json pour retouver les versions nécessaires.

Une description technique succincte :
Le projet est composé :

d'une application qui dispose de la plupart des données en place (dans le dossiers assets)
une base de donnée Firebase qui contiennent les donées dynamiques.
La navigation de l'application est assurée via react-navigation. L'application est organisée par onglets (principaux et secondaires) qui apparaissent respectivement dans une bottomTabBar et dans un drawerNavigator. Le contenu des onglets est détaillé dans la partie suivante.

Pour plus d'informations sur les dépendances du projet (et notamment leur version), vous pouvez vous référrer à la section dependencies des fichiers package.json

Un point sur la navigation et la structure des pages de l'app :
La navigation est assurée via react-navigation. Je vous renvoie à la documentation de react-native-navigation (ou bien à des tutos) pour les termes techniques (rechercher en partculier tabNavigator, DrawerNavigator et StackNavigator). Elle est mise en place dans le dossier navigation, et en particulier dans AppNavigator.js.

AppNavigator.js :
Ce Component est appelé dans App.js et contient la quasi totalité de l'application : les onglets et la navigation pour passer d'un onglet à l'autre. Les onglets "principaux" sont directement dans le bottomTabNavigator. Les autres sont dans le drawerNavigator.

Les onglets : StackNavigators
Chaque onglet est en fait un StackNavigator (ce qui permet si besoin de naviguer à l'intérieur de chaque onglet, vers une page de niveaux inférieur). Ces StackNavigators sont TOUS définis dans le dossier TabStackNavigators. Et ils renvoient aux différents écrans qui doivent s'afficher dans chacun de ces onglets. Ces écrans sont définis dans le dossier screens. Il y a dans ce dossier un exemple de StackNavigator vierge : ExampleStack.js (A LAISSER VIERGE ET A COPIER/COLLER AU BESOIN !)

Structure des screens :
Un screen est composé de deux parties :

L'entête ou "Header" est un Custom Component (défini dans le dossier components ). Il faut lui passer en argument le titre, navigation (qui est un objet JS qui permet de naviguer à travers l'application) et le booléen isHome (est ce que ce screen est le screen qui s'ouvre à la première ouverture d el'onglet ou bien une page de niveau inférieur ?) qui régule l'apparition des icônes dans l'entête : si isHome est true, l'icône permet d'ouvrir le drawerNavigator, sinon, elle permet de retourner en arrière.
Le component d'affichage de cette page (le contenu de l'onglet).
Il y a dans ce dossier un exemple de screen vierge : ExampleScreen.js (A LAISSER VIERGE ET A COPIER/COLLER AU BESOIN !)

Avancement du projet et description des fonctionnalités
Les fonctionnalités qui sont disponibles à ce jour dans l'application sont réparties dans les différents onglets :

Infos: Cet onglet d'accueil a vocation à afficher les dernières infos du tournoi sous forme d'une image affichée ou d'un pdf (pour l'instant page blanche). Dans sa version 0 (actuelle), il permet simplement d'afficher du texte. Un design plus complexe est envisageable pour l'année prochaine mais ne faisait pas partie de nos priorités pour cette année.

Programme: Cet onglet affichera le programme du tournoi pour les spectateurs sous forme d'une image affichée ou d'un pdf (pour l'instant page blanche).

Résultats : L'onglet résultat affiche les résultats des matchs joués. Il sera relié à la base de donnée pour afficher les matchs joués et le score, ainsi que les matchs à venir. La liste des matchs apparait sous forme de liste défilante et pour chaque match on a une ligne indiquant le noms des équipes et le score.

Team Space :

Actuellement, cet onglet a pour mission d’informer les utilisateurs sur les équipes participant au tournoi. Lorsqu’on y accède, la liste des équipes est disponible. Cliquer sur une équipe vers une fiche personnalisée pour cette dernière, contenant quelques informations comme la provenance, le nombre de participations au tournoi, le nombres de titres et le (resp la) meilleur joueur (resp joueuse). A terme, cet onglet pourra se dédoubler en une présentation de l'équipe d'une part, et un moyen d'informer les joueurs d'une équipe en particulier d'informations les concernants.

Staffeurs : Cet onglet permet aux staffeurs d'avoir accès à leurs fiches de permanence durant le tournoi. Il y a une liste des staffeurs qui peut défiler et quand on clique sur le nom d'un staffeur on est redirigé vers un pdf qui donne le programme du staffeur en question. Sera plus tard relié à la base de donnée pour faire évoluer les pdf pendant le tournoi si besoin.

Contacts : Cet onglet fournit aux utilisateurs les numéros de certains organisateurs, et des numéros en cas d’urgence. Il permet aussi aux « users » d’être redirigés vers les réseaux sociaux de l’application afin d’améliorer la visibilité de l’association.

Partenaires : Cet onglet affiche les logos de tous les partenaires du C7. En cliquant sur le logo, on est redirigé vers le site du partenaire en question.

Carte : L'onglet carte utilise une bibliothèque spéciale qui permet d'utiliser une carte (de type plan ou maps), dans laquelle on est géolocalisée, et sur laquelle sont affichés des points d'intérêts. Cette carte peut être centrée sur le campus de CS ou sur le Club d'Orsay. Elle dispose aussi d'une barre de recherche qui permet de localiser des activités. On distingue les activités pour les joueurs exclusivement et celles qui concernent tout le monde.

Questionnaire de satisfaction : Cet onglet contient une WebView qui affiche le contenu d'un GoogleForm : Il s'agit du questionnaire de satisfaction.

Signaler un bug : Cet onglet contient une WebView qui affiche le contenu d'un GoogleForm : Il s'agit d'un questionnaire pour signaler un bug sur l'application.

L'application n'est pas encore disponible sur l'AppStore ni sur GooglePlay. Cependant la MVP est terminée. Avant sa première utilisation lors de la prochaine édition du tournois Centrale 7, il conviendrait de tester l'application sur un large pannel de téléphones (demander à toute l'association de la télécharger par exemple) de manière à éliminer un maximum de bug d'affichage liés à la diversités des formats d'écrans et des configurations de téléphone.)

Procédure de lancement détaillée (Développeur) :
Grâce à Expo il est possible de développer l'application en observant le résultat de ses modifications du code source en live. Voilà la procédure (que vous pouvez retrouver dans la documentation Expo):

Cloner le repository GitHub sur son ordinateur.

Installer les packages nodes dont dépendent le projet en exécutant la commande à la racine du projet:

npm install
Exécuter à la racine du projet :
expo start
Cette comande devrait ouvrir une page dans votre navigateur. Avec l'application Expo téléchargée sur votre smartphone, vous pouvez scanner le QR code qui apparait et ouvrir l'application sur votre téléphone.

Astuce Android : Si vous utiliser comme moi android et que vous préférez passer par un câble (plus rapide et plus fiable), utiliser plutôt cette commande :

expo start --localhost --android
Remarques :
Pour que cela fonctionne, il faut que vous activiez le mode développeur de votre smartphone.
Vous pouvez également installer un émulateur de smartphone sur votre ordinateur (utile notamment pour voir l'effet sur différentes tailles d'écran, et différentes versions des systèmes d'exploitations Android et IOS). Encore une fois je vous renvoie à la doumentation et à des tutos Expo.

Description des données :
Données en dur dans l'application :

Les données volumineuses sont stockeées dans le dossier assets. Le reste des données est écrit dans des constantes en dures dans les différents screens et components.

Données sur la BDD :

Fait par Pascal : s'adresser à lui pour des questions.

Utilisation de firebase (https://firebase.google.com/) qui permet d’avoir une base de données en ligne sur les serveurs google. J’ai créé un projet où j’ai mis une base de données provisoire dans l’onglet database.

Avec cet outil, il est donc de modifier et de créer directement la base de données sans passer par l’application (inteface administrateur de Firebase).

Pour relier l’application à la base de données il faut entrer les lignes de code suivantes dans le component Database (avec tous les paramètres APIKey etc qui sont trouvent dans les paramètres de notre projet Firebase) :

const firebase = require("firebase");\
require("firebase/firestore");\
const firebaseConfig = {\
  apiKey: "AIzaSyDP_Dbevczlh2eN1Zo9AyUvLZICoxnKhIc",\
  authDomain: "fzdf-2c9ff.firebaseapp.com",\
  databaseURL: "https://fzdf-2c9ff.firebaseio.com", \
  projectId: "fzdf-2c9ff",\
  storageBucket: "fzdf-2c9ff.appspot.com",\
  messagingSenderId: "750961760063",\
  appId: "1:750961760063:web:9ca0c45a75f67663c8e58a",\
  persistence: true,\
};\
firebase.initializeApp(firebaseConfig);
Enfin pour récupérer les données de la base de données on utilise des commandes SQL (je ne l’ai pas encore fait sur l’application mais j’ai l’exemple du code Toss où ils utilisent la commande Get pour accéder aux données) :

    _loadMatchs () {\
        this.setState({donnees: []}, ()=>{\
            const sport = 'RugbyM'\
            var that = this\
            \
            var db = firebase.firestore();\
            db.settings({\
                timestampsInSnapshots: true\
                });\
            var docRef = db.collection("Sports").doc(sport).collection("Matchs").where("Phase","==",'FINALES')\
            docRef.get().then(function (querySnapshot) {\
                querySnapshot.forEach(function (doc) {\
                    var match = doc.data()\
                    that.setState({donnees:that.state.donnees.concat(match)})\
                });\
            })\
            .then(() => this.sortMatchs())\
            .catch(function (error) {\
                console.log("Error getting document:", error);\
            })\
            .then(() => this.setState({loading: false}))\
        })\
    }
Pour conclure j’avais juste réussi à relier mon projet firebase et l’application (normalement ça marche), il me reste à écrire toutes les fonctions de récupération des données sur la database. Ensuite il faudrait vérifier que tout s’actualise sur l’application et réfléchir à comment modifier cette base de données en live pour avoir les scores des matchs (soit on modifie directement la base de données mais je ne pense pas que ça soit le plus simple soit dans la version administrateur de l’appli on code un onglet qui nous permettrait de mettre à jour la base de données par exemple on sélectionnerait les 2 équipes dans 2 menus déroulant on écrirait le score et en cliquand sur un bouton submit cela mettrait à jour la base de données).
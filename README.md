                                                                                     Mini Rapport

Exercice 1:
                                                     
=> Fonction constructeur Voiture :
La fonction constructeur Voiture crée un objet voiture avec les attributs suivants :  (model, annee, marque, type, carburant)

=> Liste des voitures :
on fait un tableau contient des instances de voitures, incluant des objets Hyundai et Ford avec des attributs spécifiques :

=> Héritage entre Voiture, Hyundai et Ford :
L'héritage est implémenté en utilisant call et Object.create pour partager les propriétés de Voiture avec les sous-classes Hyundai et Ford. 
Exemple pour Hyundai :
        ->  La fonction constructeur Hyndai appelle le constructeur de la classe parent Voiture avec call pour hériter des propriétés communes .
         Ensuite, elle ajoute des propriétés spécifiques à Hyundai (serie et hybride ).
       -> prototypage : Hyndai.prototype = Object.create(Voiture.prototype) permet à Hyndai d'hériter des méthodes de Voiture en créant un nouvel objet avec le prototype de Voiture. 
         Cela signifie que toutes les méthodes de Voiture sont accessibles à travers des instances de Hyndai.

=> Tri des voitures par année :
On effectue le tri des voitures par année avec la méthode sort() :Dans ton code, la fonction de tri compare les années des voitures (v1.annee et v2.annee). 
Si l'année de v1 est inférieure à celle de v2, sort() place v1 avant v2, créant ainsi un ordre croissant des années.



Exercice 2:`

-> Idée générale :créer des objets, ajouter des méthodes via le prototype, et trier une liste d'objets . 

Création des objets :
Les objets Etudiant et Professeur sont définis avec leurs attributs respectifs, tels que nom, prénom, âge et identifiants.

Ajout des méthodes :
La méthode etudier() est ajoutée à l'objet Etudiant et la méthode enseigner() à l'objet Professeur pour décrire leurs actions respectives 
( exemple : Etudiant.prototype.etudier = function () {
 console.log(`${this.prenom} ${this.nom} est un etudiant.`);
}; ) .

Tri des étudiants :
Les étudiants sont triés par ordre alphabétique en comparant d'abord leur nom, puis leur prénom si les noms sont identiques ( avec methode sort).



Exercice 3 : 

-> Idée générale :l'utilisation des classes ,un modèle pour la création d’objets.

Vecteur2D :
On utilise de la syntaxe de classe  pour définir le constructeur et les méthodes (constructor, afficher, addition).

1 ) Héritage entre Rectangle et Carre : (  class Carre extends Rectangle  )

Héritage avec extends : La classe Carre hérite des propriétés et méthodes de la classe Rectangle grâce à la syntaxe extends. 
Cela signifie que Carre a accès aux attributs et méthodes de Rectangle, mais peut également les modifier ou les compléter si nécessaire.

Utilisation de super(mesure, mesure) : Lorsque le constructeur de Carre est appelé, il utilise super pour appeler le constructeur de la classe parente Rectangle. 
2)  Point et Segment ( Composition  ) :
-> La classe Point représente un point dans un plan avec des coordonnées x et y. Elle a un constructeur pour initialiser ces valeurs et une méthode afficher() pour afficher les coordonnées du point.
-> La classe Segment représente un segment de droite, défini par deux points : un point d'origine et un point d'extrémité.
 Segment contient deux objets Point pour définir son propre comportement . 



Exercice 4 :

1. Inscription (sign-up.html)
L'utilisateur crée un compte en saisissant son Username, Email, et Mot de passe. Les données sont enregistrées dans localStorage et l'utilisateur est redirigé vers la page de connexion après la création du compte.

2. Connexion (login.html)
L'utilisateur se connecte en utilisant son Email et Mot de passe. Si les informations sont correctes, l'utilisateur est redirigé vers la page des blogs. Si l'utilisateur est déjà connecté, il est directement redirigé vers ses blogs.
  
3. Affichage des Blogs (myBlogs.html)
Les blogs de l'utilisateur connecté sont affichés sous forme de cartes. Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion.


4. Utilisation de localStorage
Les informations de l'utilisateur (inscription, connexion) sont stockées dans le localStorage pour maintenir la session active. Ce système permet de vérifier si l'utilisateur est connecté ou non.
xercice permet de créer un système simple d'authentification et de gestion des blogs avec un stockage local.s applications réelles.

Exemple de stockage dans localStorage :

// Stockage des données de l'utilisateur
localStorage.setItem('user', JSON.stringify({ username, email, password }));
Exemple de récupération des données de l'utilisateur :




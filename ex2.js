// 1 objet  Etudiant
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
  }


// 1 objet  Professeur
    function Professeur(nom, age, cin) {
        this.nom = nom;
        this.age = age;
        this.cin = cin;
      }
  
  // 2
  //  methode etudier() a l’objet Etudiant
  Etudiant.prototype.etudier = function () {
    console.log(`${this.prenom} ${this.nom} est un etudiant.`);
  };
  

  
  //  enseigner() a l’objet Professeur
  Professeur.prototype.enseigner = function () {
    console.log(`  ${this.nom} est un enseignant .`);
  };
  
  // 3  liste des etudiants
  let etudiants = [
    new Etudiant("Alami", "Ahmed", 20, "JC12309"),
    new Etudiant("Badr", "Mohamed", 21, "CN45688"),
    new Etudiant("Ali", "Khalid", 23, "AS78908"),
    new Etudiant("Yassine", "Omar", 20, "BH98778"),
  ];
  // avant tri 
  console.log("Liste des étudiants avant tri:");
  etudiants.forEach(function (etudiant) {
    console.log(`${etudiant.nom} ${etudiant.prenom} `);
  });


 
  // si les noms sont identiques  alors on compare les prenoms 

  etudiants.sort(function (a, b) {
    if (a.nom < b.nom) return -1;
    if (a.nom > b.nom) return 1;
    if (a.prenom < b.prenom) return -1;
    if (a.prenom > b.prenom) return 1;
    return 0;
  });
  
  
 // apres trie 
  console.log("Liste des étudiants apres tri :");
  etudiants.forEach(function (etudiant) {
    console.log(`${etudiant.nom} ${etudiant.prenom}`);
  });
  
// Classe Vecteur2D
class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
   
    afficher() {
      console.log(`Vecteur2D( x:= ${this.x}, y= ${this.y})`);
    }
  
    // addition de deux vect
    addition (vecteur) {
    const result = new Vecteur2D(this.x + vecteur.x, this.y + vecteur.y);
    return result;
    }
  }
  
  // 
  const v1 = new Vecteur2D();
  const v2 = new Vecteur2D(3, 4);
  v1.afficher();
  v2.afficher(); 
  const v3 = v1.addition(v2);
  v3.afficher(); // Resultat de la somme
  
  // Classe Rectangle
  class Rectangle {
    constructor(longueur = 1, largeur = 1) { // on prend 1 comme valeur par defaut  
      this.longueur = longueur;
      this.largeur = largeur;
      this.nom = "rectangle";
    }
  
    // mehode pour afficher 
    afficher() {
      console.log(`${this.nom} : ( Longueur: ${this.longueur} , Largeur: ${this.largeur} )`);
    }
  
    // methode pour calculer surface
    surface() {
      return this.longueur * this.largeur;
    }
  }
  
  // Classe Carre héritant de Rectangle
  class Carre extends Rectangle { 
    constructor(mesure) { 
     super(mesure, mesure); // Appel du constructeur parent avec memes valeurs pour largeur et longueur
      this.nom = "carré";
    }
  }
  
  // Instanciation  de Rectangle et Carre
  const rect = new Rectangle(5, 3);
  const carre = new Carre(4);
  rect.afficher();
  console.log(`Surface du rectangle: ${rect.surface()}`);
  carre.afficher();
  console.log(`Surface du carré: ${carre.surface()}`);
  
  // Classe Point
  class Point {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Point( x= ${this.x}, y= ${this.y})`);
    }
  }
  
  // Classe Segment (composée de 2 Points)
  class Segment {
    constructor(x1, y1, x2, y2) {
      this.orig = new Point(x1, y1); // point d'origine 
      this.extrem = new Point(x2, y2);// point d'extremite 
    }
  
    afficher() {
      console.log("Segment :");
      console.log("origine:");
      this.orig.afficher();
      console.log("origine:");
      this.extrem.afficher();
    }
  }
  
  //  Segment
  const seg = new Segment(1, 2, 4, 5);
  seg.afficher();
  
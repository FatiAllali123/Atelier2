
// 1 fct constructeur 
function Voiture(model , annee, marque, type,carburant){
this.mode=model;
this.marque=marque;
this.annee=annee;
this.type=type;
this.carburant=carburant;
}



 //3 le mécanisme d’héritage entre la voiture et deux autre classes Hyndai( attributs : série(string) , hybride (booléen) / méthodes : alarmer() )et Ford ( options (tableau )).

// Hyndai
function Hyndai(model , annee, marque, type,carburant ,  serie , hybride){
    Voiture.call(this ,model , annee, marque, type,carburant );
    this.serie=serie;
    this.hybride=hybride; //  booean => true or false 

}
Hyndai.prototype= Object.create(Voiture.prototype , {
    constructor:{
        value:Hyndai ,
        enumerable: false,
        writable: true,
        configurable: true
    }
})

Hyndai.prototype.allumer=function(){
    console.log(`Alarme activée sur la Hyundai ${this.model}`);
} 



//ford 
function Ford(model , annee, marque, type,carburant ,options){ // tableau options
    Voiture.call(this ,model , annee, marque, type,carburant );
    this.options=options;
   
}
Ford.prototype= Object.create(Voiture.prototype , {
    constructor:{
        value:Ford ,
        enumerable: false,
        writable: true,
        configurable: true
    }
})

// 2. Création d'une liste de voitures
let voitures = [
    new Hyndai("Tucson", 2022, "Hyundai", "Essence", "Série X", true),
    new Hyndai("i20", 2021, "Hyundai", "Hybride", "Série A", true),
    new Ford("Mustang", 2019, "Ford", "Essence", ["GPS", "Sièges chauffants"]),
    new Ford("Focus", 2018, "Ford", "Diesel", ["Climatisation", "ABS"]),
  ];
 
  // 4. Trier puis afficher les voiture selon un ordre croissant des année.

  //Avant trie 

voitures.forEach(function(v){
    console.log(`${v.marque}, model : ${v.model} => ${v.annee} `); 
})

   // pour trier les voitures
voitures.sort( 
    function( v1 , v2 ){
        return v1.annee - v2.annee;
    } 

)

// apres trie
console.log(" Liste des voitures triées par année :");
voitures.forEach(function(v){
    console.log(`${v.marque}, model : ${v.model} => ${v.annee} `); 
})

 
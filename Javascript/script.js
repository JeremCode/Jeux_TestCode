
//Recupere les id des elements

var element = document.getElementById('bouton');
var txtA = document.getElementById('txtA');
var txtB = document.getElementById('txtB');

//gestion de l'evenemtn lors du clic du bouton
//e permet d'envoyer les elemnts concernant l'evenement

//Fonction executer au demarrage
var newLink = document.createElement('a');
newLink.id = 'sdz_link';
newLink.href = 'www.google.fr';
newLink.title = 'Element';
newLink.setAttribute('tabindex', '10');
document.getElementById('myP').appendChild(newLink);
var newLinkText = document.createTextNode("Le site de google");
newLink.appendChild(newLinkText);

//Une fonction a appeler
var ff = function (e) {
    var textelibre = document.getElementById('tt');
    textelibre.innerHTML = 'Hoho';
    console.log(e.clientX + " " + e.clientY  + " " + e.type + " " + e.target );
    alert(textelibre);
};

function copie() {
    var copie2 = txtA.value;
    txtB.innerHTML = copie2;
}

function truc(e) {
    ff(e);
}

element.addEventListener('click', function (e) {
    truc(e);
});
txtA.addEventListener('keypress', function (e) {
    copie(e);
});

console.log("Bienvenue sur la console");
  
var text = document.getElementById('text2');

text.addEventListener('focus', function (e) {                  
    e.target.value = "C'est moi !";
});

text.addEventListener('blur', function (e) {
    e.target.value = "pas de focus"; 
});

var imgmagique = document.getElementById('huy');
var posinitX;
var posinitY; 
var posX;
var posY ;
imgmagique.addEventListener('mousedown', function (e) {
   /*
    posinitX = e.clientX;
    posinitY = e.clientY;
    imgmagique.style.left = posinitX +'px' ;
    imgmagique.style.top = posinitY +'px';
    */
    document.addEventListener('mousemove', function (e) {
   /* alert(posinitX);
    alert(posinity);
    alert(e.clientX);
    alert(e.clientY);*/
        imgmagique.style.left = e.clientX +'px' ;
        imgmagique.style.top = e.clientY  +'px';
    });
    
    
    document.addEventListener('mouseup', function () {
   /* alert(posinitX);
    alert(posinity);
    alert(e.clientX);
    alert(e.clientY);*/
        document.dispatchEvent(MouseEvent);
        imgmagique.dispatchEvent(MouseEvent);
    });
    
});




/*
fonction : 
typeof() - type d'une variable
alert() - affiche un message
prompt() - reclame une saisie à l'utilisateur
parseint() - convertir un texte en nombre
confirm() - Demande validation
(function()) - fonction anonyme, mais on peut lui donner un nom e placer avant la 2 (
console.log('texte') - Affiche des infos dans la console
typeof - Vérifier si c'est le type
instanceof - Vérifier si c'est une instance d'objet


Propriété associé a l'objet texte :
.length - longueur
.toUpperCase - Tout mettre en maj
.toLowerCase - Tout mettre en min
join('') - Transforme une chaines de caractere en un tableau en prenant comme separateur le caractere compros entre ''
isNaN(variable) - test si variable est un entier 

Méthode de l'objet texte :
charAt() - Récupere un caractére en fonction de sa position
charCodeAt() - Retourne le caractérer au format ASCII
fromCharCode() = Construire une chaine de caractere avec des codes ASCII
trim() - Supprimer des espaces
indexOf - Pour récupére la position du caractère


Operateur sur tableau =
push('') - ajouter un element dans un tableau
unshift('') - ajouter en haut de la liste
shift('') - Retirer le premier element
pop('') - Retire le dernier element
split('') - Transforme un tableau en chaine de caractere et separe les chaine par le caractere compros entre ''
concat() - permet de concatener 2 tableau

--Les objets :

Créer un objet  :  exemple
    var NomObjet{
        propriété1: 'valeur',
        propriété2: 'valeur',
        propriété3: 'valeur'
    }
Accéder à une propriété :
    Objet.propriété1
    ou
    objet['propriété']
    
Parcourir les propriété
for (var id in objet){
    objet[id];
}

Utilisation d'objet dit littéraux pour renvoyer plusieurs valeurs depuis une fonction
return {
    propriété1: valeur1,
    propriété2: valeur2
}


Opérateurs : 
== : égale à
!= : différent de 
=== : contenu et type égale à
!== : contenu et type différent de 
&& : Et
!! : Ou
! : Non
? : Test une condition
~ : Opératuer binaire NOT

Lien :
www.electon.atom.io : aide pour creation application JS complete
www.github.com/nwsjs/nw.js : aide pour creation application JS complete
https://www.ecma-international.org/ecma-262/8.0/index.html : organisme de standardisation
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference : Notions sur le javascript

** DOM : Document Object Model
API qui permet d'acceder aux documents XML et/ou HTML
window et l'objet parent de la page, il contient les propriétés :
    document : est un sous objet de windows qui represente la page web
    location : le lieu de stockage de la page
    history : les pages visités
    frame : les cadres
getElementsByTagName() : Récupéré un élement du DOM par son tag #
getElementsByName() : Récupéré un élement du DOM par son attribut
getElementsById() : Récupéré un élément par son Id
querySelector() : renvoi le premier element trouvé correspondant au selecteur idem que CSS
querySelectorAll() : renvoi ous les elements trouvé correspondant au selecteur idem que le CSS

getAttribute() : Permet d'accéder aux propriété
setAttribute() : Permet d'attribuer une propriété
ex : link.getAttribute('href');
Certain attribut peuvent être adirectement
ex att href : link.href
Modifier l'attribut de classe d'un element
ex att class : document.getElementById('link').className("Lien")
DAns ce cas attention aux chaines de caractères

** Naviguer dans le DOM
Ce sont des propriété associé à un objet DOM (getby)
parentNode - accès au parent de l'élemnt
nodeType - Récupére un nombre correspondant au type de noeud
nodeName - Retourne le nom de l'élément en mjuscule
firstChild - Accès au premier enfant d'un noeud
lastChild - Accès au dernier enfnat d'un noeud
nodeValue - récupère le texte du noeud
    combiné avec une proprié telle que firstchid, il faut utiliser data
childNodes - renvoi un tableau contenant la liste des enfants d'un élement
nextSibling - permet d'accèder au noeud suivant
previousSibling - permet d'accèder au noeud précédent

**Ajouter un élément au DOM
3 étapes : 
Création - var x = document.createElement('a) : crée un élement balise de type a
Affectation des attributs - x.id = "id de x" x.href="www.machin.chose" 
Insertion de l'element - element.appendChild(x)

cloneNode(booleén) - permet de cloner un noeud avec ou sans les enfants suivant la valeur du booléen
replaceChild(nouvelle élement, élément a remplacer) - remplace un noeud
removeChild(élement) - supprime le noeud
hasChildNodes() - Vérifier si un noeud est présent
insertBefore(element a inserer, element avant lequel ça va être inséré) - insére un élement 

** Evenement sur le DOM
var element = document.getElementById('clickme');
element.addEventListener('click', fonction);

** L'objet event
reprenons  : element.addEventListener('click', fonction);
on modifie : element.addEventListener('click', fonction(e));
e : correspond à l'objet event et nous permet d'acceder à ces propriétés
Ses propriétés :
e.target - permet de récupérer une référence vers léméent qui a été déclenché
e.target.value - permet de manipuler la valeur de la référence
e.currentTarget - fait la même chose que précédement en forcant sur l'element déclenché
e.clientX : Position en X
e.clientY : Position en Y
e.relatedTarget : peut fournir l'objet de l'element sur lequel la sourie vient d'entrer ou de sortir en fonction de l'action délenché mouseout ou mouseover
e.keypress : récupére la touche qui écri un caractere (distingue majuscule et minuscule)
e.keyup : détecte la touche appuyé mais tout est majuscule
e.keydown : detecte la touche relaché mais tout est en majuscule

** principaux evenements :
click
dblclick
mouseover
mouseout
mousedown
mouseup
mousemove
keydown
keyup
keypress
focus
blur
change
input
select

** Les formulaires
.disable=true - Permet de désactiver
.checked=true - Permet de verifier qu'un select est selectionneé
.readonly=true - Permet que la donnée n'est accessible qu'en lecture

Sur liste choix multiple
var inputs = document.querySelectorAll('input[type=radio]:checked'), inputsLength = inputs.length;

SUr une liste déroulante
var list = document.getElementById('list');
list.addEventListener('change', function(){
    alert(list.options[list.selectedIndex].innerHTML);
});

.submit() - envoyer le formulaire
.reset() = remettre à vide le formulaire


** Manipulation du CSS
On modifie le style en accédant par le parametre style sur le noeud
element.style.width 
getComputedStyle() - premet de récupérer le style d'un élément même si celui ci est définit dans une feuille de style
offsetWidth - Récupere la largeur
offsetHeight - Récupere la hauteur
--Pour les elements en position absolue
offsetLeft - Position de l'element par rapport au bord gauche de l'objet parent
offsetTop - Position de l'element par rapport au bord superieur de l'element parent
--Pour les elements en position absolue et relative
offsetParent - Récupére l'element parent à l'element courant


Les Objets :
Constructeur 
*Définition de l'objet
function Personne(nom, prenom, age, loisir){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.amis = amis;
}
*Creation d'une instance de l'objet Personne
var jerem = new Personne('gali','jerem',32,[])
*Ajouter un ami dans le tableau amis
jerem.amis.push( new Peronne('Raffli','jerem',30,[]));
*Ajouter une méthode
function Personne(nom, prenom, age, amis){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.amis = amis;
    **La méthode
    this.ajoutAmi = function(nom, prenom, age, loisir){
        this.amis.push( new Peronne(nom,prenom,age,amis));
    };
}
**Ajouter une méthode à un objet avec protoypage
function Personne(nom, prenom, age, loisir){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.amis = amis;
}
--en dehors de l'objet
Personne.protoype.ajoutami = function(nom, prenom, age, loisir){
    this.amis.push( new Peronne(nom,prenom,age,amis));
}
--Ajout des méthodes à tous les objets
Cela se fait en assignant une méthode à Object (objet fondamental javascript)
Object.protoype.longueur = function(){
    alerte(this.length);
}
Ainsi pour tous les objets, il sera possible d'utiliser 
Personne.longueur();
CEtte méthode peut s'utiliser avec les autres objets
**Utilisation d'un namespace
Définir un objet namespace dans lequel on place les fonctions
var monNomDeNameSpace = {
    Personne: function(nom, prenom, age, loisir){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.amis = amis;
}
On utilise une objet littéral dans lequel on vient placer nos méthodes et autres.



**String
Objet String primitive
var maChaineDeString = new String("chaine");
Tester la présence d'une chaine de caractere 
var myString = "Chaine en javascript"
if (~myString.indexOf('javascript)){
  alert('Ma variable myString contienr le mot javascript');  
}
Extraire une chaine de caracter entre 2 positions 
machaine.substring(position1,position2);
Si position 2 n'est pas renseigné, la chaine est extraite jusqu'à la fin
Extraire une chaine de caracter entre 2 positions 
machaine.substr(position1,nombrede caractere a extraire);
Extraire une chaine a partir de la fin
machaine.slice(0, -5)
Decoupe la chiane en retirant les 5 caracteres de fin
Decouper une chaine en tableau avec delimiteur
machaine.split('caractere de delimitation');
machaine.match() - retourne un tableau avec les occurences recherchés
.search() - retourne la position d'une portion de texte
.replace() - effectue un rechercher / remplacer


Instancier un objet regex 
var myRegex = /chaine_a_chercher/ - les / remplace les "
si la chaine contient un / il faut l'échapper  \/ ajouter \
Dans le REgex
    | - dans la chaine regex correspond à un ou
    ^ - Represente le debut d'une chaine de caractere commence par
    $ - Represente la fin d'une chaine de caractere termine par
    [ae] - permet d'indiquer des caratères possibles ex /gr[ao]s/
    [a-z] - [-] permet d'indiquer un intervalle de caractère possible
    [^a-z] - ^ permet d'exclure un intervalle de caractère 
    /gr.s/ - . autorise n'importe quel caracetere ex grbs
    

quantificateur
    ? - le caracetere qui precede apparait 1 fois max
    + - le caractere qui précéde apparait au moins 1 fois
    * - pas de restriction sur la quantité de caractere
    {n} - le caractere qui prece peut apparaitre n fois
    {n,m} - le caractere qui précede peut apparaitre de n à m fois
    {n,} - le caraceter qui précede peut apparaitre de n à l'infini de fois

Les types de caractere génériques
    \d - un chiffre
    \D - pas un chiffre
    \s - un caractere blanc
    \S - pas un caractere blanc
    \w - un caracetere de mot ainsi que l'underscore
    \W - pas un caractere de mot
    \n - un retour a la ligne
    \t - une tabulation
    \b - trouve une limite de mot
    \B - ne trouve pas de limite de mot

.test() - renvoi vrai ou faux si une chaine contient l'argument
    .i.test() - ne prends pas en compte la casse
.exec() - renvoi vrai ou faux si l'argument contient la chaine
    exe  /\bton\b/.exec("Si ton tonton") - on recherche la chaine ton
Une autre utilisation : extraction de chaine
    var chaine = 'Je suis né en mars';
    /^Je suis né en (\S+)$/.exec(chaine);
    alert(RegExp.$1); - affiche mars
    
    Dans ce cas l'utilisation des parenthèse permet de dire a Javascript que le contenu sera extrait  - $1
    Il peut y avoir au maximum 9 couples de ()
    Les () peuvent être non capturante en ajoutant ?:  tel que (?: )
    
    L'utilisation du ? peut rendre les recherches moins gourmandes

.replace() - contient 2 parametre celui recherche et celui de remplacement
    le premier ragument peut conteni l'argument g pour faire un remplacer de toutes les chaines trouvées.

Tester une adresse mail
var email = "toto@gmail.com"
if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
    alert("valide");
} else {
    alerte("non valide");
}

** Les nombres
Number est l'objet primitif de manipulation des nombres
On preferea parseInt() et parseFloat() qui définissent entier et flottant
parseint(param) - param définit si le nombre est un base 10 ou 2
Math.PI - Affiche le nombre pi
Math.E - Affiche le nombre d'Euler
Math.floor(n) - Arrond n a l'entier inf
Math.ceil(n) - Arrond n a l'entier sup
Math.round() - Arrondi
Math.pow(base, exposant) - calcul d'une puissance
Math.sqrt(n) - Racine carré de n
Math.cos(n) - cosinus
Math.sin(n) - sinus
Math.max(n1, n2, n3, n4) - ressort le max
Math.min(n1, n2, n3, n4) - ressort le mini
Math.random() - renvoi un nombre aleatoire

** Les dates
Objet Date() 4 façon de l'appeler
Date() - Date a l'instant de l'instanciation
Date(timestamp) - Fourni un time stamp pour instancier la date
Date(dateString) - Fourni une date a partir d'une chaine de caractere
Date(année, mois, jour [, heure, minutes, secondes, millisecondes ]) - Fourni une date avec chaque parametres définit, entre [] est facultatif
Principales méthodes :
getFullYear() - renvoi l'année
getMonth() - renvoi le mois
getDate() - renvoi le jour du mois
getDay() - renvoi le numéro du jour de la semaine
getHours() - renvoi l'heure
getMinutes() - renvoi les minutes
getSeconds() - renvoi les secondes
getTime() - renvoi le timestamp de la date del'objet
setTime() - modifie la date de l'objet en lui passant un paramétre timestamp
setTimeOut(myFonction , tempMilliseconde), param1 , param2, ... - execute en différe une action. En récurant avec une variable on peut l'annuler
clearTimeOut - Annuler une fonction de timeout

** Les tableaux
Propriété
.concat() - permet de concaterner 2 tableaux
foreach() - permet de parcourir n tableau (voir les paramétres)
.indexOf() - recherche un élement dans un tableau
.reverse() - inverse un tableau
.sort() - tri un tableau par ordre alphabetique
.sort(function(a,b){
    if (a<b){
        return -1;
    } else if (a >b ) {
        return 1;
    } else {
        return 0;
    }
});  - fait un tri croissant
.slice(a,b) - extrait b élements à partir de l'élément n° a 
si b = -1 on compte a partir des elements de fin
.splice(a,b,c) - on retir b élement à partir de la position n°a
 c optionnel - permet d'ajouter des élements aux éléments retirsés
 .isArray(['test']) - test si la variable passé en paramètre contient un tableau

**Les images
contructeur  image()
var image = new image();
propriété
.width - connaitre/manipulaer la largeur 
.height - connaitre/manipuler la hauteur
.src - spécifieur la source de l'image

image n'a qu'un evenement : load qui permet de savoir si l'image est chargée



*/
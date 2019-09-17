/*let rang;
let colonne;
let zone = document.querySelector('.zone');
let para = "";
let input = '<input type="checkbox" name="" id=""></input>';
let bouton = document.querySelector("#bouton");

bouton.onclick = function () {
    rang = document.querySelector("rang").value;
    colonne = document.querySelector("#colonne").value;



for (i = 0; i < rang; i++) {
    para += '<p>';
  for (i2 = 0; i2 < colonne; i2++)
  para += input;
}

para += "</p>";
zone.innerHTML = para;
};
/*
function qui s'active quand tu cliques sur le bouton
elle doit envoyer la valeur saisie dans le champs à "rang"

nombreRang.value = rang;



function clique()
{
    let bouton = document.querySelector('#nbrRang');
    nombreRang.value = rang;
    bouton.onclick = showAlert;

};



for (i=1; i<=rang; i++){
para = zone.innerHTML += "<p>test" + i+ "</p>";
};

console.log("Valeur input " + nombreRang.value);
console.log("rang " + rang);*/

let rang = 15;
let colonne = 9;
let zone = document.querySelector(".zone");
let para = "";
let checkbox = '<input type="checkbox">';

for (i = 0; i < rang; i++) {
    para += "<p>";

    for (i2 = 0; i2 < colonne; i2++) {
        para += checkbox;
    }
    para += "</p>"; 
    zone.innerHTML = para;
}
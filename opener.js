const classToToggleText = "group-text-active";
const classToToggleImg = "group-img-active";

//id для розділу "Тигр"
const tigerPlus = document.getElementById('tiger-plus');
const tigerParagraph = document.getElementById('tiger-text');
const tigerImg = document.getElementById('tiger-img');

//id для розділу "Гепард"
const cheetahPlus = document.getElementById('cheetah-plus');
const cheetahParagraph = document.getElementById('cheetah-text');
const cheetahImg = document.getElementById('cheetah-img');

//id для розділу "Рись"
const lynxPlus = document.getElementById('lynx-plus');
const lynxParagraph = document.getElementById('lynx-text');
const lynxImg = document.getElementById('lynx-img');

//id для розділу "Пума"
const pumaPlus = document.getElementById('puma-plus');
const pumaParagraph = document.getElementById('puma-text');
const pumaImg = document.getElementById('puma-img');

//id для розділу "Кіт"
const catPlus = document.getElementById('cat-plus');
const catParagraph = document.getElementById('cat-text');
const catImg = document.getElementById('cat-img');

let tigerActive = true;
let cheetahActive = true;
let lynxActive = true;
let pumaActive = true;
let catActive = true;

function activateTiger() {
     tigerActive = false;
     tigerPlus.innerHTML = "-";
     tigerParagraph.classList.add(classToToggleText);
     tigerImg.classList.add(classToToggleImg);
}

function deactivateTiger() {
     tigerActive = true;
     tigerPlus.innerHTML = "+";
     tigerParagraph.classList.remove(classToToggleText);
     tigerImg.classList.remove(classToToggleImg);
}

function activateCheetah() {
     cheetahActive = false;
     cheetahPlus.innerHTML = "-";
     cheetahParagraph.classList.add(classToToggleText);
     cheetahImg.classList.add(classToToggleImg);
}

function deactivateCheetah() {
     cheetahActive = true;
     cheetahPlus.innerHTML = "+";
     cheetahParagraph.classList.remove(classToToggleText);
     cheetahImg.classList.remove(classToToggleImg);
}

function activateLynx() {
     lynxActive = false;
     lynxPlus.innerHTML = "-";
     lynxParagraph.classList.add(classToToggleText);
     lynxImg.classList.add(classToToggleImg);
}

function deactivateLynx() {
     lynxActive = true;
     lynxPlus.innerHTML = "+";
     lynxParagraph.classList.remove(classToToggleText);
     lynxImg.classList.remove(classToToggleImg);
}

function activatePuma() {
     pumaActive = false;
     pumaPlus.innerHTML = "-";
     pumaParagraph.classList.add(classToToggleText);
     pumaImg.classList.add(classToToggleImg);
}

function deactivatePuma() {
     pumaActive = true;
     pumaPlus.innerHTML = "+";
     pumaParagraph.classList.remove(classToToggleText);
     pumaImg.classList.remove(classToToggleImg);
}

function activateCat() {
     catActive = false;
     catPlus.innerHTML = "-";
     catParagraph.classList.add(classToToggleText);
     catImg.classList.add(classToToggleImg);
}

function deactivateCat() {
     catActive = true;
     catPlus.innerHTML = "+";
     catParagraph.classList.remove(classToToggleText);
     catImg.classList.remove(classToToggleImg);
}

tigerPlus.addEventListener('click', function(){

     //якщо секція tiger стає активною
     if(tigerActive){
          activateTiger();
     } 
     //якщо секція tiger стає не активною
     else if(!tigerActive){
          deactivateTiger();
     }

     //Приховати всі інші секції
     deactivateCheetah();
     deactivateLynx();
     deactivatePuma();
     deactivateCat();
});

cheetahPlus.addEventListener('click', function(){

     if(cheetahActive){
          activateCheetah();
     } 

     else if(!cheetahActive){
          deactivateCheetah();
     }

     deactivateTiger();
     deactivateLynx();
     deactivatePuma();
     deactivateCat();
});

lynxPlus.addEventListener('click', function(){

     if(lynxActive){
          activateLynx();
     } 

     else if(!lynxActive){
          deactivateLynx();
     }

     deactivateTiger();
     deactivateCheetah();
     deactivatePuma();
     deactivateCat();
});

pumaPlus.addEventListener('click', function(){

     if(pumaActive){
          activatePuma();
     } 

     else if(!pumaActive){
          deactivatePuma();
     }

     deactivateTiger();
     deactivateCheetah();
     deactivateLynx();
     deactivateCat();
});

catPlus.addEventListener('click', function(){

     if(catActive){
          activateCat();
     } 

     else if(!catActive){
          deactivateCat();
     }

     deactivateTiger();
     deactivateCheetah();
     deactivateLynx();
     deactivatePuma();
});
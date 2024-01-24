// Tableau pour les slides
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.querySelector('.dots');
let index = 0;

//Affichage des dots
//Boucle for : création bullet points avec instructions
for (let i =0; i < slides.length; i++) {
	const newdot = document.createElement("span");
	newdot.className="dot";
	dots.appendChild(newdot);
}

// Récupération et appel des bullet points
let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

// Cocher / décocher les bullet points
function UpdateDots () {
	for (let i =0; i < slides.length; i++) {
		if (i == index) {
			dot[i].classList.add("dot_selected");
		} else {
			dot[i].classList.remove("dot_selected");
			
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	// Changement image et intégration texte HTML
	const imageElement = document.querySelector('.banner-img');
	const content = document.querySelector('#banner p');

	//Fonction slides et boutons
	function Updateimage(button) {
		if (button == 'right') {
			if (index < slides.length - 1) {
				index++;
			} else {
			index = 0;
			}
		} else if (button == 'left') {
			if (index > 0) {
				index--;
			} else {
				index =  slides.length -1;
			}
		}
		
		imageElement.src='./assets/images/slideshow/' + slides[index].image;
    	content.innerHTML = slides[index].tagLine;
		UpdateDots();
	}
	
	//EventListeners des deux flèches
	const arrowL = document.querySelector('.arrow_left');
	arrowL.addEventListener('click', function(event_left) {
	  console.log("Vous avez cliqué sur la flèche gauche !");
	  Updateimage('left');
	  UpdateDots();
	  
	  
	});

	const arrowR = document.querySelector('.arrow_right');
	arrowR.addEventListener('click', function(event_right) {
	  console.log("Vous avez cliqué sur la flèche droite !");
	  Updateimage('right');
	  UpdateDots();
	  
	});

	
});


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

//console.log(slides);
const dots = document.querySelector('.dots');
let dot = document.querySelectorAll ('.dot')

let index = 0
//const dot = dot.classList.add('dot');


//console.log(dots)
//function displayDots () {
		for (let i =0; i < slides.length; i++) {
			const newdot = document.createElement("div")
			newdot.className="dot";
			dots.appendChild(newdot)
			UpdateDots()
		}
//}
//displayDots();

function UpdateDots () {
	for (let i =0; i < slides.length -1 ; i++) {
		
		if (i == index) {
			dots[i].classList.add("dot_selected");
		} else {
			dots[i].classList.remove("dot");
		}

	}
}
//UpdateDots();

	
document.addEventListener('DOMContentLoaded', function() {
	//EventListeners des deux flèches
	const arrowL = document.querySelector('.arrow_left');
	arrowL.addEventListener('click', function(event) {
	  console.log("Vous avez cliqué sur la flèche gauche !");
	  Updateimage('left');
	  UpdateDots();
	 

	});

	const arrowR = document.querySelector('.arrow_right');
	arrowR.addEventListener('click', function(event) {
	  console.log("Vous avez cliqué sur la flèche droite !");
	  Updateimage('right');
	  UpdateDots();
	  

	});


	//Affichage des dots
	
	

	// Changement image et intégration texte HTML
	const imageElement = document.querySelector('.banner-img');
	const content = document.querySelector ('p');

	//Tout doit être modifié pendant chaque clic 
	imageElement.src='./assets/images/slideshow/' + slides[index].image;
    content.innerHTML = slides[index].tagLine;
	
	function Updateimage(button) {
		console.log(button)
		if (button == 'right') {
			console.log("coucou")
			if (index < slides.length - 1) {
				index++;
			} else {
				index = 0;
			}
		} else if (button == 'left') {
			console.log("hello")
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

	//Points supprimés
	
	


});




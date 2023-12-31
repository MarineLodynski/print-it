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

console.log(slides);



document.addEventListener('DOMContentLoaded', function() {
	//EventListeners des deux flèches
	const arrowL = document.querySelector('#banner .arrow_left');
	arrowL.addEventListener('click', function(event) {
	  console.log("Vous avez cliqué sur la flèche gauche !");
	  console.log(slides[0])
	  console.log(slides[0].image)
	});

	const arrowR = document.querySelector('#banner .arrow_right');
	arrowR.addEventListener('click', function(event) {
	  console.log("Vous avez cliqué sur la flèche droite !");
	  console.log(slides[1])
	  console.log(slides[1].image)
	});

	//Affichage des dots
	const dots = document.querySelector('.dots');
	let index = 0
	//console.log(dots)
	function displayDots () {
		for (let i =0; i < slides.length; i++) {
			const dot = document.createElement("span")
			dot.classList.add("dot");
			dots.appendChild(dot)
			if (i == index) {
				dot.classList.add("dot_selected");
			}
		}
	}
	displayDots();

});




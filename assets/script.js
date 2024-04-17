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

console.log(slides)

/*Variable general */ 

const flecheGauche = document.querySelector(".arrow_left")
const flecheDroite = document.querySelector(".arrow_right")
const dots = document.querySelector(".dots")


index = 0

/* Fonction fleche Gauche*/ 

flecheGauche.addEventListener("click", () =>  {


	console.log("fleche gauche du carrousel")
}) 

/* Fonction fleche Droite*/

flecheDroite.addEventListener("click", () =>  {


	console.log("fleche droite du carrousel")
})


/* Bullet point */
function bulletPoint () {
for ( let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	dots.appendChild(dot)
	
	if ( i === index) {
		dot.classList.add("dot_selected")	
		}
	}
}
bulletPoint()
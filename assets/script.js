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

/* Variable general */ 

const flecheGauche = document.querySelector(".arrow_left")
const flecheDroite = document.querySelector(".arrow_right")
const dots = document.querySelector(".dots")
const img = document.querySelector("#banner img")
const titre = document.querySelector("#banner p ")
let index = 0

/* Fonction fleche Droite*/

function right (){
	flecheDroite.addEventListener("click", () =>  {
		const slidesDots = document.querySelectorAll(".dots .dot")
		slidesDots[index].classList.remove("dot_selected")
		index++
		console.log("Right", img)	
		if (index >= slides.length) {
			index = 0  
		}
		slidesDots[index].classList.add("dot_selected")
		const cheminImage = "./assets/images/slideshow/" + slides[index].image; /*chemin de la nouvelle image*/
		img.src = cheminImage 
		titre.innerHTML = slides[index].tagLine
	})				
}
right ()


/* Fonction fleche Gauche*/ 

function left (){
	flecheGauche.addEventListener("click", () =>  {
		const slidesDots = document.querySelectorAll(".dots .dot")
		slidesDots[index].classList.remove("dot_selected")
		index--
	console.log("Left", img);	
		if (index < 0) {
			index = slides.length -1  
		}
		slidesDots[index].classList.add("dot_selected")
		const cheminImage = "./assets/images/slideshow/" + slides[index].image 
		img.src = cheminImage 		/* source de l'image */
		titre.innerHTML = slides[index].tagLine
		})		
				
}
left ()

/* Bullet point */

function bulletPoint () {
	for ( let i = 0; i < slides.length; i++) { 
	const dot = document.createElement("div") /* creation des div parents */
	dot.classList.add("dot") 				 /* Ajout d'une class  */
	dots.appendChild(dot)  					
	
	if ( i === index) {
		dot.classList.add("dot_selected")	
		}
	}
}
bulletPoint()
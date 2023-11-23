//Cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var asteptari = document.getElementById("educatie")
var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

//Add eventListener to button
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

function altaViata()
{
	 nume.innerHTML = "Functie: Java Dev"
	 prenume.innerHTML = "Locul de munca: Ibiza"
	 asteptari.innerHTML = "Experiente: <ol><li>internship</li><li>licenta nota 11</li></ol>"
	 
	 img.src="images.jpg"
	 body.style.backgroundColor ="blue"
	 body.style.color = "purple"
	 
	 //opacitate imagine
	 img.style.opacity ="85%"
	 //grosime margini imagine
	 img.style.borderWidth = "25px"
}

function displayAge()
{
	an.innerHTML = year - an.innerHTML
}
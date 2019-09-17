let container = document.querySelector("#container");
let divs = document.querySelectorAll('div');
let Colors = "black";


function createGrid(){
let sized = prompt("Enter a number between 1-100")
Colors = "black";
if (sized >100)
{
	alert("Number outside range. Please enter a number between 1-100");
	createGrid();
}
container.style.setProperty("--rowNum", sized);
container.style.setProperty("--colNum", sized);
for (let i=0; i< sized; i++) {
	for (let l=0; l< sized; l++){
let iDiv = document.createElement('div');
	document.querySelector("#container").appendChild(iDiv);
			iDiv.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = Colors;
      });
}}
	}

function rando() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	Colors = 'rgb(' + r + ',' + g + ','+ b + ')';
}
	
function reset() {
	document.getElementById("container").innerHTML ="";
	createGrid();
	Colors = "black";
	}
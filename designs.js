var canvas = document.getElementById("pixelCanvas");

// Select color input
var color = document.getElementById("colorPicker");
// Select size input
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var sizePicker = document.getElementById("sizePicker");


sizePicker.onsubmit = function(event){
	event.preventDefault();
	clearGrid();
	makeGrid();
}


// When size is submitted by the user, call makeGrid()

function makeGrid() {
	for (let l = 0; l < height.value; l++){
		const row = canvas.insertRow(l);
		for (let c = 0; c < width.value; c++){
			const cell = row.insertCell(c);
			cell.addEventListener('click', fillSquare);
		}
	}

}
 
function clearGrid() {
	while (canvas.firstChild){
		canvas.removeChild(canvas.firstChild);
	}
}

// Color the clicked square.
function fillSquare() {
	this.setAttribute("style", `background-color: ${color.value}`);
}

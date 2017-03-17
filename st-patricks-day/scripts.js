const beerLiquid = document.getElementById('beer-liquid');
const fillBtn = document.getElementById('fill-btn');
const greenBtn = document.getElementById('green-btn');
const clearBtn = document.getElementById('clear');
const foamBtn = document.getElementById('foam-btn');
// Get desired elements
const foam = document.getElementsByClassName('bubble');

const fillMeUpGold = function() {
	beerLiquid.classList.add('beer-fill');
	beerLiquid.style.background = '#D29D1D';
}
const fillMeUpGreen = function() {
	beerLiquid.classList.add('beer-fill');
	beerLiquid.style.background = '#669D31';
}
const clear = function() {
	beerLiquid.classList.remove('beer-fill');
}
// const foamAnim = function() {
// 	// Iterate through the retrieved elements and add the necessary class names.
// 	for(var i = 0; i < foam.length; i++)
// 	{
// 		foam[i].classList.add('foamAction');
// 	}
// }

// document ready
document.addEventListener('DOMContentLoaded', function(event) {
	fillBtn.addEventListener('click', fillMeUpGold);
	greenBtn.addEventListener('click', fillMeUpGreen);
	clearBtn.addEventListener('click', clear);
	// foamBtn.addEventListener('click', foamAnim);
	// fillBtn.addEventListener('animationend', foamAnim, true);
});
// end of document ready
const beerLiquid = document.getElementById('beer-liquid');
const fillBtn = document.getElementById('fill-btn');
const greenBtn = document.getElementById('green-btn');
const clearBtn = document.getElementById('clear');

const fillMeUp = function() {
	beerLiquid.classList.add('beer-fill');
	if (fillBtn.onclick) {
		beerLiquid.style.background = '#D29D1D';
	} else if (greenBtn.onclick) {
		beerLiquid.style.background = '#7FFF00';
	}
}
const clear = function() {
	document.getElementById('beer-liquid').classList.remove('beer-fill');
}
//document ready
document.addEventListener('DOMContentLoaded', function(event) {
	clearBtn.addEventListener('click', clear);
});
//end of document ready
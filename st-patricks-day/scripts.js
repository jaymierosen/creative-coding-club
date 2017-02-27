var fillButton = document.getElementById('fill');
var beerLiquid = document.getElementsByTagName('body');
fillButton.addEventListener('click', function() {
	beerLiquid.classList.add('activate');
	console.log(beerLiquid);
});

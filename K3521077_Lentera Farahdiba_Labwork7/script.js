var light = document.querySelectorAll('mark');
var myButton = document.querySelector('button');

function highlight() {
	var light1 = light[0];
	if (light1.style.fontWeight){
		for (var mark of light){
			mark.style.removeProperty('color');
			mark.style.removeProperty('font-weight');
			mark.style.setProperty('background-color', 'white');
		}
		myButton.style.setProperty('background-color', 'white')
	}
	else{
		for (var mark of light){
			mark.style.setProperty('color', 'red');
			mark.style.setProperty('font-weight', '800');
			mark.style.setProperty('background-color', 'yellow');
		}
		myButton.style.setProperty('background-color', '#dddbdb');
	}
}

myButton.onclick = function(){
	highlight();
}
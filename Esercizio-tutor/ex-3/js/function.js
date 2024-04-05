// function moneyConverter(value, valueChange, ){

// 	let result = value * valueChange
// }
let counter = 0
function countName(array, elem){
	for (let i = 0; i < array.length; i++) {
		if (array[i] === elem)
		counter++;
		
	}
	return counter;
}
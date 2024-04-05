function trovaIndice(array, elemento) {
	for (let i = 0; i < array.length; i++) {
		let elem = array[i];
		if (elem === elemento) {
			return i;
		}
	}
	return -1;
}

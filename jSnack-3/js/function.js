function stampa(array){
	let risultato = ""
	for (let i = 0; i < array.length; i++) {
		let elemento = array[i]
		risultato = risultato + elemento
		if (i !== array.length - 1){
			
			risultato =  risultato + "," 
		}
	}
	return risultato
}
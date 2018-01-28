//tamaño de la cuadricula

var size = parseInt(prompt('¿cúal sera el tamaño de tú cuadricula?'));

//crear cuadricula 
var  result = '';

for (var row =1; row<=size; row++){
	for (var colum =1; colum<=size; colum++){
		if ((colum+row)%2===0){
			result +=' ';
		}else{
			result +='#';




		}
	}
	result += '\n';
}
console.log(result);
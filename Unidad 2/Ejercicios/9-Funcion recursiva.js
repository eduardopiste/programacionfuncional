function sumaNormal(numeros){
    var resultado = 0;
    for(var i=0; i<numeros.length; i++){
        resultado += numeros[i];
    }
    return resultado;
}

function sumaRecursiva(numeros){
    if(numeros.length== 1){
        return numeros[0];
    }
    var primero = numeros.shift();
    return primero + sumaRecursiva(numeros);
}

var total = sumaNormal([1, 2, 3, 4, 5]);
var total2 = sumaRecursiva([1, 2, 3, 4, 5]);
console.log(total);
console.log(total2);
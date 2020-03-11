var recursivo=[4,6,2,10,22,3,9,34,40,7];

var serieNumeroParesRecursivo = recursivo.filter(
    
    //recursivo
    function(numero){
    return numero % 2 == 0;
});

console.log(serieNumeroParesRecursivo);
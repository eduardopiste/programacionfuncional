var arreglo  = [1,22,12,4];
    maximo = 0;

for(var i=0,len=arreglo .length;i<len;i++){
    if(maximo < arreglo [i]){
        maximo = arreglo [i];
    }
}
console.log("El numero mayor es: "+maximo);
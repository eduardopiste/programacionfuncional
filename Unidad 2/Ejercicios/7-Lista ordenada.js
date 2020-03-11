function orden(){
    var ordenado=true;
    for (let i=0; i<arguments.length; i++){
        if(i+1 < arguments.length){
            if(arguments[i]>arguments[i+1])
            ordenado=false;
            break;
        }
    }
    return (ordenado)?true:false;
}

console.log("Orden: "+orden(3,4,6,8,9,12));
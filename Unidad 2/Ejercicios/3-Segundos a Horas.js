var time = 5400;

var hours = Math.floor( time / 3600 );  
var minutes = Math.floor( (time % 3600) / 60 );
var seconds = time % 60;
 
//Anteponiendo un 0 a los minutos si son menos de 10 
minutes = minutes < 10 ? '0' + minutes : minutes;
 
//Anteponiendo un 0 a los segundos si son menos de 10 
seconds = seconds < 10 ? '0' + seconds : seconds;
 
var result = hours + ":" + minutes + ":" + seconds;  // 2:41:30

console.log("Horas: "+hours, "Minutos: "+minutes, " Segundos: "+seconds);
console.log("h:mm:ss ",hours+":"+minutes+":"+seconds);
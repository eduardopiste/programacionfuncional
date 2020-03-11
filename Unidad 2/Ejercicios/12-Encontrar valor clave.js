var obj = {
    a: 1,
    b: 2
};
function mult(a, b) {
    return a * b;
}
 
var map = new Map();
 
map.set( false, 0 );
map.set( obj, "is a object" );
map.set( mult, "function mult" );
 
console.log( map.get(mult) );


var obj1 = {
    a: 1,
    b: 2
};
 
var obj2 = {
    a: 1,
    b: 2
};
 
var map = new Map();
map.set( obj1, 1 );
 
console.log( 'map.has(obj1) = ', map.has(obj1) );    // true
console.log( 'map.has(obj2) = ', map.has(obj2) );    // false
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('La nueva colección de vegetales es: ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' ya existe en la colección de verduras.');
    }
}

var veggies = ['patata', 'tomate', 'chiles', 'pimientoverde'];

updateVegetablesCollection(veggies, 'espinaca'); 
// La nueva colección de verduras es : patata, tomate, chiles, pimientoverde, espinaca
updateVegetablesCollection(veggies, 'espinaca'); 
// La espinaca ya existe en la colección de verduras.
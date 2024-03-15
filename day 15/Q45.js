function createCar(manufacturer, model, extras) {
    return {
        manufacturer: manufacturer,
        model: model,
        ...extras
    };
}
// Creating a car object with manufacturer, model, and additional properties
const myCar = createCar('corrola', 'Altis', { color: 'black', year: 2024 });
// Printing the object to ensure all information was stored correctly
console.log(myCar);
export {};

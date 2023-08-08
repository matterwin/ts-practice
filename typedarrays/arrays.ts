const carMaker: string[] = ['ford', 'toyota', 'chevy'];

// always init type to avoid 'any' type
const carMakerAny = [];
const carMakerEmpty: string[] = [];

const dates = [new Date(), new Date()];

// you don't need to add anno for already defined contents of array
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
const carsByMakeEmpty: string[][] = [];

// help with inference when extracting values
const carArrayVar = carMaker[0];
const myCar = carMaker.pop();

// prevent incompatible values
// carMaker.push(100); error for mistype

// help with 'map'
carMaker.map((car: string): string => {
    return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(2); //error


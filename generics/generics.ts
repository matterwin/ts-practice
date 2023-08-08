class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}
    
    get(index: number): string {
        return this.collection[index];
    }
}

//generic class
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['a','b','c']);

//type inference without giving explicit type
const arr = new ArrayOfAnything(['a','b','c']);

//example of generics with functions

function printStrings(arr: string[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printAnything<string>(['a','b','c']);

//again type inference
printAnything(['a','b','c']);

// Generic Constraints

class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

//we use interface to say that the template types have a print method
function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++){
        arr[i].print();
    }
}

printHousesOrCars([new House(), new House()]);
printHousesOrCars([new Car(), new Car()]);

// or better practice is to explicitly say the type

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
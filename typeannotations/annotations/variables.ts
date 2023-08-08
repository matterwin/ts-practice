let apples: number = 5;
apples = 2;

let speed: string = 'fast'

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,false,true];

// classes | had already declared Car but this works if that wasnt the issue
// class Car {}
// let car: Car = new Car();

// object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 20
};

// function
const logNumber: (i: number) => void = (i:number) => {
    console.log(i);
}

// this is annotating the variable logNumber and says the type of the function

// annotation is (i: number) => void

// actual func
// const logNumber: annotation = (i:number) => {
//  console.log(i);
// }

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// anytime we call JSON.parse(whatever) we get the 'any' type
// typescript doesn't know what we are going to get out of JSON.parse();

coordinates.lkalfkdsfkeaskg;
// typescript doesn't know that the thing above is not a property

// annotated version
const jsonAnno = '{"x": 10, "y": 20}';
const coordinatesAnno: { x:number; y: number; } = JSON.parse(jsonAnno);
console.log(coordinatesAnno);

// coordinatesAnno.lkalfkdsfkeaskg; we get red line here since it is not a property

// 2) when we declare a variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; 
// or can just do let foundWord = false; which is better practice to just init it to a value

for(let i=0; i<words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

// 3) variable whose type cannot be inferred correctly
// bad code example, but there are scenarios that'll need to do this case
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i=0; i<numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}


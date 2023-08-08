const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// this is a tuple instead of an array cause of the very specific ordering of elems
const pepsi: [string, boolean, number] = ['brown', true, 40];

// another way using 'type' keyword
type Drink = [string, boolean, number];
const cococola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuples are not common though

// it's hard to understand what these #'s mean
const carSpecs: [number, number] = [400, 3354];

// so obj's are a better option to go with for the most part
const carStats = {
    horsepower: 400,
    weight: 3354
};
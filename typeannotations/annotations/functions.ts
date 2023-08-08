// ts is just like type casting of vars, funcs, etc.

const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a:number, b: number) => {
    a - b;
}; // return value is void b/c ts infers nothing is returned

// we should always use return annotations, so we don't return the wrong type

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwErrorNever = (message: string): never => {
    throw new Error(message);
}

const throwError = (message: string): string => {
    if(!message)
        throw new Error(message);

    return message;
}

// more common to have return value in throw new Error funcs
// use 'never' type when we truly never expect a function to return something

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

logWeather(forecast);

//deconstruction properties on obj
const logWeatherDestruct = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(forecast);
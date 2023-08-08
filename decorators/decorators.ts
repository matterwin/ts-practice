@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError('Oops, boat was sunk in ocean')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: Boolean
    ): void {
        if(speed === 'fast'){
            console.log('swish');
        } else {
            console.log('nothing');
        }
    }
}

//1st arg to a decorator function is prototype of the class
// prototype  inside JS only stores method definitions; actual instance properties:
// strings, booleans, ints, arrays, etc. gets defined in the constructor

//all these decs are running when we define the class, and our dec is never going to 
//  be able to access any instance properties on an instance ever
function testDecorator(target: any, key: string) {
    console.log(target.color); //cannot read a property of an instance of Boat
    // ex was for color property field

    console.log(key); // just another log example
}
// key is the name/obj of what it's decorating

function parameterDecorator(target: any, key: string, index: number){
    console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function logError(errorMessage: string) {
    return function(target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function() {
            try {
                method();
            } catch (error) {
                console.log(errorMessage);
            }
        };
    }
}

new Boat().pilot; //catches errors

// any for target isn't good, but for decorators it's fine

// decorators are advanced
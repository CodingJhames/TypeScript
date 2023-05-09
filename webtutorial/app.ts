
let message: string = 'Hello, Parchita';

let heading = document.createElement('h1');

heading.textContent = message;

document.body.appendChild( heading );

// inference

let counter: number = 0;

function setCounter(  max:100) {
    
}

function increment(counter:number): number {
    return counter++;
}

document.addEventListener('click', function(event){
    console.log( event.button );
} )

//  Number

let price: number; 

let counter_2: number = 0;
let x: number = 100,
    y: number = 200;

// Objects

let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log( employee );

// tuples, like in python values can't be changed once are set

let skill: [string, number];
skill = ['Programming', 5];

let color: [number, number, number ] = [255, 0, 2];



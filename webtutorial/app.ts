
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


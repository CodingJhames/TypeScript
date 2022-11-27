import * as HeroClasses  from "./classes/Hero";
import { powers } from "./data/powers";
import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villain, Hero } from "../interfaces";
// import { Hero } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";


const ironMan = new HeroClasses.Hero('Iron Man', 1, 55 );

console.log( ironMan );

console.log( powers  )


/* printObject( 123 );
printObject( new Date() );
printObject( { a:1, b:2, c:3 } );
printObject( [1,2,3,4,5,6,7,8,9,10] );
printObject( 'hello micho');

const name: string = 'Parchita';

console.log( genericFunctionArrow( 3.141618 ).toFixed(2)  );
console.log( genericFunctionArrow( name ).toUpperCase()  );
console.log( genericFunctionArrow( new Date() ).getDate()  );
 */


const deadPool = {
    name: 'DeadPool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130,
}

console.log( genericFunctionArrow<Villain>( deadPool).dangerLevel  );

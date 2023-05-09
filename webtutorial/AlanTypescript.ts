
class Transporte {
    private velocidad: number;

    constructor( velocidad: number ){
        this.velocidad = velocidad;
    }

    getVelocidad(): number {
        return this.velocidad;
    }

    setVelocidad(velocidad:number ): void {
        this.velocidad = velocidad;
    }
}

class Auto extends Transporte {
    numeroPuertas: number;

    constructor( velocidad:number, numeroPuertas: number  ){
        super( velocidad );
        this.numeroPuertas = numeroPuertas;
    }

    getVelocidad(){
        return super.getVelocidad() * 2;
    }
}

const transporte = new Transporte(250);
// const auto = new Auto(225);
const auto = new Auto(300, 2);

const transportesArray = [ transporte, auto ];

transportesArray.forEach( t => console.log( t.getVelocidad() + 2 ) );


interface Persona {
    nombre: string;
    edad: number;
    getVelocidad: ( param:number ) => number
}

const person = {
    nombre: 'Alan',
    edad: 28,
    getVelocidad: (param) => {
        return param * 2;
    }
}



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

const person : Persona = {
    nombre: 'Alan',
    edad: 28, 
    getVelocidad: (param) => {
        return param * 2;
    }
}

let personatwo = {
    nombre: 'Maia',
    edad: 34,
    getVelocidad: ( param ) => {
        return param * 2;
    },
};

personatwo = person;

const arrayCharacters: Character[] = [
    {
        id: 1,
        name: 'james',
        status: 'alive',
        species: 'hooman',
        type: 'Nikka',
        gender: 'male',
        origin: {
            name: 'Earth',
            url: 'www.jamesmejia.me',
        },
    },
]

arrayCharacters.forEach( c => c.origin.url );

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
    name: string;
    url: string;
    };
};

interface CharacterOrigin {
    name: string;
    url: string;
};


type DNI = string;
const dni: DNI = '12341234';

const tellMeMyDni = ( dni:DNI ) => {
    console.log(dni);
}

interface Personita {
    nombre: string;
    edad: number;
}

interface Abogado extends Personita {
    legajo: string;
}

const personita: Personita = {
    nombre: 'Alan',
    edad: 28,
};

const abogadito: Abogado = {
    nombre: 'James',
    edad: 28,
    legajo: '123'
};

interface Interface1 {
    prop1: string;
}

interface Interface2 {
    prop2: number;
}

type InterfaceMixUnion = Interface1 | Interface2;

const mixUnion: InterfaceMixUnion = {
    prop1: '1',
    prop2: 2,
}

type InterfaceMixIntersection = Interface1 & Interface2;

const mixIntersection: InterfaceMixIntersection = {
    prop1: '1',
    prop2: 2,
}

(()=>{

    abstract class Mutante {
        constructor(
            public name:string,
            public realName:string,

        ){}
    }

    class Xmen extends Mutante {
        saveWorld(){
            return 'World Saved!';
        }
    }

    class Villian extends Mutante {
        conquerWorld(){
            return 'World Conquered!'
        }
    }

    const Wolverine = new Xmen('Wolverine','Logan');
    const Magnet = new Villian('Magneto','Magnus');

    /* console.log(wolverine.saveWorld());
    console.log( Magnet.conquerWorld() ); */

    const printname = ( character:Mutante ) => {
        console.log( character.realName );
    }

    printname( Wolverine );
    printname( Magnet );
})()
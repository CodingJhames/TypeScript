
(()=>{

    class Chepe {

        static instance: Chepe;

        private constructor( public name:string ){

        }

        static callChepe(): Chepe {
            if( !Chepe.instance ){
                Chepe.instance = new Chepe('i am chepito the only one');
            }

            return Chepe.instance;
        }

        changeName( newName:string ):void {
            this.name = newName
        }

    }

    const chepeOne = Chepe.callChepe();
    chepeOne.changeName('Parchita');
    // const chepito = new Chepe('I am Chepito');
    const chepito = Chepe.callChepe();
    console.log( chepito );

})()
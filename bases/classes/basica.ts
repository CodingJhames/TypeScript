
(()=> {

    class Avenger {
        static avgAge: number = 35; 
        static getAvgAge(){
            return this.name;
        }

        constructor( 
            private name: string,
            private team:string,
            public realName?:string,
            ){}

            public bio(){
                return `${this.name} (${this.team})`
            }
    }

    const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott lang');
    console.log( antman.bio() );

    console.log( Avenger.avgAge );
    console.log( Avenger.getAvgAge() );
})()
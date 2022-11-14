
(()=> {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }


    let flash: Hero = {
        name: 'barry Allen',
        age: 24,
        powers: ['high speed', 'time travel']
    }

    let superman: Hero = {
        name: 'Clark kent',
        age: 60,
        powers: ['high speed'],
        getName() {
            return this.name;
        },
    }    


})()
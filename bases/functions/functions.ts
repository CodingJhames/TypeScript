
( () => {

    const hero: string = 'flash';

    function returnName(): string {
        return hero;
    }

    const batSignal = (): string => {
        return 'batsginal activated'
    }

    console.log( typeof batSignal );

    const heroName = returnName();

} ) ()
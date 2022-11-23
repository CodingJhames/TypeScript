
(()=> {

    interface addTwoNumbers {
        (a: number, b: number ): NumberConstructor;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = ( a:number, b:number ) => {
        return 10;
    }


})()
"use strict";
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const batSignal = () => {
        return 'batsginal activated';
    };
    console.log(typeof batSignal);
    const heroName = returnName();
})();

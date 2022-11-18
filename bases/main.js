"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Captain', 'Scott lang');
    console.log(antman.bio());
    console.log(Avenger.avgAge);
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map
"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        saveWorld() {
            return 'World Saved!';
        }
    }
    class Villian extends Mutante {
        conquerWorld() {
            return 'World Conquered!';
        }
    }
    const Wolverine = new Xmen('Wolverine', 'Logan');
    const Magnet = new Villian('Magneto', 'Magnus');
    const printname = (character) => {
        console.log(character.realName);
    };
    printname(Wolverine);
    printname(Magnet);
})();
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
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameDesdeXmen() {
        }
    }
})();
(() => {
    class Chepe {
        constructor(name) {
            this.name = name;
        }
        static callChepe() {
            if (!Chepe.instance) {
                Chepe.instance = new Chepe('i am chepito the only one');
            }
            return Chepe.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const chepeOne = Chepe.callChepe();
    chepeOne.changeName('Parchita');
    const chepito = Chepe.callChepe();
    console.log(chepito);
})();
//# sourceMappingURL=main.js.map
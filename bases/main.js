"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: 'james',
        age: 29,
        address: {
            id: 125,
            zip: '00057',
            city: 'Cúcuta'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const cliente = {
        name: 'Parchita',
        age: 3,
        address: {
            id: 236,
            zip: '00057',
            city: 'Cúcuta'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map
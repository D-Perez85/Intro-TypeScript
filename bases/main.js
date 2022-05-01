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
        name: 'Damian',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        education: {
            first: 'complete',
            secondary: 'complete',
            universitary: 'on course'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        accountData: {
            id: 123456,
            bank: 'BBVA',
            location: 'Bs As',
            office: 217
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    console.log(client);
    console.log(client2);
})();
//# sourceMappingURL=main.js.map
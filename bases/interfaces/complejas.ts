(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        education?: Education; 
        accountData?: Account
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    interface Education {
        first: string, 
        secondary: string,
        universitary: string
    }

    interface Account {
        id: number,
        bank: string,
        location: string,
        office: number
    }

    const client: Client = {
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
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    const client2: Client = {
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
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    console.log(client);
    console.log(client2);

})()
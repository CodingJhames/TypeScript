
//  las interfaces no sirven para crear instancias

(()=> {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id:string ): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'james',
        age: 29,
        address: {
            id: 125,
            zip: '00057',
            city: 'Cúcuta'
        },
        getFullAddress( id:string ){
            return this.address.city;
        }
    }

    const cliente: Client = {
        name: 'Parchita',
        age: 3,
        address: {
            id: 236,
            zip: '00057',
            city: 'Cúcuta'
        },
        getFullAddress( id:string ){
            return this.address.city;
        }
    }


})()
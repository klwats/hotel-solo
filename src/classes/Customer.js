import {customers, rooms, bookings} from ./data/mockdata.js

class Customer {
    constructor(customers) {
        this.id = customers.id;
        this.name = customers.name;
        this.expenses = 0;
        this.bookings = [];
    }

    
}

